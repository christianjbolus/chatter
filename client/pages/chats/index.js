import { Link } from 'next/link';
import { Button, Chat, TopNav } from '../components';
import { BiPlus } from 'react-icons/all';
import '../assets/css/screens/Chats.css'

export default function Chats({ allChats }) {
  return (
    <>
      <TopNav location="Home" />
      <div className="chat-list">
        {allChats.map(chat => (
          <Chat
            chat={chat}
            user={chat.user}
            url={`/chats/${chat.id}`}
            key={chat.id}
          />
        ))}
      </div>
      <Link to="/chats/new">
        <Button className="btn btn-round fixed new">
          <BiPlus className="btn-icon" />
        </Button>
      </Link>
    </>
  );
}