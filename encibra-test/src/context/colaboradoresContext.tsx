// ColaboradoresContext.tsx
import { createContext, useContext, useReducer, ReactNode } from 'react';

// Tipagem dos dados do colaborador
interface Colaborador {
  id?: number;
  nome: string;
  idade: string;
  email: string;
  regimeContratacao: string;
  areasAtuacao: string[];
  tipo: string;
}

// Tipagem do estado global
type ColaboradoresState = Colaborador[];

// Tipagem das ações
type Action =
  | { type: 'SET_COLABORADORES'; payload: ColaboradoresState }
  | { type: 'ADICIONAR_COLABORADOR'; payload: Colaborador }
  | { type: 'ATUALIZAR_COLABORADOR'; payload: Colaborador }
  | { type: 'EXCLUIR_COLABORADOR'; payload: number };

// Tipagem do contexto
interface ColaboradoresContextType {
  colaboradores: ColaboradoresState;
  dispatch: (action: Action) => void;
}

// Criação do contexto
const ColaboradoresContext = createContext<ColaboradoresContextType | undefined>(undefined);

// Propriedades do provedor do contexto
interface ColaboradoresProviderProps {
  children: ReactNode;
}

// Estado inicial
const initialState: ColaboradoresState = [];

// Reducer para gerenciar as ações
function colaboradoresReducer(state: ColaboradoresState, action: Action): ColaboradoresState {
  switch (action.type) {
    case 'SET_COLABORADORES':
      return action.payload;
    case 'ADICIONAR_COLABORADOR':
      return [...state, action.payload];
    case 'ATUALIZAR_COLABORADOR':
      return state.map((colaborador) => (colaborador.id === action.payload.id ? action.payload : colaborador));
    case 'EXCLUIR_COLABORADOR':
      return state.filter((colaborador) => colaborador.id !== action.payload);
    default:
      return state;
  }
}

// Provedor do contexto
export function ColaboradoresProvider({ children }: ColaboradoresProviderProps) {
  const [colaboradores, dispatch] = useReducer(colaboradoresReducer, initialState);

  return <ColaboradoresContext.Provider value={{ colaboradores, dispatch }}>{children}</ColaboradoresContext.Provider>;
}

// Hook personalizado para acessar o contexto
export function useColaboradores() {
  const context = useContext(ColaboradoresContext);
  if (!context) {
    throw new Error('useColaboradores deve ser usado dentro de um ColaboradoresProvider');
  }
  return context;
}
