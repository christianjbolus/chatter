import { useState } from 'react';
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
        <Button className="btn" text="Login" />
      </form>
    </div>
  );
}
