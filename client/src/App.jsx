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
import { LogoutContext, UserContext } from './contexts';

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

  //! Revisit this solution
  const incrementChatCounter = () => {
    setCurrentUser(prevState => ({
      ...prevState,
      chat_count: prevState.chat_count + 1,
    }));
  };

  const decrementChatCounter = () => {
    setCurrentUser(prevState => ({
      ...prevState,
      chat_count: prevState.chat_count - 1,
    }));
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
            <LogoutContext.Provider value={handleLogout}>
            <ChatContainer
              incrementChatCounter={incrementChatCounter}
              decrementChatCounter={decrementChatCounter}
            />
            </LogoutContext.Provider>
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
