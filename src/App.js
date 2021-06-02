import react from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import MenuAppBar from "./Components/MenuAppBar";
import PlanARun from "./Components/PlanARun";
import JoinARun from "./Components/JoinARun";
import Circles from "./Components/Circles";
import TrainingPlan from "./Components/TrainingPlan";
import Home from "./Components/Home";
import Footer from "./Components/Footer";

import "./App.css";

export default function App() {
  return (
    <div className="App">
      <Router>
        <header>
          <MenuAppBar />
          <nav>
            <ul>
              <li>
                <Link to="/joinarun" className="nav-link">
                  Join a run
                </Link>
              </li>
              <li>
                <Link to="/planarun" className="nav-link">
                  Plan a run
                </Link>
              </li>
              <li>
                <Link to="/circles" className="nav-link">
                  Your circles
                </Link>
              </li>
              <li>
                <Link to="/trainingplan" className="nav-link">
                  Your training plan
                </Link>
              </li>
              <li>
                <Link to="/" className="nav-link">
                  Home
                </Link>
              </li>
            </ul>
          </nav>
        </header>

        <main>
          <Switch>
            <Route path="/planarun">
              <PlanARun />
            </Route>
            <Route path="/joinarun">
              <JoinARun />
            </Route>
            <Route path="/circles">
              <Circles />
            </Route>
            <Route path="/trainingplan">
              <TrainingPlan />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </main>
      </Router>
      <Footer />
    </div>
  );
}
