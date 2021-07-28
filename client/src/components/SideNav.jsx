import { Link } from 'react-router-dom';
import { Button } from '../components';
import {
  AiOutlineLogin,
  BiPlus,
  BsHeart,
  FiPower,
  IoPersonOutline,
  IoPersonAddOutline,
} from 'react-icons/all';
import '../assets/css/components/SideNav.css';

export default function SideNav({ currentUser, handleLogout }) {
  return (
    <div className="sidenav-container">
      <div className="sidenav">
        <div className="sidenav-links">
          {currentUser ? (
            <>
              <Link
                className="sidenav-link-group"
                to={`/users/${currentUser?.username}`}
              >
                <IoPersonOutline className="sidenav-link-icon" />
                <p className="sidenav-link-text">My Profile</p>
              </Link>
              <Link className="sidenav-link-group">
                <BsHeart className="sidenav-link-icon" />
                <p className="sidenav-link-text">Likes</p>
              </Link>
              <Link className="sidenav-link-group" onClick={handleLogout}>
                <FiPower className="sidenav-link-icon" />
                <p className="sidenav-link-text">Logout</p>
              </Link>
            </>
          ) : (
            <>
              <Link className="sidenav-link-group">
                <AiOutlineLogin className="sidenav-link-icon" />
                <p className="sidenav-link-text">Login</p>
              </Link>
              <Link className="sidenav-link-group" onClick={handleLogout}>
                <IoPersonAddOutline className="sidenav-link-icon" />
                <p className="sidenav-link-text">Sign Up</p>
              </Link>
            </>
          )}
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
