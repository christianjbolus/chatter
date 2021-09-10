import { Button } from '../index';
import { formatClasses } from '../../utils/helpers';
import styles from './DevModal.module.css';

export default function DevModal({
  className,
  message,
  subMessage,
  setShow,
}) {
  const classes = formatClasses(className, styles);

  return (
    <div className={classes}>
      <div className={styles.modal}>
        <p className={styles.message}>{message}</p>
        <p className={styles.sub_message}>{subMessage}</p>
        <div className={styles.control}>
          <Button className="btn lg" onClick={() => setShow(false)}>
            Got it
          </Button>
        </div>
      </div>
    </div>
  );
}