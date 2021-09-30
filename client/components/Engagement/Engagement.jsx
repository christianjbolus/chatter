import { useContext } from 'react';
import { useRouter } from 'next/router';
import { AuthContext } from '../../contexts/AuthContext';
import { IoChatbubbleOutline } from '@react-icons/all-files/io5/IoChatbubbleOutline';
import { AiOutlineRedo } from '@react-icons/all-files/ai/AiOutlineRedo';
import { BsHeart } from '@react-icons/all-files/bs/BsHeart';
import { formatUrl } from '../../utils/helpers';
import { FiEdit } from '@react-icons/all-files/fi/FiEdit';
import styles from './Engagement.module.css';
import icons from '../../styles/Icon.module.css';

export default function Engagement({
  chatId,
  userId,
  replies,
  reposts,
  likes,
  edit,
  editUrl,
}) {
  const { currentUser } = useContext(AuthContext);
  const router = useRouter();

  return (
    <div className={styles.container}>
      <div className={styles.group}>
        <IoChatbubbleOutline
          className={icons.engagement}
          // onClick={() => router.push(`/chats/${chatId}/replies/compose`)}
        />
        <p className={styles.metric}>{replies}</p>
      </div>
      <div className={styles.group}>
        <AiOutlineRedo className={icons.engagement} />
        <p className={styles.metric}>{reposts}</p>
      </div>
      <div className={styles.group}>
        <BsHeart className={icons.engagement} />
        <p className={styles.metric}>{likes}</p>
      </div>
      {currentUser?.id === userId && edit ? (
        <FiEdit
          className={icons.edit}
          onClick={() => router.push(formatUrl(editUrl, chatId))}
        />
      ) : (
        <></>
      )}
    </div>
  );
}
