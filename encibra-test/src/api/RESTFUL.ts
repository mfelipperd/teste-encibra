import api from './api';

interface Colaborador {
  id?: number;
  nome: string;
  idade: string;
  email: string;
  senha: string;
  regimeContratacao: string;
  areasAtuacao: string[];
  tipo: string;
}

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
