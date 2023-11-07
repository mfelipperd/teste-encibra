/* eslint-disable react-hooks/rules-of-hooks */
import { Session } from "@/interfaces"
import { useSession } from "next-auth/react"

export function sessionUser() {
    const { data: session } = useSession()
    return session
}

export function isGestor(session: Session | null) {
    if(!session){return false}
    if(session?.user.tipo === 'gestor'){return true}
    return false
  }