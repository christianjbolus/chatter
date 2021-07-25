import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button, FormInput, TextArea } from '../components';
import '../assets/css/screens/AuthForm.css';

export default function Register({ handleRegister }) {
  const [formData, setFormData] = useState({
    email: '',
    username: '',
    password: '',
    display_name: '',
    profile_pic: '',
    bio: '',
  });

  const { email, username, password, display_name, profile_pic, bio } =
    formData;

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData(prevState => ({ ...prevState, [name]: value }));
  };

  return (
    <div>
      <div className="background-stripe"></div>
      <div className="form-container">
        <div className="form">
          <h2 className="form-heading">Create your Chatter account</h2>
          <form
            onSubmit={e => {
              e.preventDefault();
              handleRegister(formData);
            }}
          >
            <FormInput
              label="Email"
              name="email"
              value={email}
              handleChange={handleChange}
            />
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
            <FormInput
              label="Display name"
              name="display_name"
              value={display_name}
              handleChange={handleChange}
            />
            <FormInput
              label="Profile pic"
              name="profile_pic"
              value={profile_pic}
              handleChange={handleChange}
            />
            <TextArea
              label="Bio"
              name="bio"
              value={bio}
              rows="5"
              handleChange={handleChange}
            />
            <div className="form-submit">
              <Button className="btn btn-auth" text="Create account" />
            </div>
          </form>
          <p className="redirect-text">
            Already have an account?{' '}
            <Link className="redirect-link" to="/login">
              Sign in
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
