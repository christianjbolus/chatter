import { useState, useEffect } from 'react';
import { useSession } from 'next-auth/react';
import Layout from '../../layout/Layout';
import { Button, ChatList, Icon, Modal, TopNav } from '../../components';
import { getAllChats } from '../../services/chats';

export default function Chats() {
  const [allChats, setAllChats] = useState([]);
  const [show, setShow] = useState(false);
  const {data: session} = useSession();

  useEffect(() => {
    const fetchChats = async () => {
      const res = await getAllChats();
      setAllChats(res);
    };
    fetchChats();
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
      <TopNav location="Chatter" />
      <ChatList items={allChats} url="/chats/id" />
      {session?.currentUser ? (
        <Button className="btn round fixed new" link={'/chats/compose'}>
          <Icon name="Plus" className="btn" />
        </Button>
      ) : (
        <Button className="btn round fixed new" type="button" onClick={() => setShow(true)}>
          <Icon name="Plus" className="btn" />
        </Button>
      )}
    </Layout>
  );
}
