import React from 'react'
import Loader from "react-loader-spinner";
function Loading() {

    return (
        <div style={{textAlign: "center"}}>
            <Loader  type="ThreeDots" color="#00BFFF" height={80} width={80} />
        </div>
    )
}

export default Loading
