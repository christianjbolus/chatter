import { useState, useEffect } from 'react';
import {useRouter} from 'next/router'
import { HeadData } from '../components';
import { loginUser, verifyUser } from '../services/auth';
import { UserContext } from '../contexts/UserContext';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  const [currentUser, setCurrentUser] = useState(null);
  const router = useRouter()
  useEffect(() => {
    const handleVerify = async () => {
      const res = await verifyUser();
      setCurrentUser(res);
    };
    handleVerify();
  }, []);

  const handleLogin = async (formData) => {
    const userData = await loginUser(formData);
    if (userData.error) {
      return userData.error;
    } else {
      setCurrentUser(userData);
      router.push('/chats');
    }
  };

  return (
    <>
      <UserContext.Provider value={{ currentUser, handleLogin }}>
        <HeadData />
        <Component {...pageProps} />
      </UserContext.Provider>
    </>
  );
}

export default MyApp;
