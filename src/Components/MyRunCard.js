import React from "react";

export default function MyRunCard({ myRun, removeMyRun }) {
  <div className="my-run-card">
    <h3>{myRun.name}</h3>
    <p>{myRun.location}</p>
    <p>{myRun.date}</p>
    <p>{myRun.time}</p>
    <button onClick={() => removeMyRun(myRun)}>Delete</button>
  </div>;
}
