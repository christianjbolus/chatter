import Link from 'next/link';
import { Button, Icon, NavLinks, UserMetrics } from '../index';
import styles from './PopoutNav.module.css';

export default function PopoutNav({ show, setShow, currentUser }) {
  return (
    <div className={show ? `${styles.container} ${styles.show}` : styles.container}>
      <div className={styles.nav}>
        <div className={styles.header}>
          <Button className="close" type="button" onClick={() => setShow(false)}>
            <Icon name="Close" className="close" />
          </Button>
          <h2 className={styles.header_text}>Chatter</h2>
        </div>
        {currentUser && (
          <div className={styles.profile}>
            <div className={styles.user_container}>
              <Link href={`/${currentUser?.username}`}>
                <div className={styles.user}>
                  <img
                    className={styles.profile_pic}
                    src={currentUser?.profile_pic ? currentUser?.profile_pic : '/defaultUser.jpg'}
                    alt={currentUser?.username}
                  />
                  <div className={styles.identifiers}>
                    <p className={styles.display_name}>{currentUser?.display_name}</p>
                    <p className={styles.username}>@{currentUser?.username}</p>
                  </div>
                </div>
              </Link>
              <Button className="btn round_sm" link="chats/compose">
                <Icon name="Plus" className="btn_sm" />
              </Button>
            </div>
            <UserMetrics user={currentUser} mode="dark" />
          </div>
        )}
        <div className={styles.nav_links}>
          <NavLinks size="sm" mode="dark" icon="link_sm" collapsible={false} />
        </div>
      </div>
    </div>
  );
}
