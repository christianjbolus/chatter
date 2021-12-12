import { useState, useEffect, useContext, useRef } from 'react';
import Link from 'next/link';
import { Button, FormInput, TextArea } from '../components';
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

  const [errors, setErrors] = useState({});

  const { register } = useContext(AuthContext);
  const inputRef = useRef();

  const { email, username, password, display_name, profile_pic, bio } =
    formData;

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData(prevState => ({ ...prevState, [name]: value }));
  };

  const handleRegister = async () => {
    const err = await register(formData);
    if (err) {
      setErrors({ ...formatErrors(err) });
    }
  };

  return (
    <div>
      <div className={styles.stripe}></div>
      <div className={styles.container}>
        <div className={styles.form}>
          <h2 className={styles.heading}>Create your Chatter account</h2>
          <form
            onSubmit={e => {
              e.preventDefault();
              handleRegister();
            }}
          >
            <FormInput
              label="Email"
              name="email"
              value={email}
              ref={inputRef}
              handleChange={handleChange}
              errMessage={errors.email}
            />
            <FormInput
              label="Username"
              name="username"
              value={username}
              handleChange={handleChange}
              errMessage={errors.username}
            />
            <FormInput
              type="password"
              label="Password"
              name="password"
              value={password}
              handleChange={handleChange}
              errMessage={errors.password}
            />
            {/* <FormInput
              label="Display name"
              name="display_name"
              value={display_name}
              handleChange={handleChange}
              errMessage={errors.display_name}
            />
            <FormInput
              label="Profile pic"
              name="profile_pic"
              value={profile_pic}
              handleChange={handleChange}
              placeholder="Optional"
            />
            <TextArea
              className="auth"
              label="Bio"
              name="bio"
              value={bio}
              rows="5"
              maxLength="160"
              handleChange={handleChange}
              placeholder="Optional"
            /> */}
            <div className={styles.submit}>
              <Button className="btn auth">Create account</Button>
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
