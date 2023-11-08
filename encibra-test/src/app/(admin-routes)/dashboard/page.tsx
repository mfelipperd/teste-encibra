'use client'
import { getProjetos } from "@/api/RESTFULPROJETOS";
import { isGestor } from "@/app/functions/functions";
import Loading from "@/components/loading";
import Navbar from "@/components/navbar";
import ProjetoCard from "@/components/projectCard";
import { Projeto } from "@/interfaces";
import { Button, Stack } from "@mui/material";
import { useSession } from "next-auth/react";
import { useRouter } from 'next/navigation';
import { useEffect, useState } from "react";


export default function Dashboard() {
  const [projetos, setProjetos] = useState<Projeto[]>([])
  const router = useRouter()

  

  function getProjetosPorIdColaborador(idColaborador: number, projetos: Projeto[]): Projeto[] {
    const projetosDoColaborador: Projeto[] = [];
    
    projetos.forEach((projeto) => {
      if (projeto.gestorId === idColaborador || projeto.backendId === idColaborador || projeto.frontendId === idColaborador) {
        projetosDoColaborador.push(projeto);
      }
    });
    return projetosDoColaborador;
  }

  const session = useSession();
  const id = parseInt(session.data?.user.id!)
  const result = getProjetosPorIdColaborador(id, projetos)  
  const gestor = isGestor()

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

  if(projetos.length === 0) {
    return (
        <>
        <Navbar/>
        <Loading/>
        </>
        )
  }


  return(
    <>
      <header>
        <Navbar/>
      </header>
      <Stack
      display='flex'
      alignItems='center'
      >
        <Stack
        width='100%'
        display='flex'
        flexDirection='row'
        justifyContent="center"
        >
          <Stack 
          display={gestor?'flex':'none'}
          width='20rem'
          margin='0.9rem'
          >
            <Button  
            variant="outlined" 
            onClick={()=> router.push('/criarProjeto')}
            >Adicionar Projeto</Button>
          </Stack>
        </Stack>
        <Stack
            display="flex"
            flexDirection="row"
            flexWrap="wrap">
              {result.map((projeto) => (
                  <ProjetoCard 
                  projeto={projeto} 
                  key={projeto.id}/>
              ))}
          </Stack>
      </Stack>
    </>
  )
}