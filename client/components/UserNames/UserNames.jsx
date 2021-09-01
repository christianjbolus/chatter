import React from 'react';
import styles from './UserNames.module.css'

export default function UserNames({alignment, display_name, username}) {
  return (
    <div className={styles[alignment]}>
      <p className={styles.display_name}>{display_name}</p>
      <p className={styles.username}>@{username}</p>
    </div>
  );
}
