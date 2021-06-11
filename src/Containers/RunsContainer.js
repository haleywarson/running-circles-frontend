import React from "react";

import RunCard from "../Components/RunCard";

export default function RunsContainer({ runs, deleteRun, addToMyRuns }) {
  const displayRuns = () => {
    return runs.map((run) => (
      <RunCard
        key={run.id}
        run={run}
        deleteRun={deleteRun}
        addToMyRuns={addToMyRuns}
      />
    ));
  };

  return <ul className="runs-container">{displayRuns()}</ul>;
}
