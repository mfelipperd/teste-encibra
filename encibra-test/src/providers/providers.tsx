'use client'
import { UserProvider } from "@/context";
import { ColaboradoresAPIProvider } from "@/context/api/ColaboradoresAPIContext";
import { ProjetosAPIProvider } from "@/context/api/ProjetosAPIContext";
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
                    <ProjetosAPIProvider>
                        <ColaboradoresAPIProvider>
                            {children}
                        </ColaboradoresAPIProvider>
                    </ProjetosAPIProvider>
                    </EditUserProvider>
                </UserProvider>
            </SessionProvider>
        </UserIdProvider>
        </>
    )
}