import React, { useState, useEffect } from "react";

import MenuAppBar from "./Components/MenuAppBar";
import AddRunForm from "./Components/AddRunForm";
import ActivityFeed from "./Components/ActivityFeed";

import "./App.css";

// const runsUrl = "http://localhost:3000/runs";

function App() {
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
    let filteredRuns = runs.filter((run) => {
      return run !== runToRemove;
    });
    setRuns(filteredRuns);
  };

  return (
    <div className="App">
      <MenuAppBar />
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
      <footer>
        <p>Copyright 2021 Running Circles. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
