/* eslint-disable react-hooks/rules-of-hooks */
'use client'

import { Typography, Stack, TextField, FormControl, InputLabel, Select, MenuItem, Checkbox, Button, Container } from '@mui/material';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation'
import { useUserContext } from '@/context';
import { adicionarColaborador } from '@/api/RESTFUL';

function register() {
  const [nome, setNome] = useState('Nome Completo');
  const [idade, setIdade] = useState('Idade');
  const [email, setEmail] = useState('Endereço de Email');
  const [senha, setSenha] = useState('Senha');
  const [regimeContratacao, setRegimeContratacao] = useState('Regime de Contratação');
  const [areasAtuacao, setAreasAtuacao] = useState<string[]>([]);
  const [tipo, setTipo] = useState('Qual o tipo de colaborador?')
  const { data, handleChangeData } = useUserContext();
  const router = useRouter()

  function handleFormSubmit(){
    !nome || nome === 'Nome Completo' ? setNome('') : true
    !idade || idade === 'Idade' ? setIdade('') : true
    !email || email === 'Endereço de Email' ? setEmail('') : true
    !senha || senha === 'Senha' ? setSenha('') : true
    !regimeContratacao || regimeContratacao === 'Regime de Contratação' ? setRegimeContratacao('') : true
    !tipo || tipo === 'Qual o tipo de colaborador?' ? setTipo(''): true


    const data = {
        nome,
        idade,
        email,
        senha,
        regimeContratacao,
        areasAtuacao,
        tipo
    }
    adicionarColaborador(data);
    handleChangeData(data);
    
    router.push('/perfil')
  }

  return (
    <Container >
      <Typography variant="h5" color='#1976d2'>Cadastro de Colaborador</Typography>
      <form onSubmit={handleFormSubmit}>
        <Stack spacing={3}>
          <TextField
            variant="outlined"
            label="Nome Completo"
            fullWidth
            value={nome}
            error={!nome?true:false}
            onChange={(e) => setNome(e.target.value)}
          />
          <TextField
            variant="outlined"
            label="Idade"
            type="number"
            fullWidth
            value={idade}
            error={!idade?true:false}
            onChange={(e) => setIdade(e.target.value)}
          />
          <TextField
            variant="outlined"
            label="Endereço de E-mail"
            fullWidth
            value={email}
            error={!email?true:false}
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            variant="outlined"
            label="Senha"
            type="password"
            fullWidth
            value={senha}
            error={!senha?true:false}
            onChange={(e) => setSenha(e.target.value)}
          />
          <FormControl fullWidth>
            <InputLabel>Regime de Contratação</InputLabel>
            <Select
              value={regimeContratacao}
              error={!regimeContratacao?true:false}
              onChange={(e) => setRegimeContratacao(e.target.value)}
            >
              <MenuItem value="">Selecione o regime de contratação</MenuItem>
              <MenuItem value="CLT">CLT</MenuItem>
              <MenuItem value="PJ">PJ</MenuItem>
              <MenuItem value="Estágio">Estágio</MenuItem>
            </Select>
          </FormControl>
          <FormControl fullWidth>
            <Stack spacing={1}>
              <Stack direction="row" alignItems="center">
                <Checkbox
                  value="Frontend"
                  checked={areasAtuacao.includes('Frontend')}
                  onChange={(e) => {
                    if (e.target.checked) {
                      setAreasAtuacao([...areasAtuacao, e.target.value]);
                    } else {
                      setAreasAtuacao(areasAtuacao.filter((area) => area !== e.target.value));
                    }
                  }}
                />
                <Typography>Frontend</Typography>
              </Stack>
              <Stack direction="row" alignItems="center">
                <Checkbox
                  value="Backend"
                  checked={areasAtuacao.includes('Backend')}
                  onChange={(e) => {
                    if (e.target.checked) {
                      setAreasAtuacao([...areasAtuacao, e.target.value]);
                    } else {
                      setAreasAtuacao(areasAtuacao.filter((area) => area !== e.target.value));
                    }
                  }}
                />
                <Typography>Backend</Typography>
              </Stack>
              <Stack direction="row" alignItems="center">
                <Checkbox
                  value="Infraestrutura"
                  checked={areasAtuacao.includes('Infraestrutura')}
                  onChange={(e) => {
                    if (e.target.checked) {
                      setAreasAtuacao([...areasAtuacao, e.target.value]);
                    } else {
                      setAreasAtuacao(areasAtuacao.filter((area) => area !== e.target.value));
                    }
                  }}
                />
                <Typography>Infraestrutura</Typography>
              </Stack>
              <Stack direction="row" alignItems="center">
                <Checkbox
                  value="Design"
                  checked={areasAtuacao.includes('Design')}
                  onChange={(e) => {
                    if (e.target.checked) {
                      setAreasAtuacao([...areasAtuacao, e.target.value]);
                    } else {
                      setAreasAtuacao(areasAtuacao.filter((area) => area !== e.target.value));
                    }
                  }}
                />
                <Typography>Design</Typography>
              </Stack>
              <Stack direction="row" alignItems="center">
                <Checkbox
                  value="Requisitos"
                  checked={areasAtuacao.includes('Requisitos')}
                  onChange={(e) => {
                    if (e.target.checked) {
                      setAreasAtuacao([...areasAtuacao, e.target.value]);
                    } else {
                      setAreasAtuacao(areasAtuacao.filter((area) => area !== e.target.value));
                    }
                  }}
                />
                <Typography>Requisitos</Typography>
              </Stack>
              <Stack direction="row" alignItems="center">
                <Checkbox
                  value="Gestão"
                  checked={areasAtuacao.includes('Gestão')}
                  onChange={(e) => {
                    if (e.target.checked) {
                      setAreasAtuacao([...areasAtuacao, e.target.value]);
                    } else {
                      setAreasAtuacao(areasAtuacao.filter((area) => area !== e.target.value));
                    }
                  }}
                />
                <Typography>Gestão</Typography>
              </Stack>
            </Stack>
            
          </FormControl>
          <FormControl fullWidth>
            <InputLabel>Regime de Contratação</InputLabel>
            <Select
              value={tipo}
              error={!tipo?true:false}
              onChange={(e) => setTipo(e.target.value)}
            >
              <MenuItem value="">Selecione o tipo de colaborador</MenuItem>
              <MenuItem value="normal">normal</MenuItem>
              <MenuItem value="gestor">gestor</MenuItem>
            </Select>
          </FormControl>
        </Stack>
        <Button
          variant="contained"
          color="primary"
          type="button"
          fullWidth
          onClick={() => handleFormSubmit()}
        >
          Cadastrar
        </Button>
      </form>
    </Container>
  );
}

export default register;
