import { useState, useEffect } from 'react';
import { Route, Switch, useHistory } from 'react-router-dom';
import { LogoutContext, UserContext } from './contexts';
import ChatContainer from './containers/ChatContainer';
import { Landing, Login, Profile, Register } from './screens';
import {
  registerUser,
  loginUser,
  verifyUser,
  removeToken,
} from './services/auth';

import './App.css';

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

  // const handleLogin = async formData => {
  //   try {
  //     const userData = await loginUser(formData);
  //     setCurrentUser(userData);
  //     history.push('/chats');
  //   } catch (error) {

  //   }
  // };

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
      <UserContext.Provider value={currentUser}>
        <Switch>
          <Route path="/register">
            <Register handleRegister={handleRegister} />
          </Route>
          <Route path="/login">
            <Login setCurrentUser={setCurrentUser} />
          </Route>
          <Route path="/chats">
            <LogoutContext.Provider value={handleLogout}>
              <ChatContainer
                incrementChatCounter={incrementChatCounter}
                decrementChatCounter={decrementChatCounter}
              />
            </LogoutContext.Provider>
          </Route>
          <Route path="/users/:username">
            <Profile />
          </Route>
          <Route path="/">
            <Landing />
          </Route>
        </Switch>
      </UserContext.Provider>
    </div>
  );
}

export default App;
