import React from 'react';
import {isAuthenticated, signout} from "../helper/index";
import {Redirect,Link,useHistory} from "react-router-dom";

function Home() {
    const {user} = isAuthenticated();
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

export default Home
