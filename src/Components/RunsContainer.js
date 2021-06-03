import React from "react";

import RunCard from "./RunCard";

export default function ActivityFeed({ runs, removeRun, addToMyRuns }) {
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

  return <ul className="activity-feed">{displayRuns()}</ul>;
}
