import { useState } from "react";
import Header from "./Header";

function Logout(){
    const storeInfo =()=>{
        localStorage.setItem("username","Benjamin");
        window.location.reload(false);
    }

    const clearInfo = () =>{
        localStorage.clear();
        window.location.reload(false);
    }

    return(
        <>
        <div align='center'>
            <button onClick={storeInfo}>Store Login information</button>
            <button onClick={clearInfo}>Clear Login information</button>
        </div>
        </>
        
    
    )
    
}

export default Logout;