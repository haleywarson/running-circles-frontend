import React from "react";

export default function MyCircleCard({ myCircle, removeMyCircle }) {
  return (
    <div className="my-circle-card">
      <p>{myCircle.name}</p>
      <button onClick={() => removeMyCircle(myCircle)}>Remove</button>
    </div>
  );
}
