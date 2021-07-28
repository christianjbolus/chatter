import { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { Button, FormInput } from '../components';
import { loginUser } from '../services/auth'

export default function Login({ setCurrentUser }) {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });
  const [errorMessage, setErrorMessage] = useState('')
  const history = useHistory()

  const { username, password } = formData;

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData(prevState => ({ ...prevState, [name]: value }));
  };

  const handleLogin = async () => {
      const userData = await loginUser(formData);
      if (userData.error) {
        setErrorMessage(userData.error)
      } else {
        setCurrentUser(userData);
        history.push('/chats');
      }
  };

  return (
    <div>
      <div className="background-stripe"></div>
      <div className="form-container">
        <div className="form">
          <h2 className="form-heading">Sign in to your account</h2>
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
            <p className="error-message">{errorMessage}</p>
            <div className="form-submit">
              <Button className="btn btn-auth" text="Sign in" />
            </div>
          </form>
          <p className="redirect-text">
            Don't have an account?{' '}
            <Link className="redirect-link" to="/register">
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
