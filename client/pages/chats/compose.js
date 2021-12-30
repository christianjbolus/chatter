import { useContext, useState } from 'react';
import { useRouter } from 'next/router';
import { AuthContext } from '../../contexts/AuthContext';
import { createChat } from '../../services/chats';
import Link from 'next/link';
import Layout from '../../layout/Layout';
import { Button, TextArea } from '../../components';
import { IoArrowBackOutline } from '@react-icons/all-files/io5/IoArrowBackOutline';
import styles from '../../styles/Compose.module.css';
import icons from '../../styles/Icon.module.css';
import { getSession } from 'next-auth/react';

export default function ChatCreate({ currentUser }) {
  const [chat, setChat] = useState({
    content: '',
  });
  const router = useRouter();

  const { content } = chat;

  const handleChange = e => {
    const { value } = e.target;
    setChat({ content: value });
  };

  const handleCreate = async () => {
    const res = await createChat(chat);
    router.push('/chats');
  };

  return (
    <Layout>
      <div className={styles.container}>
        <div className={styles.nav}>
          <IoArrowBackOutline className={icons.back_arrow} onClick={() => router.back()} />
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
              placeholder="What's up?"
              rows="4"
              maxLength="280"
            />
          </form>
        </div>
        <div className={styles.footer}>
          <p className={styles.counter}>{content.length}/280</p>
          <div className={styles.submit}>
            <Button
              className={!content ? 'btn disabled' : 'btn sm'}
              onClick={handleCreate}
              disabled={!content}
            >
              Chat
            </Button>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export async function getServerSideProps(context) {
  const session = await getSession({ req: context.req });
  console.log(session);
  if (!session) {
    return {
      redirect: {
        destination: '/login',
        permanent: false,
      },
    };
  }
  return {
    props: session,
  };
}
