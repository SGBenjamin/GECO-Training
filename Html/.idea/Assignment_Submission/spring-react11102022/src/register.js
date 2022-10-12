import { useState } from "react";
import React from 'react';

export default function Register(){

    const[email, setEmail] = useState("");
    const[password, setPassword]=useState("");
    const[username, setUsername] = useState("");
    const[address, setAddress] = useState("");
    const[mobileNum, setMobilNum] = useState("");

    const[message, setMessage]=useState("StandBy");

    const registerAPI=()=>{

            let params = {
                username:username,
                address:address,
                mobileNum:mobileNum,
                email:email,
                password:password
            
            }
            fetch(
            "http://localhost:8080/user/newuser",
            {
                method:"POST",
                headers:{
                    'Content-Type':'application/json'
                },
                body:JSON.stringify(params)}
                ).then(res=>res.json())
                .then(res=>{
                    console.log(res);
                    
                    setUsername(res['username']);
                    setAddress(res['address']);
                    setMobilNum(res['mobilNum']);
                    setEmail(res['email']);
                    setPassword(res['password']);
                    setMessage(res['message']);
                })

        }
        
        return(
                <div align='center'>
                        <input type="text" name = "username" onChange={(e)=> setUsername(e.target.value)} placeholder="Enter the Username"/>
                        <input type="text" name = "Address" onChange={(e)=> setAddress(e.target.value)} placeholder="Enter the Address" />
                        <input type="text" name = "mobileNum" onChange={(e)=> setMobilNum(e.target.value)} placeholder="Enter the Mobile Number"/>
                        <input type="text" name = "email" onChange={(e)=> setEmail(e.target.value)} placeholder="Enter the email" />
                        <input type="text" name = "password" onChange={(e)=> setPassword(e.target.value)} placeholder="Enter the password"/>
                        <button type="submit" onClick={registerAPI}>Register New User</button>
                
                        <h2>Output</h2>
                        <div>
                            <p><i>Message: {message}</i></p>
                     
                        </div>
                </div>

                
                               
        )
        
    }
    

    
        


