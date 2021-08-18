import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Button, FormInput } from '../components';
import { loginUser } from '../services/auth';
import styles from '../styles/AuthForm.module.css';

export default function Login({ setCurrentUser }) {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });
  const [errorMessage, setErrorMessage] = useState('');
  const router = useRouter();

  const { username, password } = formData;

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData(prevState => ({ ...prevState, [name]: value }));
  };

  const handleLogin = async () => {
    const userData = await loginUser(formData);
    if (userData.error) {
      setErrorMessage(userData.error);
    } else {
      setCurrentUser(userData);
      router.push('/chats');
    }
  };

  return (
    <div>
      <div className={styles.stripe}></div>
      <div className={styles.container}>
        <div className={styles.form}>
          <h2 className={styles.heading}>Sign in to your account</h2>
          <form
            onSubmit={e => {
              e.preventDefault();
              handleLogin();
            }}
          >
            <FormInput
              label="Username"
              name="username"
              value={username}
              handleChange={handleChange}
            />
            <FormInput
              type="password"
              label="Password"
              name="password"
              value={password}
              handleChange={handleChange}
            />
            <p className={styles.error}>{errorMessage}</p>
            <div className={styles.submit}>
              <Button classList="btn btn_auth" text="Sign in" />
            </div>
          </form>
          <p className={styles.redirect}>
            Don't have an account?{' '}
            <Link href="/register">
              <a className={styles.link}>Sign up</a>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
