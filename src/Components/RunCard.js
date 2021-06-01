import React from "react";

export default function RunCard({ run, removeRun }) {
  return (
    <div className="run-card">
      <h3>{run.runName}</h3>
      <p>{run.runLocation}</p>
      <p>{run.runDate}</p>
      <p>{run.runTime}</p>
      <button onClick={() => removeRun(run)}>X</button>
    </div>
  );
}
