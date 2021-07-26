import { useContext } from 'react'
import { UserContext } from '../contexts';
import '../assets/css/components/UserMetrics.css'

export default function UserMetrics() {
  const currentUser = useContext(UserContext)

  return (
    <div className="user-metrics dark">
      <div className="metric-group">
        <p className="metric">Chats</p>
        <p className="metric-count">{currentUser?.chat_count}</p>
      </div>
      <div className="metric-group">
        <p className="metric">Followers</p>
        <p className="metric-count">{currentUser?.follower_count}</p>
      </div>
      <div className="metric-group">
        <p className="metric">Following</p>
        <p className="metric-count">{currentUser?.following_count}</p>
      </div>
    </div>
  );
}
