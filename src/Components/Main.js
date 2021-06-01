import React, { useState, useEffect } from "react";

import AddRunForm from "./AddRunForm";
import ActivityFeed from "./ActivityFeed";

export default function Main() {
  const [formState, setFormState] = useState({
    runName: "",
    runLocation: "",
    runDate: "",
    runTime: "",
  });

  const [runs, setRuns] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("adding run...");
    setRuns([...runs, formState]);
    // fetch(runUrl, {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify(formState),
    // })
    //   .then((res) => res.json())
    //   .then((runs) => setRuns(runs));
  };

  const handleChange = ({ target }) => {
    setFormState({
      ...formState,
      [target.name]: target.value,
    });
  };

  // const fetchRuns = () => {
  //   fetch(runsUrl)
  //     .then((res) => res.json())
  //     .then((runs) => setRuns(runs));
  // };

  // useEffect(() => {
  //   fetchRuns();
  // }, []);

  const removeRun = (runToRemove) => {
    console.log("removing run...");
    let filteredRuns = runs.filter((run) => {
      return run !== runToRemove;
    });
    setRuns(filteredRuns);
  };

  return (
    <div className="main">
      <h2>Add a run</h2>
      <AddRunForm
        formState={formState}
        handleSubmit={handleSubmit}
        handleChange={handleChange}
      />
      <h2>Activity feed</h2>
      <ActivityFeed runs={runs} removeRun={removeRun} />
    </div>
  );
}
