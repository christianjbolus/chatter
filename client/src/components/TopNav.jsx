import { useState, useContext } from 'react';
import { UserContext } from '../contexts';
import { BsChatDotsFill } from 'react-icons/bs';
import PopoutNav from './PopoutNav';
import defaultUser from '../assets/imgs/defaultUser.jpg'
import '../assets/css/components/Navs.css';

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
              src={currentUser?.profile_pic ? currentUser?.profile_pic : defaultUser}
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
