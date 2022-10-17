import { useState } from "react";
import React from 'react';
import { useNavigate } from "react-router-dom";
import { httpPostWithoutHeader } from "./HTTPFetch";


export default function Login(){

    const[email, setEmail] = useState("");
    const[password, setPassword]=useState("");
    const[message, setMessage]=useState("StandBy");
    let navigate = useNavigate(); 

    const loginAPI=()=>{
        if(email ==""){
            alert("Email is Empty. Please enter the correct email")
            return;
        }else if(password==""){
            alert("Password is Empty. Please Enter a Password")
            return;
        }
        let params = {
            "email": email,
            "password": password
            }
            console.log(email);
            console.log(password)
            httpPostWithoutHeader("login", params)
                .then(res=>{
                    if(!res.ok){
                        throw res
                    }
                    res.json().then(res=>{
                        localStorage.setItem("full_response",JSON.stringify(res));
                        localStorage.setItem("JWToken",res['token']);
                        localStorage.setItem("userId",res['id']);
                        navigate("/home");
                        console.log(res);
                    })
            
                  }
                    ).catch(err=>{
                        alert("Error while login");
                        //err.json().then(alert("Error while login"))
                    })

        }
        
        return(
                <div align='center'>
                        <input type="text" className = "email" onChange={(e)=> setEmail(e.target.value)} placeholder="Enter the email" />                        <br></br>
                        <br></br>
                        <input type="text" className = "password" onChange={(e)=> setPassword(e.target.value)} placeholder="Enter the password"/>
                        <br></br>
                        <br></br>
                        <button type="submit" onClick={loginAPI}>Login</button>
            
                </div>

                
                               
        )
        
    }
    

    
        


