import React, { useState, useEffect } from "react";

import AddRunForm from "./AddRunForm";
import ActivityFeed from "./ActivityFeed";

const baseUrl = "http://localhost:3000/";
const runsUrl = "http://localhost:3000/runs";

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
    fetch(runsUrl, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization:
          "Bearer" +
          "eyJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjo5fQ.AlVHL6kmrZOUDIOyYK-ZUXh5R9Jq_Jo5rk2G9IOJ2Uo",
      },
      body: JSON.stringify(formState),
    })
      .then((res) => res.json())
      .then((runs) => setRuns(runs));
  };

  const handleChange = ({ target }) => {
    setFormState({
      ...formState,
      [target.name]: target.value,
    });
  };

  const fetchRuns = () => {
    fetch(runsUrl)
      .then((res) => res.json())
      .then((runs) => setRuns(runs));
  };

  useEffect(() => {
    fetchRuns();
  }, []);

  const removeRun = (runToRemove) => {
    console.log("removing run...");
    let filteredRuns = runs.filter((run) => {
      return run !== runToRemove;
    });
    setRuns(filteredRuns);
  };

  return (
    <div className="plan-a-run">
      <h2>Add a run</h2>
      <AddRunForm
        formState={formState}
        handleSubmit={handleSubmit}
        handleChange={handleChange}
      />
      <h2>Join a run</h2>
      <ActivityFeed runs={runs} removeRun={removeRun} />
    </div>
  );
}
