import { useState, useEffect, useContext } from 'react';
import { Link, useParams, useHistory } from 'react-router-dom';
import { getOneUser } from '../services/users';
import { Button, Chat, UserMetrics } from '../components';
import { AuthContext } from '../contexts';
import { BiPlus, IoArrowBackOutline } from 'react-icons/all';
import '../assets/css/screens/Profile.css';

export default function Profile({ user }) {
  const currentUser = useContext(AuthContext);
  const router = useRouter();

  return (
    <div>
      <div className="profile">
        <div className="chat-nav">
          <IoArrowBackOutline
            className="back-arrow"
            onClick={() => router.back()}
          />
        </div>
        <div className="profile-edit">
          <img
            className="profile-profile-pic"
            src={user?.profile_pic}
            alt={user?.username}
          />
          <div>
            {currentUser?.id === user?.id ? (
              <Button className="btn lg invert">Edit Profile</Button>
            ) : (
              <Button className="btn lg invert">Follow</Button>
            )}
          </div>
        </div>
        <div className="profile-user-identifiers">
          <p className="profile-display-name">{user?.display_name}</p>
          <p className="profile-username">@{user?.username}</p>
        </div>
        <p className="profile-bio">{user?.bio}</p>
        <UserMetrics user={user} mode="light" />
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
      <Link to="/chats/new">
        <Button className="btn btn-round fixed new">
          <BiPlus className="btn-icon" />
        </Button>
      </Link>
    </div>
  );
}

export async function getServerSideProps(context) {
  const { username } = context.params;
  const user = await getOneUser(username);
  return {
    props: {
      user,
    },
  };
}
