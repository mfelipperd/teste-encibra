// 

'use client'
import { excluirProjetos } from "@/api/RESTFULPROJETOS";
import { isGestor } from "@/app/functions/functions";
import Loading from "@/components/loading";
import Navbar from "@/components/navbar";
import { useProjetoContext } from "@/context/projeto/projeto";
import { Card, CardContent, Typography, CardActions, Button, Link, Stack } from "@mui/material";
import { useRouter } from "next/navigation";
import DeleteIcon from '@mui/icons-material/Delete';

export default function Projeto() {
    const router = useRouter()
    const { projeto } =  useProjetoContext()

    const gestor = isGestor()

    function deletarProjeto() {
      if(window.confirm("tem certeza de que deseja excluir o usuário?")){
        const id = projeto?.id
        excluirProjetos(id!)
        router.push('/colaboradores')
      }
        
    }
    
    if (!projeto) {
        return (
            <>
            <Navbar/>
            <Loading/>
            </>
    )}

    if (projeto) {
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
                <Stack 
                display={gestor?'flex':'none'}
                flexDirection='row'
                >
                    <CardActions>
                        <Button onClick={() => router.push('/editarProjeto')}>Editar</Button>
                    </CardActions>
                    <CardActions>
                        <Button onClick={deletarProjeto} startIcon={<DeleteIcon />}>Deletar</Button>
                    </CardActions>
                </Stack>
              </CardContent>
            </Card>
            </>
        );
    }
};
