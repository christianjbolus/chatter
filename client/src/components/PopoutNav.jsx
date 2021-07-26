import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { LogoutContext, UserContext } from '../contexts';
import Button from './Button';
import { BiPlus, BsFillPersonFill, FiPower, FaHeart, IoClose } from 'react-icons/all';
import '../assets/css/components/PopoutNav.css';
import UserMetrics from './UserMetrics';

export default function PopoutNav({show, setShow}) {
  const currentUser = useContext(UserContext);
  const handleLogout = useContext(LogoutContext)

  return (
    <div className={show ? "popout-nav-container show" : "popout-nav-container"}>
      <div className="popout-nav">
        <div className="popout-nav-header">
          <IoClose className="popout-nav-close" onClick={() => setShow(false)}/>
          <h2 className="popout-nav-header-text">Chatter</h2>
        </div>
        <div className="popout-nav-user-profile">
          <div className="popout-nav-user-container">
            <div className="popout-nav-user">
              <img
                className="popout-nav-profile-pic"
                src={currentUser?.profile_pic}
              />
              <div className="popout-nav-user-identifiers">
                <p className="popout-nav-display-name">
                  {currentUser?.display_name}
                </p>
                <p className="popout-nav-username">@{currentUser?.username}</p>
              </div>
            </div>
            <Link to="/chats/new">
              <Button className="btn btn-round-sm">
                <BiPlus className="btn-icon-sm" />
              </Button>
            </Link>
          </div>
          <UserMetrics />
        </div>
        <div className="popout-nav-links">
          <Link className="link-group" to={`/${currentUser?.username}`}>
            <BsFillPersonFill className="nav-link-icon"/>
            <p className="nav-link-text">My Profile</p>
          </Link>
          <Link className="link-group" to={`/${currentUser?.username}/likes`}>
            <FaHeart className="nav-link-icon"/>
            <p className="nav-link-text">Likes</p>
          </Link>
          <Link className="link-group" to="#" onClick={handleLogout}>
            <FiPower className="nav-link-icon"/>
            <p className="nav-link-text">Logout</p>
          </Link>
        </div>
      </div>
    </div>
  );
}
