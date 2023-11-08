'use client'
/* eslint-disable @next/next/no-async-client-component */
/* eslint-disable react-hooks/rules-of-hooks */
import React, { useEffect, useState } from 'react';
import { Paper, Grid,Typography, Chip, Stack, Button } from '@mui/material';
import Navbar from '@/components/navbar';
import ButtonLogout from '@/components/buttonLogout';
import Loading from '@/components/loading';
import { atualizarColaborador, getColaboradorByID } from '@/api/RESTFUL';
import { useSession } from 'next-auth/react';
import { Colaborador } from '@/interfaces';
import ProfileEditComponent from '@/components/editProfile';
import { useRouter } from 'next/navigation';

  export default function ProfilePage() {
  const session = useSession()
  const [perfilData, setPerfilData] = useState<Colaborador>()
  const [isEditing, setIsEditing] = useState(false)
  if(!session) {return false}
  const { data } = session
  const router = useRouter();

useEffect(() => {
  const fetchData = async () => {
    if (data && data.user) {
      const id = parseInt(data.user.id);
      const colaborador = await getColaboradorByID(id);
      setPerfilData(colaborador!);
    }
  };

  fetchData();
}, [data]);
  
  if(!session || !data){
    return (
      <>
        <Navbar/>
        <Loading/>
        </>
)
}
  function editPerfil() {
    return setIsEditing(true)
  }

  function onSave(id: number, data:Colaborador){
    atualizarColaborador(id, data);
  }

  const pageProfile = (
    <div>
      <Navbar />
      <Paper style={{ padding: '16px', marginTop:'10px' }}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={8} md={9}>
            <Typography variant="h6">{perfilData?.nome}</Typography>
            <Typography>Idade: {perfilData?.idade}</Typography>
            <Typography>Email: {perfilData?.email}</Typography>
            <Typography>Regime de Contratação: {perfilData?.regimeContratacao}</Typography>
            <Typography>
              Áreas de Atuação:
              {perfilData?.areasAtuacao.map((area, index) => (
                <Chip label={area} key={index} sx={{margin:'5px'}} />
              ))}
            </Typography>
            <Typography>Tipo: {perfilData?.tipo}</Typography>
          </Grid>
        </Grid>
        <Stack 
        width={'10rem'}
        display={'flex'}
        justifyContent={'space-around'}
        alignItems={'center'}
        flexDirection={'row'}>
        <ButtonLogout />
        <Button onClick={editPerfil}variant='outlined'>Editar</Button>
        </Stack>
      </Paper>
    </div>
  )

const editPageProfile = (
  <>
  <Navbar/>
  <ProfileEditComponent onSave={onSave} perfilData={perfilData!}/>
  </>
)
return isEditing?editPageProfile:pageProfile
}
