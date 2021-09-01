import { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthContext';
import { NavLink } from '../index';
import { AiOutlineLogin } from '@react-icons/all-files/ai/AiOutlineLogin';
import { BsHeart } from '@react-icons/all-files/bs/BsHeart';
import { FiPower } from '@react-icons/all-files/fi/FiPower';
import { IoPersonOutline } from '@react-icons/all-files/io5/IoPersonOutline';
import { IoPersonAddOutline } from '@react-icons/all-files/io5/IoPersonAddOutline';
import icons from '../../styles/Icon.module.css';

export default function NavLinks({ size, mode, icon, collapsible }) {
  const { currentUser, logout } = useContext(AuthContext);

  if (!currentUser) {
    return (
      <>
        <NavLink
          text="Login"
          size={size}
          mode={mode}
          href="/login"
          className={`${collapsible ? 'collapse' : ''}`}
        >
          <AiOutlineLogin className={icons[icon]} />
        </NavLink>
        <NavLink
          text="Sign Up"
          size={size}
          mode={mode}
          href="/register"
          className={`${collapsible ? 'collapse' : ''}`}
        >
          <IoPersonAddOutline className={icons[icon]} />
        </NavLink>
      </>
    );
  }
  
  return (
    <>
      <NavLink
        text="My Profile"
        size={size}
        mode={mode}
        href={`/${currentUser?.username}`}
        className={`${collapsible ? 'collapse' : ''}`}
      >
        <IoPersonOutline className={icons[icon]} />
      </NavLink>
      <NavLink
        text="Likes"
        size={size}
        mode={mode}
        href={`/${currentUser?.username}/likes`}
        className={`${collapsible ? 'collapse' : ''}`}
      >
        <BsHeart className={icons[icon]} />
      </NavLink>
      <NavLink
        text="Logout"
        size={size}
        mode={mode}
        href="#"
        onClick={logout}
        className={`${collapsible ? 'collapse' : ''}`}
      >
        <FiPower className={icons[icon]} />
      </NavLink>
    </>
  );
}
