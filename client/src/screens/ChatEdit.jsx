import { useState, useEffect, useContext } from 'react';
import { Link, useHistory, useParams } from 'react-router-dom';
import { Button, Modal, TextArea } from '../components';
import { IoArrowBackOutline, BsTrash } from 'react-icons/all';
import { UserContext } from '../contexts';
import defaultUser from '../assets/imgs/defaultUser.jpg'
import '../assets/css/screens/ChatEdit.css';

export default function ChatEdit({ allChats, handleUpdate, handleDelete }) {
  const [chat, setChat] = useState({
    content: '',
  });
  const [show, setShow] = useState(false);
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
    // eslint-disable-next-line
  }, []);

  const handleChange = e => {
    const { value } = e.target;
    setChat({ content: value });
  };

  const removeChat = () => {
    handleDelete(id);
  };

  return (
    <>
      <Modal
        handleDelete={removeChat}
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
          <Link className="user-img" to={`/users/${currentUser?.username}`}>
            <img
              className="user-profile-pic"
              src={currentUser?.profile_pic ? currentUser.profile_pic : defaultUser}
              alt={currentUser?.username}
            />
          </Link>
          <form className="chat-form">
            <TextArea
              name="content"
              value={chat.content}
              handleChange={handleChange}
              rows="4"
            />
          </form>
        </div>
        <div className="chat-form-footer">
        <p className="character-counter">{chat.content.length}/280</p>
        <div className="chat-form-submit">
          <Button
            className={!chat.content ? 'btn btn-disabled' : 'btn btn-chat'}
            text="Update"
            onClick={() => handleUpdate(id, chat)}
            disabled={!chat.content}
          />
        </div>
          <BsTrash className="chat-delete" onClick={() => setShow(true)} />
      </div>
      </div>
    </>
  );
}