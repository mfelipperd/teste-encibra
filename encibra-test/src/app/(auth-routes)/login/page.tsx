'use client'
import { Button, Stack, TextField } from "@mui/material";
import Container from "@mui/material/Container/Container";
import Typography from '@mui/material/Typography';
import { useState } from "react";
import { useRouter } from 'next/navigation'
import { signIn, useSession } from 'next-auth/react';

function Login() {
    const router = useRouter()
    const [username, setUsername] = useState('Email')
    const [password, setPassword] = useState('Senha')

    const handleLogin = async (username:string, password:string) => {
      if (username !== null && password !== null && username !== 'Email' && password !== 'Senha') {
        true
            } else {
              setUsername('')
              setPassword('')
      }
      
      const result = await signIn('credentials',{
        username,
        password,
        redirect: false
      })
      if (result?.error){
        return
      }

      router.replace('/dashboard')

    }

    return(
        <Container>
            <Stack
            display='flex'
            justifyContent='center'
            alignItems='center'
            minHeight='100vh'
            spacing={3}>
                <Typography
                variant="h3" gutterBottom color='#1976d2'
                > Login </Typography>
                <Stack
                display='flex'
                justifyContent='center'
                alignItems='center'
                spacing={3}>
                    <TextField 
                    id="username" 
                    label="Username" 
                    variant="outlined"
                    error={username? false: true}
                    onChange={(e) => setUsername(e.target.value)}/>
                    <TextField
                    id="password"
                    label="Password"
                    variant="outlined"
                    type="password"
                    error={password? false: true}
                    onChange={(e) => setPassword(e.target.value)}/>
                </Stack>
                <Stack
                display='felx'
                direction='row'
                justifyContent='center'
                spacing={3}>
                    <Button
                    variant="outlined"
                    disabled={!username||username==='Username'?true:false}
                    onClick={() => handleLogin(username, password)}
                    >Entrar</Button>
                    <Button 
                    variant="outlined"
                    onClick={() => router.push('/register')}
                    >Cadastrar</Button>
                </Stack>
                {/* <Typography
                    variant="caption" gutterBottom
                    > se você ainda não tem uma conta clique em cadastrar </Typography> */}
            </Stack>
        </Container>
    )
}
export default Login;
