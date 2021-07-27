import { useState, useEffect, useContext } from 'react';
import { Link, useParams, useHistory } from 'react-router-dom';
import { getOneUser } from '../services/users';
import { Button, Chat, UserMetrics } from '../components';
import { UserContext } from '../contexts';
import { IoArrowBackOutline } from 'react-icons/io5';
import '../assets/css/screens/Profile.css';

export default function Profile() {
  const [user, setUser] = useState({});
  const currentUser = useContext(UserContext);
  const { username } = useParams();
  const history = useHistory();

  useEffect(() => {
    const fetchUser = async () => {
      const oneUser = await getOneUser(username);
      setUser(oneUser);
    };
    fetchUser();
  }, [username]);

  return (
    <>
      <div className="profile">
        <div className="chat-nav">
          <IoArrowBackOutline
            className="back-arrow"
            onClick={() => history.push('/chats')}
          />
        </div>
        <div className="header-img"></div>
        <div className="profile-edit">
          <img className="profile-profile-pic" src={user?.profile_pic} />
          <div>
            {currentUser?.id === user?.id ? (
              <Button className="btn btn-lg invert" text="Edit Profile" />
            ) : (
              <Button className="btn btn-lg invert" text="Follow" />
            )}
          </div>
        </div>
        <div className="profile-user-identifiers">
          <p className="profile-display-name">{user?.display_name}</p>
          <p className="profile-username">@{user?.username}</p>
        </div>
        <p className="profile-bio">{user?.bio}</p>
        <UserMetrics user={user} mode="light" />
        {/* <div className="chat-categories">
          <Link className="category active">Chats</Link>
          <Link className="category">Likes</Link>
        </div> */}
      </div>
      <div className="chat-list">
        {user?.chats?.map(chat => (
          <Chat
            chat={chat}
            user={user}
            key={chat.id}
            url={`/chats/${chat.id}`}
          />
        ))}
      </div>
    </>
  );
}
