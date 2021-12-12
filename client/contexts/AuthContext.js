import { useState, useEffect, createContext } from 'react';
import { useRouter } from 'next/router';
import { loginUser, registerUser, verifyUser, removeToken } from '../services/auth';

export const AuthContext = createContext(null);

export default function AuthContextProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const handleVerify = async () => {
      const res = await verifyUser();
      setCurrentUser(res);
    };
    handleVerify();
  }, []);

  const login = async formData => {
    const userData = await loginUser(formData);
    if (userData.error) {
      return userData.error;
    } else {
      setCurrentUser(userData);
      router.push('/chats');
    }
  };

  const register = async formData => {
    const userData = await registerUser(formData);
    if (userData.error) {
      return userData.error;
    } else {
      setCurrentUser(userData);
      router.push(`/${userData.username}/profile`);
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
    setCurrentUser,
    login,
    register,
    logout,
  };

  return <AuthContext.Provider value={context}>{children}</AuthContext.Provider>;
}
