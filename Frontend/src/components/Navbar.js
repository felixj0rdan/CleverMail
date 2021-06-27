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

import Email from "./Email";

import MailIcon from '@material-ui/icons/Mail';
import SendIcon from '@material-ui/icons/Send';


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
          <div class="topnav">
            {/* <Link className={history.location.pathname === "/inbox" ? "active" : ""}  to="/inbox">Inbox</Link> */}
            {/* <Link onClick={() => setstate(true)} className={state?"active":null} to="#">Outbox</Link> */}
            {/* <Link className={history.location.pathname === "/outbox" ? "active":""} to="/outbox">Outbox</Link> */}
            {/* <a href="#about"></a> */}
            <Link onClick={() => setstate(true)} className="userName"  to="#">C  L  E  V  E  R  -  M  A  I  L</Link>
            {
              user ? (<Link className="userName1">Welcome {user.email}</Link>):(<Link>Please Login</Link>)
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

<Link className="linkHover"><button onClick={handleShow} className="comp_btn"><SendIcon style={{ fontSize: 22 }} />&nbsp;Compose</button> </Link>
  <li> <Link className={history.location.pathname === "/inbox" ? "active":""} to="/inbox"><MailIcon style={{ fontSize: 22 }} />&nbsp; Inbox</Link></li>
  <li> <Link className={history.location.pathname === "/outbox" ? "active":""} to="/outbox"><DraftsIcon style={{ fontSize: 22 }}  />&nbsp;Outbox </Link></li>
  <li><Link className={history.location.pathname === "/scheduledmail" ? "active":""} to="/scheduledmail"><AccessTimeIcon fontSize="small"/>&nbsp;Scheduled Mails</Link></li>


</ul>

<div>


      <Modal backdrop="static" show={show} onHide={handleClose}>
        <Modal.Header>
          {/* <Modal.Title>Mail</Modal.Title> */}
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