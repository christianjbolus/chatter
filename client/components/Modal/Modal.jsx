import { Button } from '../index';
import { formatClasses } from '../../utils/helpers';
import styles from './Modal.module.css';

export default function Modal({
  className,
  message,
  subMessage,
  numBtns,
  btnText,
  setShow,
  handleDelete,
}) {
  const classes = formatClasses(className, styles);

  return (
    <div className={classes}>
      <div className={styles.modal}>
        <p className={styles.message}>{message}</p>
        <p className={styles.sub_message}>{subMessage}</p>
        <div className={styles.control}>
          {numBtns === 1 ? (
            <Button className="btn lg" onClick={handleDelete}>
              {btnText}
            </Button>
          ) : (
            <>
              <Button className="btn lg cancel" onClick={() => setShow(false)}>
                {btnText[1]}
              </Button>
              <Button className="btn lg" onClick={handleDelete}>
                {btnText[0]}
              </Button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
