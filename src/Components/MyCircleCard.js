import React from "react";
import Button from "react-bootstrap/Button";

export default function MyCircleCard({ myCircle, removeMyCircle, circles }) {
  return (
    <div className="my-circle-card">
      <p>{myCircle.name}</p>
      <Button
        variant="dark"
        id="my-circle-card-btn"
        onClick={() => removeMyCircle(myCircle)}
      >
        Remove
      </Button>
    </div>
  );
}
