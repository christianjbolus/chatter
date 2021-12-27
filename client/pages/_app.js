import { HeadData } from '../components';
import { SessionProvider } from 'next-auth/react';
import AuthContextProvider from '../contexts/AuthContext';
import '../styles/globals.css';

export default function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  return (
    <SessionProvider session={session}>
      <AuthContextProvider>
        <HeadData />
        <div className="app">
          <Component {...pageProps} />
        </div>
      </AuthContextProvider>
    </SessionProvider>
  );
}
