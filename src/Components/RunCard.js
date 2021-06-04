import React from "react";
import Button from "react-bootstrap/Button";

export default function RunCard({ run, removeRun, addToMyRuns }) {
  return (
    <div className="run-card">
      <h3>{run.name}</h3>
      <p>{run.location}</p>
      <p>{run.date}</p>
      <p>{run.time}</p>

      <Button variant="dark" id="run-card-btn" onClick={() => removeRun(run)}>
        Remove
      </Button>

      <Button variant="dark" id="run-card-btn" onClick={() => addToMyRuns(run)}>
        Join
      </Button>
    </div>
  );
}
