'use client'
import { isGestor } from "@/app/functions/functions";
import { useEditDataContext } from "@/context/editUsers/editUsers";
import { Typography, Button, Card,CardActions, CardContent } from "@mui/material";
import { useRouter } from "next/navigation";


export default function ColaboradorProfile({ colaborador }) {

  const { data, handleChangeData } = useEditDataContext();
  const router = useRouter()

  const gestor = isGestor()


  function editFunction() {
    
    const data = colaborador
    handleChangeData(data)
    router.push('/edit')
  }

  return (
    <Card sx={{ width: 320, margin: 1 }}>
      <CardContent>
        <Typography variant="h5">{colaborador.nome}</Typography>
        <Typography variant="body2">Email: {colaborador.email}</Typography>
        <Typography display={gestor?'flex':'none'}variant="body2">Regime de Contratação: {colaborador.regimeContratacao}</Typography>
        <Typography variant="body2">Áreas de Atuação: {colaborador.areasAtuacao}</Typography>
      </CardContent>
      <CardActions sx={{display: gestor?'flex':'none'}}>
          <Button  size="small" color="primary" onClick={editFunction}>Editar</Button>
      </CardActions>
    </Card>
  );
  }

