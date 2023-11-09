/* eslint-disable react-hooks/rules-of-hooks */
import { getColaboradorByEmail, getColaboradores } from "@/api/RESTFUL";
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
          if (!credentials || credentials.username==='Email' || credentials.password==='Password') {
          return null
          }
          const[ user ]= await getColaboradorByEmail(credentials.username);
          console.log(user)
          if (!user || user.senha !== credentials.password) {
            return null;
          }
          if (user) {
            return { id: user.id, name: user.nome, email: user.email, tipo: user.tipo };
          } else {
            // Se houver algum outro caso de erro, você pode retornar um objeto de erro
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
          session.user = token.user as any
          return session;
        }
    }
  };

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST, authOptions};

