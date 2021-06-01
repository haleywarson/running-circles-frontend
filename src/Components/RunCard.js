import React from "react";

export default function RunCard({ run, removeRun }) {
  return (
    <div className="run-card">
      <h3>{run.name}</h3>
      <p>{run.location}</p>
      <p>{run.date}</p>
      <p>{run.time}</p>
      <button onClick={() => removeRun()}>X</button>
    </div>
  );
}
