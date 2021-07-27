import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { Engagement } from '../components';
import '../assets/css/components/Chat.css';

export default function Chat({ chat, user, url }) {
  const history = useHistory();

  const { id, content, reply_count, repost_count, like_count } = chat;

  return (
    <div className="chat-container">
      <div className="user-img">
        <Link to={`users/${user.username}`}>
          <img
            className="user-profile-pic"
            src={user.profile_pic}
            alt={user.username}
          />
        </Link>
      </div>
      <div className="chat-card">
        <div className="chat-content">
          <Link className="user-identifiers" to={`users/${user.username}`}>
            <p className="chat-display-name">{user.display_name}</p>
            <p className="chat-username">@{user.username}</p>
          </Link>
          <p className="chat-text" onClick={() => history.push(url)}>{content}</p>
        </div>
        <Engagement
          chatId={id}
          userId={user.id}
          replies={reply_count}
          reposts={repost_count}
          likes={like_count}
          edit={false}
        />
      </div>
    </div>
  );
}
