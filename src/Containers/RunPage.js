import React, { useState, useEffect } from "react";

import AddRunForm from "../Components/AddRunForm";
import RunsContainer from "./RunsContainer";
import MyRunsContainer from "./MyRunsContainer";

const baseUrl = "http://localhost:3000/";

export default function RunPage({
  validateUser,
  runs,
  setRuns,
  myRuns,
  setMyRuns,
  removeMyRun,
  deleteRun,
}) {
  //   STATE AND FETCH
  const [formState, setFormState] = useState({
    runName: "",
    runLocation: "",
    runDate: "",
    runTime: "",
    // circles: []
  });

  const [toggleForm, setToggleForm] = useState(false);

  const fetchRuns = () => {
    fetch(baseUrl + "runs", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${localStorage.token}`,
      },
    })
      .then((response) => response.json())
      .then((runs) => setRuns(runs));
  };

  useEffect(() => {
    validateUser();
    fetchRuns();
  }, []);

  //   EVENT HANDLERS
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("adding run...");
    const newRun = formState;
    fetch(baseUrl + "runs", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.token}`,
      },
      body: JSON.stringify({
        run: {
          name: newRun.runName,
          location: newRun.runLocation,
          date: newRun.runDate,
          time: newRun.runTime,
        },
      }),
    })
      .then((response) => response.json())
      .then(
        (newRun) => (setMyRuns([...myRuns, newRun]), setRuns([...runs, newRun]))
      );
  };

  const handleChange = ({ target }) => {
    setFormState({
      ...formState,
      [target.name]: target.value,
    });
  };

  const addToMyRuns = (runToAdd) => {
    console.log("adding to my runs...");
    setMyRuns([...myRuns, runToAdd]);
  };

  return (
    <div className="run-page">
      <h2 onClick={() => setToggleForm(true)}>Plan a run +</h2>
      {toggleForm ? (
        <AddRunForm
          formState={formState}
          handleSubmit={handleSubmit}
          handleChange={handleChange}
        />
      ) : null}
      {runs.length !== 0 ? (
        <>
          <h2>Join a run</h2>
          <RunsContainer
            runs={runs}
            deleteRun={deleteRun}
            addToMyRuns={addToMyRuns}
          />
        </>
      ) : null}
      {myRuns.length !== 0 ? (
        <>
          <h2>Your training plan</h2>
          <MyRunsContainer myRuns={myRuns} removeMyRun={removeMyRun} />
        </>
      ) : null}
    </div>
  );
}
