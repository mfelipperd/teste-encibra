'use client'
import { Projeto } from '@/interfaces';
import React, { createContext, useContext, useState, ReactNode, useCallback } from 'react';

interface ProjetoContextData {
  projeto: Projeto | null;
  handleChangeData: (projeto:Projeto) => void;
}

const ProjetoContext = createContext<ProjetoContextData | undefined>(undefined);

interface ProjetoProviderProps {
  children: ReactNode;
}

export const ProjetoProvider = ({ children }: ProjetoProviderProps) => {
  const [projeto, setProjeto] = useState<Projeto | null>(null);

  const handleChangeData = useCallback((data: Projeto) => {
    setProjeto(data);
  }, []);

  return (
    <ProjetoContext.Provider value={{ projeto, handleChangeData }}>
      {children}
    </ProjetoContext.Provider>
  );
};

export const useProjetoContext = () => {
  const context = useContext(ProjetoContext);
  if (!context) {
    throw new Error('useProjetoContext must be used within a ProjetoProvider');
  }
  return context
};
