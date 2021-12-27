import { useState, useEffect, createContext } from 'react';
import { useRouter } from 'next/router';
import { signIn } from 'next-auth/client';
import {
  loginUser,
  registerUser,
  verifyUser,
  removeToken,
} from '../services/auth';
import { useSession } from 'next-auth/client'

export const AuthContext = createContext(null);

export default function AuthContextProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null);
  const [session, loading] = useSession();
  const router = useRouter();

  
  useEffect(() => {
    // const handleVerify = async () => {
    //   const res = await verifyUser();
    //   setCurrentUser(res);
    // };
    // handleVerify();
    if (session) {
      console.log(session)
      setCurrentUser(session.user);
    }
  }, [session]);

  const login = async formData => {
    const { username, password } = formData;
    const userData = await signIn('credentials', {
      redirect: false,
      username,
      password,
    });
    if (userData.error) {
      return userData.error;
    } else {
      // setCurrentUser(userData);
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
    if (userData.error) {
      return userData.error;
    } else {
      setCurrentUser(userData);
      router.push('/');
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

  return (
    <AuthContext.Provider value={context}>{children}</AuthContext.Provider>
  );
}
