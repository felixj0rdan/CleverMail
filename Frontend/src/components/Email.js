import React, { useState } from 'react';
import SendIcon from '@material-ui/icons/Send';
// import Editor from "./Editor";
import { isAuthenticated, sendmail } from '../helper';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import "./Editor.css";
import parse from 'html-react-parser';

function Email() {
    
    const [content, setContent] = useState("");

    const handleOnChange = (e, editor) => {
        const data = editor.getData()
        setContent(data)
    }

    const {user} = isAuthenticated();
    const [mail, setMail] = useState({
        from: user.email,
        to: "",
        cc: "",
        subject: "",
        scheduler: "",
        content: "",
    });

    const {from,to,cc,subject,scheduler} = mail;

    const handleChange = name => event =>{

        setMail({
            ...mail,[name]:event.target.value
        })
    }


    const onSendMail = (e) => {
        e.preventDefault();
        let cont = content
        console.log(cont);
        setMail({...mail,content:cont});
        console.log(mail)

        sendmail(mail)
        .then(data => console.log(data))
    }



    
    return (
<div style={{backgroundColor: "#fafafa"}} className="form-control form-control-sm mx-auto ">
    <h2 className="text-center">Mail</h2>
    <div class="input-group mb-3 mx-auto w-75">
        <span class="input-group-text" id="basic-addon1">To</span>
        <input type="text" class="form-control" placeholder="to" aria-label="Username" value={to} onChange={handleChange("to")} aria-describedby="basic-addon1" />
    </div>
    <div class="input-group  mb-3 mx-auto w-75">
        <span class="input-group-text" id="basic-addon1">Cc</span>
        <input type="text" class="form-control mx-" placeholder="cc" aria-label="Username" value={cc} onChange={handleChange("cc")} aria-describedby="basic-addon1" />
    </div>
    <div class="input-group mb-3 mx-auto w-75">
        <span class="input-group-text" id="basic-addon1">Subject</span>
        <input type="text" class="form-control" placeholder="subject" aria-label="Username" value={subject} onChange={handleChange("subject")} aria-describedby="basic-addon1" />
    </div>
    <div class="mx-auto w-75">   
    <label for="exampleFormControlInput1" class="form-label">Scheduler</label>
    <select class="form-select mb-4" aria-label="Default select example" value={scheduler} onChange={handleChange("scheduler")} >
        <option selected>Open this select menu</option>
        <option value="1">Recurring Schedule</option>
        <option value="2">Weekly Schedule</option>
        <option value="3">Monthly Schedule</option>
        <option value="4">Yearly Schedule</option>
    </select>
    </div>
    {/* <div class="mb-3 mx-auto w-75">
        <label for="exampleFormControlInput1" class="form-label">Email address</label>
        <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
    </div> */}
    <div class="mb-3 mx-auto w-75 ">
        <label for="exampleFormControlTextarea1" class="form-label">Example textarea</label>
        <CKEditor  editor={ClassicEditor} value={content} onChange={handleOnChange}  />
    </div>
    <div class="text-center m-4 ">
        <button type="button"  className="btn btn-info " onClick={onSendMail} >Send <SendIcon fontSize="small" /></button>
    </div>
</div>
    )
}

export default Email;
