import { Link } from 'react-router-dom'
import { Button } from '../components'
import { BiPlus, BsFillPersonFill, FaHeart, FiPower } from 'react-icons/all'
import '../assets/css/components/SideNav.css'

export default function SideNav() {
  return (
    <div className="sidenav-container">
      <div className="sidenav">
        <div className="sidenav-links">
          <BsFillPersonFill className="sidenav-icon" />
          <FaHeart className="sidenav-icon" />
          <FiPower className="sidenav-icon" />
        </div>
        <Link to="/chats/new">
          <Button className="btn btn-round-sm">
            <BiPlus className="btn-icon" />
          </Button>
        </Link>
      </div>
    </div>
  );
}
