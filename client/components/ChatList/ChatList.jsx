import { Chat } from '../index'
import styles from './ChatList.module.css'

export default function ChatList({ items, url, edit, editUrl }) {
  return (
    <div className={styles.list}>
      {items?.map(item => (
        <Chat
          chat={item}
          url={url}
          edit={edit}
          editUrl={editUrl}
          key={item.id}
        />
      ))}
    </div>
  );
}
