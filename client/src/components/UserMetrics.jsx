import '../assets/css/components/UserMetrics.css'

export default function UserMetrics() {
  return (
    <div className="user-metrics dark">
      <div className="metric-group">
        <p className="metric">Chats</p>
        <p className="metric-count">12</p>
      </div>
      <div className="metric-group">
        <p className="metric">Followers</p>
        <p className="metric-count">105</p>
      </div>
      <div className="metric-group">
        <p className="metric">Following</p>
        <p className="metric-count">89</p>
      </div>
    </div>
  );
}
