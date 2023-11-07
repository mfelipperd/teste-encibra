/* eslint-disable react-hooks/rules-of-hooks */
'use client'
import { Typography, Stack, TextField, FormControl, InputLabel, Select, MenuItem, Checkbox, Button, Container } from '@mui/material';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation'
import { atualizarColaborador, excluirColaborador } from '@/api/RESTFUL';
import { useEditDataContext } from '@/context/editUsers/editUsers';

export default async function register() {
  const {data: dataContext, handleChangeData} = useEditDataContext();
  const [nome, setNome] = useState(dataContext.nome);
  const [idade, setIdade] = useState(dataContext.idade);
  const [email, setEmail] = useState(dataContext.email);
  const [senha, setSenha] = useState(dataContext.senha);
  const [regimeContratacao, setRegimeContratacao] = useState(dataContext.regimeContratacao);
  const [areasAtuacao, setAreasAtuacao] = useState<string[]>(dataContext.areasAtuacao);
  const [tipo, setTipo] = useState(dataContext.tipo)
  const router = useRouter()


  
  function editUser(){
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
    atualizarColaborador(dataContext.id!, data);
    router.push('/colaboradores')
  }

  function deleteUser() {
    if(window.confirm("tem certeza de que deseja excluir o usuário?")){
      excluirColaborador(dataContext.id!)
      router.push('/colaboradores')
    }
  }

  return (
    <Container >
      <Typography variant="h5" color='#1976d2'>Editar ou Excluir Colaborador</Typography>
      <form onSubmit={editUser}>
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
        <Stack
        spacing={2}
        >
        <Button
          variant="contained"
          color="primary"
          type="button"
          fullWidth
          onClick={() => editUser()}
        >
          Editar
        </Button>
        <Button
          variant="contained"
          color="primary"
          type="button"
          fullWidth
          onClick={() => deleteUser()}
        >
          Deletar
        </Button>
        </Stack>
      </form>
    </Container>
  );
}
