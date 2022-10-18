import './App.css';
import { useEffect,useState } from 'react';
import { NavLink } from 'react-router-dom';
import React from 'react';
import { useNavigate } from "react-router-dom";
import { httpLogoutWithHeader, httpPostWithHeader } from './HTTPFetch';


function Header(){
    let userId = localStorage.getItem("userId");
    let token = localStorage.getItem("JWToken");
    const[isLoggedIn,setIsLoggedIn] = useState(false);
    let navigate = useNavigate(); 

    const checkLoginToken=()=>{
        if(token==undefined||token==""){
            setIsLoggedIn(false);
        }else{
            setIsLoggedIn(true);
        }
    }
    
    const logout_api=()=>{
        let params={
            "userid":userId,
            "JWToken": token
        }
        httpLogoutWithHeader(userId, params)
              .then(res=>{
                    if(!res.ok){
                       throw res;
                    }
                     return res.json();
                    }
                 )
                 .then(ress2=>{
                    localStorage.removeItem("JWToken");
                    localStorage.removeItem("userId");
                    localStorage.removeItem("full_response");
                    navigate("/login");
               }).catch(e=>{
               e.json().then(error=>{
                  console.log("Error while trying to logout",error)
                  alert("Error while trying to logout");
               });
            })
         }
    useEffect(checkLoginToken,[]);
    return(
        <header className="header_section">
        <div className="container-fluid">
            <nav className="navbar navbar-expand-lg custom_nav-container ">
            <NavLink to="/home">
                <img src="images/logo.png" alt=""/>
                <span>
                Petology
                </span>
            </NavLink>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <div className="d-flex mx-auto flex-column flex-lg-row align-items-center">
                <ul className="navbar-nav  ">
                    <li className="nav-item active">
                    <NavLink className="nav-link" to="/home">Home <span className="sr-only">(current)</span></NavLink>
                    </li>
                    <li className="nav-item">
                    <NavLink className="nav-link" to="/service">Service </NavLink>
                    </li>
                    <li className="nav-item">
                    <NavLink className="nav-link" to="/pet">Pet's gallery </NavLink>
                    </li>
                    <li className="nav-item">
                    <NavLink className="nav-link" to="/clinic"> Clinic</NavLink>
                    </li>
                    <li className="nav-item">
                    <NavLink className="nav-link" to="/contact">Contact us</NavLink>
                    </li>
                    <li className="nav-item">
                    <NavLink className="nav-link" to="/buy"> Buy now </NavLink>
                    </li>
                    {isLoggedIn?<>
                         <li className="nav-item">
                            <NavLink onClick={logout_api} className="nav-link" to="#">Logout</NavLink>
                         </li></>
                    :null}
                    {!isLoggedIn?<>
                         <li className="nav-item">
                            <NavLink className="nav-link" to="/login">Login</NavLink>
                         </li>
                        </>
                    :null}
                    
                </ul>
                <form className="form-inline my-2 my-lg-0 ml-0 ml-lg-4 mb-3 mb-lg-0">
                    <button className="btn  my-2 my-sm-0 nav_search-btn" type="submit"></button>
                </form>
                </div>
                <div className="quote_btn-container  d-flex justify-content-center">
                <NavLink to="/home">
                    Call: +01 1234567890
                </NavLink>
                </div>
            </div>
            </nav>
        </div>
        </header>

    );
    

}

export default Header;