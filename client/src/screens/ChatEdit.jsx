import { useState, useEffect, useContext } from 'react';
import { Link, useHistory, useParams } from 'react-router-dom';
import { Button } from '../components';
import { IoArrowBackOutline, BsTrash } from 'react-icons/all';
import { UserContext } from '../contexts/UserContext';
import '../assets/css/screens/ChatEdit.css';

export default function ChatEdit({ allChats, handleUpdate, handleDelete }) {
  const [chat, setChat] = useState({
    content: '',
  });
  const currentUser = useContext(UserContext);
  const { id } = useParams();
  const history = useHistory();

  useEffect(() => {
    const preFillFormData = () => {
      const oneChat = allChats.find(chat => chat.id === Number(id));
      setChat({ content: oneChat.content });
    };
    if (allChats.length) {
      preFillFormData();
    }
  }, []);

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
          <textarea
            name="content"
            value={chat.content}
            onChange={handleChange}
            rows="4"
          />
        </form>
      </div>
      <div className="chat-form-submit">
        <Button
          className="btn btn-chat"
          text="Update"
          onClick={() => handleUpdate(id, chat)}
        />
        <BsTrash className="chat-delete" onClick={() => handleDelete(id)} />
      </div>
    </div>
  );
}
