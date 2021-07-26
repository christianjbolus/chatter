import { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { getOneUser } from '../services/users';
import { Button, UserMetrics } from '../components';
import { UserContext } from '../contexts';
import '../assets/css/screens/Profile.css'

export default function Profile() {
  const [user, setUser] = useState({});
  const currentUser = useContext(UserContext);
  const {username} = useParams();

  useEffect(() => {
    const fetchUser = async () => {
      const [oneUser] = await getOneUser(username);
      setUser(oneUser);
    };
    fetchUser();
  }, []);

  return (
    <div className="profile">
      <div className="header-img"></div>
      <div className="profile-edit">
        <img className="profile-profile-pic" src={user.profile_pic} />
        {currentUser?.id === user.id ? (
          <Button text="Edit Profile" />
        ) : (
          <Button text="Follow" />
        )}
      </div>
      <div className="profile-user-identifiers">
          <p>{user.display_name}</p>
          <p>@{user.username}</p>
      </div>
      <p className="bio">{user.bio}</p>
      <UserMetrics className="light" />
    </div>
  );
}
