import { SideNav } from '../components'
import styles from './Layout.module.css';

export default function Layout({ children, setShow }) {

  return (
    <div className={styles.layout}>
      <SideNav setShow={setShow} />
      <div className={styles.container}>{children}</div>
    </div>
  );
}
