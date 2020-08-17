import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import axios from "axios";
import Home from "./containers/Home/Home.jsx";
import Login from "./containers/Login/Login.jsx";
import Main from "./containers/Main/Main.jsx";
import SignUp from "./containers/SignUp/SignUp.jsx";
import AddBook from "./containers/AddBook/AddBook.jsx";
import Account from "./containers/Account/Account.jsx";
// import StatusContext from "./utils/Status";
import UserContext from "./utils/User";
import BookInfo from "./components/BookInfo/BookInfo";

// import {BrowserRouter as Router, Switch, Route} from "react-router-dom"

function App() {
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

  const [jwt, setJwt] = useState("");
  const [_id, setUserId] = useState("");

  useEffect(() => {
    handleStartup();
  }, []);

  const handleLogin = (token, _id) => {
    setJwt(token);
    setUserId(_id)
    window.localStorage.setItem("jwt", token);
    window.localStorage.setItem("_id", _id)
  };

  const handleStartup = () => {
    const tokenFromStorage = window.localStorage.getItem("jwt");
    if (tokenFromStorage) {
      setJwt(tokenFromStorage);
    }
  };

  return (
    <Router>
    <Switch>
        <UserContext.Provider value={{ jwt, _id, handleLogin }}>
      <div className="App">
        < Route exact path= "/" component={Home} />
        < Route exact path= "/login" component={Login} />
        < Route exact path= "/main/:id" component= {Main} />
        < Route exact path= "/signup" component={SignUp} />
        < Route exact path= "/addbook/:id" component={AddBook} />
        <Route exact path= "/bookinfo" component={BookInfo}/>
        {/* for testing temporarily */}
        {/* < Route exact path= "/addbook" component={AddBook} /> */}
        < Route exact path= "/account/:id" component={Account} />
      </div>
      </UserContext.Provider>
      </Switch>
    </Router>
  );
}

export default App;
