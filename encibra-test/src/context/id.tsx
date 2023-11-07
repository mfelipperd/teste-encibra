import React, { createContext, useContext, useState, ReactNode } from 'react';

interface UserIdContextData {
  userId: number | null;
  setUserId: (id: number | null) => void;
}

const UserIdContext = createContext<UserIdContextData | undefined>(undefined);

interface UserIdProviderProps {
  children: ReactNode;
}

export const UserIdProvider = ({ children }: UserIdProviderProps) => {
  const [userId, setUserId] = useState<number | null>(null);

  return (
    <UserIdContext.Provider value={{ userId, setUserId }}>
      {children}
    </UserIdContext.Provider>
  );
};

export const useUserIdContext = () => {
  const context = useContext(UserIdContext);
  if (!context) {
    throw new Error('useUserIdContext must be used within a UserIdProvider');
  }
  return context;
};
