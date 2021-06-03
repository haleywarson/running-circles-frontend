import React from "react";

import CircleCard from "./CircleCard";

export default function CirclesContainer({ circles }) {
  const displayCircles = () => {
    circles.map((circle) => <CircleCard key={circle.id} circle={circle} />);
  };

  return <ul className="circles-container">{displayCircles()}</ul>;
}
