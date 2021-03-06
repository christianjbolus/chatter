import { useState, useEffect, useRef } from 'react';
import { signIn } from 'next-auth/react';
import Link from 'next/link';
import { Button, FormInput, Icon, Password } from '../components';
import styles from '../styles/AuthForm.module.scss';
import router from 'next/router';

export default function Login() {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });
  const [errMessage, setErrMessage] = useState('');
  const inputRef = useRef();
  const { username, password } = formData;

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData(prevState => ({ ...prevState, [name]: value }));
    setErrMessage('');
  };

  const handleLogin = async e => {
    e.preventDefault();
    const { username, password } = formData;
    const userData = await signIn('credentials', {
      redirect: false,
      username,
      password,
    });
    if (userData.error) {
      setErrMessage(userData.error);
    } else {
      router.push('/chats');
    }
  };

  return (
    <div>
      <div className={styles.stripe}></div>
      <div className={styles.container}>
        <div className={styles.form}>
          <h2 className={styles.heading}>Sign in to your account</h2>
          <form onSubmit={handleLogin}>
            <FormInput
              label="Username"
              name="username"
              value={username}
              ref={inputRef}
              handleChange={handleChange}
            />
            <Password
              label="Password"
              name="password"
              value={password}
              handleChange={handleChange}
            />
            <div className={styles.error_container}>
              {errMessage && (
                <p className={styles.error}>
                  <Icon name="Warning" className="error" />
                  {errMessage}
                </p>
              )}
            </div>
            <div className={styles.submit}>
              <Button className="btn auth">Sign in</Button>
            </div>
          </form>
          <p className={styles.redirect}>
            Don&apos;t have an account?{' '}
            <Link href="/register">
              <a className={styles.link}>Sign up</a>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
