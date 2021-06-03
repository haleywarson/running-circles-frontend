import React from "react";

export default function CircleCard({ circle, joinCircle }) {
  return (
    <div className="circle-card">
      <p>{circle.name}</p>
      <button onClick={() => joinCircle(circle)}>Join</button>
    </div>
  );
}
