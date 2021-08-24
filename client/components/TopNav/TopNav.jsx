import { useState, useContext } from 'react';
import { UserContext } from '../contexts';
import { BsChatDotsFill } from 'react-icons/bs';
import '../assets/css/components/TopNav.css';
import PopoutNav from './PopoutNav';

export default function TopNav({ location }) {
  const [show, setShow] = useState(false);
  const currentUser = useContext(UserContext);
  return (
    <>
      <PopoutNav show={show} setShow={setShow} />
      <div className="navbar-container">
        <nav className="navbar">
          <div className="navbar-pic">
            <img
              className="navbar-profile-pic"
              src={currentUser?.profile_pic}
              onClick={() => setShow(true)}
              alt={currentUser?.username}
            />
          </div>
          <div className="navbar-location-container">
            <h2 className="navbar-location-text">{location}</h2>
          </div>
          <div className="navbar-logo-container">
            <BsChatDotsFill className="navbar-logo" />
          </div>
        </nav>
      </div>
    </>
  );
}