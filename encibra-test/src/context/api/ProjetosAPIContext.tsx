import React, { createContext, useContext, ReactNode } from 'react';
import { Projeto } from '@/interfaces'; // Certifique-se de importar o tipo de dados correto para Projetos
import { getProjetos } from '../../api/RESTFULPROJETOS'; // Importe a função getProjetos correspondente

interface ProjetosAPIContextData {
  getProjetos: () => Promise<Projeto[]>;
}

const ProjetosAPIContext = createContext<ProjetosAPIContextData | undefined>(undefined);

interface ProjetosAPIProviderProps {
  children: ReactNode;
}

export function ProjetosAPIProvider({ children }: ProjetosAPIProviderProps) {
  async function fetchProjetos(): Promise<Projeto[]> {
    try {
      const projetos = await getProjetos(); // Use a função getProjetos existente
      return projetos;
    } catch (error) {
      throw new Error('Erro ao buscar projetos: ' + error);
    }
  }

  return (
    <ProjetosAPIContext.Provider value={{ getProjetos: fetchProjetos }}>
      {children}
    </ProjetosAPIContext.Provider>
  );
}

export function useProjetosAPI() {
  try {
    const context = useContext(ProjetosAPIContext);
    if (!context) {
      throw new Error('useProjetosAPI deve ser usado dentro de um ProjetosAPIProvider');
    }
    return context;
  } catch (error) {
    console.error(error);
    // Você pode tratar o erro de acordo com sua necessidade, por exemplo, retornando um valor padrão ou lançando uma exceção.
    // Exemplo de retorno de um valor padrão:
    return { getProjetos: async () => [] };
  }
}
