import { useState, useEffect, useContext } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { Button, Modal, TextArea } from '../components';
import { IoArrowBackOutline, BsTrash } from 'react-icons/all';
import { UserContext } from '../contexts';
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
  }, []);

  const handleChange = e => {
    const { value } = e.target;
    setChat({ content: value });
  };

  const removeChat = () => {
    handleDelete(id)
  }

  return (
    <>
      <Modal
        handleDelete={removeChat}
        setShow={setShow}
        message="Are you sure?"
        className={show ? 'modal-container active' : 'modal-container'}
      />
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
            value={chat.content}
            handleChange={handleChange}
            rows="4"
          />
          </form>
        </div>
        <div className="chat-form-submit">
          <Button
            className={!chat.content ? "btn btn-disabled" : "btn btn-chat"}
            text="Update"
            onClick={() => handleUpdate(id, chat)}
            disabled={!chat.content}
          />
          <BsTrash className="chat-delete" onClick={() => setShow(true)} />
        </div>
      </div>
    </>
  );
}
