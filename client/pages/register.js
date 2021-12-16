import { useState, useEffect, useContext, useRef } from 'react';
import Link from 'next/link';
import { Button, FormInput, Password } from '../components';
import { formatErrors } from '../utils/helpers';
import styles from '../styles/AuthForm.module.scss';
import { AuthContext } from '../contexts/AuthContext';

export default function Register() {
  const [formData, setFormData] = useState({
    email: '',
    username: '',
    password: '',
    display_name: '',
    profile_pic: '',
    bio: '',
  });

  const [formErrors, setFormErrors] = useState({});

  const { register } = useContext(AuthContext);
  const inputRef = useRef();

  const { email, username, password, display_name, profile_pic, bio } = formData;

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData(prevState => ({ ...prevState, [name]: value }));
  };

  const handleRegister = async e => {
    e.preventDefault();
    const err = await register(formData);
    if (err) {
      setFormErrors({ ...formatErrors(err) });
    }
  };

  return (
    <div>
      <div className={styles.stripe}></div>
      <div className={styles.container}>
        <div className={styles.form}>
          <h2 className={styles.heading}>Create your Chatter account</h2>
          <form onSubmit={handleRegister}>
            <FormInput
              label="Email"
              name="email"
              value={email}
              ref={inputRef}
              handleChange={handleChange}
              errMessage={formErrors.email}
            />
            <FormInput
              label="Username"
              name="username"
              value={username}
              handleChange={handleChange}
              errMessage={formErrors.username}
            />
            <Password
              label="Password"
              name="password"
              data="validate"
              value={password}
              handleChange={handleChange}
              setFormErrors={setFormErrors}
            />
            <div className={styles.submit}>
              <Button className="btn auth" type="submit">Create account</Button>
            </div>
          </form>
          <p className={styles.redirect}>
            Already have an account?{' '}
            <Link href="/login">
              <a className={styles.link}>Sign in</a>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
