import { Link } from 'react-router-dom';

export default function NavLink({
  children,
  text,
  size,
  mode,
  to,
  onClick,
}) {
  return (
    <Link className={`nav-link-group ${mode} ${size}`} to={to} onClick={onClick}>
      {children}
      <p>{text}</p>
    </Link>
  );
}
