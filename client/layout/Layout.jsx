import { useContext } from 'react';
// import { SideNav } from '../components'
import { UserContext } from '../contexts/UserContext';

import styles from './Layout.module.css';

export default function Layout({ children }) {
  const { currentUser, handleLogout } = useContext(UserContext);

  return (
    <div className={styles.layout}>
      {/* <SideNav currentUser={currentUser} handleLogout={handleLogout} /> */}
      {children}
    </div>
  );
}
