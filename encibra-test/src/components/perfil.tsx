import { useUserIdContext } from "@/context/id";
import { Paper, Grid, Avatar, Typography, Button, Stack } from "@mui/material";
import Link from "next/link";

export default function ColaboradorProfile({ colaborador}) {
  const { userId, setUserId } = useUserIdContext();

  function editFunction() {
    const id = colaborador.id
    setUserId(id);
  }
    return (
      <Link href={'/edit'} onClick={editFunction}>
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
            </Grid>
          </Grid>
        </Paper>
      </Link>
    );
  }