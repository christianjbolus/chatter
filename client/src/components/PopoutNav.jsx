import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../contexts/UserContext';
import Button from './Button';
import { BiPlus, IoClose } from 'react-icons/all';
import '../assets/css/components/PopoutNav.css';
import UserMetrics from './UserMetrics';

export default function PopoutNav() {
  const currentUser = useContext(UserContext);

  return (
    <div className="popout-nav-container">
      <div className="popout-nav">
        <div className="popout-nav-header">
          <IoClose className="popout-nav-close" />
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
      </div>
    </div>
  );
}
