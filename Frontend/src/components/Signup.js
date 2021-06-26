// import React, { useState } from 'react'
// import "./Signup.css"
// import img from "./Capture.PNG"
// import { signup } from './auth/helper';

// function Signup() {
    
//     const [values,setValues] = useState({
//         name:"",
//         email:"",
//         password:"",
//         error:"",
//         success: false
//     });
//     const [match, setmatch] = useState(true)
    
//     const {name,email,password,error,success} = values;

//     const handleChange = name => event =>{
//         setValues({
//             ...values,error:false,[name]:event.target.value
//         })
        
//     }

//     const check = name => event => {
//         if(event.target.value === values.password)
//             setmatch(true);
//         else
//             setmatch(false);  
//     }

//     const onSubmit = (event) =>{
//         event.preventDefault();
//         console.log(values);
//         setValues({
//             ...values,error:false
//         });
//         signup({
//             name,
//             email,
//             password

//         })
//          .then(data => {
//              if(data.error){
//                  setValues({
//                      ...values,error: data.error,success:false
//                  })
//              }else{
//                  setValues({
//                      ...values,
//                      name:"",
//                      email:"",
//                      password:"",
//                      error:"",
//                      success:true
//                  })
//              }
//          })
//          .catch((err)=> console.log("error in signup"))
//     }

//     return (
//         <div>
//             <img className="logo" src={img} alt="logo" />
//             <hr/>
//             <div className="signup">
//             <form onSubmit={onSubmit} className="form-control form-control-sm w-50 mx-auto" > 
//             <h3 className="text-center mt-3 mb-4 fs-2 fw-bold">Sign-up</h3>
//             <div class="mb-3 mx-auto w-75">
//                     <label for="exampleInputEmail1" class="form-label">Username</label>
//                     <input type="text" class="form-control" placeholder="username" id="exampleInputname" aria-describedby="emailHelp" onChange={handleChange("name")} required />
//                 </div>  
//                 <div class="mb-3 mx-auto w-75">
//                     <label for="exampleInputEmail1" class="form-label">Email address</label>
//                     <input type="email" class="form-control" placeholder="example@gmail.com" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={handleChange("email")} required/>
//                 </div>
//                 <div class="mb-3 mx-auto w-75">
//                     <label for="exampleInputPassword1" class="form-label">Password</label>
//                     <input type="password" placeholder="**********" class="form-control" id="exampleInputPassword1" onChange={handleChange("password")} required />
//                 </div>
//                 {/* <div class="mb-3 mx-auto w-75">
//                     <label for="exampleInputPassword1" class="form-label">Re-enter password</label>
//                     <input type="password" placeholder="**********" class="form-control" id="exampleInputPassword2" onChange={check("repassword")} required />
//                     {
//                         match?(
//                             <p style={{color:"green"}}>Matched</p>
//                         ):(
//                             <p style={{color:"red"}}>Unmatched</p>
//                         )
//                     }
//                 </div> */}
                
//                 {
//                         match?(
//                             <button type="submit" class="btn button" >Submit</button>
//                         ):(
//                             <button disabled type="submit" class="btn button" >Submit</button>
//                         )
//                     }
                
//             </form>
//             </div>

//         </div>
//     )
// }

// export default Signup


import React,{useState} from 'react'
import "./Signup.css"
import img from "./Capture.PNG";
import { signup } from '../helper';

function Signup() {
    const [values,setValues] = useState({
        name:"",
        email:"",
        password:"",
        error:"",
        success: false
    });
    const {name,email,password,error,success} = values;
    const [match, setmatch] = useState(false)
    const check = name => event => {
                if( values.password!=="" && event.target.value === values.password)
                    setmatch(true);
                else
                    setmatch(false);  
            }

    const handleChange = name => event =>{
        setValues({
            ...values,error:false,[name]:event.target.value
        })
    }

    const onSubmit = (event) =>{
        event.preventDefault();
        setValues({
            ...values,error:false
        });
        signup({
            name,
            email,
            password

        })
         .then(data => {
             if(data.error){
                 setValues({
                     ...values,error: data.error,success:false
                 })
             }else{
                 setValues({
                     ...values,
                     name:"",
                     email:"",
                     password:"",
                     error:"",
                     success:true
                 })
             }
         })
         .catch((err)=> console.log("error in signup"))

         
    }

    const signupresult = () =>{
        success ? console.log("successfully signed up"):(console.log("signup failed"));
    }
    return (
        <div>
            <img className="logo" src={img} alt="logo" />
            <hr/>
            <div className="signup">
            <form onSubmit={onSubmit} className="form-control form-control-sm w-50 mx-auto"> 
            <h3 className="text-center mt-3 mb-4 fs-2 fw-bold">Sign-up</h3>
            <div class="mb-3 mx-auto w-75">
                    <label for="exampleInputEmail1" class="form-label">Username</label>
                    <input class="form-control" placeholder="username" id="exampleInputEmail1" value={name} onChange={handleChange("name")} aria-describedby="emailHelp" required />
                </div>  
                <div class="mb-3 mx-auto w-75">
                    <label for="exampleInputEmail1" class="form-label">Email address</label>
                    <input type="email" class="form-control" placeholder="example@gmail.com" id="exampleInputEmail1" value={email} onChange={handleChange("email")} aria-describedby="emailHelp" required />
                </div>
                <div class="mb-3 mx-auto w-75">
                    <label for="exampleInputPassword1" class="form-label">Password</label>
                    <input type="password" placeholder="**********" class="form-control" id="exampleInputPassword1" value={password} onChange={handleChange("password")} required />
                </div>
                
                

                 <div class="mb-3 mx-auto w-75">
                    <label for="exampleInputPassword1" class="form-label">Re-enter password</label>
                    <input type="password" placeholder="**********" class="form-control" id="exampleInputPassword2" onChange={check("repassword")} required />
                    {
                        match?(
                            <p style={{color:"green"}}>Matched</p>
                        ):(
                            <p style={{color:"red"}}>Unmatched</p>
                        )
                    }
                </div>
                
                   {
                        match?(
                            <button type="submit" class="btn button" >Submit</button>
                        ):(
                            <button disabled type="submit" class="btn button"  >Submit</button>
                        )
                    }
            </form>
            </div>

        </div>
    )
}

export default Signup