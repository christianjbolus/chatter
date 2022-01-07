import Link from 'next/link';
import styles from './NavLink.module.css';

export default function NavLink({ children, text, size, mode, href, id, onClick, className }) {
  if (href) {
    return (
      <Link href={href}>
        <a className={`${styles.group} ${styles[mode]} ${styles[size]}`} onClick={onClick} id={id}>
          {children}
          <p className={styles[className]}>{text}</p>
        </a>
      </Link>
    );
  }

  return (
    <a className={`${styles.group} ${styles[mode]} ${styles[size]}`} onClick={onClick} id={id}>
      {children}
      <p className={styles[className]}>{text}</p>
    </a>
  );
}

NavLink.defaultProps = {
  onClick: null,
};
