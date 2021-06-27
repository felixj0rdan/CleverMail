import React,{useState} from 'react'
import "./Maillist.css";
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button';


function Maillist({ mailItem , name}) {
// console.log(JSON.stringify(mailItem));
const [show, setShow] = useState(false);
const handleClose = () => setShow(false);
const handleShow = () => setShow(true);

return (
<div className="main" >
<div onClick={handleShow} className="card">
<h3 className="email_name">{name}</h3>
<p className="sub_name">Sub: {mailItem.subject} </p>
<div className="ellipsis"  dangerouslySetInnerHTML={{__html:mailItem.content }}></div>

	{/* <div className="ellipsis" dangerouslySetInnerHTML={{__html:mailItem.subject }}></div> */}

     

</div>
<div>
<Modal className="modal" show={show} backdrop="static" aria-labelledby="contained-modal-title-vcenter"  centered onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p><strong>Subject :</strong> {mailItem.subject}</p>

            <p><strong>Cc :</strong> {mailItem.cc}</p>
            <p><strong>Content :</strong></p>
            <p dangerouslySetInnerHTML={{__html:mailItem.content }}></p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
</div>




</div>


)
}

export default Maillist
