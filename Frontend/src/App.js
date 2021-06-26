import React,{  useEffect } from "react"
import './App.css';
// import { useState, useEffect } from "react";
// import {API} from './backend.js';
import { API } from './backend';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Login from "./components/Login"
import Drafts from "./components/Drafts"
import Compose from "./components/Compose"
import Outbox from "./components/Outbox"
import Inbox from "./components/Inbox";
import Signup from "./components/Signup"
import Email from "./components/Email"
import Navbar from "./components/Navbar";



function App() {
  
  useEffect(() => {
    fetch(API)
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
        <Route path="/email">
            <Email />
          </Route>
        <Route path="/login">
            <Login />
          </Route>
        <Route path="/drafts">
            <Drafts />
          </Route>
          
        <Route path="/signup">
            <Signup />
          </Route>
        <Route path="/outbox">
            <Outbox />
          </Route>
        <Route path="/inbox">
            
            <Inbox />
          </Route>
          <Route path="/">
            <Login />
          </Route>
          
        </Switch>
      </Router>

      
    </div>
  );
}

export default App;
