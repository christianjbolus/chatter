import React from 'react';
import Button from '../components/Button';
import Chat from '../components/Chat';
import { BiPlus } from 'react-icons/all';

export default function Chats({ allChats }) {
  return (
    <>
      <div className="chats-container">
        {allChats.map(chat => (
          <Chat key={chat.id} chat={chat} />
        ))}
      </div>
      <Button className="btn btn-round">
        <BiPlus className="btn-icon" />
      </Button>
    </>
  );
}
