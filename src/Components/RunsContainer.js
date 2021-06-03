import React from "react";

import RunCard from "./RunCard";

export default function RunsContainer({ runs, removeRun, addToMyRuns }) {
  const displayRuns = () => {
    return runs.map((run) => (
      <RunCard
        key={run.id}
        run={run}
        removeRun={removeRun}
        addToMyRuns={addToMyRuns}
      />
    ));
  };

  return <ul className="runs-container">{displayRuns()}</ul>;
}
