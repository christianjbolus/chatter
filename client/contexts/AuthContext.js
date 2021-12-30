import { useState, useEffect, createContext } from 'react';
import { useRouter } from 'next/router';
import { signIn, useSession } from 'next-auth/react';
import {  registerUser, removeToken } from '../services/auth';

export const AuthContext = createContext(null);

export default function AuthContextProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null);
  const { data: session, status } = useSession();
  const router = useRouter();
  useEffect(() => {
    // const handleVerify = async () => {
    //   const res = await verifyUser();
    //   setCurrentUser(res);
    // };
    // handleVerify();
    if (session) {
      setCurrentUser(session.currentUser);
    }
  }, [session]);

  const login = async formData => {
    const { username, password } = formData;
    const userData = await signIn('credentials', {
      redirect: false,
      username,
      password,
    });
    console.log(userData)
    if (userData.error) {
      return userData.error;
    } else {
      router.push('/chats');
    }
  };

  // const login = async formData => {
  //   const userData = await loginUser(formData);
  //   if (userData.error) {
  //     return userData.error;
  //   } else {
  //     setCurrentUser(userData);
  //     router.push('/chats');
  //   }
  // };

  const register = async formData => {
    const userData = await registerUser(formData);
    console.log(userData);
    if (userData.error) {
      return userData.error;
    } else {
      await signIn('credentials', {
        redirect: false,
        username: formData.username,
        password: formData.password,
      });
      router.push('/chats');
    }
  };

  const logout = () => {
    console.log('logout');
    setCurrentUser(null);
    localStorage.removeItem('authToken');
    removeToken();
    router.push('/');
  };

  const context = {
    currentUser,
    login,
    register,
    logout,
  };

  return <AuthContext.Provider value={context}>{children}</AuthContext.Provider>;
}
