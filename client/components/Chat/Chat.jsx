import Link from 'next/link';
import Image from 'next/image'
import { Engagement } from '../components';
import styles from './Chat.module.css';

export default function Chat({ chat, user, url }) {

  const { id, content, reply_count, repost_count, like_count } = chat;

  return (
    <div className={styles.container}>
      <div className="user-img">
        <Link href={`users/${user.username}`}>
          <Image
            className={styles.profile_pic}
            src={user.profile_pic}
            alt={user.username}
            width={50}
            height={50}
          />
        </Link>
      </div>
      <div className={styles.card}>
        <div className="chat-content">
          <Link className={styles.identifiers} href={`users/${user.username}`}>
            <p className={styles.display_name}>{user.display_name}</p>
            <p className={styles.username}>@{user.username}</p>
          </Link>
          <Link href={url}>
            <a className={styles.text}>{content}</a>
          </Link>
        </div>
        <Engagement
          chatId={id}
          userId={user.id}
          replies={reply_count}
          reposts={repost_count}
          likes={like_count}
          edit={false}
        />
      </div>
    </div>
  );
}
