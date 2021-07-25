import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button, FormInput } from '../components';

export default function Login({ handleLogin }) {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });

  const { username, password } = formData;

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData(prevState => ({ ...prevState, [name]: value }));
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
              handleLogin(formData);
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
