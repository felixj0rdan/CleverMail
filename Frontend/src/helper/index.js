import {API} from "../backend";

export const signup = (user) => {
    return  fetch(`${API}api/signup`,{
        method:"POST",
        headers:{
            Accept:"application/json",
            "Content-Type":"application/json"
        },
        body: JSON.stringify(user)

    })
    .then(response => {
        return response.json();
    })
    .catch(err => console.log(err))
}

export const signin = (user) => {
    return  fetch(`${API}api/signin`,{
        method:"POST",
        headers:{
            Accept:"application/json",
            "Content-Type":"application/json"
        },
        body: JSON.stringify(user)

    })
    .then(response => {
        return response.json();
    })
    .catch(err => console.log(err))
}

export const authenticate = (data,next) =>{
    if(typeof window !== "undefined"){
        localStorage.setItem("jwt",JSON.stringify(data))
        next();
    }
}

export const signout = (next) => {
    if(typeof window !== "undefined"){
        localStorage.removeItem("jwt")
        next();
        return fetch(`${API}/signout`,{
            method:"GET"
            
        })
        .then(response=>{
            console.log("signout success");
            //return response.json();
        })
        .catch(err=>console.log(err))
    }
}




export const isAuthenticated = () => {
    if (typeof window == "undefined") {
      return false;
    }
    if (localStorage.getItem("jwt")) {
      return JSON.parse(localStorage.getItem("jwt"));
    } else {
      return false;
    }
  };


export const sendmail = (mail) => {
    return  fetch(`${API}api/sendMail`,{
        method:"POST",
        headers:{
            Accept:"application/json",
            "Content-Type":"application/json"
        },
        body: JSON.stringify(mail)

    })
    .then(response => {
        return response.json();
    })
    .catch(err => console.log(err))
}

export const delmail = (mailId, userId) => {
    return  fetch(`${API}api/mails/${mailId}/${userId}`,{
        method:"DELETE",
        headers:{
            Accept:"application/json",
            "Content-Type":"application/json"
        },
        // body: JSON.stringify(mail)

    })
    .then(response => {
        return response.json();
    })
    .catch(err => console.log(err))
}

export const updateMail = (mailId) => {
    return  fetch(`${API}api/updatemail/${mailId}/`,{
        method:"PUT",
        headers:{
            Accept:"application/json",
            "Content-Type":"application/json"
        },
        // body: JSON.stringify(mail)

    })
    .then(response => {
        return response.json();
    })
    .catch(err => console.log(err))
}