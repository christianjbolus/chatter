import Link from 'next/link';
import Image from 'next/image';
import { Engagement, UserNames } from '../index';
import { formatUrl } from '../../utils/helpers';
import styles from './Chat.module.css';

export default function Chat({ chat, user, url, edit, editUrl }) {
  const { id, content, reply_count, repost_count, like_count } = chat;

  const href = formatUrl(url, chat.id);

  return (
    <div className={styles.container}>
      <div className="user-img">
        <Link href={`/${user.username}`}>
          <img
            className={styles.profile_pic}
            src={user?.profile_pic ? user?.profile_pic : 'defaultUser.jpg'}
            alt={user.username}
            // width={50}
            // height={50}
          />
        </Link>
      </div>
      <div className={styles.card}>
        <div className="chat-content">
          <Link href={`/${user.username}`}>
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
          editUrl={editUrl}
        />
      </div>
    </div>
  );
}
