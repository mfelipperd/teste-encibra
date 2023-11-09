'use client'
import { Alert, Button, Card, Stack, TextField } from "@mui/material";
import Container from "@mui/material/Container/Container";
import Typography from '@mui/material/Typography';
import { useState } from "react";
import { useRouter } from 'next/navigation'
import { signIn, useSession } from 'next-auth/react';

function Login() {
    const router = useRouter()
    const [username, setUsername] = useState('Email')
    const [password, setPassword] = useState('Senha')
    const [errologin, setErrologin] = useState(false)

    const handleLogin = async (username:string, password:string) => {

      if (!username || !password  || username === 'Email' || password === 'Senha') {
        setUsername('')
        setPassword('')
        return false
      }
      
      const result = await signIn('credentials',{
        username,
        password,
        redirect: false
      })

      console.log(result)


      if (result?.error){
        setErrologin(true)
        return console.log(result.error)
      }
      router.push('/dashboard')
    }

    return(
        <Container
        sx={{
          display:'flex',
          width:'100%',
          height:'100vh',
          justifyContent: 'center',
          alignItems:'center'
        }}
        >
          <Card
          sx={
            {
              width:'25rem',
              height:'30rem'
            }
          }
          >
            <Stack
            display='flex'
            justifyContent='center'
            alignItems='center'
            minHeight='60vh'
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
                    onChange={(e) => {
                      setUsername(e.target.value)
                      setErrologin(false)
                    }}/>
                    <TextField
                    id="password"
                    label="Password"
                    variant="outlined"
                    type="password"
                    error={password? false: true}
                    onChange={(e) =>{
                      setPassword(e.target.value)
                      setErrologin(false)
                    } }/>
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
                </Stack>
                <Stack display={errologin?'flex':'none' }>
                <Alert severity="error">Email ou Senha incorretos</Alert>
                </Stack>
            </Stack>
          </Card>
        </Container>
    )
}
export default Login;
