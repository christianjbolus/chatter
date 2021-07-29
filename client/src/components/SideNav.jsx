import { Link } from 'react-router-dom';
import { Button, NavLinks } from '../components';
import {
  BiPlus,
} from 'react-icons/all';
import '../assets/css/components/Navs.css';

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
        <Link to="/chats/new">
          <Button className="btn btn-round-sm">
            <BiPlus className="btn-icon" />
          </Button>
        </Link>
      </div>
    </div>
  );
}
