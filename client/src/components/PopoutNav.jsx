import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { LogoutContext, UserContext } from '../contexts';
import { Button, NavLink } from './index';
import {
  AiOutlineLogin,
  BiPlus,
  BsHeart,
  FiPower,
  IoClose,
  IoPersonOutline,
  IoPersonAddOutline,
} from 'react-icons/all';
import '../assets/css/components/PopoutNav.css';
import UserMetrics from './UserMetrics';

export default function PopoutNav({ show, setShow }) {
  const currentUser = useContext(UserContext);
  const handleLogout = useContext(LogoutContext);

  return (
    <div
      className={show ? 'popout-nav-container show' : 'popout-nav-container'}
    >
      <div className="popout-nav">
        <div className="popout-nav-header">
          <IoClose
            className="popout-nav-close"
            onClick={() => setShow(false)}
          />
          <h2 className="popout-nav-header-text">Chatter</h2>
        </div>
        {currentUser && (
          <div className="popout-nav-user-profile">
            <div className="popout-nav-user-container">
              <Link
                to={`/users/${currentUser?.username}`}
                className="popout-nav-user"
              >
                <img
                  className="popout-nav-profile-pic"
                  src={currentUser?.profile_pic}
                  alt={currentUser?.username}
                />
                <div className="popout-nav-user-identifiers">
                  <p className="popout-nav-display-name">
                    {currentUser?.display_name}
                  </p>
                  <p className="popout-nav-username">
                    @{currentUser?.username}
                  </p>
                </div>
              </Link>
              <Link to="/chats/new">
                <Button className="btn btn-round-sm">
                  <BiPlus className="btn-icon-sm" />
                </Button>
              </Link>
            </div>
            <UserMetrics user={currentUser} mode="dark" />
          </div>
        )}
        <div className="popout-nav-links">
          {currentUser ? (
            <>
              <NavLink
                text="My Profile"
                size="link-sm"
                mode="link-dark"
                to={`/users/${currentUser?.username}`}
              >
                <IoPersonOutline className="link-icon-sm" />
              </NavLink>
              <NavLink
                text="Likes"
                size="link-sm"
                mode="link-dark"
                to={`/${currentUser?.username}/likes`}
              >
                <BsHeart className="link-icon-sm" />
              </NavLink>
              <NavLink
                text="Logout"
                size="link-sm"
                mode="link-dark"
                onClick={handleLogout}
              >
                <FiPower className="link-icon-sm" />
              </NavLink>
            </>
          ) : (
            <>
              <NavLink
                text="Login"
                size="link-sm"
                mode="link-dark"
                to="/login"
              >
                <AiOutlineLogin className="link-icon-sm" />
              </NavLink>
              <NavLink
                text="Sign Up"
                size="link-sm"
                mode="link-dark"
                to="/register"
              >
                <IoPersonAddOutline className="link-icon-sm" />
              </NavLink>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
