import { useState, useEffect } from 'react';
import { Redirect, Route, Switch, useHistory } from 'react-router-dom';
import { ChatCreate, Chats } from '../screens';
import { getAllChats, postChat } from '../services/chats';

export default function ChatContainer({ currentUser }) {
  const [allChats, setAllChats] = useState([]);
  const history = useHistory();

  useEffect(() => {
    const fetchChats = async () => {
      const chats = await getAllChats();
      setAllChats(chats);
    };
    fetchChats();
  }, []);

  const handleCreate = async chatData => {
    const newChat = await postChat(chatData);
    setAllChats(prevState => [newChat, ...prevState]);
    history.push('/chats');
  };

  return (
    <div>
      <Switch>
        <Route path="/chats/new">
          {currentUser ? (
            <ChatCreate handleCreate={handleCreate} />
          ) : (
            <Redirect to="/login" />
          )}
        </Route>
        <Route path="/chats">
          <Chats allChats={allChats} />
        </Route>
      </Switch>
    </div>
  );
}
