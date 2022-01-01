import { useState, useEffect, useRef } from 'react';
import { registerUser } from '../services/auth';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { Button, FormInput, Password } from '../components';
import validations from '../utils/validation';
import { formatErrors } from '../utils/helpers';
import styles from '../styles/AuthForm.module.scss';

export default function Register() {
  const [formData, setFormData] = useState({
    email: '',
    username: '',
    password: '',
  });
  const [formErrors, setFormErrors] = useState({});
  const [isCompleted, setIsCompleted] = useState(false);

  const inputRef = useRef();

  const router = useRouter();

  const { email, username, password } = formData;

  // Auto focus first input field
  useEffect(() => {
    inputRef.current.focus();
  }, []);

  // Activate button when all fields are filled and no errors
  useEffect(() => {
    if (validations.validateAll(formData) && !validations.hasEmptyField(formData)) {
      setIsCompleted(true);
    } else {
      setIsCompleted(false);
    }
  }, [formData, formErrors]);

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData(prevState => ({ ...prevState, [name]: value }));
    setFormErrors(prevState => ({ ...prevState, [name]: '' }));
  };

  // Dynamically call appropriate validation function based on input name
  // and set error message
  const handleValidation = e => {
    const { name, value } = e.target;
    let message = validations[name](value);
    setFormErrors(prevState => ({ ...prevState, [name]: message }));
  };

  const handleRegister = async e => {
    e.preventDefault();
    const userData = await registerUser(formData);
    if (userData.error) {
      setFormErrors({ ...formatErrors(userData.error) });
    } else {
      await signIn('credentials', {
        redirect: false,
        username: formData.username,
        password: formData.password,
      });
      router.push(`/${formData.username}/profile`);
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
              validation={handleValidation}
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
              validation={handleValidation}
              setFormErrors={setFormErrors}
            />
            <div className={styles.submit}>
              <Button
                className={isCompleted ? 'btn auth' : 'btn auth disabled'}
                disabled={!isCompleted}
              >
                Create account
              </Button>
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
