import React from "react";

export default function MyCircleCard({ myCircle, removeMyCircle, circles }) {
  return (
    <div className="my-circle-card">
      <p>{myCircle.name}</p>
      <button onClick={() => removeMyCircle(myCircle)}>Remove</button>
    </div>
  );
}
