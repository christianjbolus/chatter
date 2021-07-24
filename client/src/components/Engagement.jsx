import React from 'react';
import {
  IoChatbubbleOutline,
  AiOutlineRedo,
  BsHeart,
  FiEdit,
} from 'react-icons/all';

export default function Engagement({ replies, reposts, likes }) {
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
      <FiEdit className="engagement-icon" />
    </div>
  );
}
