import { useState, useEffect } from 'react';
import { useSession } from 'next-auth/react';
import Layout from '../../layout/Layout';
import { Button, ChatList, Icon, Modal, TopNav } from '../../components';
import { getAllChats } from '../../services/chats';

export default function Chats() {
  const [allChats, setAllChats] = useState([]);
  const [show, setShow] = useState(false);
  const [modalMsg, setModalMsg] = useState('');
  const { data: session } = useSession();

  useEffect(() => {
    const fetchChats = async () => {
      const res = await getAllChats();
      setAllChats(res);
    };
    fetchChats();
  }, []);

  const handleModal = e => {
    if (e.currentTarget.id === 'likes') {
      setModalMsg('This feature is still in development');
      setShow(true);
    } else {
      setModalMsg('You must be logged in to use this feature');
      setShow(true);
    }
  };

  return (
    <Layout handleModal={handleModal}>
      <Modal
        setShow={setShow}
        message={modalMsg}
        numBtns={1}
        btnText="Got it"
        className={show ? 'container active' : 'container'}
      />
      <TopNav location="Chatter" />
      <ChatList items={allChats} url="/chats/id" />
      {session?.currentUser ? (
        <Button className="btn round fixed new" link={'/chats/compose'}>
          <Icon name="Plus" className="btn" />
        </Button>
      ) : (
        <Button className="btn round fixed new" type="button" onClick={handleModal}>
          <Icon name="Plus" className="btn" />
        </Button>
      )}
    </Layout>
  );
}
