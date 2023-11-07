'use client'
import { isGestor, sessionUser } from "@/app/functions/functions";
import { useEditDataContext } from "@/context/editUsers/editUsers";
import { Paper, Grid, Typography, Button, Stack } from "@mui/material";
import { getServerSession } from "next-auth";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function ColaboradorProfile({ colaborador }) {
  const { data, handleChangeData } = useEditDataContext();
  const router = useRouter()

  //const { data: session } = useSession()

  const session = sessionUser()

  function editFunction() {
    
    const data = colaborador
    handleChangeData(data)
    router.push('/edit')
  }

    return (
          <Paper style={{ 
          padding: '16px',
          height: '300px',
          width: '300px'}}
          >
          <Grid container>
            <Grid item xs={12} sm={8} md={9}>
              <Typography variant="h5">Perfil do Colaborador</Typography>
              <Typography variant="h6">Nome: {colaborador.nome}</Typography>
              <Typography>Email: {colaborador.email}</Typography>
              <Typography>Regime de Contratação: {colaborador.regimeContratacao}</Typography>
            <Typography>Areas de Atuação: {colaborador.areasAtuacao}</Typography>
            <Stack display={isGestor(session)?'flex':'none'}>
              <Button variant='outlined'onClick={editFunction}>Editar</Button>
            </Stack>
            </Grid>
          </Grid>
        </Paper>
    );
  }

