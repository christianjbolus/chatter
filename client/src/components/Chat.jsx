import React from 'react';
import { useHistory } from 'react-router-dom';
import Engagement from './Engagement';

export default function Chat({ chat }) {
  const history = useHistory();
  return (
    <div className="chat-container">
      <div className="user-img">
        <img className="user-profile-pic" src={chat.user.profile_pic} />
      </div>
      <div className="chat-card" onClick={history.push(`/chats/${chat.id}`)}>
        <div className="chat-content">
          <div className="user-identifiers">
            <p className="chat-display_name">{chat.user.display_name}</p>
            <p className="chat-username">@{chat.user.username}</p>
          </div>
          <p className="chat-text">{chat.content}</p>
        </div>
        <Engagement
          replies={chat.reply_count}
          reposts={chat.repost_count}
          likes={chat.like_count}
        />
      </div>
    </div>
  );
}
