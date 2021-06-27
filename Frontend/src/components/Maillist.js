import React, { useState } from 'react'
import "./Maillist.css"
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import DeleteOutlineSharpIcon from '@material-ui/icons/DeleteOutlineSharp';
import { IconButton } from '@material-ui/core';
// import { isAuthenticated } from '../../../backend/controllers/auth';
import {delmail, isAuthenticated} from '../helper'
function Maillist({ mailItem , name}) {
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
  .then(window.location.reload())
  setDel(false)
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
            <div className="ques"><h5>Are you sure to delete this mail??</h5><div className="b"><button onClick={() => yes()} className="btn btn-danger">YES</button>
            <button onClick={() => setDel(false)} className="btn btn-outline-dark">NO</button></div></div>
          ):(console.log())
        }
        
      </Modal>
</div>

</div>


)
}

export default Maillist

// import React, { useState } from 'react'
// import "./Maillist.css"
// import Modal from 'react-bootstrap/Modal'
// import Button from 'react-bootstrap/Button'
// import DeleteOutlineSharpIcon from '@material-ui/icons/DeleteOutlineSharp';
// import { IconButton } from '@material-ui/core';
// // import { isAuthenticated } from '../../../backend/controllers/auth';
// import {delmail, isAuthenticated} from '../helper'
// function Maillist({ mailItem , name}) {
// console.log(JSON.stringify(mailItem));
// const [show, setShow] = useState(false);
// const handleClose = () => setShow(false);
// const handleShow = () => setShow(true);
// const {user} = isAuthenticated();

// const getID = () => {
//   console.log(mailItem._id);
//   console.log(user._id);
//   const status = prompt("Are you sure you want to delete this mail??")
//   if(status === "yes")
//   {delmail(mailItem._id, user._id)
//   .then(window.location.reload())}
//   else
//   {console.log("canceled");}
// }

// // const dispContent = () => {
// //     let el = document.getElementById('cont')
// //     el?.insertAdjacentHTML('afterend', mailItem.content);
// //     // el.innerHTML = mailItem?.content
// //     // var cont = el.firstChild;
// // }

// return (
// <div className="main" >
// <div onClick={handleShow} className="card">
// <div className="d-flex flex cel"> <h3 className="email_name">{name}</h3></div>

// <p className="sub_name">Sub: {mailItem.subject} </p>
// <p className="ellipsis"  dangerouslySetInnerHTML={{__html:mailItem.content }}></p>


// </div>
// <div>
// <Modal className="modal" show={show} backdrop="static" aria-labelledby="contained-modal-title-vcenter"  centered onHide={handleClose}>
//         <Modal.Header variant="primary" closeButton>
//           <Modal.Title>{name}</Modal.Title>
//         </Modal.Header>
//         <Modal.Body>
//           <p><strong>Subject :</strong> {mailItem.subject}</p>

//             <p><strong>Cc :</strong> {mailItem.cc}</p>
//             <p><strong>Content :</strong></p>
//             <p dangerouslySetInnerHTML={{__html:mailItem.content }}></p>
//         </Modal.Body>
//         <Modal.Footer>
//         <Button variant="danger" className="butt" onClick={() => getID()}><DeleteOutlineSharpIcon style={{fontSize:"32px"}} className="del"/></Button>
//         </Modal.Footer>
//         <p>del message</p>
//       </Modal>
// </div>



// </div>


// )
// }

// export default Maillist
