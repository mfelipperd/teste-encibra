'use client'
import { authOptions } from "@/app/api/auth/[...nextauth]/route"
import { isGestor, sessionUser } from "@/app/functions/functions"
import Navbar from "@/components/navbar"
import ProjetoCard from "@/components/projectCard"
import { useProjetosAPI } from "@/context/api/ProjetosAPIContext"
import { Projeto } from "@/interfaces"
import { Button, Card, CardActions, CardContent, Container, Grid, Stack, Typography } from "@mui/material"
import { getServerSession } from "next-auth"
import { useEffect, useState } from "react"

export default function Projetos() {
    const session = sessionUser()

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

    //if(isGestor(session))

    return(
      <>
      <Navbar/>
        <Container>
          <Grid container>
            {projetos.map((projeto) => (
              <Grid item key={projeto.id} xs={12} sm={6} md={4}>
                <ProjetoCard projeto={projeto} />
              </Grid>
            ))}
          </Grid>
        </Container>
      </>
    );
}