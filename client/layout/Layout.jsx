import { SideNav } from '../components'
import styles from './Layout.module.css';

export default function Layout({ children, handleModal }) {

  return (
    <div className={styles.layout}>
      <SideNav handleModal={handleModal} />
      <div className={styles.container}>{children}</div>
    </div>
  );
}
