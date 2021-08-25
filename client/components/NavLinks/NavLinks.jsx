import { useContext } from 'react';
import { UserContext } from '../../contexts/UserContext';
import { NavLink } from '../index';
import { AiOutlineLogin } from '@react-icons/all-files/ai/AiOutlineLogin'
import { BsHeart } from '@react-icons/all-files/bs/BsHeart'
import { FiPower } from '@react-icons/all-files/fi/FiPower'
import { IoPersonOutline } from '@react-icons/all-files/io5/IoPersonOutline'
import { IoPersonAddOutline } from '@react-icons/all-files/io5/IoPersonAddOutline'
import '../assets/css/components/Navs.css';

export default function NavLinks({size, mode, icon, collapsible}) {
  const {currentUser} = useContext(UserContext);
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
            className={`${collapsible ? 'collapse' : ''}`}
            >
            <AiOutlineLogin className={icon} />
          </NavLink>
          <NavLink
            text="Sign Up"
            size={size}
            mode={mode}
            to="/register"
            className={`${collapsible ? 'collapse' : ''}`}
          >
            <IoPersonAddOutline className={icon} />
          </NavLink>
        </>
      )}
    </>
  );
}