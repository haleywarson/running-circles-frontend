import React from "react";
import Button from "react-bootstrap/Button";

export default function MyRunCard({ myRun, removeMyRun }) {
  return (
    <div className="my-run-card">
      <h3>{myRun.runName}</h3>
      <p>{myRun.runLocation}</p>
      <p>{myRun.runDate}</p>
      <p>{myRun.runTime}</p>
      <Button
        variant="dark"
        id="my-run-card-btn"
        onClick={() => removeMyRun(myRun)}
      >
        Remove
      </Button>
    </div>
  );
}
