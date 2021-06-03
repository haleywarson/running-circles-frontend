import React from "react";

export default function CircleCard({ circle }) {
  return (
    <div className="circle-card">
      <p>{circle.name}</p>
    </div>
  );
}
