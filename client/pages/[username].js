import { useState, useEffect, useContext } from 'react';
import { useRouter } from 'next/router';
import { getOneUser, getUserChats } from '../services/users';
import Layout from '../layout/Layout';
import { Button, ChatList, UserMetrics } from '../components';
import { AuthContext } from '../contexts/AuthContext';
import { BiPlus } from '@react-icons/all-files/bi/BiPlus';
import { IoArrowBackOutline } from '@react-icons/all-files/io5/IoArrowBackOutline';
import styles from '../styles/Profile.module.css';
import icons from '../styles/Icon.module.css';

export default function Profile({ user }) {
  const [userChats, setUserChats] = useState([]);
  const currentUser = useContext(AuthContext);
  const router = useRouter();

  useEffect(() => {
    const fetchUserChats = async () => {
      const res = await getUserChats(user.username);
      setUserChats(res);
    };
    fetchUserChats();
  }, []);

  return (
    <Layout>
      <div>
        <div className={styles.profile}>
          <div className={styles.nav}>
            <IoArrowBackOutline
              className={icons.back_arrow}
              onClick={() => router.back()}
            />
          </div>
          <div className={styles.header}>
            <img
              className={styles.profile_pic}
              src={user.profile_pic ? user.profile_pic : '/defaultUser.jpg'}
              alt={user.username}
            />
            <div>
              {currentUser?.id === user?.id ? (
                <Button className="btn lg invert">Edit Profile</Button>
              ) : (
                <Button className="btn lg invert">Follow</Button>
              )}
            </div>
          </div>
          <div className={styles.identifiers}>
            <p className={styles.display_name}>{user.display_name}</p>
            <p className={styles.username}>@{user.username}</p>
          </div>
          <p className={styles.bio}>{user.bio}</p>
          <UserMetrics user={user} mode="light" />
        </div>
        <ChatList
          items={userChats}
          user={user}
          url="/chats/id"
          edit={true}
          editUrl="/chats/id/edit"
        />
        <Button className="btn round fixed new" link="/chats/compose">
          <BiPlus className={icons.btn} />
        </Button>
      </div>
    </Layout>
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
