export interface Colaborador {
    id?: number; // Identificador único do colaborador
    nome: string; // Nome completo do colaborador
    idade: string; // Idade do colaborador
    email: string; // Endereço de e-mail do colaborador
    senha?:string
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