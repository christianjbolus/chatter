import { useState, useEffect } from 'react';
import { Button, Icon } from '../index';
import validations from '../../utils/validation';
import styles from './Password.module.scss';

export default function Password(props) {
  const [passwordMsg, setPasswordMsg] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [validPassword, setValidPassword] = useState(false);
  const [validate, setValidate] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const { label, page, name, value, data, handleChange, resetPass, setResetPass, setFormErrors } =
    props;

  useEffect(() => {
    if (data === 'validate') {
      setValidate(true);
    }
  }, []);

  const defaultMessage =
    'Your password must contain at least 8 characters and at least one letter and one number';
  const successMessage = 'Looks good!';

  const isValidPassword = password => {
    return password.length && !validations.password(password);
  };

  const validatePassword = password => {
    let message = validations.password(password);
    setPasswordError(message);
    setFormErrors(prevState => ({ ...prevState, password: message }));
  };

  const handleFocus = () => {
    if (validate) {
      if (isValidPassword(value)) {
        setPasswordMsg(successMessage);
        setValidPassword(true);
      } else {
        setPasswordMsg(defaultMessage);
        setPasswordError('');
        setValidPassword(false);
      }
    }
  };

  const handlePasswordChange = e => {
    handleChange(e);
    if (validate) {
      const { value } = e.target;
      if (isValidPassword(value)) {
        setPasswordMsg(successMessage);
        setValidPassword(true);
      } else {
        setPasswordMsg(defaultMessage);
        setValidPassword(false);
      }
    }
  };

  const handleBlur = e => {
    if (validate && !e.currentTarget.contains(e.relatedTarget)) {
      validatePassword(value);
      if (isValidPassword(value)) {
        setPasswordMsg(successMessage);
        setValidPassword(true);
      } else {
        setPasswordMsg('');
        setValidPassword(false);
      }
    }
  };

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  let passwordIcon;
  if (showPassword) {
    passwordIcon = <Icon name="Hide" className="password" />;
  } else {
    passwordIcon = <Icon name="Show" className="password" />;
  }

  let inputClass;
  if (passwordError) {
    inputClass = `${styles.error_input} ${styles.input_container}`;
  } else {
    inputClass = styles.input_container;
  }

  let passwordLabel;
  if (page === 'login') {
    passwordLabel = (
      <div className={styles.password_label}>
        Password
        <span onClick={() => setResetPass(!resetPass)}>Forgot your password?</span>
      </div>
    );
  } else {
    passwordLabel = label;
  }

  return (
    <div className={styles.container}>
      <div className={styles.form_field}>
        <label className={styles.label} htmlFor={name}>
          {passwordLabel}
        </label>
        <div className={inputClass} tabIndex={-1} onFocus={handleFocus} onBlur={handleBlur}>
          <input
            className={styles.input}
            id={name}
            type={showPassword ? 'text' : 'password'}
            name={name}
            value={value}
            data={data}
            onChange={handlePasswordChange}
          />
          {value && (
            <Button className="password_show" type="button" onClick={handleShowPassword}>
              {passwordIcon}
            </Button>
          )}
        </div>

        {passwordError && (
          <p className={styles.error}>
            <Icon name="Warning" className="error" />
            {passwordError}
          </p>
        )}
        {passwordMsg && (
          <div className={styles.message}>
            {validPassword && <Icon name="CheckMark" className="success" />}
            <p>{passwordMsg}</p>
          </div>
        )}
      </div>
    </div>
  );
}

