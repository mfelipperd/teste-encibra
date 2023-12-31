export interface Colaborador {
    id?: number; // Identificador único do colaborador
    nome: string; // Nome completo do colaborador
    idade: string; // Idade do colaborador
    email: string; // Endereço de e-mail do colaborador
    senha?:string;
    regimeContratacao: string; // Regime de contratação (CLT, PJ, Estágio, etc.)
    areasAtuacao: string[]; // Áreas de atuação (Frontend, Backend, Infraestrutura, etc.)
    tipo: string; // Tipo de colaborador (Gestor, Normal, etc.)
  }
export interface CustomUser {
  id?: number;
  name: string;
  email: string;
  tipo: string;
}

export interface Session {
  user: {
      id:string
      email:string
      name:string
      tipo:string
  }
}

export interface Projeto {
  id: number;
  nome: string;
  prazo: string; // Você pode usar o tipo Date se preferir
  descricao: string;
  tecnologias: string[];
  gestorId: number;
  backendId: number;
  frontendId: number;
}
