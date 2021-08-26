import { Button, NavLinks } from '../index';
import { BiPlus } from '@react-icons/all-files/bi/BiPlus'
import styles from './SideNav.module.css'
import icons from '../../styles/Icon.module.css'

export default function SideNav() {
  return (
    <div className="sidenav-container">
      <div className="sidenav">
        <div className="sidenav-links">
          <NavLinks
            size="link-lg"
            mode="link-light"
            icon="link-icon-lg"
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