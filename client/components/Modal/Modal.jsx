import {Button} from '../index';
import { formatClasses } from '../../utils/helpers'
import styles from './Modal.module.css'

export default function Modal({ className, message, subMessage, setShow, handleDelete }) {
  
  const classes = formatClasses(className, styles)

  return (
    <div className={classes}>
      <div className={styles.modal}>
        <p className={styles.message}>{message}</p>
        <p className={styles.sub_message}>{subMessage}</p>
        <div className={styles.control}>
          <Button className="btn lg cancel" text="Cancel" onClick={() => setShow(false)} />
          <Button className="btn lg" text="Delete" onClick={handleDelete} />
        </div>
      </div>
    </div>
  );
}