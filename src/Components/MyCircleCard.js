import React from "react";
import Button from "react-bootstrap/Button";

export default function MyCircleCard({ myCircle, removeMyCircle }) {
  // const displayMyCircleUsers = () => {
  //   return myCircle.users.map((user) => <li>{user.username}</li>);
  // };

  return (
    <div className="my-circle-card">
      <p>{myCircle.name}</p>
      {/* <ul>
        Runners:
        {displayMyCircleUsers()}
      </ul> */}
      <Button
        variant="dark"
        id="my-circle-card-btn"
        onClick={() => removeMyCircle(myCircle)}
      >
        Remove
      </Button>
    </div>
  );
}
