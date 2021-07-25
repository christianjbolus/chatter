import { useState, useEffect, useContext } from 'react';
import { Link, useHistory, useParams } from 'react-router-dom';
import { Button } from '../components';
import { IoArrowBackOutline, BsTrash } from 'react-icons/all';
import { UserContext } from '../contexts/UserContext';
import '../assets/css/screens/ChatEdit.css';
import { getOneReply, putReply } from '../services/replies';

export default function ReplyEdit() {
  const [reply, setReply] = useState({
    content: '',
  });
  const currentUser = useContext(UserContext);
  const { chat_id, id } = useParams();
  const history = useHistory();

  useEffect(() => {
    const fetchReply = async () => {
      const oneReply = await getOneReply(chat_id, id)
      setReply({content: oneReply.content})
    }
    fetchReply()
  }, []);

  const handleChange = e => {
    const { value } = e.target;
    setReply({ content: value });
  };

  const updateReply = async () => {
    await putReply(chat_id, id, reply)
    history.push(`/chats/${chat_id}`)
  }

  return (
    <div className="chat-detail-container">
      <div className="chat-nav">
        <IoArrowBackOutline
          className="back-arrow"
          onClick={() => history.push(`/chats/${chat_id}`)}
        />
      </div>
      <div className="chat-form-group">
        <div className="user-img">
          <img className="user-profile-pic" src={currentUser?.profile_pic} />
        </div>
        <form className="chat-form">
          <textarea
            name="content"
            value={reply.content}
            onChange={handleChange}
            rows="4"
          />
        </form>
      </div>
      <div className="chat-form-submit">
        <Button
          className="btn btn-chat"
          text="Update"
          onClick={updateReply}
        />
        {/* <BsTrash className="chat-delete" onClick={() => handleDelete(id)} /> */}
      </div>
    </div>
  );
}
