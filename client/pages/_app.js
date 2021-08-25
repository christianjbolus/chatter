import { useState, useEffect } from 'react';
import {useRouter} from 'next/router'
import { HeadData } from '../components';
import { loginUser, registerUser, verifyUser, removeToken } from '../services/auth';
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

  const login = async (formData) => {
    const userData = await loginUser(formData);
    if (userData.error) {
      return userData.error;
    } else {
      setCurrentUser(userData);
      router.push('/chats');
    }
  };

  const register = async (formData) => {
    const userData = await registerUser(formData);
    if (userData.error) {
      return userData.error
    } else {
      setCurrentUser(userData);
      router.push('/');
    }
  };

  const handleLogout = () => {
    console.log('logout')
    setCurrentUser(null);
    localStorage.removeItem('authToken');
    removeToken();
    router.push('/');
  };

  return (
    <>
      <UserContext.Provider value={{ currentUser, login, register, handleLogout }}>
        <HeadData />
        <div className="app">
          <Component {...pageProps} />
        </div>
      </UserContext.Provider>
    </>
  );
}

export default MyApp;
