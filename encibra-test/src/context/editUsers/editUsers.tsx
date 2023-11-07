'use client'
import { Colaborador } from '@/interfaces';
import React, { createContext, useContext, useState, useCallback, ReactNode } from 'react';
import { UserContextData } from '..';


const EditUserContext = createContext<UserContextData | undefined>(undefined);

export interface EditUserProviderProps{
    children: ReactNode;
}

export const EditUserProvider = ({ children }: EditUserProviderProps) => {
    const [ data, setData ] = useState<Colaborador>({
        id: 0,
    nome: '',
    idade: '',
    email: '',
    senha:'',
    regimeContratacao: '',
    areasAtuacao: [],
    tipo: '',
    });

    const handleChangeData = useCallback((data: Colaborador) => {
        setData(data);
    }, []);

    return (
        <EditUserContext.Provider value={{ data, handleChangeData }}>
            {children}
        </EditUserContext.Provider>
    );
};

export const useEditDataContext = () => {
    const context = useContext(EditUserContext);
    if(!context) {
        throw new Error('useUserContext deve ser usado dentro de um UserProvider')
    }

    return context
}