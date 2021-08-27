import Link from 'next/link';
import Image from 'next/image';
import { Engagement, UserNames } from '../index';
import { formatUrl } from '../../utils/helpers'
import styles from './Chat.module.css';

export default function Chat({ chat, url, edit }) {
  const { id, content, reply_count, repost_count, like_count, user } = chat;

  const href = formatUrl(url, chat.id)

  return (
    <div className={styles.container}>
      <div className="user-img">
        <Link href={`users/${user.username}`}>
          <img
            className={styles.profile_pic}
            src={user.profile_pic}
            alt={user.username}
            // width={50}
            // height={50}
          />
        </Link>
      </div>
      <div className={styles.card}>
        <div className="chat-content">
          <Link href={`users/${user.username}`}>
            <div className={styles.identifiers}>
              <p className={styles.display_name}>{user.display_name}</p>
              <p className={styles.username}>@{user.username}</p>
            </div>
          </Link>
          <Link href={href}>
            <a className={styles.content}>{content}</a>
          </Link>
        </div>
        <Engagement
          chatId={id}
          userId={user.id}
          replies={reply_count}
          reposts={repost_count}
          likes={like_count}
          edit={edit}
        />
      </div>
    </div>
  );
}
