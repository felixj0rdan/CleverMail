import React,{useState,useEffect} from 'react';
import {isAuthenticated, signout, updateMail} from "../helper/index";
import {Redirect,Link,useHistory} from "react-router-dom";
import Navbar from './Navbar';
import { API } from '../backend';
import Maillist from './Maillist';
import Loading from './Loading';


function Inbox() {
    
    const {user} = isAuthenticated();
    const [reload,setReload] = useState(false);
    console.log(user?.email);
    const [mails,setMails] = useState([]);
    useEffect(()=>{
        fetch(`${API}api/mails`)
         .then(res => res.json())
         .then(data => setMails(data))
    },[reload])
    // const SignOut = () => {
    //     signout();
    //     return(
    //         <Redirect to="/login" />
    //     )
    // }
    // const history = useHistory();
    if(mails.length === 0)
    {
        return(<div>
            <Navbar />
            <div >
               
               <Loading/>
            </div>
               
            </div>)
    }
    else
    {if(user){
        return(
            <div>
            <Navbar />
            {/* <button onClick={()=>updateMail("60d874d21600261c7c77775e")}>test update</button> */}
            <div >
               
               {
                   mails.slice(0).reverse().map(mail =>(
                       <div>
                           {(mail.to == user.email || mail.cc == user.email)&& mail.sent === true ? (<Maillist mailItem={mail} name={mail.from} reload={reload} setReload={setReload} />): (console.log(" "))}
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
    }}
}

export default Inbox
