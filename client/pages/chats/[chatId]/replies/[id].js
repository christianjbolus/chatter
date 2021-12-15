import { useState, useContext } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { getOneReply, updateReply, deleteReply } from '../../../../services/replies';
import Layout from '../../../../layout/Layout';
import { Button, Modal, Icon, TextArea } from '../../../../components';
import { AuthContext } from '../../../../contexts/AuthContext';
import styles from '../../../../styles/Compose.module.css';

export default function ChatEdit({ oneReply }) {
  const [reply, setReply] = useState({
    content: oneReply.content,
  });
  const [show, setShow] = useState(false);
  const { currentUser } = useContext(AuthContext);
  const router = useRouter();
  const { chatId, id } = router.query;

  const handleChange = e => {
    const { value } = e.target;
    setReply({ content: value });
  };

  const handleUpdate = async () => {
    const res = await updateReply(chatId, id, reply);
    router.push(`/chats/${chatId}`);
  };

  const handleDelete = async () => {
    await deleteReply(chatId, id);
    router.push('/chats');
  };

  return (
    <Layout>
      <Modal
        handleDelete={handleDelete}
        setShow={setShow}
        message="Are you sure?"
        subMessage="This action can't be undone."
        numBtns={2}
        btnText={['Delete', 'Cancel']}
        className={show ? 'container active' : 'container'}
      />
      <div className={styles.container}>
        <div className={styles.nav}>
          <Button className="back" onClick={() => router.back()}>
            <Icon name="Back" className="back_arrow" />
          </Button>
        </div>
        <div className={styles.form_group}>
          <Link href={`/users/${currentUser?.username}`}>
            <img
              className={styles.profile_pic}
              src={currentUser?.profile_pic ? currentUser.profile_pic : '/defaultUser.jpg'}
              alt={currentUser?.username}
            />
          </Link>
          <form className={styles.form}>
            <TextArea
              className="chat"
              name="content"
              value={reply.content}
              handleChange={handleChange}
              rows="4"
            />
          </form>
        </div>
        <div className={styles.footer}>
          <p className={styles.counter}>{reply.content.length}/280</p>
          <div className={styles.submit}>
            <Button
              className={!reply.content ? 'btn disabled' : 'btn sm'}
              onClick={handleUpdate}
              disabled={!reply.content}
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
  const { chatId, id } = context.params;
  const oneReply = await getOneReply(chatId, id);
  return {
    props: {
      oneReply,
    },
  };
}
