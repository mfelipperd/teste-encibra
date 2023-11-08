'use client'
import React from 'react';
import { Card, CardContent, Typography, CardActions, Button } from '@mui/material';
import { Projeto } from '@/interfaces';
import { isGestor } from '@/app/functions/functions';
import Link from 'next/link';
import { useProjetoContext } from '@/context/projeto/projeto';
import { useRouter } from 'next/navigation';



interface ProjetoCardProps {
  projeto: Projeto;
}

export default function ProjetoCard({ projeto }) {

  const { handleChangeData } = useProjetoContext()
  const router = useRouter()

  function selecionarProjeto(){
    handleChangeData(projeto);
    router.push('/projeto')
  }

  return (
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
      </CardContent>
      <CardActions sx={{display: isGestor()?'flex':'none'}}>
        <Link href={'/projeto'}>
        <Button onClick={selecionarProjeto}size="small" color="primary">
          Detalhes
        </Button>
        </Link>
      </CardActions>
    </Card>
  );
};
