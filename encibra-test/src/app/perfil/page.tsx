/* eslint-disable react-hooks/rules-of-hooks */
'use client'
import React from 'react';
import { useUserContext } from '@/context';
import { Paper, Grid, Avatar, Typography } from '@mui/material';

function ProfilePage() {
  const { data } = useUserContext();

  return (
    <Paper style={{ padding: '16px'}}>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={4} md={3}>
          <Avatar style={{ width: '96px', height: '96px' }}>A</Avatar>
        </Grid>
        <Grid item xs={12} sm={8} md={9}>
          <Typography variant="h5">Perfil do Colaborador</Typography>
          <Typography variant="h6">Nome: {data.nome}</Typography>
          <Typography>Email: {data.email}</Typography>
          <Typography>Regime de Contratação: {data.regimeContratacao}</Typography>
          <Typography>Areas de Atuação: {data.areasAtuacao}</Typography>
        </Grid>
      </Grid>
    </Paper>
  );
}

export default ProfilePage;

function useState(arg0: boolean): [any, any] {
    throw new Error('Function not implemented.');
}

