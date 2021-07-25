import { useState, useContext } from 'react';
import { UserContext } from '../contexts/UserContext';
import { useParams, useHistory } from 'react-router-dom';
import { postReply } from '../services/replies';
import { Button, TextArea } from '../components';
import { IoArrowBackOutline } from 'react-icons/all';
import '../assets/css/screens/ChatCreate.css';

export default function ReplyCreate() {
  const [reply, setReply] = useState({
    content: '',
  });
  const currentUser = useContext(UserContext);
  const { id } = useParams();
  const history = useHistory();

  const { content } = reply;

  const handleChange = e => {
    const { value } = e.target;
    setReply({ content: value });
  };

  const createReply = async () => {
    await postReply(id, reply);
    history.push(`/chats/${id}`);
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
            onChange={handleChange}
            placeholder="What do you think?"
            rows="4"
          />
        </form>
      </div>
      <div className="chat-form-submit">
        <Button
          className="btn btn-chat"
          text="Reply"
          onClick={createReply}
          disabled={!content}
        />
      </div>
    </div>
  );
}
