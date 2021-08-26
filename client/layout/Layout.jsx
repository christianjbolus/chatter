import { useContext } from 'react';
// import { SideNav } from '../components'
import { AuthContext } from '../contexts/AuthContext';

import styles from './Layout.module.css';

export default function Layout({ children }) {
  const { currentUser, handleLogout } = useContext(AuthContext);

  return (
    <div className={styles.layout}>
      {/* <SideNav currentUser={currentUser} handleLogout={handleLogout} /> */}
      <div className={styles.container}>{children}</div>
    </div>
  );
}
