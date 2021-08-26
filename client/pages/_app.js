import { HeadData } from '../components';
import AuthContextProvider from '../contexts/AuthContext'
import '../styles/globals.css';

export default function MyApp({ Component, pageProps }) {

  return (
    <>
      <AuthContextProvider>
        <HeadData />
        <div className="app">
          <Component {...pageProps} />
        </div>
      </AuthContextProvider>
    </>
  );
}
