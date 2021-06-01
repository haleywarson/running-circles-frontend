import react from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Header from "./Components/Header";
import Main from "./Components/Main";
import Footer from "./Components/Footer";

import "./App.css";

// const runsUrl = "http://localhost:3000/runs";

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              {/* <li>
                <Link to="/login">Login</Link>
              </li>
              <li>
                <Link to="/users">Users</Link>
              </li> */}
            </ul>
          </nav>

          <Switch>
            {/* <Route path="/login">
              <Login />
            </Route>
            <Route path="/users">
              <Users />
            </Route> */}
            <Route path="/">
              <Header />
              <Main />
              <Footer />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

function Home() {
  return <h2>Home</h2>;
}

// function Login() {
//   return <h2>Login</h2>;
// }

// function Users() {
//   return <h2>Users</h2>;
// }

export default App;
