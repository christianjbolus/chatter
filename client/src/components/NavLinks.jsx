import { useContext } from 'react';
import { LogoutContext, UserContext } from '../contexts';
import { NavLink } from '../components';
import {
  AiOutlineLogin,
  BsHeart,
  FiPower,
  IoPersonOutline,
  IoPersonAddOutline,
} from 'react-icons/all';
import '../assets/css/components/Navs.css';

export default function NavLinks({size, mode, icon, collapsible}) {
  const currentUser = useContext(UserContext);
  const handleLogout = useContext(LogoutContext);
  return (
    <>
      {currentUser ? (
        <>
          <NavLink
            text="My Profile"
            size={size}
            mode={mode}
            to={`/users/${currentUser?.username}`}
            className={`${collapsible ? 'collapse' : ''}`}
          >
            <IoPersonOutline className={icon} />
          </NavLink>
          <NavLink
            text="Likes"
            size={size}
            mode={mode}
            to={`/${currentUser?.username}/likes`}
            className={`${collapsible ? 'collapse' : ''}`}
          >
            <BsHeart className={icon} />
          </NavLink>
          <NavLink
            text="Logout"
            size={size}
            mode={mode}
            to="#"
            onClick={handleLogout}
            className={`${collapsible ? 'collapse' : ''}`}
          >
            <FiPower className={icon} />
          </NavLink>
        </>
      ) : (
        <>
          <NavLink 
            text="Login" 
            size={size} 
            mode={mode} 
            to="/login"
            className={`${collapsible ? 'collapsible' : ''}`}
            >
            <AiOutlineLogin className={icon} />
          </NavLink>
          <NavLink
            text="Sign Up"
            size={size}
            mode={mode}
            to="/register"
            className={`${collapsible ? 'collapsible' : ''}`}
          >
            <IoPersonAddOutline className={icon} />
          </NavLink>
        </>
      )}
    </>
  );
}
