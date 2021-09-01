import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../contexts';
import { Button, NavLinks } from './index';
import { BiPlus, IoClose } from 'react-icons/all';
import UserMetrics from './UserMetrics';
import defaultUser from '../assets/imgs/defaultUser.jpg'
import '../assets/css/components/Navs.css';

export default function PopoutNav({ show, setShow }) {
  const currentUser = useContext(UserContext);

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
                  src={currentUser?.profile_pic ? currentUser?.profile_pic : defaultUser}
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
          <NavLinks
            size="link-sm"
            mode="link-dark"
            icon="link-icon-sm"
            collapsible={false}
          />
        </div>
      </div>
    </div>
  );
}
