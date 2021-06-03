import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import RunPage from "./Components/RunPage";
import SignUpForm from "./Components/SignUpForm";
import LogInForm from "./Components/LogInForm";
import WelcomePage from "./Components/WelcomePage";
import CirclePage from "./Components/CirclePage";

import "./App.css";

const baseUrl = "http://localhost:3000/";

export default function App() {
  const [user, setUser] = useState({});
  const [error, setError] = useState("");

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

  const logout = () => {
    localStorage.removeItem("token");
    setUser({});
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

  useEffect(() => {
    validateUser();
  }, []);

  return (
    <div className="App">
      <Router>
        <header>
          <Link to="/" className="nav-link">
            <h1 id="logo">RUNNING CIRCLES</h1>
          </Link>
          <nav className="nav-menu-active">
            <ul className="nav-list">
              <li className="nav-item">
                <Link to="/run" className="nav-link">
                  Run
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/circles" className="nav-link">
                  Circles
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/" className="nav-link" onClick={logout}>
                  Logout
                </Link>
              </li>
            </ul>
          </nav>
        </header>

        <main>
          <Switch>
            <Route path="/run">
              <RunPage validateUser={validateUser} />
            </Route>
            <Route path="/circles">
              <CirclePage validateUser={validateUser} />
            </Route>
            <Route path="/">
              <div className="main-container">
                <p>running is fun with your circle of friends...</p>
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
