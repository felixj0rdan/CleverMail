import React from 'react';
import {isAuthenticated, signout} from "../helper/index";
import {Redirect,Link,useHistory} from "react-router-dom";

function Inbox() {
    const {user} = isAuthenticated();
    console.log(user?.email);
    // const SignOut = () => {
    //     signout();
    //     return(
    //         <Redirect to="/login" />
    //     )
    // }
    const history = useHistory();

    if(user){
        return(
            <div>
                <button onClick={()=>{
                    signout(()=>{
                        history.push("/login")
                    })
                }}>Signout</button>
            </div>
        )
    }else{
        return(
            <div>
                Not logged in
            </div>
        )
    }
}

export default Inbox
