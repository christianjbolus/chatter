import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { useSession } from 'next-auth/react';
import { getOneUser, getUserChats } from '../../services/users';
import Layout from '../../layout/Layout';
import { Button, ChatList, Icon, Modal, UserMetrics } from '../../components';
import styles from '../../styles/Profile.module.css';

export default function Profile({ user }) {
  const [userChats, setUserChats] = useState([]);
  const [show, setShow] = useState(false);
  const { data: session } = useSession();
  const { currentUser } = session;
  
  const router = useRouter();

  useEffect(() => {
    const fetchUserChats = async () => {
      const res = await getUserChats(user.username);
      setUserChats(res);
    };
    fetchUserChats();
  }, []);

  return (
    <Layout setShow={setShow}>
      <Modal
        setShow={setShow}
        message="You must be logged in to use this feature"
        numBtns={1}
        btnText="Got it"
        className={show ? 'container active' : 'container'}
      />
      <div>
        <div className={styles.profile}>
          <div className={styles.nav}>
            <Button className="back" onClick={() => router.back()}>
              <Icon name="Back" className="back_arrow" />
            </Button>
          </div>
          <div className={styles.header}>
            <img
              className={styles.profile_pic}
              src={user.profile_pic ? user.profile_pic : '/defaultUser.jpg'}
              alt={user.username}
            />
            <div>
              {currentUser?.id === user?.id ? (
                <Button
                  className="btn lg invert"
                  onClick={() => router.push(`/${user.username}/profile`)}
                >
                  Edit Profile
                </Button>
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
        {currentUser ? (
          <Button className="btn round fixed new" link={'/chats/compose'}>
            <Icon name="Plus" className="btn" />
          </Button>
        ) : (
          <Button className="btn round fixed new" onClick={() => setShow(true)}>
            <Icon name="Plus" className="btn" />
          </Button>
        )}
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
