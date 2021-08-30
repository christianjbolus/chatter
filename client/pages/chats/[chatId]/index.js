import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { getOneChat } from '../../../services/chats';
import { getAllReplies } from '../../../services/replies';
import Layout from '../../../layout/Layout';
import { Button, ChatList, Engagement } from '../../../components';
import { IoArrowBackOutline } from '@react-icons/all-files/io5/IoArrowBackOutline';
import { IoChatbubbleOutline } from '@react-icons/all-files/io5/IoChatbubbleOutline';
import styles from '../../../styles/Detail.module.css';
import icons from '../../../styles/Icon.module.css';

export default function ChatDetail({ chat }) {
  const [replies, setReplies] = useState(null);
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
    <Layout>
      <div className={styles.container}>
        <div className={styles.nav}>
          <IoArrowBackOutline
            className={icons.back_arrow}
            onClick={() => router.push('/chats')}
          />
        </div>
        <div className={styles.user}>
          <Link href={`/users/${chat.user.username}`}>
            <img
              className={styles.profile_pic}
              src={
                chat.user.profile_pic
                  ? chat.user.profile_pic
                  : '/defaultUser.jpg'
              }
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
          <Button className="btn sm" link={`/chats/${chat.id}/replies/compose`}>
            Reply
          </Button>
        </div>
      </div>
      <ChatList
        items={replies}
        edit={true}
        editUrl={`/chats/${chat.id}/replies/id`}
      />
      <Button
        className="btn round fixed reply"
        link={`/chats/${chat.id}/replies/compose`}
      >
        <IoChatbubbleOutline className={icons.btn} />
      </Button>
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
