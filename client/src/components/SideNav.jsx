import { Link } from 'react-router-dom';
import { Button } from '../components';
import { BiPlus, BsFillPersonFill, FaHeart, FiPower } from 'react-icons/all';
import '../assets/css/components/SideNav.css';

export default function SideNav({ currentUser, handleLogout }) {
  return (
    <div className="sidenav-container">
      <div className="sidenav">
        <div className="sidenav-links">
          <Link
            className="sidenav-link-group"
            to={`/users/${currentUser?.username}`}
          >
            <BsFillPersonFill className="sidenav-link-icon" />
            <p className="sidenav-link-text">My Profile</p>
          </Link>
          <Link className="sidenav-link-group">
            <FaHeart className="sidenav-link-icon" />
            <p className="sidenav-link-text">Likes</p>
          </Link>
          <Link className="sidenav-link-group" onClick={handleLogout}>
            <FiPower className="sidenav-link-icon" />
            <p className="sidenav-link-text">Logout</p>
          </Link>
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
