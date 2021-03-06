import React, { useState } from 'react'
import "./Maillist.css"
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import DeleteOutlineSharpIcon from '@material-ui/icons/DeleteOutlineSharp';
import { IconButton } from '@material-ui/core';
// import { isAuthenticated } from '../../../backend/controllers/auth';
import {delmail, isAuthenticated} from '../helper'


function Maillist({ mailItem , name,setReload = f => f,reload=undefined}) {
// console.log(JSON.stringify(mailItem));
const [show, setShow] = useState(false);
const handleClose = () => setShow(false);
const handleShow = () => setShow(true);
const {user} = isAuthenticated();
const [del, setDel] = useState(false)


const yes = () => {
  // console.log(mailItem._id);
  // console.log(user._id);
  delmail(mailItem._id, user._id)
<<<<<<< HEAD
  // window.setTimeout(()=>{
  //     window.location.reload()
  // },3000)
  // setReload(!reload);
  setShow(false)
=======
  // .then(console.log("deleted"))
>>>>>>> 4b31654514e114080653d75b7151143c149b2fad
  setDel(false)
  // await window.location.reload()
  window.setTimeout(() => window.location.reload(), 3500)
}

return (
<div className="main" >
<div onClick={handleShow} className="card">
<div className="d-flex flex cel"> <h3 className="email_name">{name}</h3></div>

<p className="sub_name">Sub: {mailItem.subject} </p>
<p className="ellipsis"  dangerouslySetInnerHTML={{__html:mailItem.content }}></p>


</div>
<div>
<Modal className="modal" show={show} backdrop="static" aria-labelledby="contained-modal-title-vcenter"  centered onHide={handleClose}>
        <Modal.Header variant="primary" closeButton>
          <Modal.Title>{name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p><strong>Subject :</strong> {mailItem.subject}</p>

            <p><strong>Cc :</strong> {mailItem.cc}</p>
            <p><strong>Content :</strong></p>
            <p dangerouslySetInnerHTML={{__html:mailItem.content }}></p>
        </Modal.Body>
        <Modal.Footer>
        <Button variant="outline-danger" className="butt" onClick={() => setDel(true)}><DeleteOutlineSharpIcon style={{fontSize:"32px"}} className="del"/></Button>
        </Modal.Footer>
        {
          del?(
            <div className="ques"><h5>Are you sure to delete this mail??</h5><div className="b"><button onClick={() => {
              yes();
              setShow(false);
              setReload(!reload)
            }} className="btn btn-danger">YES</button>
            <button onClick={() => setDel(false)} className="btn btn-outline-dark">NO</button></div></div>
          ):(console.log())
        }
        
      </Modal>
</div>

</div>


)
}

<<<<<<< HEAD
export default Maillist
=======
export default Maillist

>>>>>>> 4b31654514e114080653d75b7151143c149b2fad
