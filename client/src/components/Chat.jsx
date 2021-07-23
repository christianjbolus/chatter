import React from 'react';
import Engagement from './Engagement';

export default function Chat({ chat }) {
  return (
    <div className="chat-container">
      <div className="user-img">
        <img src={chat.user.profile_pic} />
      </div>
      <div className="chat-card">
        <div className="user-identifiers">
          <p className="chat-display_name">{chat.user.display_name}</p>
          <p className="chat-username">@{chat.user.username}</p>
        </div>
        <p className="chat-text">{chat.content}</p>
        <Engagement
          replies={chat.reply_count}
          reposts={chat.repost_count}
          likes={chat.like_count}
        />
      </div>
    </div>
  );
}
