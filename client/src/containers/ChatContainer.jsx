import { useState, useEffect,useContext } from 'react';
import { Redirect, Route, Switch, useHistory } from 'react-router-dom';
import { ChatCreate, ChatDetail, ChatEdit, Chats, ReplyCreate } from '../screens';
import { getAllChats, postChat, putChat } from '../services/chats';
import { UserContext } from '../contexts/UserContext';

export default function ChatContainer() {
  const [allChats, setAllChats] = useState([]);
  const history = useHistory();
  const currentUser = useContext(UserContext)

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

  const handleUpdate = async (id, chatData) => {
    const updatedChat = await putChat(id, chatData);
    setAllChats(prevState =>
      prevState.map(chat => (chat.id === Number(id) ? updatedChat : chat))
    );
    history.push('/chats');
  };

  return (
    <div>
      <Switch>
        <Route path="/chats/:id/replies/new">
          <ReplyCreate />
        </Route>
        <Route path="/chats/:id/edit">
          <ChatEdit allChats={allChats} handleUpdate={handleUpdate} />
        </Route>
        <Route path="/chats/new">
          <ChatCreate handleCreate={handleCreate} />
        </Route>
        <Route path="/chats/:id">
          <ChatDetail />
        </Route>
        <Route path="/chats">
          <Chats allChats={allChats} />
        </Route>
      </Switch>
    </div>
  );
}
