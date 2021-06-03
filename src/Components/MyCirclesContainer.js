import React from "react";

import MyCircleCard from "./MyCircleCard";

export default function MyCirclesContainer({
  myCircles,
  removeMyCircle,
  circles,
}) {
  const displayMyCircles = () => {
    return myCircles.map((myCircle) => (
      <MyCircleCard
        key={myCircle.id}
        myCircle={myCircle}
        removeMyCircle={removeMyCircle}
        circles={circles}
      />
    ));
  };

  return (
    <ul className="my-circles-container">
      {myCircles ? displayMyCircles() : null}
    </ul>
  );
}
