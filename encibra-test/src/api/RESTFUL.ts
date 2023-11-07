import { Colaborador } from '@/interfaces';
import api from './api';



// Função para buscar todos os colaboradores
export const getColaboradores = async (): Promise<Colaborador[]> => {
  try {
    const response = await api.get<Colaborador[]>('/colaboradores');
    return response.data;
  } catch (error) {
    throw new Error('Erro ao buscar colaboradores: ' + error);
  }
};

// Função para adicionar um novo colaborador
export const adicionarColaborador = async (novoColaborador: Colaborador): Promise<Colaborador> => {
  try {
    const response = await api.post<Colaborador>('/colaboradores', novoColaborador);
    return response.data;
  } catch (error) {
    throw new Error('Erro ao adicionar colaborador: ' + error);
  }
};

// Função para atualizar os dados de um colaborador
export const atualizarColaborador = async (id: number, dadosAtualizados: Colaborador): Promise<Colaborador> => {
  try {
    const response = await api.put<Colaborador>(`/colaboradores/${id}`, dadosAtualizados);
    return response.data;
  } catch (error) {
    throw new Error('Erro ao atualizar colaborador: ' + error);
  }
};

// Função para excluir um colaborador
export const excluirColaborador = async (id: number): Promise<void> => {
  try {
    await api.delete(`/colaboradores/${id}`);
  } catch (error) {
    throw new Error('Erro ao excluir colaborador: ' + error);
  }
};

export const getColaboradorByID = async (id: number): Promise<Colaborador | null> => {
  try {
    const response = await api.get<Colaborador>(`/colaboradores/${id}`);
    return response.data;
  } catch (error) {
    // Você pode tratar o erro de forma apropriada, por exemplo, retornando null se o colaborador não for encontrado.
    console.error('Erro ao buscar o colaborador por ID:', error);
    return null;
  }
};
