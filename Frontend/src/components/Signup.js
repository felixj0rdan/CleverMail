import React from 'react'
import "./Signup.css"
import img from "./Capture.PNG"

function Sign() {
    return (
        <div>
            <img className="logo" src={img} alt="logo" />
            <hr/>
            <div className="signup">
            <form className="form-control form-control-sm w-50 mx-auto"> 
            <h3 className="text-center mt-3 mb-4 fs-2 fw-bold">Sign-up</h3>
            <div class="mb-3 mx-auto w-75">
                    <label for="exampleInputEmail1" class="form-label">Username</label>
                    <input type="email" class="form-control" placeholder="username" id="exampleInputEmail1" aria-describedby="emailHelp" />
                </div>  
                <div class="mb-3 mx-auto w-75">
                    <label for="exampleInputEmail1" class="form-label">Email address</label>
                    <input type="email" class="form-control" placeholder="example@gmail.com" id="exampleInputEmail1" aria-describedby="emailHelp" />
                </div>
                <div class="mb-3 mx-auto w-75">
                    <label for="exampleInputPassword1" class="form-label">Password</label>
                    <input type="password" placeholder="**********" class="form-control" id="exampleInputPassword1" />
                </div>
                
                
                <button type="submit" class="btn button">Submit</button>
            </form>
            </div>

        </div>
    )
}

export default Sign
