import React from 'react';
import { useHistory } from 'react-router-dom'
import {
  IoChatbubbleOutline,
  AiOutlineRedo,
  BsHeart,
  FiEdit,
} from 'react-icons/all';

export default function Engagement({chatId, replies, reposts, likes }) {

  const history = useHistory()

  return (
    <div className="engagement-container">
      <div className="engagement-group">
        <IoChatbubbleOutline className="engagement-icon" />
        <p className="engaement-metric">{replies}</p>
      </div>
      <div className="engagement-group">
        <AiOutlineRedo className="engagement-icon" />
        <p className="engaement-metric">{reposts}</p>
      </div>
      <div className="engagement-group">
        <BsHeart className="engagement-icon" />
        <p className="engaement-metric">{likes}</p>
      </div>
      <FiEdit className="engagement-icon" onClick={() => history.push(`/chats/${chatId}/edit`)}/>
    </div>
  );
}
