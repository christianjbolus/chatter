import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import { Button, Icon } from '../index';
import { formatUrl } from '../../utils/helpers';
import styles from './Engagement.module.css';

export default function Engagement({ chatId, userId, replies, reposts, likes, edit, editUrl }) {
  const {data: session} = useSession();
  const router = useRouter();

  return (
    <div className={styles.container}>
      <div className={styles.group}>
        <Button className="engagement">
          <Icon
            name="Reply"
            className="engagement"
            // onClick={() => router.push(`/chats/${chatId}/replies/compose`)}
          />
        </Button>
        <p className={styles.metric}>{replies}</p>
      </div>
      <div className={styles.group}>
        <Button className="engagement">
          <Icon name="Rechat" className="engagement" />
        </Button>
        <p className={styles.metric}>{reposts}</p>
      </div>
      <div className={styles.group}>
        <Icon name="Like" className="engagement" />
        <p className={styles.metric}>{likes}</p>
      </div>
      {session?.currentUser.id === userId && edit ? (
        <Button className="edit" onClick={() => router.push(formatUrl(editUrl, chatId))}>
          <Icon name="Edit" className="edit" />
        </Button>
      ) : (
        <></>
      )}
    </div>
  );
}
