import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Chat } from '../components';
import { BiPlus } from 'react-icons/all';

export default function Chats({ allChats }) {
  return (
    <>
      <div className="chat-list">
        {allChats.map(chat => (
          <Chat key={chat.id} chat={chat} url={`/chats/${chat.id}`} />
        ))}
      </div>
      <Link to="/chats/new">
        <Button className="btn btn-round">
          <BiPlus className="btn-icon" />
        </Button>
      </Link>
    </>
  );
}
