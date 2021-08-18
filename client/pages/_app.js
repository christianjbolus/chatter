import { HeadData } from '../components';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <HeadData />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
