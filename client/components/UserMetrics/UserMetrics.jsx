import styles from './UserMetrics.module.css'

export default function UserMetrics({user, mode}) {

  return (
    <div className={`${styles.user_metrics} ${styles[mode]}`}>
      <div className={styles.group}>
        <p className={styles.metric}>Chats</p>
        <p className={styles.count}>{user?.chat_count}</p>
      </div>
      <div className={styles.group}>
        <p className={styles.metric}>Followers</p>
        <p className={styles.count}>{user?.follower_count}</p>
      </div>
      <div className={styles.group}>
        <p className={styles.metric}>Following</p>
        <p className={styles.count}>{user?.following_count}</p>
      </div>
    </div>
  );
}