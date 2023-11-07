'use client'
import Navbar from "@/components/navbar";
import ColaboradorProfile from "@/components/perfil";
import { useColaboradoresAPI } from "@/context/api/ColaboradoresAPIContext";
import { Colaborador } from "@/interfaces";
import { Stack, Typography } from "@mui/material";
import { useEffect, useState } from "react";

export default function Colaboradores() {
  const { getColaboradores } = useColaboradoresAPI();

  const [colaboradores, setColaboradores] = useState<Colaborador[]>([]); // Especificando o tipo como Colaborador[]

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

  console.log(colaboradores)

  return (
    <>
    <Navbar></Navbar>
    <Stack spacing={3}>
    <Typography variant="h4" color="#1976d2">
      Lista de Colaboradores
    </Typography>
    <Stack
      display="flex"
      flexDirection="row"
      flexWrap="wrap" // Adicione essa propriedade para permitir que os elementos fluam para a próxima linha
    >
      {colaboradores.map((colaborador) => (
        <ColaboradorProfile key={colaborador.id} colaborador={colaborador} />
      ))}
    </Stack>
  </Stack>
    </>
  );
}
