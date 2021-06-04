import React from "react";
import Button from "react-bootstrap/Button";

export default function CircleCard({ circle, joinCircle }) {
  const displayCircleUsers = () => {
    return circle.users.map((user) => <li>{user.username}</li>);
  };

  return (
    <div className="circle-card">
      <p>{circle.name}</p>
      <ul>
        Runners:
        {displayCircleUsers()}
      </ul>
      {/* <button onClick={() => joinCircle(circle)}>Join</button> */}
      <Button
        variant="dark"
        id="circle-card-btn"
        onClick={() => joinCircle(circle)}
      >
        Join
      </Button>
    </div>
  );
}
