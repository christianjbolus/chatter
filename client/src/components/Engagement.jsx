import React from 'react';
import {
  IoChatbubbleOutline,
  AiOutlineRedo,
  BsHeart,
  FiEdit,
} from 'react-icons/all';

export default function Engagement() {
  return (
    <div className="engagement-container">
      <div>
        <IoChatbubbleOutline className="engagement-icon" />
        <p className="engaement-metric"></p>
      </div>
      <AiOutlineRedo className="engagement-icon" />
      <BsHeart className="engagement-icon" />
      <FiEdit className="engagement-icon" />
    </div>
  );
}
