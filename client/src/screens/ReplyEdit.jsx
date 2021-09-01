import { useState, useEffect, useContext } from 'react';
import { Link, useHistory, useParams } from 'react-router-dom';
import { Button, Modal, TextArea } from '../components';
import { IoArrowBackOutline, BsTrash } from 'react-icons/all';
import { UserContext } from '../contexts';
import { deleteReply, getOneReply, putReply } from '../services/replies';
import defaultUser from '../assets/imgs/defaultUser.jpg'
import '../assets/css/screens/ChatEdit.css';

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
    // eslint-disable-next-line
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
        subMessage="This action can't be undone."
        className={show ? 'modal-container active' : 'modal-container'}
      />
      <div className="chat-detail-container">
        <div className="chat-nav">
          <IoArrowBackOutline
            className="back-arrow"
            onClick={() => history.goBack()}
          />
        </div>
        <div className="chat-form-group">
          <Link className="user-img" to={`/users/${currentUser.username}`}>
            <img
              className="user-profile-pic"
              src={currentUser?.profile_pic ? currentUser.profile_pic : defaultUser}
              alt={currentUser?.username}
            />
          </Link>
          <form className="chat-form">
            <TextArea
              name="content"
              value={reply.content}
              handleChange={handleChange}
              rows="4"
            />
          </form>
        </div>
        <div className="chat-form-footer">
          <p className="character-counter">{reply.content.length}/280</p>
          <div className="chat-form-submit">
            <Button
              className={!reply.content ? 'btn btn-disabled' : 'btn btn-chat'}
              text="Update"
              onClick={updateReply}
              disabled={!reply.content}
            />
          </div>
          <BsTrash className="chat-delete" onClick={() => setShow(true)} />
        </div>
      </div>
    </>
  );
}
