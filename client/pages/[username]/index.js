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
  const [modalMsg, setModalMsg] = useState('');
  const { data: session } = useSession();

  const router = useRouter();

  useEffect(() => {
    const fetchUserChats = async () => {
      const res = await getUserChats(user.username);
      setUserChats(res);
    };
    fetchUserChats();
  }, []);

  const handleModal = e => {
    if (e.currentTarget.id === 'follow') {
      setModalMsg('This feature is still in development');
      setShow(true);
    } else {
      setModalMsg('You must be logged in to use this feature');
      setShow(true);
    }
  };

  return (
    <Layout setShow={setShow}>
      <Modal
        setShow={setShow}
        message={modalMsg}
        numBtns={1}
        btnText="Got it"
        className={show ? 'container active' : 'container'}
      />
      <div>
        <div className={styles.profile}>
          <div className={styles.nav}>
            <Button className="back" type="button" onClick={() => router.back()}>
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
              {session?.currentUser.id === user?.id ? (
                <Button
                  className="btn lg invert"
                  type="button"
                  onClick={() => router.push(`/${user.username}/edit`)}
                >
                  Edit Profile
                </Button>
              ) : (
                <Button
                  className="btn lg invert"
                  type="button"
                  onClick={handleModal}
                  id="follow"
                >
                  Follow
                </Button>
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
        {session?.currentUser ? (
          <Button className="btn round fixed new" link={'/chats/compose'}>
            <Icon name="Plus" className="btn" />
          </Button>
        ) : (
          <Button className="btn round fixed new" type="button" onClick={handleModal}>
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
