import { useState, useEffect, createContext } from 'react';
import { useRouter } from 'next/router';
import { signIn, signOut, useSession } from 'next-auth/react';
import { registerUser } from '../services/auth';

export const AuthContext = createContext(null);

export default function AuthContextProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null);
  const { data: session } = useSession();
  
  const router = useRouter();

  useEffect(() => {
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
    if (userData.error) {
      return userData.error;
    } else {
      router.push('/chats');
    }
  };

  const register = async formData => {
    const userData = await registerUser(formData);
    if (userData.error) {
      return userData.error;
    } else {
      await signIn('credentials', {
        redirect: false,
        username: formData.username,
        password: formData.password,
      });
      router.push(`/${formData.username}/profile`);
    }
  };

  const logout = () => {
    setCurrentUser(null);
    signOut({ callbackUrl: 'http://localhost:3001/' });
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
