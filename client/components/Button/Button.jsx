import Link from 'next/link'
import styles from './Button.module.css';
import { formatClasses } from '../../utils/helpers';

export default function Button({
  classList,
  children,
  link,
  onClick,
  disabled,
}) {
  let classes = formatClasses(classList, styles);

  if (link) {
    return (
      <Link href={link}>
        <a className={classes}>{children}</a>
      </Link>
    );
  }

  return (
    <button className={classes} onClick={onClick} disabled={disabled}>
      {children}
    </button>
  );
}

Button.defaultProps = {
  onClick: null,
  disabled: false,
};
