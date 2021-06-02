import React from "react";

import ActivityFeed from "./ActivityFeed";

export default function JoinARun({ runs, removeRun }) {
  return (
    <div className="join-a-run">
      <ActivityFeed runs={runs} removeRun={removeRun} />
    </div>
  );
}
