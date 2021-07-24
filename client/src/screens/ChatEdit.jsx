import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom'
import { Button } from '../components';
import { IoArrowBackOutline } from 'react-icons/all';

export default function ChatEdit({ allChats, handleUpdate }) {
  const [chat, setChat] = useState({
    content: '',
  });

  const {id} = useParams()

  useEffect(() => {
    const preFillFormData = () => {
      const oneChat = allChats.find(chat => chat.id === Number(id))
      setChat(oneChat)
    }
    preFillFormData()
  }, [])


  const handleChange = e => {
    const { value } = e.target;
    setChat({ content: value });
  };

  return (
    <div className="create-chat-container">
      <Link to="/chats">
        <IoArrowBackOutline />
      </Link>
      <form
        onSubmit={e => {
          e.preventDefault();
          handleUpdate(chat);
        }}
      >
        <textarea
          name="content"
          value={chat.content}
          onChange={handleChange}
        />
        <Button className="btn btn-chat" text="Update" />
      </form>
    </div>
  );
}
