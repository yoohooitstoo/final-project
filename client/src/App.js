import React, { useEffect } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import axios from "axios";
import Home from "./containers/Home/Home.jsx"
import Login from "./containers/Login/Login.jsx";
import SignUp from "./containers/SignUp/SignUp.jsx";
import Browse from "./containers/Browse/Browse.jsx";
// import {BrowserRouter as Router, Switch, Route} from "react-router-dom"

const App = () => {
  useEffect(() => {
    axios
      .get("/api/config")
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  // if there's no user, show the login form
  return (
    <Router>
      <div className="App">
        < Route exact path= "/" component={Home} />
        < Route exact path= "/login" component={Login} />
        < Route exact path= "/signup" component={SignUp} />
        < Route exact path= "/browse" component={Browse} />
      </div>
    </Router>
  );
};

export default App;
