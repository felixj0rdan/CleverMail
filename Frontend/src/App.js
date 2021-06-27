import React,{  useEffect, useState } from "react"
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
import ScheduledMail from "./components/ScheduledMail";
import { updateMail } from "./helper";



function App() {
  
  useEffect(() => {
    fetch(API)
      .then(res => res.json())
      .then(data => console.log(data))
  }, [])

  const [allmails,setAllmails] = useState([]);
  useEffect(()=>{
      fetch(`${API}api/mails`)
        .then(res => res.json())
        .then(data => setAllmails(data))
  },[allmails])

  window.setInterval(function(){ // Set interval for checking
    // console.log(1)
    allmails.map(mail => {
      var h = new Date().getHours();
      var m = new Date().getMinutes();
      var tnow = h+":"+m;
      var dat = new Date().getDate();
      if(dat<10)
        dat = '0'+dat;
      var mon = new Date().getMonth()+1;
      if(mon<10)
        mon = "0"+mon;
      var yar = new Date().getFullYear();
      var dnow = yar+"-"+mon+"-"+dat;
      // console.log(dnow);
      if(mail.sent === false && (mail.time === tnow && mail.date === dnow)){
          mail.sent = true;
          updateMail(mail._id, mail)
          // .then(window.location.reload())
      }
    })
}, 30000);

  return (
    <div className="App">
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
          <Route path="/scheduledmail">
            <ScheduledMail />
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
