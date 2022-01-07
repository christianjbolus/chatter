import { useSession } from 'next-auth/react';
import { Button, Icon, NavLinks } from '../index';
import styles from './SideNav.module.css';

export default function SideNav({ handleModal }) {
  const { data: session } = useSession();
  return (
    <div className={styles.container}>
      <div className={styles.nav}>
        <div className={styles.links}>
          <NavLinks
            size="lg"
            mode="light"
            icon="link_lg"
            collapsible={true}
            handleModal={handleModal}
          />
        </div>
        {session?.currentUser ? (
          <Button className="btn round_sm" type="button" link={'/chats/compose'}>
            <Icon name="Plus" className="btn_sm" />
          </Button>
        ) : (
          <Button className="btn round_sm" type="button" onClick={handleModal}>
            <Icon name="Plus" className="btn_sm" />
          </Button>
        )}
      </div>
    </div>
  );
}
