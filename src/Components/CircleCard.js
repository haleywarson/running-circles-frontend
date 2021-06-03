import React from "react";

export default function CircleCard({ circle, joinCircle, circles }) {
  const displayCircleUsers = () =>
    circle.users.map((user) => {
      <li>{user.username}</li>;
    });

  return (
    <div className="circle-card">
      <p>{circle.name}</p>
      <ul>
        Runners:
        {displayCircleUsers()}
      </ul>
      <button onClick={() => joinCircle(circle)}>Join</button>
    </div>
  );
}
