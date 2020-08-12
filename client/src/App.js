import React, { useEffect } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import axios from "axios";
import Home from "./containers/Home/Home.jsx"
import Login from "./containers/Login/Login.jsx";
import SignUp from "./containers/SignUp/SignUp.jsx";
<<<<<<< HEAD
import Browse from "./containers/Browse/Browse.jsx";
=======
import Account from "./containers/Account/Account.jsx";
>>>>>>> 36a76a4e68b57d16c13068219ef5ff5c8808fef1
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
<<<<<<< HEAD
        < Route exact path= "/browse" component={Browse} />
=======
        < Route exact path= "/account" component={Account} />
>>>>>>> 36a76a4e68b57d16c13068219ef5ff5c8808fef1
      </div>
    </Router>
  );
};

export default App;
