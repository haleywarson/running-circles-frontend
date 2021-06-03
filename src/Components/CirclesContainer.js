import React from "react";

import CircleCard from "./CircleCard";

export default function CirclesContainer({ circles, joinCircle }) {
  const displayCircles = () => {
    return circles.map((circle) => (
      <CircleCard key={circle.id} circle={circle} joinCircle={joinCircle} />
    ));
  };

  return <ul className="circles-container">{displayCircles()}</ul>;
}
