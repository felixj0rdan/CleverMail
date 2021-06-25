import React,{  useEffect } from "react"
import './App.css';
import Email from "./components/Email";
import Sign from "./components/Signup";
import Login from "./components/Login";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from "./components/Home";
import History from "./components/History";
import Drafts from "./components/Drafts";
import Compose from "./components/Compose";


function App() {
  useEffect(() => {
    fetch(process.env.BACKEND)
    .then(res => res.json())
    .then(data => console.log(data))
  }, [])

  return (
    <div className="App">
      {/* <Email />  */}
      {/* <Sign /> */}
      {/* <Login /> */}
      <Router>
        <Switch>
        <Route path="/login">
            <Login />
          </Route>
        <Route path="/drafts">
            <Drafts />
          </Route>
        <Route path="/compose">
            <Compose />
          </Route>
        <Route path="/history">
            <History />
          </Route>
        <Route path="/home">
            <Home />
          </Route>
          <Route path="/">
            <Sign />
          </Route>
        </Switch>
      </Router>

      
    </div>
  );
}

export default App;
