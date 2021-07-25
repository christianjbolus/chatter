import React from 'react';

export default function UserMetrics() {
  return (
    <div className="popout-nav-user-metrics">
      <div className="popout-nav-metric-group">
        <p className="popout-nav-metric">Chats</p>
        <p className="popout-nav-metric-count">12</p>
      </div>
      <div className="popout-nav-metric-group">
        <p className="popout-nav-metric">Followers</p>
        <p className="popout-nav-metric-count">105</p>
      </div>
      <div className="popout-nav-metric-group">
        <p className="popout-nav-metric">Following</p>
        <p className="popout-nav-metric-count">89</p>
      </div>
    </div>
  );
}
