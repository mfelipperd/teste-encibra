import { Paper, Grid, Avatar, Typography } from "@mui/material";

export default function ColaboradorProfile({ colaborador }) {
    return (
      <Paper style={{ 
        padding: '16px',
        height: '300px',
        width: '300px'}}
        >
        <Grid container spacing={2}>
          <Grid item xs={12} sm={4} md={3}>
            <Avatar style={{ width: '96px', height: '96px' }}>A</Avatar>
          </Grid>
          <Grid item xs={12} sm={8} md={9}>
            <Typography variant="h5">Perfil do Colaborador</Typography>
            <Typography variant="h6">Nome: {colaborador.nome}</Typography>
            <Typography>Email: {colaborador.email}</Typography>
            <Typography>Regime de Contratação: {colaborador.regimeContratacao}</Typography>
          <Typography>Areas de Atuação: {colaborador.areasAtuacao}</Typography>
          </Grid>
        </Grid>
      </Paper>
    );
  }