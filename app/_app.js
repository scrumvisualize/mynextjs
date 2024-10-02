import '../styles/globals.css';
import { useState } from 'react';
import Navbar from './components/navbar';
import { AuthProvider } from './contexts/authContext';

const MyApp = ({ Component, pageProps }) => {
  
  console.log('Rendering MyApp');

    return (
        <>
        <AuthProvider>
          <Navbar />
          <Component {...pageProps} />
        </AuthProvider>
        </>
      );
}

export default MyApp;