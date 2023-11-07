import { authOptions } from "@/app/api/auth/[...nextauth]/route"
import { isGestor, sessionUser } from "@/app/functions/functions"
import Navbar from "@/components/navbar"
import { Button, Stack, Typography } from "@mui/material"
import { getServerSession } from "next-auth"
import { useEffect } from "react"

export default async function Projetos() {
    const session = await getServerSession(authOptions)
    useEffect(() => {
        const result = 
    })

    if(isGestor(session))

    return(
        <>
            <Navbar></Navbar>
            <Stack>
                <Typography variant="h6">PROJETOS</Typography>
            </Stack>
        </>
        
    )
}