import { Chat } from '../index'
import styles from './ChatList.module.css'

export default function ChatList({ items, url }) {
  return (
    <div className={styles.list}>
      {items.map(item => (
        <Chat
          chat={item}
          url={url}
          key={item.id}
        />
      ))}
    </div>
  );
}
