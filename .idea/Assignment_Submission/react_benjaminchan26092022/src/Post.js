import { useState } from "react";
import Footer from "./Footer";
import Header from "./Header";

function Array(){
    const[fname, setFname] = useState('');
    const [job, setJob] = useState('');
    
    const inputInfo = (e) =>{
        e.preventDefault()
        fetch(
            "https://reqres.in/api/users",
            {method:'POST',
            headers:{
                'Accept': 'application/json, text/plain, */*',
                'Content-Type':'application/json;charset=utf-8'
                },
            body:JSON.stringify({fname, job})
            }).then(res=>res.json())
            .then(res2=>{
                console.log(res2);
                document.getElementById("response").innerHTML = JSON.stringify(res2);
            })
    }
    

    return(
        <div align='center'>
            <div id="response" ></div>
            <form onSubmit={inputInfo}>
                <input type="text" name = "name" value={fname} onChange={(e)=> setFname(e.target.value)} placeholder="Enter the Name" />
                <input type="text" name = "job" value={job} onChange={(e)=> setJob(e.target.value)} placeholder="Enter the Job Title"/>
                <button type="submit">Submit</button>
            </form> 
        </div>
        
       
    )
}

export default Array;