import React,{useEffect,useState} from 'react'
import { API } from '../backend';
import { isAuthenticated } from '../helper';
import Maillist from './Maillist';
import Navbar from './Navbar';


function Outbox() {
    const [outmails,setOutmails] = useState([]);
    useEffect(()=>{
        fetch(`${API}api/mails`)
         .then(res => res.json())
         .then(data => setOutmails(data))
    },[])
    const {user} = isAuthenticated();
    return (
        <div>
        <Navbar />
            {
                outmails.slice(0).reverse().map((mail)=>(
                    <div>
                      { mail.from === user.email && mail.sent === true ? (<Maillist mailItem={mail} name={`to ${mail.to}`} />):(console.log())}
                      
                    </div>
                ))
            }
                
        </div>
    )
}

export default Outbox
