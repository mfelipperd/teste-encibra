'use client'

import { Button } from "@mui/material"
import { signOut } from "next-auth/react"
import { useRouter } from "next/navigation"

export default function ButtonLogout() {
    const router  = useRouter()

    async function logout() {
        await signOut({
            redirect: false
        })
        router.replace('/login')
    }

    return <Button variant='outlined'onClick={logout}>Logout</Button>
}