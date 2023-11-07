
'use client'
import { useEffect, useState } from 'react';
import {
  Typography,
  Stack,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Checkbox,
  Button,
  Container,
} from '@mui/material';
import { Colaborador, Projeto } from '@/interfaces';
import { useColaboradoresAPI } from '@/context/api/ColaboradoresAPIContext';
import { get } from 'http';
import { tecnologias } from '@/shared/data';
import { adicionarProjetos } from '@/api/RESTFULPROJETOS';
import { useRouter } from 'next/navigation';

export default function AdicionarProjeto(){
  const { getColaboradores } = useColaboradoresAPI();
  const router = useRouter()


  const [projeto, setProjeto] = useState<Projeto>({
    id: 0,
    nome: '',
    prazo: '',
    descricao: '',
    tecnologias: [],
    gestorId: 0,
    backendId: 0,
    frontendId: 0,
  });
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [colaboradores, setColaboradores] = useState<Colaborador[]>([]); // Especificando o tipo como Colaborador[]

  const handleChange = (key: string, value: any) => {
    setProjeto((prevProjeto) => ({
      ...prevProjeto,
      [key]: value,
    }));
  };
  const handleTecnologiasChange = (values: string[]) => {
    setProjeto((prevProjeto) => ({
      ...prevProjeto,
      tecnologias: values,
    }));
  };

  const handleSubmit = () => {
    const newErrors: { [key: string]: string } = {};

    if (!projeto.nome) {
      newErrors.nome = 'Nome é obrigatório.';
    }

    if (!projeto.prazo) {
      newErrors.prazo = 'Prazo é obrigatório.';
    }

    if (!projeto.descricao) {
      newErrors.descricao = 'Descrição é obrigatória.';
    }

    if (!projeto.tecnologias.length) {
      newErrors.tecnologias = 'Selecione pelo menos uma tecnologia.';
    }

    if (projeto.gestorId === 0) {
      newErrors.gestorId = 'Selecione um gestor.';
    }

    if (projeto.backendId === 0) {
      newErrors.backendId = 'Selecione um desenvolvedor backend.';
    }

    if (projeto.frontendId === 0) {
      newErrors.frontendId = 'Selecione um desenvolvedor frontend.';
    }

    if (Object.keys(newErrors).length === 0) {
      adicionarProjetos(projeto)
      router.push('/projetos')
    }

    setErrors(newErrors);

  };

  function getColaboradoresByArea(areaAtuacao: string) {
    return colaboradores.filter((colaborador) =>
      colaborador.areasAtuacao.includes(areaAtuacao)
    );
  }

  function getColaboradoresGestor(areaAtuacao: string) {
    return colaboradores.filter((colaborador) =>
      colaborador.tipo.includes(areaAtuacao)
    );
  }

  const colaboradorBackend = getColaboradoresByArea('Backend')
  const colaboradorFrontend = getColaboradoresByArea('Frontend')
  const colaboradorGestor = getColaboradoresGestor('gestor')



  useEffect(() => {
    async function fetchColaboradores() {
      try {
        const colaboradoresData = await getColaboradores();
        setColaboradores(colaboradoresData);
      } catch (error) {
        console.error('Erro ao buscar colaboradores:', error);
      }
    }

    fetchColaboradores();
  }, [getColaboradores]);

  return (
    <Container>
      <Stack spacing={3}>
        <Typography variant="h4">Novo Projeto</Typography>
        <TextField
          label="Nome"
          variant="outlined"
          value={projeto.nome}
          onChange={(e) => handleChange('nome', e.target.value)}
          error={!!errors.nome}
          helperText={errors.nome}
        />
        <TextField
          label="Prazo"
          variant="outlined"
          type="date"
          value={projeto.prazo}
          onChange={(e) => handleChange('prazo', e.target.value)}
          error={!!errors.prazo}
          helperText={errors.prazo}
        />
        <TextField
          label="Descrição"
          variant="outlined"
          multiline
          value={projeto.descricao}
          onChange={(e) => handleChange('descricao', e.target.value)}
          error={!!errors.descricao}
          helperText={errors.descricao}
        />
        <FormControl variant="outlined">
      <InputLabel id="tecnologias-label">Tecnologias</InputLabel>
      <Select
        labelId="tecnologias-label"
        id="tecnologias"
        multiple
        value={projeto.tecnologias}
        onChange={(e) => handleTecnologiasChange(e.target.value as string[])}
        label="Tecnologias"
        error={!!errors.tecnologias}
        renderValue={(selected) => (selected as string[]).join(', ')}
      >
        {tecnologias.map((tecnologia) => (
          <MenuItem key={tecnologia} value={tecnologia}>
            <Checkbox checked={projeto.tecnologias.includes(tecnologia)} />
            {tecnologia}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
        <FormControl variant="outlined">
          <InputLabel id="gestorId-label">Gestor</InputLabel>
          <Select
            labelId="gestorId-label"
            id="gestorId"
            value={projeto.gestorId}
            onChange={(e) => handleChange('gestorId', e.target.value as number)}
            label="Gestor"
            error={!!errors.gestorId}
          >
            {colaboradorGestor.map((colaborador) => (
        <MenuItem key={colaborador.id} value={colaborador.id}>
          {colaborador.nome}
        </MenuItem>
      ))}
          </Select>
        </FormControl>
        <FormControl variant="outlined">
          <InputLabel id="backendId-label">Desenvolvedor Backend</InputLabel>
          <Select
            labelId="backendId-label"
            id="backendId"
            value={projeto.backendId}
            onChange={(e) => handleChange('backendId', e.target.value as number)}
            label="Desenvolvedor Backend"
            error={!!errors.backendId}
          >
            {colaboradorBackend.map((colaborador) => (
        <MenuItem key={colaborador.id} value={colaborador.id}>
          {colaborador.nome}
        </MenuItem>
      ))}
          </Select>
        </FormControl>
        <FormControl variant="outlined">
          <InputLabel id="frontendId-label">Desenvolvedor Frontend</InputLabel>
          <Select
            labelId="frontendId-label"
            id="frontendId"
            value={projeto.frontendId}
            onChange={(e) => handleChange('frontendId', e.target.value as number)}
            label="Desenvolvedor Frontend"
            error={!!errors.frontendId}
          >
            {colaboradorFrontend.map((colaborador) => (
        <MenuItem key={colaborador.id} value={colaborador.id}>
          {colaborador.nome}
        </MenuItem>
      ))}
          </Select>
        </FormControl>
        <Stack direction="row" spacing={2}>
          <Button
            variant="contained"
            color="primary"
            onClick={handleSubmit}
            disabled={Object.keys(errors).length > 0}
          >
            Salvar
          </Button>
          <Button variant="outlined" color="secondary">
            Cancelar
          </Button>
        </Stack>
      </Stack>
    </Container>
  );
};

