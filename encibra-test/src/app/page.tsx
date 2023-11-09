'use client'
import { Typography, colors } from "@mui/material";
import Container from "@mui/material/Container/Container";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter()

  router.push('/login')
  return (
    <Container sx={{
      display: "flex",
      width:'100%',
      height:'100vh',
      justifyContent:'center',
      alignItems:"center"
    }}>
      <Typography color={'#1976d2'} variant="h1" textTransform={"uppercase"}>
        Bem vindo
      </Typography>
    </Container>
  )
}
