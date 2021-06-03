import React from "react";

import RunCard from "./RunCard";

export default function ActivityFeed({ runs, removeRun }) {
  const displayRuns = () => {
    return runs.map((run) => <RunCard run={run} removeRun={removeRun} />);
  };

  return <ul className="activity-feed">{displayRuns()}</ul>;
}
