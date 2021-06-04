import React, { useState, useEffect } from "react";

import AddRunForm from "../Components/AddRunForm";
import RunsContainer from "./RunsContainer";
import MyRunsContainer from "./MyRunsContainer";

const baseUrl = "http://localhost:3000/";

export default function RunPage({
  validateUser,
  runs,
  myRuns,
  removeMyRun,
  deleteRun,
  addToMyRuns,
  setMyRuns,
  setRuns,
  user,
}) {
  //   STATE
  const [formState, setFormState] = useState({
    runName: "",
    runLocation: "",
    runDate: "",
    runTime: "",
  });
  const [toggleForm, setToggleForm] = useState(false);

  useEffect(() => {
    validateUser();
  }, []);

  //   FORM EVENT HANDLERS
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

    fetch(baseUrl + "user_runs", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Bearer ${localStorage.token}`,
      },
      body: JSON.stringify({
        user_run: {
          user_id: user.id,
          run_id: newRun.id,
        },
      }),
    });
  };

  const handleChange = ({ target }) => {
    setFormState({
      ...formState,
      [target.name]: target.value,
    });
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
