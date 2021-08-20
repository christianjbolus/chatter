// import { useContext } from 'react';
// import { useHistory } from 'react-router-dom';
// import { UserContext } from '../contexts';
import {
  IoChatbubbleOutline,
  AiOutlineRedo,
  BsHeart,
  // BsHeartFill,
  FiEdit,
} from 'react-icons/all';
import styles from './Engagement.module.css'
import icons from '../../styles/Icon.module.css'

export default function Engagement({
  chatId,
  userId,
  replies,
  reposts,
  likes,
  edit
}) {
  // const currentUser = useContext(UserContext);
  // const history = useHistory();

  return (
    <div className={styles.container}>
      <div className={styles.group}>
        <IoChatbubbleOutline
          className={icons.engagement}
          // onClick={() => history.push(`/chats/${chatId}/replies/new`)}
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
      {/* {currentUser?.id === userId && edit ? (
        <FiEdit
          className={icons.edit}
          // onClick={() => history.push(`/chats/${chatId}/edit`)}
        />
      ) : (
        <></>
      )} */}
    </div>
  );
}