import React from "react";
import Button from "react-bootstrap/Button";

export default function MyRunCard({ myRun, removeMyRun }) {
  return (
    <div className="my-run-card">
      <h3>{myRun.name}</h3>
      <p>{myRun.location}</p>
      <p>{myRun.date}</p>
      <p>{myRun.time}</p>
      <Button
        variant="dark"
        id="my-run-card-btn"
        onClick={() => removeMyRun(myRun)}
      >
        Delete
      </Button>
    </div>
  );
}
