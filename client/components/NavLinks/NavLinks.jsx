import { useSession, signOut } from 'next-auth/react';
import { Icon, NavLink } from '../index';

export default function NavLinks({ size, mode, icon, collapsible, handleModal }) {
  const { data: session } = useSession();

  if (!session?.currentUser) {
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
        href={`/${session?.currentUser.username}`}
        className={`${collapsible ? 'collapse' : ''}`}
      >
        <Icon name="Profile" className={icon} />
      </NavLink>
      <NavLink
        text="Likes"
        size={size}
        mode={mode}
        id="likes"
        onClick={handleModal}
        className={`${collapsible ? 'collapse' : ''}`}
      >
        <Icon name="Like" className={icon} />
      </NavLink>
      <NavLink
        text="Logout"
        size={size}
        mode={mode}
        href="#"
        onClick={() => signOut({ callbackUrl: 'http://localhost:3001/' })}
        className={`${collapsible ? 'collapse' : ''}`}
      >
        <Icon name="Logout" className={icon} />
      </NavLink>
    </>
  );
}
