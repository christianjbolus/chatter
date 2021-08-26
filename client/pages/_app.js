import { HeadData } from '../components';
import AuthContextProvider from '../contexts/AuthContext'
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {

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

export default MyApp;
