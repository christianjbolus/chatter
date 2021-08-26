import { useContext } from 'react'
import { useRouter } from 'next/router'
import { AuthContext } from '../contexts/AuthContext';
import { Button } from '../components';
import { BsChatDotsFill } from '@react-icons/all-files/bs/BsChatDotsFill';
import styles from '../styles/Landing.module.css';

export default function Landing() {
  const {currentUser} = useContext(AuthContext)
  const router = useRouter()
  
  if (currentUser) {
    router.push('/chats')
  }

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div>
          <BsChatDotsFill className={styles.logo} />
        </div>
        <h1 className={styles.message}>
          Welcome to<span className={styles.brand}>Chatter</span>
        </h1>
        <div>
          <h2 className={styles.tagline}>Broaden your</h2>
          <h2 className={styles.tagline}>mental landscape</h2>
        </div>
        <div className={styles.control}>
          <Button className="btn auth" link="/register">
            Sign Up
          </Button>
          <Button className="btn auth invert" link="/login">
            Login
          </Button>
        </div>
      </div>
    </div>
  );
}
