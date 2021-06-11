import React from "react";
import Button from "react-bootstrap/Button";

export default function RunCard({ run, deleteRun, addToMyRuns }) {
  return (
    <div className="run-card">
      <h3>{run.name}</h3>
      <p>{run.location}</p>
      <p>{run.date}</p>
      <p>{run.time}</p>
      <div className="combined-buttons">
        <Button variant="dark" id="run-card-btn" onClick={() => deleteRun(run)}>
          Delete
        </Button>
        <Button
          variant="dark"
          id="run-card-btn"
          onClick={() => addToMyRuns(run)}
        >
          Join
        </Button>
      </div>
    </div>
  );
}
