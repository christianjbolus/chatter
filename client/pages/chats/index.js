import { Button, ChatList /*TopNav*/ } from '../../components';
import { getAllChats } from '../../services/chats';
import { BiPlus } from 'react-icons/bi';
import icons from '../../styles/Icon.module.css';

export default function Chats({ allChats }) {
  return (
    <>
      {/* <TopNav location="Home" /> */}
      <ChatList allChats={allChats} />
      <Button classList="btn btn_round fixed new" link="/chats/new">
        <BiPlus className={icons.btn} />
      </Button>
    </>
  );
}

export async function getServerSideProps() {
  const allChats = await getAllChats();
  return {
    props: { allChats },
  };
}
