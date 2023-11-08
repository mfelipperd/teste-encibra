'use client'
import Loading from "@/components/loading"
import Navbar from "@/components/navbar"
import ProjetoCard from "@/components/projectCard"
import { useProjetosAPI } from "@/context/api/ProjetosAPIContext"
import { Projeto } from "@/interfaces"
import { Container, Grid, Stack, Typography} from "@mui/material"
import { useEffect, useState } from "react"

export default function Projetos() {

    const {  getProjetos } = useProjetosAPI();
    const [projetos, setProjetos] = useState<Projeto[]>([]);

    useEffect(() => {
        async function fetchProjetos() {
          try {
            const projetosData = await getProjetos();
            setProjetos(projetosData);
          } catch (error) {
            console.error('Erro ao buscar projetos:', error);
          }
        }
        
        fetchProjetos();
      }, [getProjetos]);

      if(!projetos || projetos.length === 0) {
        return (
            <>
            <Navbar/>
            <Loading/>
            </>
    )
    }
    return(
      <>
      <Navbar/>
      <Stack>
        <Typography
          margin='5px'
          textAlign='center'
          variant='h5'>
          Projetos
        </Typography>
          <Stack
            display="flex"
            flexDirection="row"
            flexWrap="wrap">
              {projetos.map((projeto) => (
                  <ProjetoCard 
                  projeto={projeto} 
                  key={projeto.id}/>
              ))}
          </Stack>
      </Stack>
      </>
    );
}