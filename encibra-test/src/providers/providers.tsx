'use client'
import { UserProvider } from "@/context"
import { ColaboradoresAPIProvider } from "@/context/api/ColaboradoresAPIContext"

export const Providers = ({ children }: { children: React.ReactNode }) => {
    return (
        <>
        <UserProvider>
            <ColaboradoresAPIProvider>
                {children}
            </ColaboradoresAPIProvider>
        </UserProvider>
        </>
    )
}