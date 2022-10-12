import { useState } from "react";
import React from 'react';

export default function Login(){

    const[email, setEmail] = useState("");
    const[password, setPassword]=useState("");
    const[message, setMessage]=useState("StandBy");

    const loginAPI=()=>{

            let params = {
                email: email,
                password: password
            }
            fetch(
            "http://localhost:8080/user/login",
            {
                method:"POST",
                headers:{
                    'Content-Type':'application/json'
                },
                body:JSON.stringify(params)}
                ).then(res=>res.json())
                .then(res=>{
                    console.log(res);
                    setEmail(res['email']);
                    setPassword(res['password']);
                    setMessage(res['message']);
                })

        }
        
        return(
                <div align='center'>
                        <input type="text" name = "email" onChange={(e)=> setEmail(e.target.value)} placeholder="Enter the email" />
                        <br></br>
                        <br></br>
                        <input type="text" name = "password" onChange={(e)=> setPassword(e.target.value)} placeholder="Enter the password"/>
                        <br></br>
                        <br></br>
                        <button type="submit" onClick={loginAPI}>Submit to Spring</button>
                
                        <h2>Output</h2>
                        <div>
                            <p><i>{message}</i></p>
                            <p><i>{email}</i></p>
                            <p><i>{password}</i></p>
                        </div>
                </div>

                
                               
        )
        
    }
    

    
        


