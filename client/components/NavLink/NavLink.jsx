import Link from 'link/next';

export default function NavLink({
  children,
  text,
  size,
  mode,
  to,
  onClick,
  className
}) {
  return (
    <Link className={`nav-link-group ${mode} ${size}`} to={to} onClick={onClick}>
      {children}
      <p className={className}>{text}</p>
    </Link>
  );
}