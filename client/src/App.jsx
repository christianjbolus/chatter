import { useState, useEffect } from 'react';
import { Route, Switch, useHistory } from 'react-router-dom';
import { LogoutContext, UserContext } from './contexts';
import ChatContainer from './containers/ChatContainer';
import Layout from './layouts/Layout';
import { Landing, Login, Profile, Register } from './screens';
import { registerUser, verifyUser, removeToken } from './services/auth';

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
          <Login setCurrentUser={setCurrentUser} />
        </Route>
        <Route path="/chats">
          <UserContext.Provider value={currentUser}>
            <LogoutContext.Provider value={handleLogout}>
              <Layout>
                <ChatContainer
                  incrementChatCounter={incrementChatCounter}
                  decrementChatCounter={decrementChatCounter}
                />
              </Layout>
            </LogoutContext.Provider>
          </UserContext.Provider>
        </Route>
        <Route path="/users/:username">
          <UserContext.Provider value={currentUser}>
            <Profile />
          </UserContext.Provider>
        </Route>
        <Route path="/">
          <Landing />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
