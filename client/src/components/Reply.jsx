import React from 'react';
import {Engagement} from '../components';

export default function Reply({ reply }) {

  const { user, content } = reply;

  return (
    <div className="chat-container">
      <div className="user-img">
        <img className="user-profile-pic" src={user.profile_pic} />
      </div>
      <div className="chat-card" >
        <div className="chat-content">
          <div className="user-identifiers">
            <p className="chat-display_name">{user.display_name}</p>
            <p className="chat-username">@{user.username}</p>
          </div>
          <p className="chat-text">{content}</p>
        </div>
        <Engagement />
      </div>
    </div>
  );
}