import React from "react";

import MyCircleCard from "../Components/MyCircleCard";

export default function MyCirclesContainer({ myCircles, removeMyCircle }) {
  const displayMyCircles = () => {
    return myCircles.map((myCircle) => (
      <MyCircleCard
        key={myCircle.id}
        myCircle={myCircle}
        removeMyCircle={removeMyCircle}
      />
    ));
  };

  return (
    <ul className="my-circles-container">
      {myCircles ? displayMyCircles() : null}
    </ul>
  );
}
