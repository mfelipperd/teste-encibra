'use client'
import { isGestor } from "@/app/functions/functions";
import { useEditDataContext } from "@/context/editUsers/editUsers";
import { Typography, Button, Card,CardActions, CardContent } from "@mui/material";
import { useRouter } from "next/navigation";


export default function ColaboradorProfile({ colaborador }) {

  const { data, handleChangeData } = useEditDataContext();
  const router = useRouter()


  function editFunction() {
    
    const data = colaborador
    handleChangeData(data)
    router.push('/edit')
  }

  return (
    <Card sx={{ width: 320, margin: 1 }}>
      <CardContent>
        <Typography variant="h5">Nome: {colaborador.nome}</Typography>
        <Typography variant="body2">Email: {colaborador.email}</Typography>
        <Typography variant="body2">Regime de Contratação: {colaborador.regimeContratacao}</Typography>
        <Typography variant="body2">Áreas de Atuação: {colaborador.areasAtuacao}</Typography>
      </CardContent>
      <CardActions sx={{display: isGestor()?'flex':'none'}}>
          <Button  size="small" color="primary" onClick={editFunction}>Editar</Button>
      </CardActions>
    </Card>
  );
  }

