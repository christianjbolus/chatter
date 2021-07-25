import { useState, useEffect } from 'react';
import { Route, Switch, useHistory } from 'react-router-dom';

import ChatContainer from './containers/ChatContainer';
import { Landing, Login, Register } from './screens';
import {
  registerUser,
  loginUser,
  verifyUser,
  removeToken,
} from './services/auth';

import './App.css';
import { UserContext } from './contexts/UserContext';

function App() {
  const [currentUser, setCurrentUser] = useState(null);
  const history = useHistory();

  useEffect(() => {
    const handleVerify = async () => {
      const userData = await verifyUser();
      setCurrentUser(userData);
    };
    handleVerify();
  }, []);

  const handleLogin = async formData => {
    const userData = await loginUser(formData);
    setCurrentUser(userData);
    history.push('/chats');
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
      <Switch>
        <Route path="/register">
          <Register handleRegister={handleRegister} />
        </Route>
        <Route path="/login">
          <Login handleLogin={handleLogin} />
        </Route>
        <Route path="/chats">
          <UserContext.Provider value={currentUser}>
            <ChatContainer />
          </UserContext.Provider>
        </Route>
        <Route>
          <Landing />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
