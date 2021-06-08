import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";

import RunPage from "./Containers/RunPage";
import SignUpForm from "./Components/SignUpForm";
import LogInForm from "./Components/LogInForm";
import WelcomePage from "./Containers/WelcomePage";
import CirclePage from "./Containers/CirclePage";
import Stats from "./Containers/Stats";

import "./App.css";

const baseUrl = "http://localhost:3000/";

export default function App() {
  // STATE
  const [user, setUser] = useState({});
  const [error, setError] = useState("");

  const [runs, setRuns] = useState([]);
  const [myRuns, setMyRuns] = useState([]);

  const [circles, setCircles] = useState([]);
  const [myCircles, setMyCircles] = useState([]);

  // SIGNUP AND LOGIN/OUT
  const signUp = (user) => {
    fetch(baseUrl + "users", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        user: {
          username: user.username,
          password: user.password,
        },
      }),
    })
      .then((response) => response.json())
      .then((user) => setUser({ user }));
  };

  const login = (username, password) => {
    fetch(baseUrl + "login", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        user: {
          username,
          password,
        },
      }),
    })
      .then((response) => response.json())
      .then((result) => {
        if (result.token) {
          localStorage.setItem("token", result.token);
          setUser(result.user);
        } else {
          setError(result.error);
        }
      });
  };

  const validateUser = () => {
    let token = localStorage.getItem("token");
    if (token) {
      fetch(baseUrl + "profile", {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
        .then((response) => response.json())
        .then((result) => {
          if (result.id) {
            setUser(result);
          }
        });
    }
  };

  const logout = () => {
    localStorage.removeItem("token");
    setUser({});
  };

  // FETCH

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

  const fetchUserData = () => {
    fetch(baseUrl + "users/" + user.id, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${localStorage.token}`,
      },
    })
      .then((response) => response.json())
      .then(
        (user) => setMyRuns([...myRuns, user.runs]),
        setMyCircles([...myCircles, user.circles])
      );
  };

  useEffect(() => {
    validateUser();
    fetchRuns();
    fetchCircles();
    fetchUserData();
    // eslint-disable-next-line
  }, []);

  // EVENT HANDLERS

  const addToMyRuns = (runToAdd) => {
    console.log("adding to my runs...");

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
          run_id: runToAdd.id,
        },
      }),
    })
      .then((response) => response.json())
      .then(
        (newUserRun) => console.log(newUserRun),
        setMyRuns([...myRuns, user.runs])
      );
  };

  const removeMyCircle = (myCircleToRemove) => {
    console.log("removing my circle...");
    let filteredCircles = myCircles.filter((myCircle) => {
      return myCircle !== myCircleToRemove;
    });
    setMyCircles(filteredCircles);
  };

  const removeMyRun = (myRunToRemove) => {
    console.log("removing my run...");
    let filteredRuns = myRuns.filter((myRun) => {
      return myRun !== myRunToRemove;
    });
    setMyRuns(filteredRuns);
  };

  const deleteRun = (runToDelete) => {
    console.log("deleting run...");

    let token = localStorage.getItem("token");
    let filteredRuns = runs.filter((run) => {
      return run !== runToDelete;
    });
    setRuns(filteredRuns);

    let filteredMyRuns = myRuns.filter((myRun) => {
      return myRun !== runToDelete;
    });
    setMyRuns(filteredMyRuns);

    fetch(baseUrl + "runs/" + runToDelete.id, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => response.json())
      .then(console.log);
  };

  const joinCircle = (circleToJoin) => {
    console.log("adding to my circles...");
    setMyCircles([...myCircles, circleToJoin]);
  };

  return (
    <div className="App">
      <Router>
        <Navbar expand="lg" sticky="top" id="nav-bar">
          <Navbar.Brand id="logo" href="/">
            RUNNING CIRCLES
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="/run" id="nav-link">
                Run
              </Nav.Link>
              <Nav.Link id="nav-link" href="/circles">
                Circles
              </Nav.Link>
              <Nav.Link id="nav-link" href="/stats">
                Stats
              </Nav.Link>
              <Nav.Link id="nav-link" href="/" onClick={logout}>
                Logout
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>

        <main>
          <Switch>
            <Route path="/run">
              <RunPage
                validateUser={validateUser}
                runs={runs}
                myRuns={myRuns}
                removeMyRun={removeMyRun}
                deleteRun={deleteRun}
                addToMyRuns={addToMyRuns}
                setMyRuns={setMyRuns}
                setRuns={setRuns}
                user={user}
              />
            </Route>
            <Route path="/circles">
              <CirclePage
                validateUser={validateUser}
                circles={circles}
                myCircles={myCircles}
                joinCircle={joinCircle}
                removeMyCircle={removeMyCircle}
              />
            </Route>
            <Route path="/stats">
              {user.username ? (
                <Stats
                  validateUser={validateUser}
                  user={user}
                  myRuns={myRuns}
                  myCircles={myCircles}
                  removeMyRun={removeMyRun}
                  removeMyCircle={removeMyCircle}
                  fetchRuns={fetchRuns}
                  fetchCircles={fetchCircles}
                />
              ) : null}
            </Route>
            <Route path="/">
              <div className="main-container">
                {user.username ? (
                  <>
                    <WelcomePage user={user} />
                  </>
                ) : (
                  <>
                    <SignUpForm signUp={signUp} />
                    <LogInForm login={login} error={error} />
                  </>
                )}
              </div>
            </Route>
          </Switch>
        </main>
        <footer className="footer">
          <p>Copyright 2021 Running Circles. All rights reserved.</p>
        </footer>
      </Router>
    </div>
  );
}
