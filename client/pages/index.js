import Link  from 'next/link';
import { Button } from '../components';
import { BsChatDotsFill } from 'react-icons/bs';
import styles from '../styles/Landing.module.css'

export default function Landing () {
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
          <Link href="/register">
            <Button classList="btn btn_auth" text="Sign Up" />
          </Link>
          <Link href="/login">
            <Button classList="btn btn_auth invert" text="Login" />
          </Link>
        </div>
      </div>
    </div>
  );
}