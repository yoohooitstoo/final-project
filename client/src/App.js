import React, { useEffect, useState} from "react";
import axios from "axios";
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
    <div className="App">

    </div>
  );
}

export default App;