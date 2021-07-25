import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../contexts/UserContext';
import Button from './Button';
import { BiPlus, IoClose } from 'react-icons/all';
import '../assets/css/components/PopoutNav.css';

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
          <div className="popout-nav-user-metrics">
            <div className="popout-nav-metric-group">
              <p className="popout-nav-metric">Chats</p>
              <p className="popout-nav-metric-count">12</p>
            </div>
            <div className="popout-nav-metric-group">
              <p className="popout-nav-metric">Followers</p>
              <p className="popout-nav-metric-count">105</p>
            </div>
            <div className="popout-nav-metric-group">
              <p className="popout-nav-metric">Following</p>
              <p className="popout-nav-metric-count">89</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
