import React from "react";

import MyRunCard from "./MyRunCard";

export default function MyRunsContainer({ myRuns, removeMyRun }) {
  const displayMyRuns = () => {
    return myRuns.map((myRun) => (
      <MyRunCard key={myRun.id} myRun={myRun} removeMyRun={removeMyRun} />
    ));
  };

  return (
    <ul className="my-runs-container">{myRuns ? displayMyRuns() : null}</ul>
  );
}
