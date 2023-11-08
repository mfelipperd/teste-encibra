'use client'
import { isGestor } from "@/app/functions/functions";
import Loading from "@/components/loading";

import Navbar from "@/components/navbar";
import { useProjetoContext } from "@/context/projeto/projeto";
import { Card, CardContent, Typography, CardActions, Button } from "@mui/material";

export default function Projeto() {
    const { projeto } =  useProjetoContext()
    if(!projeto){
        return (
            <>
            <Navbar/>
            <Loading/>
            </>
    )
    }
    return (
        <>
        <Navbar/>
        <Card sx={{ width: 320, margin: 1 }}>
          <CardContent>
            <Typography variant="h6" component="div">
              {projeto.nome}
            </Typography>
            <Typography variant="body2" color="textSecondary">
              Prazo: {projeto.prazo}
            </Typography>
            <Typography variant="body2" color="textSecondary">
              Descrição: {projeto.descricao}
            </Typography>
            <Typography variant="body2" color="textSecondary">
              Tecnologias: {projeto.tecnologias}
            </Typography>
            <Typography variant="body2" color="textSecondary">
              Gestor: {projeto.gestorId}
            </Typography>
            <Typography variant="body2" color="textSecondary">
              Bakend: {projeto.backendId}
            </Typography>
            <Typography variant="body2" color="textSecondary">
              Descrição: {projeto.frontendId}
            </Typography> 
          </CardContent>
        </Card>
        </>
      );
}