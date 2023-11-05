'use client'
import Container from "@mui/material/Container/Container";
import dynamic from 'next/dynamic'

const ComponentLogin = dynamic(() => import('../components/login'))

export default function Home() {
  return (
  <div>
    <Container>
      <ComponentLogin/>
    </Container>
  </div>
  )
}
