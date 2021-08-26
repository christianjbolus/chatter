import { SideNav } from '../components'
import styles from './Layout.module.css';

export default function Layout({ children }) {

  return (
    <div className={styles.layout}>
      <SideNav />
      <div className={styles.container}>{children}</div>
    </div>
  );
}
