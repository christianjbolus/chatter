import { HeadData } from '../components';
import { SessionProvider } from 'next-auth/react';
import '../styles/globals.css';

export default function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  return (
    <SessionProvider session={session}>
      <HeadData />
      <div className="app">
        <Component {...pageProps} />
      </div>
    </SessionProvider>
  );
}
