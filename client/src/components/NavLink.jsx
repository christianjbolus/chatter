import { Link } from 'react-router-dom';

export default function NavLink({
  children,
  text,
  textClass,
  size,
  mode,
  to,
  onClick,
}) {
  return (
    <Link className={`nav-link-group ${mode} ${size}`} to={to} onClick={onClick}>
      {children}
      <p className={`nav-link-text ${textClass}`}>{text}</p>
    </Link>
  );
}
