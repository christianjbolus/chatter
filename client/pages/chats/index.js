import { useState, useEffect, useContext } from 'react';
import Layout from '../../layout/Layout';
import { Button, ChatList, DevModal, TopNav } from '../../components';
import { getAllChats } from '../../services/chats';
import { AuthContext } from '../../contexts/AuthContext';
import { BiPlus } from '@react-icons/all-files/bi/BiPlus';
import icons from '../../styles/Icon.module.css';

export default function Chats() {
  const [allChats, setAllChats] = useState([]);
  const [show, setShow] = useState(false);
  const { currentUser } = useContext(AuthContext);

  useEffect(() => {
    const fetchChats = async () => {
      const res = await getAllChats();
      setAllChats(res);
    };
    fetchChats();
  }, []);

  return (
    <Layout setShow={setShow}>
      <DevModal
        setShow={setShow}
        message="You must be logged in to use this feature"
        className={show ? 'container active' : 'container'}
      />
      <TopNav location="Chatter" />
      <ChatList items={allChats} url="/chats/id" />
      {currentUser ? (
        <Button className="btn round fixed new" link={'/chats/compose'}>
          <BiPlus className={icons.btn} />
        </Button>
      ) : (
        <Button className="btn round fixed new" onClick={() => setShow(true)}>
          <BiPlus className={icons.btn} />
        </Button>
      )}
    </Layout>
  );
}
