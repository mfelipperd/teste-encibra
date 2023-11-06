// ColaboradoresAPIContext.tsx
import React, { createContext, useContext, ReactNode } from 'react';
import { Colaborador } from '@/interfaces';
import { getColaboradores } from '../../api/RESTFUL'; // Importe a função getColaboradores

interface ColaboradoresAPIContextData {
  getColaboradores: () => Promise<Colaborador[]>;
}

const ColaboradoresAPIContext = createContext<ColaboradoresAPIContextData | undefined>(undefined);

interface ColaboradoresAPIProviderProps {
  children: ReactNode;
}

export function ColaboradoresAPIProvider({ children }: ColaboradoresAPIProviderProps) {
  async function fetchColaboradores(): Promise<Colaborador[]> {
    try {
      const colaboradores = await getColaboradores(); // Use a função getColaboradores existente
      return colaboradores;
    } catch (error) {
      throw new Error('Erro ao buscar colaboradores: ' + error);
    }
  }

  return (
    <ColaboradoresAPIContext.Provider value={{ getColaboradores: fetchColaboradores }}>
      {children}
    </ColaboradoresAPIContext.Provider>
  );
}

export function useColaboradoresAPI() {
  try {
    const context = useContext(ColaboradoresAPIContext);
    if (!context) {
      throw new Error('useColaboradoresAPI deve ser usado dentro de um ColaboradoresAPIProvider');
    }
    return context;
  } catch (error) {
    console.error(error);
    // Você pode tratar o erro de acordo com sua necessidade, por exemplo, retornando um valor padrão ou lançando uma exceção.
    // Exemplo de retorno de um valor padrão:
    return { getColaboradores: async () => [] };
  }
}
