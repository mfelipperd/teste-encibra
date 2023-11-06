/* eslint-disable react-hooks/rules-of-hooks */
import { getColaboradores } from "@/api/RESTFUL";
import { Colaborador } from "@/interfaces/interfaces";
import { NextAuthOptions } from "next-auth";
import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";

const authOptions: NextAuthOptions = {
    providers: [
      CredentialsProvider({
        name: 'credentials',
        credentials: {
          username: { label: 'Email', type: 'text' },
          password: { label: 'Password', type: 'password' },
        },
        
        authorize: async (credentials, req) => {
          if (!credentials) return null;
          const colaboradores = await getColaboradores();
          const user = colaboradores.find((colaborador: Colaborador) => {
            return (
              colaborador.email === credentials.username &&
              colaborador.senha === credentials.password
            );
          });
          if (user) {
            return { id: user.id, name: user.nome, email: user.email, tipo: user.tipo };
          } else {
            return null;
          }
        },
      }),
    ],
    pages:{
        signIn: '/login'
    },
    callbacks: {
        async jwt({token, user}){
          user && (token.user = user)
          return token
        },
        async session({ session, token }) {
          session = token.user as any
          return session;
        }
    }
  };

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST, authOptions};

