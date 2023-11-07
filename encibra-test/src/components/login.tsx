import { Button, Stack, TextField } from "@mui/material";
import Container from "@mui/material/Container/Container";
import Typography from '@mui/material/Typography';
import { useState } from "react";
import { useRouter } from 'next/navigation'

function Login() {
    const router = useRouter()
    const [username, setUsername] = useState('Username')
    const [password, setPassword] = useState('Password')


    function login(name:string, pass:string) {
        !name||name==='Username'?setUsername(''): true
        !pass||pass==='Password'?setPassword(''): true

        const checkUsername  = 'função que vai checar se existe o username e retornoar true or false'
        const checkPassword  = 'função que vai checar a senha se está correta e se existe'
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
                    onClick={() => login(username, password)}
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
