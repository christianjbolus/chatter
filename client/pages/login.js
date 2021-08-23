import { useState, useContext } from 'react';
import Link from 'next/link';
import { Button, FormInput } from '../components';
import { UserContext } from '../contexts/UserContext';
import styles from '../styles/AuthForm.module.css';

export default function Login() {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });
  const [errorMessage, setErrorMessage] = useState('');
  const { handleLogin } = useContext(UserContext);

  const { username, password } = formData;

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData(prevState => ({ ...prevState, [name]: value }));
  };

  const login = async () => {
    const data = await handleLogin(formData);
    if (data) {
      setErrorMessage(data);
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
              login();
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
              <Button classList="btn auth">Sign in</Button>
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
