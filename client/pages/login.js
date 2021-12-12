import { useState, useEffect, useContext, useRef } from 'react';
import Link from 'next/link';
import { Button, FormInput, Icon } from '../components';
import { AuthContext } from '../contexts/AuthContext';
import styles from '../styles/AuthForm.module.scss';

export default function Login() {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });
  const [errMessage, setErrMessage] = useState('');
  const { login } = useContext(AuthContext);
  const inputRef = useRef();
  const { username, password } = formData;

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData(prevState => ({ ...prevState, [name]: value }));
  };

  const handleLogin = async () => {
    const err = await login(formData);
    if (err) {
      setErrMessage(err);
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
              ref={inputRef}
              handleChange={handleChange}
            />
            <FormInput
              type="password"
              label="Password"
              name="password"
              value={password}
              handleChange={handleChange}
            />
            <div className={styles.error_container}>
              {errMessage && (
                <p className={styles.error}>
                  <Icon name="Warning" className="error"/>
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
