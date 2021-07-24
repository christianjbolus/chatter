import { useState, useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { getOneChat } from '../services/chats';
import { getAllReplies } from '../services/replies';
import { Engagement, Chat } from '../components';
import { IoArrowBackOutline } from 'react-icons/all';

import '../assets/css/screens/ChatDetail.css';

export default function ChatDetail() {
  const [chat, setChat] = useState(null);
  const [replies, setReplies] = useState(null);
  const { id } = useParams();
  const history = useHistory()

  useEffect(() => {
    const fetchChat = async () => {
      const chatData = await getOneChat(id);
      setChat(chatData);
    };
    const fetchReplies = async () => {
      const replyData = await getAllReplies(id);
      setReplies(replyData);
    };
    fetchChat();
    fetchReplies();
  }, []);

  return (
    <>
      <div className="chat-detail-container">
        <div className="chat-nav">
          <IoArrowBackOutline className="back-arrow" onClick={() => history.push('/chats')}/>
        </div>
        <div className="chat-detail-user">
          <img
            className="chat-detail-user-profile-pic"
            src={chat?.user.profile_pic}
          />
          <div className="chat-detail-user-indetifiers">
            <p className="chat-detail-display-name">{chat?.user.display_name}</p>
            <p className="chat-detail-username">@{chat?.user.username}</p>
          </div>
        </div>
        <p className="chat-detail-text">{chat?.content}</p>
        <Engagement
          chatId={chat?.id}
          replies={chat?.reply_count}
          reposts={chat?.repost_count}
          likes={chat?.like_count}
        />
      </div>
      <div className="chat-list">
        {replies?.map(reply => (
          <Chat chat={reply} key={reply.id} />
        ))}
      </div>
    </>
  );
}
