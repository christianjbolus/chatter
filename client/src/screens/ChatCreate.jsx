import { useContext, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { Button, TextArea } from '../components';
import { IoArrowBackOutline } from 'react-icons/all';
import '../assets/css/screens/ChatCreate.css';
import { UserContext } from '../contexts';

export default function ChatCreate({ handleCreate }) {
  const [chat, setChat] = useState({
    content: '',
  });
  const currentUser = useContext(UserContext);
  const history = useHistory();

  const { content } = chat;

  const handleChange = e => {
    const { value } = e.target;
    setChat({ content: value });
  };

  return (
    <>
      <div className="chat-detail-container">
        <div className="chat-nav">
          <IoArrowBackOutline
            className="back-arrow"
            onClick={() => history.goBack()}
          />
        </div>
        <div className="chat-form-group">
          <Link className="user-img" to={`/users/${currentUser?.username}`}>
            <img
              className="user-profile-pic"
              src={currentUser?.profile_pic}
              alt={currentUser?.username}
            />
          </Link>
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
          <p className="character-counter">{content.length}/280</p>
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
    </>
  );
}
