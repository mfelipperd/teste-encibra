/* eslint-disable react-hooks/rules-of-hooks */
import React from 'react';
import { useColaboradores } from '../../context/colaboradoresContext';



function perfil() {
    const { colaboradores } = useColaboradores();
    console.log(colaboradores)
    return(
        <h1>colaboradores</h1>
    )
}