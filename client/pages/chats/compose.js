import { useState } from 'react';
import { useRouter } from 'next/router';
import { getSession } from 'next-auth/react';
import { createChat } from '../../services/chats';
import Link from 'next/link';
import Layout from '../../layout/Layout';
import { Button, Icon, TextArea } from '../../components';
import styles from '../../styles/Compose.module.css';

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
          <Button className="back" type="button" onClick={() => router.back()}>
            <Icon name="Back" className="back_arrow" />
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
              className={!content ? 'btn sm disabled' : 'btn sm'}
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
