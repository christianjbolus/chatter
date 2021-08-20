import styles from './ChatList.module.css'

export default function ChatList({ allChats }) {
  return (
    <div className={styles.list}>
      {allChats.map(chat => (
        <Chat
          chat={chat}
          user={chat.user}
          url={`/chats/${chat.id}`}
          key={chat.id}
        />
      ))}
    </div>
  );
}
