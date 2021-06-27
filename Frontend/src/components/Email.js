import React, { useState } from 'react';
import SendIcon from '@material-ui/icons/Send';
// import Editor from "./Editor";
import { isAuthenticated, sendmail } from '../helper';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import "./Editor.css";
import "./toggle.css"
import parse from 'html-react-parser';
import "./toggle.css";

// import Context from '@ckeditor/ckeditor5-core/src/context';
// import ClassicEditor from '@ckeditor/ckeditor5-editor-classic/src/classiceditor';
// import Bold from '@ckeditor/ckeditor5-basic-styles/src/bold';
// import Italic from '@ckeditor/ckeditor5-basic-styles/src/italic';
// import Essentials from '@ckeditor/ckeditor5-essentials/src/essentials';
// import Paragraph from '@ckeditor/ckeditor5-paragraph/src/paragraph';

function Email() {
    const dat = new Date();
    // console.log(dat.getUTCDate());
    const [content, setContent] = useState("");
    const handleOnChange = (e, editor) => {
        const data = editor.getData()
        // setContent(data)
        setMail({...mail,content:data});
    }
    
    const {user} = isAuthenticated();
    const [mail, setMail] = useState({
        from: user.email,
        to: "",
        cc: "",
        subject: "no subject",
        scheduler: "",
        content: "",
        sent:true,
        time: "",
        date: "",
    });
    
    const {from,to,cc,subject,scheduler,sent,time,date} = mail;
    
    const handleChange = name => event =>{
        
        setMail({
            ...mail,[name]:event.target.value
        })
    }
    
    const [schedule, setSchedule] = useState(false);
    const togg = () => {
        // console.log(!schedule);
        setSchedule(!schedule)
        setMail({
            ...mail,sent:!sent
        })
        // console.log(mail);
    }

    const onSendMail = (e) => {
        e.preventDefault();
        let cont = content
        // console.log(cont);
        // setMail({...mail,content:cont});
        console.log(mail)

        sendmail(mail)
        .then(()=> setMail({
            ...mail,
            from:"",
            to:"",
            cc:"",
            subject:"no subject",
            schedule:"",
            content:"",
            sent: true,
            date:"",
            time:"",
            
        }))
        window.setTimeout(() => window.location.reload(), 2500)
    }



    
    return (
<div style={{backgroundColor: "#fafafa"}} className="form-control form-control-sm mx-auto ">
    <h2 className="text-center">Mail</h2>
    <div className="input-group mb-3 mx-auto w-75">
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
    <div class="d-flex flex mx-auto w-75">
        <p>Scheduled: </p>
        <label class="switch ">
            <input type="checkbox" onChange={() => (togg())}/>
            <span class="slider round"></span>
        </label>
    </div>
    {
        schedule?(<div className="mb-3 mx-auto w-75" >
            <label className="form-label">Time:</label>
            <input type="time" value={time} onChange={handleChange("time")} className="form-control tim" required/>
            <label className="form-label">Date:</label>
            <input type="date" value={date} onChange={handleChange("date")} className=" form-control dat" required/>          
        </div>):(console.log())
    }
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

