import React from "react";

export default function WelcomePage({ user }) {
  return (
    <div className="welcome-page">
      <h2>welcome, {user.username}</h2>
      <div className="welcome-div-section">
        <div className="welcome-div">
          <a href="http://localhost:3001/run">
            <i class="fas fa-running" id="run-icon"></i>
          </a>
          run
        </div>
        <div className="welcome-div">
          <a href="http://localhost:3001/run">
            <i class="far fa-calendar-plus" id="cal-icon"></i>
          </a>
          schedule run
        </div>
        <div className="welcome-div">
          <a href="http://localhost:3001/run">
            <i class="fas fa-circle-notch" id="circle-icon"></i>
          </a>
          my circles
        </div>
        <div className="welcome-div">
          <a href="http://localhost:3001/run">
            <i class="fas fa-user-circle" id="dashboard-icon"></i>
          </a>
          dashboard
        </div>
      </div>
    </div>
  );
}
