import React, { useEffect } from "react";

import MyRunCard from "../Components/MyRunCard";
import MyCircleCard from "../Components/MyCircleCard";

export default function Stats({
  validateUser,
  user,
  myRuns,
  removeMyRun,
  myCircles,
  removeMyCircle,
}) {
  useEffect(() => {
    validateUser();
    // eslint-disable-next-line
  }, []);

  const displayMyRuns = () => {
    return myRuns.map((myRun) => (
      <MyRunCard key={myRun.id} myRun={myRun} removeMyRun={removeMyRun} />
    ));
  };

  const displayMyCircles = () => {
    return myCircles.map((myCircle) => (
      <MyCircleCard
        key={myCircle.id}
        removeMyCircle={removeMyCircle}
        myCircle={myCircle}
      />
    ));
  };

  return (
    <div className="stats">
      <h2>welcome, {user.username}</h2>
      <p>your total circles: {user.circles.length}</p>
      <p>your circles: {displayMyCircles()}</p>
      <p>your total run events: {user.runs.length}</p>
      <p>your run events: {displayMyRuns()}</p>
    </div>
  );
}
