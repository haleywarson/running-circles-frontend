import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

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
    console.log("removing run...");
    let filteredRuns = runs.filter((run) => {
      return run !== runToRemove;
    });
    setRuns(filteredRuns);
  };

  return (
    //         <Router>
    //       <div>
    //         <nav>
    //           <ul>
    //             <li>
    //               <Link to="/">Home</Link>
    //             </li>
    //             <li>
    //               <Link to="/about">About</Link>
    //             </li>
    //             <li>
    //               <Link to="/users">Users</Link>
    //             </li>
    //           </ul>
    //         </nav>

    //         {/* A <Switch> looks through its children <Route>s and
    //             renders the first one that matches the current URL. */}
    //         <Switch>
    //           <Route path="/about">
    //             <About />
    //           </Route>
    //           <Route path="/users">
    //             <Users />
    //           </Route>
    //           <Route path="/">
    //             <Home />
    //           </Route>
    //         </Switch>
    //       </div>
    //     </Router>
    //   );
    // }

    // function Home() {
    //   return <h2>Home</h2>;
    // }

    // function About() {
    //   return <h2>About</h2>;
    // }

    // function Users() {
    //   return <h2>Users</h2>;
    // }
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
