import { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthContext';
import { Button, NavLinks } from '../index';
import { BiPlus } from '@react-icons/all-files/bi/BiPlus';
import styles from './SideNav.module.css';
import icons from '../../styles/Icon.module.css';

export default function SideNav({ setShow }) {
  const { currentUser } = useContext(AuthContext);
  return (
    <div className={styles.container}>
      <div className={styles.nav}>
        <div className={styles.links}>
          <NavLinks size="lg" mode="light" icon="link_lg" collapsible={true} />
        </div>
        {currentUser ? (
          <Button className="btn round_sm" link={'/chats/compose'}>
            <BiPlus className={icons.btn_sm} />
          </Button>
        ) : (
          <Button className="btn round_sm" onClick={() => setShow(true)}>
            <BiPlus className={icons.btn_sm} />
          </Button>
        )}
      </div>
    </div>
  );
}
