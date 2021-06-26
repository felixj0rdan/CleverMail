import React,{ useState } from 'react';
import "./Nav.css"
import { Link, useHistory } from "react-router-dom";
import Compose from './Compose';
import { useLocation } from "react-router-dom"
import Inbox from "./Inbox"
import img from "./Capture.PNG"
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import Email from "./Email";
import { isAuthenticated, signout } from '../helper';





function Navbar() {
  const [show, setShow] = useState(false);
  const history = useHistory();
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const {user} = isAuthenticated();





    return ( 
        <div>
          <div class="topnav">
            <Link className={history.location.pathname === "/inbox" ? "active" : ""}  to="/inbox">Inbox</Link>
            {/* <Link onClick={() => setstate(true)} className={state?"active":null} to="#">Outbox</Link> */}
            <Link className={history.location.pathname === "/outbox" ? "active":""} to="/outbox">Outbox</Link>
            {/* <a href="#about"></a> */}
            {
              user ? (<Link>welcome {user.email}</Link>):(<Link>Please Login</Link>)
            }
            {
              user ? (
                <Link className="signout"><div onClick={()=>{
                    signout(()=>{
                        history.push("/login")
                    })
                }}>Signout</div></Link>
              ):(
                <Link className="signout" to="/">Login</Link>
              )
            }
          </div>
          <ul>

  <li><Link onClick={handleShow}>Compose &#10148;</Link></li>
  <li><a href="#contact">Schedule Mail</a></li>

</ul>

<div>
{/* <Button className="bttn" variant="info" onClick={handleShow}>
        Compose
      </Button> */}

      <Modal backdrop="static" show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Mail</Modal.Title>
        </Modal.Header>
        <Modal.Body><Email /></Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
</div>


        </div>
    )
}

export default Navbar;





