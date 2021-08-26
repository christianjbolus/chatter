import { Button, NavLinks } from '../index';
import { BiPlus } from '@react-icons/all-files/bi/BiPlus'
import styles from './SideNav.module.css'
import icons from '../../styles/Icon.module.css'

export default function SideNav() {
  return (
    <div className={styles.container}>
      <div className={styles.nav}>
        <div className={styles.links}>
          <NavLinks
            size="lg"
            mode="light"
            icon="link_lg"
            collapsible={true}
          />
        </div>
          <Button className="btn round_sm" link="/chats/new">
            <BiPlus className={icons.btn} />
          </Button>
      </div>
    </div>
  );
}