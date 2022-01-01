import { useState } from 'react';
import { useSession } from 'next-auth/react';
import { Icon, PopoutNav } from '../index';
import styles from './TopNav.module.css';

export default function TopNav({ location }) {
  const [show, setShow] = useState(false);
  const { data: session } = useSession();
  return (
    <>
      <PopoutNav show={show} setShow={setShow} currentUser={session?.currentUser} />
      <div className={styles.container}>
        <nav className={styles.navbar}>
          <div className={styles.pic_container}>
            <img
              className={styles.profile_pic}
              src={
                session?.currentUser.profile_pic
                  ? session?.currentUser.profile_pic
                  : '/defaultUser.jpg'
              }
              onClick={() => setShow(true)}
              alt={session?.currentUser.username}
            />
          </div>
          <div className={styles.location}>
            <h2 className={styles.location_text}>{location}</h2>
          </div>
          <div className={styles.logo}>
            <Icon name="Logo" className="logo_nav" />
          </div>
        </nav>
      </div>
    </>
  );
}
