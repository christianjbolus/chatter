import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getOneChat } from '../services/chats';
import { getAllReplies } from '../services/replies'
import { Engagement, Reply } from '../components';


export default function ChatDetail() {
  const [chat, setChat] = useState(null);
  const [replies, setReplies] = useState(null)
  const { id } = useParams();
  
  useEffect(() => {
    const fetchChat = async () => {
      const chatData = await getOneChat(id);
      setChat(chatData);
    };
    const fetchReplies = async () => {
      const replyData = await getAllReplies(id)
      setReplies(replyData)
    }
    fetchChat()
    fetchReplies()
  }, []);
  
  return (
    <>
    <div className="chat-detail-container">
      <div className="chat-detail-user">
        <img src={chat?.user.profile_pic} />
        <div className="chat-detail-user-indetifiers">
          <p>{chat?.user.display_name}</p>
          <p>{chat?.user.username}</p>
        </div>
      </div>
      <p className="chat-detail-text">{chat?.content}</p>
      <Engagement
        replies={chat?.reply_count}
        reposts={chat?.repost_count}
        likes={chat?.like_count}
      />
    </div>
    <div className="replies-container">
      {replies?.map(reply => {
        <Reply reply={reply} />
      })}
    </div>
    </>
  );
}
