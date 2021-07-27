import { useState, useContext } from 'react';
import { UserContext } from '../contexts';
import { Link,useParams, useHistory } from 'react-router-dom';
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
            placeholder="What do you think?"
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
            text="Reply"
            onClick={createReply}
            disabled={!content}
          />
        </div>
      </div>
    </div>
  );
}
