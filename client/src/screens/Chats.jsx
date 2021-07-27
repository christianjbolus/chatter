import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Chat, TopNav } from '../components';
import { BiPlus } from 'react-icons/all';

export default function Chats({ allChats }) {
  return (
    <>
      {/* <TopNav location="Home" /> */}
      <div className="chat-list">
        {allChats.map(chat => (
          <Chat
            chat={chat}
            user={chat.user}
            url={`/chats/${chat.id}`}
            key={chat.id}
          />
        ))}
      </div>
      <Link to="/chats/new">
        <Button className="btn btn-round fixed">
          <BiPlus className="btn-icon" />
        </Button>
      </Link>
    </>
  );
}
