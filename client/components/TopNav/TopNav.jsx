import { useState, useContext } from 'react';
import { UserContext } from '../../contexts/UserContext';
import { BsChatDotsFill } from '@react-icons/all-files/bs/BsChatDotsFill';
import { PopoutNav } from '../index';
import styles from './TopNav.module.css';
import icons from '../../styles/Icon.module.css';

export default function TopNav({ location }) {
  const [show, setShow] = useState(false);
  const { currentUser } = useContext(UserContext);
  return (
    <>
      <PopoutNav show={show} setShow={setShow} currentUser={currentUser}/>
      <div className={styles.container}>
        <nav className={styles.navbar}>
          <div className={styles.pic_container}>
            <img
              className={styles.profile_pic}
              src={currentUser?.profile_pic}
              onClick={() => setShow(true)}
              alt={currentUser?.username}
            />
          </div>
          <div className={styles.location}>
            <h2 className={styles.location_text}>{location}</h2>
          </div>
          <div className={styles.logo}>
            <BsChatDotsFill className={icons.navbar} />
          </div>
        </nav>
      </div>
    </>
  );
}
