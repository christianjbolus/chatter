import { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthContext';
import { Icon, NavLink } from '../index';

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
          <Icon name="Login" className={icon} />
        </NavLink>
        <NavLink
          text="Sign Up"
          size={size}
          mode={mode}
          href="/register"
          className={`${collapsible ? 'collapse' : ''}`}
        >
          <Icon name="SignUp" className={icon} />
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
        <Icon name="Profile" className={icon} />
      </NavLink>
      <NavLink
        text="Likes"
        size={size}
        mode={mode}
        href={`/${currentUser?.username}/likes`}
        className={`${collapsible ? 'collapse' : ''}`}
      >
        <Icon name="Like" className={icon} />
      </NavLink>
      <NavLink
        text="Logout"
        size={size}
        mode={mode}
        href="#"
        onClick={logout}
        className={`${collapsible ? 'collapse' : ''}`}
      >
        <Icon name="Logout" className={icon} />
      </NavLink>
    </>
  );
}
