import React from "react";

import MenuAppBar from "./Components/MenuAppBar";
import AddRunForm from "./Components/AddRunForm";
import ActivityFeed from "./Components/ActivityFeed";

import "./App.css";

function App() {
  return (
    <div className="App">
      <MenuAppBar />
      <div className="main">
        <h2>Add a run</h2>
        <AddRunForm />
        <h2>Activity feed</h2>
        <ActivityFeed />
      </div>
      <footer>
        <p>Copyright 2021 Running Circles. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
