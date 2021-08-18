import styles from './Button.module.css';
import { formatClasses } from '../../utils/helpers';

export default function Button({
  classList,
  text,
  children,
  onClick,
  disabled,
}) {
  let classes = formatClasses(classList, styles);

  return (
    <button className={classes} onClick={onClick} disabled={disabled}>
      {text}
      {children}
    </button>
  );
}

Button.defaultProps = {
  onClick: null,
  disabled: false,
};
