import { useState } from 'react';
import { Link } from 'react-router-dom'
import { Button } from '../components';
import { IoArrowBackOutline } from 'react-icons/all';

export default function ChatCreate({ handleCreate }) {
  const [chat, setChat] = useState({
    content: '',
  });

  const { content } = chat;

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
          handleCreate(chat);
        }}
      >
        <textarea
          name="content"
          value={content}
          onChange={handleChange}
          placeholder="What's up?"
        />
        <Button className="btn btn-chat" text="Chat" />
      </form>
    </div>
  );
}
