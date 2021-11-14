import { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthContext';
import { Button, Icon, NavLinks } from '../index';
import styles from './SideNav.module.css';

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
            <Icon name="Plus" className="btn_sm" />
          </Button>
        ) : (
          <Button className="btn round_sm" onClick={() => setShow(true)}>
            <Icon name="Plus" className="btn_sm" />
          </Button>
        )}
      </div>
    </div>
  );
}
