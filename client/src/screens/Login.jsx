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
        <h2>Sign in to your account</h2>
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
          <Button className="btn btn-auth" text="Sign in" />
        </form>
        <p>
          Don't have an account? <Link to="/register">Sign up</Link>
        </p>
      </div>
    </div>
  );
}
