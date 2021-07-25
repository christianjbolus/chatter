import { useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Button, TextArea } from '../components';
import { IoArrowBackOutline } from 'react-icons/all';
import '../assets/css/screens/ChatCreate.css';
import { UserContext } from '../contexts/UserContext';

export default function ChatCreate({ handleCreate }) {
  const [chat, setChat] = useState({
    content: '',
  });
  const [characters, setCharacters] = useState(0);
  const currentUser = useContext(UserContext);
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
          <img className="user-profile-pic" src={currentUser?.profile_pic} />
        </div>
        <form className="chat-form">
          <TextArea
            name="content"
            value={content}
            handleChange={handleChange}
            placeholder="What's up?"
            rows="4"
            maxLength="280"
          />
        </form>
      </div>
      <div className="chat-form-footer">
        <p className="character-counter">{characters + content.length}/280</p>
        <div className="chat-form-submit">
          <Button
            className={!content ? 'btn btn-disabled' : 'btn btn-chat'}
            text="Chat"
            onClick={() => handleCreate(chat)}
            disabled={!content}
          />
        </div>
      </div>
    </div>
  );
}
