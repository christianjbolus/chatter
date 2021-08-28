import { Chat, Spinner } from '../index'
import styles from './ChatList.module.css'

export default function ChatList({ items, user, url, edit, editUrl }) {
  if (!items) {
    return <Spinner />
  }
  
  return (
    <div className={styles.list}>
      {items?.map(item => (
        <Chat
          chat={item}
          user={user || item.user}
          url={url}
          edit={edit}
          editUrl={editUrl}
          key={item.id}
        />
      ))}
    </div>
  );
}
