import { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { getOneUser } from '../services/users';
import { Button, Chat, UserMetrics } from '../components';
import { UserContext } from '../contexts';
import '../assets/css/screens/Profile.css';

export default function Profile() {
  const [user, setUser] = useState({});
  const currentUser = useContext(UserContext);
  const { username } = useParams();

  useEffect(() => {
    const fetchUser = async () => {
      const [oneUser] = await getOneUser(username);
      setUser(oneUser);
    };
    fetchUser();
  }, []);

  return (
    <>
      <div className="profile">
        <div className="header-img"></div>
        <div className="profile-edit">
          <img className="profile-profile-pic" src={user?.profile_pic} />
          <div>
            {currentUser?.id === user.id ? (
              <Button className="btn btn-auth" text="Edit Profile" />
            ) : (
              <Button className="btn btn-auth" text="Follow" />
            )}
          </div>
        </div>
        <div className="profile-user-identifiers">
          <p className="profile-display-name">{user?.display_name}</p>
          <p className="profile-username">@{user?.username}</p>
        </div>
        <p className="bio">{user?.bio}</p>
        <UserMetrics user={user} mode="light" />
      </div>
      <div className="chat-list">
        {user.chats?.map(chat => (
          <Chat chat={chat} key={chat.id} url={`/chats/${chat.id}`} />
        ))}
      </div>
    </>
  );
}
