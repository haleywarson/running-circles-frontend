import React from "react";
import { useParams } from "react-router";

import CircleCard from "../Components/CircleCard";

export default function CirclesContainer({ circles, joinCircle }) {
  const displayCircles = () => {
    return circles.map((circle) => (
      <CircleCard
        key={circle.id}
        circle={circle}
        joinCircle={joinCircle}
        users={useParams}
      />
    ));
  };

  return <ul className="circles-container">{displayCircles()}</ul>;
}
