'use client'
import { UserProvider } from "@/context";
import { ColaboradoresAPIProvider } from "@/context/api/ColaboradoresAPIContext";
import { EditUserProvider } from "@/context/editUsers/editUsers";
import { UserIdProvider } from "@/context/id";
import { SessionProvider } from "next-auth/react";


export const Providers = ({ children }: { children: React.ReactNode }) => {
    return (
        <>
        <UserIdProvider>    
            <SessionProvider>
                <UserProvider>
                    <EditUserProvider>
                    <ColaboradoresAPIProvider>
                        {children}
                    </ColaboradoresAPIProvider>
                    </EditUserProvider>
                </UserProvider>
            </SessionProvider>
        </UserIdProvider>
        </>
    )
}