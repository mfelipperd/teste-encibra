import { Colaborador } from '@/interfaces';
import React, { createContext, useContext, useState, useCallback, ReactNode } from 'react';


interface UserContextData {
  data: Colaborador;
  handleChangeData: (data: Colaborador) => void;
}

const UserContext = createContext<UserContextData | undefined>(undefined);

interface UserProviderProps {
  children: ReactNode;
}

export const UserProvider = ({ children }: UserProviderProps) => {
  const [data, setData] = useState<Colaborador>({
    id: 0,
    nome: '',
    idade: '',
    email: '',
    regimeContratacao: '',
    areasAtuacao: [],
    tipo: '',
  });

  const handleChangeData = useCallback((data: Colaborador) => {
    setData(data);
  }, []);

  return (
    <UserContext.Provider value={{ data, handleChangeData }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUserContext = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error('useUserContext deve ser usado dentro de um UserProvider');
  }
  return context;
};
