import Layout from '../../layout/Layout'
import { Button, ChatList, TopNav } from '../../components';
import { getAllChats } from '../../services/chats';
import { BiPlus } from '@react-icons/all-files/bi/BiPlus';
import icons from '../../styles/Icon.module.css';

export default function Chats({ allChats }) {
  return (
    <Layout>
      <TopNav location="Home" />
      <ChatList allChats={allChats} />
      <Button className="btn round fixed new" link="/chats/compose">
        <BiPlus className={icons.btn} />
      </Button>
    </Layout>
  );
}


export async function getServerSideProps() {
  const allChats = await getAllChats();
  return {
    props: { allChats },
  };
}
