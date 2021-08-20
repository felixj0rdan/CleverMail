import React,{useEffect,useState} from 'react'
import { API } from '../backend';
import { isAuthenticated } from '../helper';
import Loading from './Loading';
import Maillist from './Maillist';
import Navbar from './Navbar';



function Outbox() {
    // console.log(API);

    const [outmails,setOutmails] = useState([]);
    const [reload,setReload] = useState(false);
    useEffect(()=>{
        fetch(`${API}api/mails`)
         .then(res => res.json())
         .then(data => setOutmails(data))
    },[reload])
    const {user} = isAuthenticated();
    if(outmails.length === 0)
    {
        return(<div>
            <Navbar />
                <Loading/>
                    
            </div>)
    }
    else
    {return (
        <div>
        <Navbar />
            {
                outmails.slice(0).reverse().map((mail)=>(
                    <div>
                      { mail.from === user.email && mail.sent === true ? (<Maillist mailItem={mail} name={`to ${mail.to}`} reload={reload} setReload={setReload} />):(console.log())}
                      
                    </div>
                ))
            }
                
        </div>
    )}
}

export default Outbox
