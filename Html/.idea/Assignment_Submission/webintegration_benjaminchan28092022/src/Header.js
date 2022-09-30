import './App.css';
import { useEffect,useState } from 'react';
import { NavLink } from 'react-router-dom';
function Header(prop){
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