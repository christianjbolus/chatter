import { useState, useContext } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { getOneChat, updateChat, deleteChat } from '../../../services/chats';
import Layout from '../../../layout/Layout';
import { Button, Icon, Modal, TextArea } from '../../../components';
import { AuthContext } from '../../../contexts/AuthContext';
import styles from '../../../styles/Compose.module.css';

export default function ChatEdit({ oneChat }) {
  const [chat, setChat] = useState({
    content: oneChat.content,
  });
  const [show, setShow] = useState(false);
  const { currentUser } = useContext(AuthContext);
  const router = useRouter();
  const { chatId } = router.query;
  const { content } = chat;

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
    <Layout>
      <Modal
        handleDelete={handleDelete}
        setShow={setShow}
        message="Are you sure?"
        subMessage="This action can't be undone."
        className={show ? 'container active' : 'container'}
      />
      <div className={styles.container}>
        <div className={styles.nav}>
          <Button className="back" onClick={() => router.back()}>
            <Icon name="Back" className="back_arrow"/>
          </Button>
        </div>
        <div className={styles.form_group}>
          <Link href={`/users/${currentUser?.username}`}>
            <img
              className={styles.profile_pic}
              src={currentUser?.profile_pic ? currentUser?.profile_pic : '/defaultUser.jpg'}
              alt={currentUser?.username}
            />
          </Link>
          <form className={styles.form}>
            <TextArea
              className="chat"
              name="content"
              value={content}
              handleChange={handleChange}
              rows="4"
            />
          </form>
        </div>
        <div className={styles.footer}>
          <p className={styles.counter}>{chat.content.length}/280</p>
          <div className={styles.submit}>
            <Button
              className={!content ? 'btn disabled' : 'btn sm'}
              onClick={handleUpdate}
              disabled={!content}
            >
              Update
            </Button>
          </div>
          <Button className="delete" onClick={() => setShow(true)}>
            <Icon name="Delete" className="delete" />
          </Button>
        </div>
      </div>
    </Layout>
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
