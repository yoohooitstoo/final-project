import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
// import axios from "axios";
import Home from "./containers/Home/Home.jsx"
import Login from "./containers/Login/Login.jsx";
import SignUp from "./containers/SignUp/SignUp.jsx";
import AddBook from "./containers/AddBook/AddBook.jsx";
import Account from "./containers/Account/Account.jsx";
// import StatusContext from "./utils/Status";
import UserContext from "./utils/User";

// import {BrowserRouter as Router, Switch, Route} from "react-router-dom"

function App () {
//   useEffect(() => {
//     axios
//       .get("/api/config")
//       .then((res) => {
//         console.log(res);
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   }, []);
  // if there's no user, show the login form

const [jwt, setJwt] =useState("");

useEffect(() => {
  handleStartup();
}, []);

const handleLogin = (token) => {
  setJwt(token);
  window.localStorage.setItem("jwt", token);
};

const handleStartup = () => {
  const tokenFromStorage = window.localStorage.getItem("jwt");
  if (tokenFromStorage) {
    setJwt(tokenFromStorage);
  }
};

  return (
    <Router>
        <UserContext.Provider value={{ jwt, handleLogin }}>
      <div className="App">
        < Route exact path= "/" component={Home} />
        < Route exact path= "/login" component={Login} />
        < Route exact path= "/signup" component={SignUp} />
        < Route exact path= "/addbook" component={AddBook} />
        < Route exact path= "/account" component={Account} />
      </div>
      </UserContext.Provider>
    </Router>
  );
};

export default App;
