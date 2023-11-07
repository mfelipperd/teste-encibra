import { Projeto } from '@/interfaces';
import api from './api';



// Função para buscar todos os colaboradores
export const getProjetos = async (): Promise<Projeto[]> => {
  try {
    const response = await api.get<Projeto[]>('/projetos');
    return response.data;
  } catch (error) {
    throw new Error('Erro ao buscar projeto: ' + error);
  }
};

// Função para adicionar um novo colaborador
export const adicionarProjetos = async (novoProjeto: Projeto): Promise<Projeto> => {
  try {
    const response = await api.post<Projeto>('/projetos', novoProjeto);
    return response.data;
  } catch (error) {
    throw new Error('Erro ao adicionar projeto: ' + error);
  }
};

// Função para atualizar os dados de um colaborador
export const atualizarProjetos = async (id: number, dadosAtualizados: Projeto): Promise<Projeto> => {
  try {
    const response = await api.put<Projeto>(`/projetos/${id}`, dadosAtualizados);
    return response.data;
  } catch (error) {
    throw new Error('Erro ao atualizar projeto: ' + error);
  }
};

// Função para excluir um colaborador
export const excluirProjetos = async (id: number): Promise<void> => {
  try {
    await api.delete(`/projetos/${id}`);
  } catch (error) {
    throw new Error('Erro ao excluir colaborador: ' + error);
  }
};

export const getProjetosByID = async (id: number): Promise<Projeto | null> => {
  try {
    const response = await api.get<Projeto>(`/projetos/${id}`);
    return response.data;
  } catch (error) {
    // Você pode tratar o erro de forma apropriada, por exemplo, retornando null se o colaborador não for encontrado.
    console.error('Erro ao buscar o colaborador por ID:', error);
    return null;
  }
};
