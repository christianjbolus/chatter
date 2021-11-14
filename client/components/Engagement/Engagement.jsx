import { useContext } from 'react';
import { useRouter } from 'next/router';
import { AuthContext } from '../../contexts/AuthContext';
import { Button, Icon } from '../index';
import { formatUrl } from '../../utils/helpers';
import styles from './Engagement.module.css';

export default function Engagement({ chatId, userId, replies, reposts, likes, edit, editUrl }) {
  const { currentUser } = useContext(AuthContext);
  const router = useRouter();

  return (
    <div className={styles.container}>
      <div className={styles.group}>
        <Icon
          name="Reply"
          className="engagement"
          // onClick={() => router.push(`/chats/${chatId}/replies/compose`)}
        />
        <p className={styles.metric}>{replies}</p>
      </div>
      <div className={styles.group}>
        <Icon name="Rechat" className="engagement" />
        <p className={styles.metric}>{reposts}</p>
      </div>
      <div className={styles.group}>
        <Icon name="Like" className="engagement" />
        <p className={styles.metric}>{likes}</p>
      </div>
      {currentUser?.id === userId && edit ? (
        <Button className="edit" onClick={() => router.push(formatUrl(editUrl, chatId))}>
          <Icon name="Edit" className="edit" />
        </Button>
      ) : (
        <></>
      )}
    </div>
  );
}
