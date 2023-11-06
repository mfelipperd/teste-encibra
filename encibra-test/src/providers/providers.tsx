'use client'
import { UserProvider } from "@/context";
import { ColaboradoresAPIProvider } from "@/context/api/ColaboradoresAPIContext";
import { SessionProvider } from "next-auth/react";


export const Providers = ({ children }: { children: React.ReactNode }) => {
    return (
        <>
        <SessionProvider>
            <UserProvider>
                <ColaboradoresAPIProvider>
                    {children}
                </ColaboradoresAPIProvider>
            </UserProvider>
        </SessionProvider>
        </>
    )
}