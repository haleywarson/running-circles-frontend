import React, { useState, useEffect } from "react";

import AddRunForm from "./AddRunForm";
import RunsContainer from "./RunsContainer";
import CirclesContainer from "./CirclesContainer";
import MyRunsContainer from "./MyRunsContainer";
import MyCirclesContainer from "./MyCirclesContainer";

const baseUrl = "http://localhost:3000/";

export default function RunPage({ validateUser }) {
  //   STATE AND FETCH
  const [formState, setFormState] = useState({
    runName: "",
    runLocation: "",
    runDate: "",
    runTime: "",
  });

  const [runs, setRuns] = useState([]);
  const [circles, setCircles] = useState([]);
  const [myRuns, setMyRuns] = useState([]);
  const [myCircles, setMyCircles] = useState([]);

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

  const fetchCircles = () => {
    fetch(baseUrl + "circles", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${localStorage.token}`,
      },
    })
      .then((response) => response.json())
      .then((circles) => setCircles(circles));
  };

  useEffect(() => {
    validateUser();
    fetchRuns();
    fetchCircles();
  }, []);

  //   EVENT HANDLERS
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("adding run...");
    setRuns([...runs, formState]);
    fetch(baseUrl + "runs", {
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
      .then((response) => response.json())
      .then((runs) => setRuns(runs));
  };

  const handleChange = ({ target }) => {
    setFormState({
      ...formState,
      [target.name]: target.value,
    });
  };

  const removeRun = (runToRemove) => {
    console.log("removing run...");
    let filteredRuns = runs.filter((run) => {
      return run !== runToRemove;
    });
    setRuns(filteredRuns);
  };

  const removeMyRun = (myRunToRemove) => {
    console.log("removing my run...");
    let filteredRuns = myRuns.filter((myRun) => {
      return myRun !== myRunToRemove;
    });
    setMyRuns(filteredRuns);
  };

  const addToMyRuns = (runToAdd) => {
    console.log("adding to my runs...");
    setMyRuns([...myRuns, runToAdd]);
  };

  const joinCircle = (circleToJoin) => {
    console.log("adding to my circles...");
    setMyCircles([...myCircles, circleToJoin]);
  };

  const removeMyCircle = (myCircleToRemove) => {
    console.log("removing my circle...");
    let filteredCircles = myCircles.filter((myCircle) => {
      return myCircle !== myCircleToRemove;
    });
    setMyCircles(filteredCircles);
  };

  return (
    <div className="run-page">
      <h2>Running circles</h2>
      <CirclesContainer circles={circles} joinCircle={joinCircle} />
      <h2>My circles</h2>
      <MyCirclesContainer
        myCircles={myCircles}
        removeMyCircle={removeMyCircle}
      />
      <h2>Your training plan</h2>
      <MyRunsContainer myRuns={myRuns} removeMyRun={removeMyRun} />
      <h2>Add a run</h2>
      <AddRunForm
        formState={formState}
        handleSubmit={handleSubmit}
        handleChange={handleChange}
      />
      <h2>Join a run</h2>
      <RunsContainer
        runs={runs}
        removeRun={removeRun}
        addToMyRuns={addToMyRuns}
      />
    </div>
  );
}
