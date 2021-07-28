import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { LogoutContext } from '../contexts';
import {
  AiOutlineLogin,
  BsHeart,
  FiPower,
  IoPersonOutline,
  IoPersonAddOutline
} from 'react-icons/all';
import '../assets/css/components/Navs.css'

export default function NavLinks({mode, size, currentUser}) {
  const handleLogout = useContext(LogoutContext)
  return (
    <>
      {currentUser ? (
        <>
          <Link
            className={`nav-link-group ${mode}`}
            to={`/users/${currentUser?.username}`}
          >
            <IoPersonOutline className={`nav-link-icon`} />
            <p className={`nav-link-text`}>My Profile</p>
          </Link>
          <Link
            className={`nav-link-group`}
            to={`/${currentUser?.username}/likes`}
          >
            <BsHeart className={`nav-link-icon`} />
            <p className={`nav-link-text`}>Likes</p>
          </Link>
          <Link className={`nav-link-group`} to="#" onClick={handleLogout}>
            <FiPower className={`nav-link-icon`} />
            <p className={`nav-link-text`}>Logout</p>
          </Link>
        </>
      ) : (
        <>
          <Link className={`nav-link-group`} to="/login">
            <AiOutlineLogin className={`nav-link-icon`} />
            <p className={`nav-link-text`}>Login</p>
          </Link>
          <Link className={`nav-link-group`} to="/register">
            <IoPersonAddOutline className={`nav-link-icon`} />
            <p className={`nav-link-text`}>Sign Up</p>
          </Link>
        </>
      )}
    </>
  );
}
