import React from 'react';
import { useHistory } from 'react-router-dom';
import { Engagement } from '../components';
import '../assets/css/components/Chat.css';

export default function Chat({ chat, url }) {
  const history = useHistory();

  const { user, id, content, reply_count, repost_count, like_count } = chat;

  return (
    <div className="chat-container">
      <div className="user-img">
        <img className="user-profile-pic" src={user.profile_pic} />
      </div>
      <div
        className="chat-card"
        onClick={() => history.push(url)}
      >
        <div className="chat-content">
          <div className="user-identifiers">
            <p className="chat-display-name">{user.display_name}</p>
            <p className="chat-username">@{user.username}</p>
          </div>
          <p className="chat-text">{content}</p>
        </div>
        <Engagement
          chatId={id}
          replies={reply_count}
          reposts={repost_count}
          likes={like_count}
        />
      </div>
    </div>
  );
}
