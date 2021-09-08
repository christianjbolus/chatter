import { useState, useEffect } from 'react'
import Layout from '../../layout/Layout'
import { Button, ChatList, TopNav } from '../../components';
import { getAllChats } from '../../services/chats';
import { BiPlus } from '@react-icons/all-files/bi/BiPlus';
import icons from '../../styles/Icon.module.css';

export default function Chats() {
  const [allChats, setAllChats] = useState([])

  useEffect(() => {
    const fetchChats = async () => {
      const res = await getAllChats()
      setAllChats(res)
    }
    fetchChats()
  },[])

  return (
    <Layout>
      <TopNav location="Chatter" />
      <ChatList items={allChats} url="/chats/id"/>
      <Button className="btn round fixed new" link="/chats/compose">
        <BiPlus className={icons.btn} />
      </Button>
    </Layout>
  );
}

