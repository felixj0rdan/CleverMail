import React from 'react'
import "./Maillist.css"

function Maillist({ mailItem , name}) {
console.log(JSON.stringify(mailItem));


return (
<div className="main" >
<div className="card">
<h3 className="email_name">{name}</h3>
{/* {<div>  </div>} */}
<p className="ellipsis"> {mailItem.content}</p>
</div>


</div>


)
}

export default Maillist
