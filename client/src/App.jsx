import { useState, useEffect } from 'react'
import { Route, Switch, useHistory } from 'react-router-dom'
import { registerUser, loginUser, verifyUser, removeToken } from './services/auth'  

import './App.css';

function App() {
  const [currentUser, setCurrentUser] = useState(null)
  const history = useHistory

  useEffect(() => {
    const handleVerify = async () => {
      const userData = await verifyUser()
      setCurrentUser(userData)
    }
    handleVerify()
  }, [])

  const handleLogin = async formData => {
    const userData = await loginUser(formData);
    setCurrentUser(userData);
    history.push('/');
  };

  const handleRegister = async formData => {
    const userData = await registerUser(formData);
    setCurrentUser(userData);
    history.push('/');
  };

  const handleLogout = () => {
    setCurrentUser(null);
    localStorage.removeItem('authToken');
    removeToken();
    history.push('/');
  };
  
  return (
    <div className="App">

    </div>
  );
}

export default App;
