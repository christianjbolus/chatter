import Link from 'next/link';
import { getSession } from 'next-auth/react';
import { Button, Icon } from '../components';
import styles from '../styles/Landing.module.css';

export default function Landing() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div>
          <Icon name="Logo" className="logo_landing" />
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
        <Link href="/chats">
          <a className={styles.link}>Continue as guest</a>
        </Link>
      </div>
    </div>
  );
}

export async function getServerSideProps(context) {
  const session = await getSession({ req: context.req });
  if (session) {
    return {
      redirect: {
        destination: '/chats',
        permanent: false,
      },
    };
  }
  return {
    props: {},
  };
}
