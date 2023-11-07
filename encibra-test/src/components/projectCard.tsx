// ProjetosCardList.tsx
// ProjetoCard.tsx
import React from 'react';
import { Card, CardContent, Typography, CardActions, Button } from '@mui/material';
import { Projeto } from '@/interfaces';
 // Certifique-se de importar o tipo Projeto corretamente

interface ProjetoCardProps {
  projeto: Projeto;
}

const ProjetoCard: React.FC<ProjetoCardProps> = ({ projeto }) => {
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
      <CardActions>
        <Button size="small" color="primary">
          Detalhes
        </Button>
      </CardActions>
    </Card>
  );
};

export default ProjetoCard;

