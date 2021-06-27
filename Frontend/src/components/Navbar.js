import React,{ useState } from 'react';
import "./Nav.css";
import { Link, useHistory } from "react-router-dom";
import Compose from './Compose';
import { useLocation } from "react-router-dom";
import Inbox from "./Inbox";
import img from "./Capture.PNG";
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import DraftsIcon from '@material-ui/icons/Drafts';
import MailIcon from '@material-ui/icons/Mail';
import Email from "./Email";
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import { isAuthenticated, signout } from '../helper';





function Navbar() {
  const [show, setShow] = useState(false);
  const history = useHistory();
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const {user} = isAuthenticated();

  const [state, setstate] = useState("false")



    return ( 
        <div>

          <div className="topnav">
            <Link onClick={() => setstate(true)} className={state?"active":null} to="#">F L I P R - H A C K A T H O N - E M A I L </Link>
            {/* <Link className={history.location.pathname === "/outbox" ? "active":""} to="/outbox">Outbox</Link>
            
            <Link className={history.location.pathname === "/inbox" ? "active" : ""}  to="/inbox">Inbox</Link> */}
            {/* <a href="#about"></a> */}
            {
              user ? (<Link className="userName">welcome {user.email}</Link>):(<Link>Please Login</Link>)
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
  <li> <Link className={history.location.pathname === "/inbox" ? "active":""} to="/inbox">Inbox &nbsp;&nbsp;&nbsp;&nbsp;<MailIcon fontSize="small"  /></Link></li>
  <li> <Link className={history.location.pathname === "/outbox" ? "active":""} to="/outbox">Outbox &nbsp;<DraftsIcon fontSize="small"  /></Link></li>
  <li><a href="#contact">Schedule Mail &nbsp; <AccessTimeIcon fontSize="small"  /></a></li>


</ul>

<div>
{/* <Button className="bttn" variant="info" onClick={handleShow}>
        Compose
      </Button> */}

      <Modal show={show} backdrop="static" aria-labelledby="contained-modal-title-vcenter" centered onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Mail</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Email />
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

export default Navbar;