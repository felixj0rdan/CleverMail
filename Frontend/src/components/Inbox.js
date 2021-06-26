import React,{useState,useEffect} from 'react';
import {isAuthenticated, signout} from "../helper/index";
import {Redirect,Link,useHistory} from "react-router-dom";
import Navbar from './Navbar';
import { API } from '../backend';
import Maillist from './Maillist';


function Inbox() {
    const {user} = isAuthenticated();
    console.log(user?.email);
    const [mails,setMails] = useState([]);
    useEffect(()=>{
        fetch(`${API}api/mails`)
         .then(res => res.json())
         .then(data => setMails(data))
    },[])
    // const SignOut = () => {
    //     signout();
    //     return(
    //         <Redirect to="/login" />
    //     )
    // }
    // const history = useHistory();
    
    if(user){
        return(
            <div>
            <Navbar />
            <div >
               
               {
                   mails.map(mail =>(
                       <div>
                           {mail.to == user.email ? (<Maillist mailItem={mail} name={mail.from} />): (console.log(" "))}
                       </div>
                   ))
               }
            </div>
               
            </div>
        )
    }else{
        return(
            <div>
                <Navbar />
                Not logged in
            </div>
        )
    }
}

export default Inbox
