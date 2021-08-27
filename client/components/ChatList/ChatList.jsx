import { Chat } from '../index'
import styles from './ChatList.module.css'

export default function ChatList({ items, url, edit }) {
  return (
    <div className={styles.list}>
      {items?.map(item => (
        <Chat
          chat={item}
          url={url}
          edit={edit}
          key={item.id}
        />
      ))}
    </div>
  );
}
