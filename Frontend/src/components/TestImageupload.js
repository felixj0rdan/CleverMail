

import React,{useState,useEffect} from 'react';

import {getAllImages, isAuthenticated} from "../helper";
import { createImage } from '../helper';
import ImageHelper from './ImageHelper';

function TestImageupload() {
  const [images,setImages] = useState([]);
  useEffect(()=>{
    getAllImages()
      .then(data => {
        console.log(data);
        setImages(data)
      })
  },[])

  const {user,token} = isAuthenticated();

  const [values,setValues] = useState({
    name:"",
   
    photo:"",
    loading:false,
    error:"",
    createdImage:"",
    getARedirect:false,
    formData:new FormData()
  });
  
  const {name,loading,error,createdImage,formData} = values;


 

 

 


  const onSubmit = (event) => {
    
    event.preventDefault();
    setValues({...values,error:"",loading: true});
    let obj = {
        name: name,
        image: values.photo
    }
    createImage(user._id,token,formData)
       .then(data => {
         setValues({...values,name:"",photo:"",loading:false,createdImage:name});
         console.log(data)
         
         
       })
  }
  const handleChange = (name) =>(event) => {
    const value = name ==="photo" ? event.target.files[0] : event.target.value;
    formData.set(name,value);
    setValues({...values,[name]:value})
  }

  
  
  

  
  
 

  const warnMsg = () => {
    //
  }

  const createImageForm = () => (
    <form>
      <span>Post photo</span>
      <div className="form-group">
        <label className="btn btn-block btn-success">
          <input
            onChange={handleChange("photo")}
            type="file"
            name="photo"
            accept="image"
            placeholder="choose a file"
          />
        </label>
      </div>
      <div className="form-group">
        <input
          onChange={handleChange("name")}
          name="photo"
          className="form-control"
          placeholder="Name"
          value={name}
        />
      </div>
    
      
  
      <button
        
        type="submit"
        onClick={onSubmit}
        className="btn btn-outline-success mb-3"
      >
        Add Image
      </button>
    </form>
  );
  
  return (
    <div>

      <div className="row bg-dark text-white rounded m-4">
        <div className="col-md-8 offset-md-2 ">
          
          {createImageForm()}
          {
        images.map(img =>(
          <div>
           <ImageHelper image={img} />
          </div>
        ))
      }
          
          
        </div>
      </div>
      
    </div>
  )
}

export default TestImageupload

// import React, { useEffect, useState } from 'react';
// import { createImage, isAuthenticated } from '../helper';


// function TestImageupload() {
//     const {user,token} = isAuthenticated();
//     const [values,setValues] = useState({
//         name:"",
//         photo:"",
//         formData:""
//     })
//     const {name,photo,formData} = values;
//     const onSubmit = (e) => {
//         e.preventDefault();
//         createImage(user._id,token,formData)
//             .then(data =>{
//                 console.log(data);
//             })
//     }
//     const handleChange = (name) =>(event) => {
//         const value = name ==="photo" ? event.target.files[0] : event.target.value;
//         formData.set(name,value);
//         setValues({...values,[name]:value})
//       }
//       const successMsg = () =>{
//         return(
//           <div className="alert alert-success mt-3">
//           <h4> created succesfully</h4>
          
          
//         </div>
//         )
//         }  
        
//     return (
//         <div>
//             <form>
//               <span>Post photo</span>
//               <div className="form-group">
//                 <label className="btn btn-block btn-success">
//                   <input
//                     onChange={handleChange("photo")}
//                     type="file"
//                     name="photo"
//                     accept="image"
//                     placeholder="choose a file"
//                   />
//                 </label>
//               </div>
//               <div className="form-group">
//                 <input
//                   onChange={handleChange("name")}
//                   name="name"
//                   className="form-control"
//                   placeholder="Name"
//                   value={name}
//                 />
//               </div>
              
          
//               <button
                
//                 type="submit"
//                 onClick={onSubmit}
//                 className="btn btn-outline-success mb-3"
//               >
//                 Create Image
//               </button>
//             </form>
//         </div>
//     )
// }

// export default TestImageupload
