import React from "react";

import MyRunCard from "./MyRunCard";
import MyCircleCard from "./MyCircleCard";

export default function Stats({ validateUser, user, myRuns, removeMyRun }) {
  useEffect(() => {
    validateUser();
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
        myCircle={myCircle}
        removeMyCircle={removeMyCircle}
      />
    ));
  };

  return (
    <div className="stats">
      <h2>welcome, {user.username}</h2>
      <p>Your total circles: {user.circles.length}</p>
      <p>Your circles: {displayMyCircles()}</p>
      <p>Total runs: {user.runs.length}</p>
      <p>Your run events: {displayMyRuns()}</p>
    </div>
  );
}
