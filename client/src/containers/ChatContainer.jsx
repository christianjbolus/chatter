import { useState, useEffect, useContext } from 'react';
import { Redirect, Route, Switch, useHistory } from 'react-router-dom';
import {
  ChatCreate,
  ChatDetail,
  ChatEdit,
  Chats,
  ReplyCreate,
  ReplyEdit,
} from '../screens';
import { deleteChat, getAllChats, postChat, putChat } from '../services/chats';
import { UserContext } from '../contexts';

export default function ChatContainer({
  incrementChatCounter,
  decrementChatCounter,
}) {
  const [allChats, setAllChats] = useState([]);
  const history = useHistory();
  const currentUser = useContext(UserContext);

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
    incrementChatCounter();
    history.push('/chats');
  };

  const handleUpdate = async (id, chatData) => {
    const updatedChat = await putChat(id, chatData);
    setAllChats(prevState =>
      prevState.map(chat => (chat.id === Number(id) ? updatedChat : chat))
    );
    history.push('/chats');
  };

  const handleDelete = async id => {
    await deleteChat(id);
    setAllChats(prevState => prevState.filter(chat => chat.id !== Number(id)));
    decrementChatCounter();
    history.push('/chats');
  };

  return (
    <div>
      <Switch>
        <Route path="/chats/:id/replies/new">
          <ReplyCreate />
        </Route>
        <Route path="/chats/:chat_id/replies/:id">
          <ReplyEdit />
        </Route>
        <Route path="/chats/:id/edit">
          <ChatEdit
            allChats={allChats}
            handleUpdate={handleUpdate}
            handleDelete={handleDelete}
          />
        </Route>
        <Route path="/chats/new">
          {currentUser ?  <ChatCreate handleCreate={handleCreate} /> : <Redirect to="/login" />}
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
