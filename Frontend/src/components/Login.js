import React,{useState} from 'react'
import "./Login.css"
import img from "./Capture.PNG";
import { signin,authenticate,isAuthenticated } from "../helper";
import { Redirect ,Link} from 'react-router-dom';
import Navbar from './Navbar';



function Login() {
    const [values,setValues] = useState({
        email:"",
        password:"",
        error:"",
        loading:false,
        didRedirect:false
        
    });

    const {email,password,error,loading,didRedirect} = values;

    const {user} = isAuthenticated();


    const handleChange = name => event =>{
        setValues({
            ...values,error:false,[name]:event.target.value
        })
    }

    const onSubmit = (e) => {
        e.preventDefault();
        setValues({
            ...values,error:false,loading: true
        });
        signin({
            email,
            password
        })
        .then(data => {
            if(data.error){
                setValues({
                    ...values,error: data.error,loading:false
                })
            }else{
                authenticate(data,()=>{
                    setValues({
                        ...values,
                        didRedirect: true
                    })

                })//when we have a next we can use a callback function here;
               
            }
        })
        .catch((err)=> console.log("error in signin"))

        //return Redirect("/home");
    }

    const performRedirect = () => {
        if(isAuthenticated && didRedirect){
            return <Redirect to="/inbox" />
        }
    }

    if(!user){
        return (
            <div >
    
                {/* <img className="logo" src={img} alt="logo" /> */}
                
                {/* <hr/> */}
                <div className="signup">
                <form className="form-control form-control-sm w-50 mx-auto"> 
                <h3 className="text-center mt-3 mb-4 fs-2 fw-bold">Login</h3>
                    <div class="mb-3 mx-auto w-75">
                        <label for="exampleInputEmail1" class="form-label">Email address</label>
                        <input type="email" class="form-control" placeholder="example@gmail.com" id="exampleInputEmail1" value={email} onChange={handleChange("email")} aria-describedby="emailHelp" />
                    </div>
                    <div class="mb-3 mx-auto w-75">
                        <label for="exampleInputPassword1" class="form-label">Password</label>
                        <input type="password" placeholder="" class="form-control" value={password} onChange={handleChange("password")} id="exampleInputPassword1" />
                    </div>
                    
                    
                    <button type="submit" onClick={onSubmit} class="btn button">Submit</button>
                    <div className="text-center" style={{display:"flex",margin:"20px"}}>
                    <p style={{marginRight:"5px"}}>If not signed up</p><Link to="/signup">Signup</Link>
                    </div>
                    {
                        performRedirect()
                    }
                </form>
                </div>
    
            </div>
        )
    }else{
        return <Redirect to="/inbox" />
    }
}

export default Login
