import { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { UserContext } from '../contexts';
import {
  IoChatbubbleOutline,
  AiOutlineRedo,
  BsHeart,
  // BsHeartFill,
  FiEdit,
} from 'react-icons/all';
import '../assets/css/components/Engagement.css'

export default function Engagement({
  chatId,
  userId,
  replies,
  reposts,
  likes,
}) {
  const currentUser = useContext(UserContext);
  const history = useHistory();

  return (
    <div className="engagement-container">
      <div className="engagement-group">
        <IoChatbubbleOutline
          className="engagement-icon"
          onClick={() => history.push(`/chats/${chatId}/replies/new`)}
        />
        <p className="engagement-metric">{replies}</p>
      </div>
      <div className="engagement-group">
        <AiOutlineRedo className="engagement-icon" />
        <p className="engagement-metric">{reposts}</p>
      </div>
      <div className="engagement-group">
        <BsHeart className="engagement-icon" />
        <p className="engagement-metric">{likes}</p>
      </div>
      {currentUser?.id === userId ? (
        <FiEdit
          className="edit-icon"
          onClick={() => history.push(`/chats/${chatId}/edit`)}
        />
      ) : (
        <></>
      )}
    </div>
  );
}
