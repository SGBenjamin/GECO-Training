import { useState } from "react";
import React from 'react';

export default function Delete(){
    const[message, setMessage]=useState("StandBy");
    const[userid, setUserId]=useState("");
    const deleteAPI=(userid)=>{
            fetch(
            "http://localhost:8080/user/delete/"+userid,
            {
                method:"POST",
                headers:{
                    'Content-Type':'application/json'
                }}
                ).then(res=>res.json())
                .then(res=>{
                    console.log(res.status);
                    setMessage(res['message']);
            })
        }
        
        return(
                <div align='center'>
                        <select name = "userid" onChange={(e)=>setUserId(e.target.value)}>
                            <option defaultValue={""}hidden></option>
                            <option value="1"> User 1</option>
                            <option value="2"> User 2</option>
                            <option value="3"> User 3</option>
                            <option value="4"> User 4</option>
                            <option value="5"> User 5</option>
                            <option value="6"> User 6</option>
                            <option value="7"> User 7</option>
                            <option value="8"> User 8</option>
                            <option value="9"> User 9</option>
                            <option value="10"> User 10</option>
                        </select>
                        <br></br>
                        <br></br>
                        <button type="submit" onClick={deleteAPI}>Delete User</button>
                
                        <h2>Output</h2>
                        <div>
                            <p><i>Status: {message}</i></p>
                            <p><i>User Deleted: {userid}</i></p>

                        </div>
                </div>

                
                               
        )
        
    }
    

    
        


