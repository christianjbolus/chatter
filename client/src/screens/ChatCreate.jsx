import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Button, TextArea } from '../components';
import { IoArrowBackOutline } from 'react-icons/all';
import '../assets/css/screens/ChatCreate.css';

export default function ChatCreate({ handleCreate }) {
  const [chat, setChat] = useState({
    content: '',
  });

  const history = useHistory();

  const { content } = chat;

  const handleChange = e => {
    const { value } = e.target;
    setChat({ content: value });
  };

  return (
    <div className="chat-detail-container">
      <div className="chat-nav">
        <IoArrowBackOutline
          className="back-arrow"
          onClick={() => history.push('/chats')}
        />
      </div>
      <div className="chat-form-group">
        <div className="user-img">
          <img className="user-profile-pic" src="" />
        </div>
        <form className="chat-form">
          <textarea
            name="content"
            value={content}
            onChange={handleChange}
            placeholder="What's up?"
            rows="4"
          />
        </form>
      </div>
      <div className="chat-form-submit">
      <Button
        className="btn btn-chat"
        text="Chat"
        onClick={() => handleCreate(chat)}
      />
      </div>
    </div>
  );
}
