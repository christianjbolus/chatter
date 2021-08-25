import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { getOneChat } from '../../../services/chats';
import { getAllReplies } from '../../../services/replies';
import { Button, Chat, Engagement } from '../../../components';
import { IoArrowBackOutline } from '@react-icons/all-files/io5/IoArrowBackOutline'
import { IoChatbubbleOutline  } from '@react-icons/all-files/io5/IoChatbubbleOutline'

import styles from '../../../styles/Detail.module.css';
//! Look at this file
// import { icons } from '@react-icons/all-files/lib';

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
    <>
      <div className="chat-detail-container">
        <div className="chat-nav">
          <IoArrowBackOutline
            className="back-arrow"
            onClick={() => router.push('/chats')}
          />
        </div>
        <div className="chat-detail-user">
          <Link href={`/users/${chat.user.username}`}>
            <img
              className="chat-detail-user-profile-pic"
              src={chat.user.profile_pic}
              alt={chat.user.username}
            />
          </Link>
          <div className="chat-detail-user-indetifiers">
            <p className="chat-detail-display-name">{chat.user.display_name}</p>
            <p className="chat-detail-username">@{chat.user.username}</p>
          </div>
        </div>
        <p className="chat-detail-text">{chat.content}</p>
        <Engagement
          chatId={chat.id}
          userId={chat.user_id}
          replies={chat.reply_count}
          reposts={chat.repost_count}
          likes={chat.like_count}
          edit={true}
        />
        <div className="reply-button">
          <Button className="btn sm" link={`/chats/${chat.id}/replies/new`}>
            Reply
          </Button>
        </div>
      </div>
      <div className="chat-list">
        {replies?.map(reply => (
          <Chat
            chat={reply}
            user={reply.user}
            key={reply.id}
            url={`/chats/${chatId}/replies/${reply.id}`}
          />
        ))}
      </div>
      <Button
        className="btn round fixed reply"
        link={`/chats/${chat.id}/replies/new`}
      >
        <IoChatbubbleOutline className={icons.btn} />
      </Button>
    </>
  );
}

export async function getServerSideProps(context) {
  const { id } = context.params;
  const chat = await getOneChat(id);
  return {
    props: { chat },
  };
}
