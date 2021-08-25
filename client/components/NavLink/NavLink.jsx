import Link from 'link/next';
import styles from './NavLink.module.css'

export default function NavLink({
  children,
  text,
  size,
  mode,
  href,
  onClick,
  className,
}) {
  return (
    <Link href={href} onClick={onClick}>
      <a className={`${styles.group} ${styles[mode]} ${styles[size]}`}>
        {children}
        <p className={className}>{text}</p>
      </a>
    </Link>
  );
}

NavLink.defaultProps = {
  onClick: null
}
