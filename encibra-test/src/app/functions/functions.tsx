/* eslint-disable react-hooks/rules-of-hooks */
import { useSession } from "next-auth/react"


export function isGestor() {
    const { data: session } = useSession()
    if(!session){return false}
    if(session?.user.tipo === 'gestor'){return true}
    return false
  }