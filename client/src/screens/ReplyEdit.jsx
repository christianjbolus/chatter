import { useState, useEffect, useContext } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { Button, Modal, TextArea } from '../components';
import { IoArrowBackOutline, BsTrash } from 'react-icons/all';
import { UserContext } from '../contexts';
import '../assets/css/screens/ChatEdit.css';
import { deleteReply, getOneReply, putReply } from '../services/replies';

export default function ReplyEdit() {
  const [reply, setReply] = useState({
    content: '',
  });
  const [show, setShow] = useState(false);
  const currentUser = useContext(UserContext);
  const { chat_id, id } = useParams();
  const history = useHistory();

  useEffect(() => {
    const fetchReply = async () => {
      const oneReply = await getOneReply(chat_id, id);
      setReply({ content: oneReply.content });
    };
    fetchReply();
  }, []);

  const handleChange = e => {
    const { value } = e.target;
    setReply({ content: value });
  };

  const updateReply = async () => {
    await putReply(chat_id, id, reply);
    history.push(`/chats/${chat_id}`);
  };

  const removeReply = async () => {
    await deleteReply(chat_id, id);
    history.push(`/chats/${chat_id}`);
  };

  return (
    <>
      <Modal
        handleDelete={removeReply}
        setShow={setShow}
        message="Are you sure?"
        className={show ? 'modal-container active' : 'modal-container'}
      />
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
          <TextArea
            name="content"
            value={reply.content}
            handleChange={handleChange}
            rows="4"
          />
          </form>
        </div>
        <div className="chat-form-submit">
          <Button
            className={!reply.content ? "btn btn-disabled" : "btn btn-chat"}
            text="Update"
            onClick={updateReply}
            disabled={!reply.content}
          />
          <BsTrash className="chat-delete" onClick={() => setShow(true)} />
        </div>
      </div>
    </>
  );
}
