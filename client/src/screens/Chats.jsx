import React from 'react';
import Chat from '../components/Chat';

export default function Chats({ allChats }) {
  return (
    <div>
      {allChats.map(chat => (
        <Chat chat={chat} />
      ))}
    </div>
  );
}
