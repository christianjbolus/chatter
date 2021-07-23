import React from 'react';

export default function Chats({ allChats }) {
  return (
    <div>
      {allChats.map(chat => (
        <>
          <p>{chat.user.display_name}</p>
          <p>{chat.user.username}</p>
          <p>{chat.content}</p>
        </>
      ))}
    </div>
  );
}
