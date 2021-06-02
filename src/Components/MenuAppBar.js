import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import AccountCircle from "@material-ui/icons/AccountCircle";
import Switch from "@material-ui/core/Switch";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormGroup from "@material-ui/core/FormGroup";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function MenuAppBar() {
  const classes = useStyles();
  const [auth, setAuth] = React.useState(true);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleChange = (event) => {
    setAuth(event.target.checked);
  };

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className={classes.root} id="top-nav">
      <FormGroup>
        <FormControlLabel
          control={
            <Switch
              checked={auth}
              onChange={handleChange}
              aria-label="login switch"
            />
          }
          label={auth ? "Logout" : "Login"}
        />
      </FormGroup>
      <AppBar position="static" id="app-bar">
        <Toolbar id="toolbar">
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title} id="nav-bar-title">
            RUNNING CIRCLES
          </Typography>
          {auth && (
            <div>
              <IconButton
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={open}
                onClose={handleClose}
              >
                <MenuItem onClick={handleClose}>Profile</MenuItem>
                <MenuItem onClick={handleClose}>My account</MenuItem>
              </Menu>
            </div>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
}

// <Router>
//   <nav>
//     <ul>
//       <li>
//         <Link to="/joinarun" className="nav-link">
//           Join a run
//         </Link>
//       </li>
//       <li>
//         <Link to="/planarun" className="nav-link">
//           Plan a run
//         </Link>
//       </li>
//       <li>
//         <Link to="/circles" className="nav-link">
//           Your circles
//         </Link>
//       </li>
//       <li>
//         <Link to="/trainingplan" className="nav-link">
//           Your training plan
//         </Link>
//       </li>
//       <li>
//         <Link to="/" className="nav-link">
//           Home
//         </Link>
//       </li>
//     </ul>
//   </nav>

//   <main>
//     <Switch>
//       <Route path="/planarun">
//         <PlanARun />
//       </Route>
//       <Route path="/joinarun">
//         <JoinARun />
//       </Route>
//       <Route path="/circles">
//         <Circles />
//       </Route>
//       <Route path="/trainingplan">
//         <TrainingPlan />
//       </Route>
//       <Route path="/">
//         <Home />
//       </Route>
//     </Switch>
//   </main>
// </Router>;
