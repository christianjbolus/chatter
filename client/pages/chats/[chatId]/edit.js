import { useState, useContext } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { getOneChat, updateChat, deleteChat } from '../../../services/chats';
import { Button, Modal, TextArea } from '../../../components';
import { IoArrowBackOutline } from '@react-icons/all-files/io5/IoArrowBackOutline';
import { BsTrash } from '@react-icons/all-files/bs/BsTrash';
import { AuthContext } from '../../../contexts/AuthContext';
import styles from '../../../styles/Compose.module.css';
import icons from '../../../styles/Icon.module.css';

export default function ChatEdit({ oneChat }) {
  const [chat, setChat] = useState({
    content: oneChat.content,
  });
  const [show, setShow] = useState(false);
  const { currentUser } = useContext(AuthContext);
  const router = useRouter();
  const { chatId } = router.query;

  const handleChange = e => {
    const { value } = e.target;
    setChat({ content: value });
  };

  const handleUpdate = async () => {
    const res = await updateChat(chatId, chat);
    router.push(`/chats/${chatId}`);
  };

  const handleDelete = async () => {
    await deleteChat(chatId);
    router.push('/chats');
  };

  return (
    <>
      <Modal
        handleDelete={handleDelete}
        setShow={setShow}
        message="Are you sure?"
        subMessage="This action can't be undone."
        className={show ? 'container active' : 'container'}
      />
      <div className={styles.container}>
        <div className={styles.nav}>
          <IoArrowBackOutline
            className={icons.back_arrow}
            onClick={() => router.back()}
          />
        </div>
        <div className={styles.form_group}>
          <Link href={`/users/${currentUser?.username}`}>
            <img
              className={styles.profile_pic}
              src={currentUser?.profile_pic}
              alt={currentUser?.username}
            />
          </Link>
          <form className={styles.form}>
            <TextArea
              name="content"
              value={chat.content}
              handleChange={handleChange}
              rows="4"
            />
          </form>
        </div>
        <div className={styles.footer}>
          <p className={styles.counter}>{chat.content.length}/280</p>
          <div className={styles.submit}>
            <Button
              className={!chat.content ? 'btn disabled' : 'btn small'}
              text="Update"
              onClick={handleUpdate}
              disabled={!chat.content}
            />
          </div>
          <BsTrash className={icons.delete} onClick={() => setShow(true)} />
        </div>
      </div>
    </>
  );
}

export async function getServerSideProps(context) {
  const { chatId } = context.params;
  const oneChat = await getOneChat(chatId);
  return {
    props: {
      oneChat,
    },
  };
}
