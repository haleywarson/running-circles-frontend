import React from "react";

export default function WelcomePage({ user }) {
  return (
    <div className="welcome-page">
      <h2>welcome, {user.username}</h2>
      <div className="welcome-div-section">
        <div className="welcome-div">Run</div>
        <div className="welcome-div">Profile</div>
        <div className="welcome-div">dafs</div>
        <div className="welcome-div">asdf</div>
      </div>
    </div>
  );
}
