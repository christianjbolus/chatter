import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { useSession } from 'next-auth/react';
import Link from 'next/link';
import { getOneChat } from '../../../services/chats';
import { getAllReplies } from '../../../services/replies';
import Layout from '../../../layout/Layout';
import { Button, ChatList, Engagement, Icon, Modal } from '../../../components';
import styles from '../../../styles/Detail.module.css';

export default function ChatDetail({ chat }) {
  const [replies, setReplies] = useState(null);
  const [show, setShow] = useState(false);
  const { data: session } = useSession();
  const router = useRouter();
  const { chatId } = router.query;

  useEffect(() => {
    const fetchReplies = async () => {
      const replyData = await getAllReplies(chatId);
      setReplies(replyData);
    };
    fetchReplies();
    // eslint-disable-next-line
  }, []);

  return (
    <Layout setShow={setShow}>
      <Modal
        setShow={setShow}
        message="You must be logged in to use this feature"
        numBtns={1}
        btnText="Got it"
        className={show ? 'container active' : 'container'}
      />
      <div className={styles.container}>
        <div className={styles.nav}>
          <Button className="back" type="button" onClick={() => router.back()}>
            <Icon name="Back" className="back_arrow" />
          </Button>
        </div>
        <div className={styles.user}>
          <Link href={`/${chat.user.username}`}>
            <img
              className={styles.profile_pic}
              src={chat.user.profile_pic ? chat.user.profile_pic : '/defaultUser.jpg'}
              alt={chat.user.username}
            />
          </Link>
          <div className="chat-detail-user-indetifiers">
            <p className={styles.display_name}>{chat.user.display_name}</p>
            <p className={styles.username}>@{chat.user.username}</p>
          </div>
        </div>
        <p className={styles.content}>{chat.content}</p>
        <Engagement
          chatId={chat.id}
          userId={chat.user_id}
          replies={chat.reply_count}
          reposts={chat.repost_count}
          likes={chat.like_count}
          edit={true}
          editUrl={`/chats/${chat.id}/edit`}
        />
        <div className={styles.reply}>
          {session?.currentUser ? (
            <Button className="btn sm" link={`/chats/${chat.id}/replies/compose`}>
              Reply
            </Button>
          ) : (
            <Button className="btn sm" type="button" onClick={() => setShow(true)}>
              Reply
            </Button>
          )}
        </div>
      </div>
      <ChatList items={replies} edit={true} editUrl={`/chats/${chat.id}/replies/id`} />
      {session?.currentUser ? (
        <Button className="btn round fixed reply" link={`/chats/${chat.id}/replies/compose`}>
          <Icon name="Reply" className="btn" />
        </Button>
      ) : (
        <Button className="btn round fixed new" type="button" onClick={() => setShow(true)}>
          <Icon name="Reply" className="btn" />
        </Button>
      )}
    </Layout>
  );
}

export async function getServerSideProps(context) {
  const { chatId } = context.params;
  const chat = await getOneChat(chatId);
  return {
    props: { chat },
  };
}
