import './UserMetrics.module.css'

export default function UserMetrics({user, mode}) {

  return (
    <div className={`user-metrics ${mode}`}>
      <div className="metric-group">
        <p className="metric">Chats</p>
        <p className="metric-count">{user?.chat_count}</p>
      </div>
      <div className="metric-group">
        <p className="metric">Followers</p>
        <p className="metric-count">{user?.follower_count}</p>
      </div>
      <div className="metric-group">
        <p className="metric">Following</p>
        <p className="metric-count">{user?.following_count}</p>
      </div>
    </div>
  );
}