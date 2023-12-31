// ProfileEditComponent.tsx
import React, { useState } from 'react';
import {
  Paper,
  Grid,
  Avatar,
  Typography,
  Button,
  Chip,
  TextField,
  Checkbox,
  FormControlLabel,
  FormGroup,
  Stack,
} from '@mui/material';
import ButtonLogout from '@/components/buttonLogout';
import { Colaborador } from '@/interfaces';
import Loading from './loading';
import Navbar from './navbar';

interface ProfileEditComponentProps {
  perfilData: Colaborador;
  onSave: (id: number, data:Colaborador) => void;
  editing:Function
}



const ProfileEditComponent: React.FC<ProfileEditComponentProps> = ({
  perfilData,
  onSave,
  editing
}) => {
  const options = [
    'Frontend',
    'Backend',
    'Gestão',
    'Infraestrutura',
  ];
  
  const [editedPerfilData, setEditedPerfilData] = useState<Colaborador>(perfilData);
  const [nome, setNome] = useState(editedPerfilData.nome);
  const [idade, setIdade] = useState(editedPerfilData.idade);
  const [email, setEmail] = useState(editedPerfilData.email);
  const [senha, setSenha] = useState(editedPerfilData.senha);
  const [regimeContratacao, setRegimeContratacao] = useState(editedPerfilData.regimeContratacao);
  const [areasAtuacao, setAreasAtuacao] = useState<string[]>(editedPerfilData.areasAtuacao);
  const [checkedItems, setCheckedItems] = useState([]);
  const [tipo, setTipo] = useState(editedPerfilData.tipo)

  const handleCheckboxChange = (value:string) => {
    const updatedCheckedItems = [...checkedItems];
    if (updatedCheckedItems.includes(value)) {
      updatedCheckedItems.splice(updatedCheckedItems.indexOf(value), 1);
    } else {
      updatedCheckedItems.push(value);
    }
    setCheckedItems(updatedCheckedItems);
    setAreasAtuacao(updatedCheckedItems);
  };

  function editPerfil() {
    return editing(false)
  }

  const handleSave = () => {
    !nome || nome === 'Nome Completo' ? setNome('') : true
    !idade || idade === 'Idade' ? setIdade('') : true
    !email || email === 'Endereço de Email' ? setEmail('') : true
    !senha || senha === 'Senha' ? setSenha('') : true
    !regimeContratacao || regimeContratacao === 'Regime de Contratação' ? setRegimeContratacao('') : true
    !tipo || tipo === 'Qual o tipo de colaborador?' ? setTipo(''): true
    
    const data:Colaborador = {
      nome, idade, email, areasAtuacao,senha, regimeContratacao, tipo
    }
    onSave(editedPerfilData.id!, data);
    console.log(data)
  };


if(!editedPerfilData) {
  return (
    <>
    <Navbar/>
    <Loading/>
    </>
  )
}
  return (
    <div>
      <Paper style={{ padding: '16px', marginTop:'10px'}}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={4} md={3}>
            <Avatar style={{ width: '96px', height: '96px' }}>
              {editedPerfilData.nome}
            </Avatar>
          </Grid>
          <Grid item xs={12} sm={8} md={9}>
          <Typography>Nome: <input value={nome}onChange={(e) => setNome(e.target.value)}/></Typography>
            <Typography>Idade: <input value={idade} onChange={(e) => setIdade(e.target.value)}/></Typography>
            <Typography>Email: <input value={email}onChange={(e) => setEmail(e.target.value)}/></Typography>
            <Typography>Senha: <input value={senha}onChange={(e) => setSenha(e.target.value)}/></Typography>
            <Typography>
              Áreas de Atuação:
            <FormGroup>
  { options.map((option, index) => (
    <FormControlLabel
    sx={{
      width:'15rem'
    }}
      key={index}
      control={
        <Checkbox
          checked={checkedItems.includes(option)}
          onChange={() => handleCheckboxChange(option)}
        />
      }
      label={option}
    />
  )) }
</FormGroup>
            </Typography>
            <Stack
            display={'flex'}
            flexDirection={'row'}
            >
            <Button 
            sx={{margin:'5px'}}
            variant="outlined" 
            color="primary" 
            onClick={handleSave}>
              Salvar
            </Button>
            <Button 
            sx={{margin:'5px'}}
            variant="outlined" 
            color="primary" 
            onClick={editPerfil}>
              cancelar
            </Button>
            </Stack>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
};

export default ProfileEditComponent;
