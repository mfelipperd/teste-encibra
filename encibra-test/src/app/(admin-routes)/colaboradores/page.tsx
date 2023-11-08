'use client'
import Loading from "@/components/loading";
import Navbar from "@/components/navbar";
import ColaboradorProfile from "@/components/perfil";
import { useColaboradoresAPI } from "@/context/api/ColaboradoresAPIContext";
import { Colaborador } from "@/interfaces";
import { Stack, Typography } from "@mui/material";
import { useEffect, useState } from "react";

export default function Colaboradores() {
  const { getColaboradores } = useColaboradoresAPI();

  const [colaboradores, setColaboradores] = useState<Colaborador[]>([]);

  useEffect(() => {
    async function fetchColaboradores() {
      try {
        const colaboradoresData = await getColaboradores();
        setColaboradores(colaboradoresData);
      } catch (error) {
        console.error('Erro ao buscar colaboradores:', error);
      }
    }

    fetchColaboradores();
  }, [getColaboradores]);

  if(!colaboradores || colaboradores.length === 0) {
    return (
        <>
        <Navbar/>
        <Loading/>
        </>
)
}
  return (
    <>
    <Navbar></Navbar>
    <Stack>
    <Typography
          margin='5px'
          textAlign='center'
          textTransform='uppercase'
          variant='h5'>
          Colaboradores 
        </Typography>
    <Stack
      display="flex"
      flexDirection="row"
      justifyContent={"center"}
      flexWrap="wrap"
    >
      {colaboradores.map((colaborador) => (
        <ColaboradorProfile 
        key={colaborador.id} 
        colaborador={colaborador} />
      ))}
    </Stack>
  </Stack>
    </>
  );
}
