import { Link } from 'react-router-dom';
import { Button } from '../components';
import { BsChatDotsFill } from 'react-icons/bs';
import '../assets/css/screens/Landing.css';

export default function Landing () {
  return (
    <div className="landing-container">
      <div className="landing-content">
        <div className="logo-container">
          <BsChatDotsFill className="logo" />
        </div>
        <h1 className="welcome-message">
          Welcome to<span className="brand">Chatter</span>
        </h1>
        <div>
          <h2 className="tag-line">Broaden your</h2>
          <h2 className="tag-line">mental landscape</h2>
        </div>
        <div className="landing-control">
          <Link to="/register">
            <Button className="btn btn-auth" text="Sign Up" />
          </Link>
          <Link to="/login">
            <Button className="btn-auth-invert" text="Login" />
          </Link>
        </div>
      </div>
    </div>
  );
}
