import React,{  useEffect } from "react"
import './App.css';
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
import History from "./components/History"
import Inbox from "./components/Inbox";
import Signup from "./components/Signup"
import Email from "./components/Email"



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
        <Route path="/history">
            <History />
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
