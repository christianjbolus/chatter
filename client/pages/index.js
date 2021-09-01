import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { verifyUser } from '../services/auth';
import { Button, Spinner } from '../components';
import { BsChatDotsFill } from '@react-icons/all-files/bs/BsChatDotsFill';
import styles from '../styles/Landing.module.css';

export default function Landing() {
  const [user, setUser] = useState()
  const [loading, setLoading] = useState(true)
  const router = useRouter() 

  // useEffect(() => {
  //   const fetchUser = async () => {
  //     const user = await verifyUser()
  //     setUser(user)
  //     setLoading(false)
  //   }
  //   fetchUser()
  // }, [])

  // if (user) {
  //   router.push('/chats')
  // }
  
  // if (loading) {
  //   return <Spinner />
  // }

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
