// _app.tsx
import React from 'react';
import { AppProps } from 'next/app'; // Importe AppProps do Next.js
import { ColaboradoresProvider } from '../context/colaboradoresContext'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ColaboradoresProvider>
      <Component {...pageProps} />
    </ColaboradoresProvider>
  );
}

export default MyApp;
