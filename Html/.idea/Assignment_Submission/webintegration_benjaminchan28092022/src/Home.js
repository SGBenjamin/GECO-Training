import Header from "./Header";
import Footer from "./Footer";
import { useState, useEffect } from "react";
import React from 'react';
import { useNavigate } from "react-router-dom";
import { httpGetWithHeader, httpPostWithHeader } from "./HTTPFetch";


function Home(){
    const[userList,serUserList] = useState([]);
   
    let navigate = useNavigate(); 
    const checkLoginToken=()=>{
        let token = localStorage.getItem("JWToken");
        if(token == undefined || token == ""){
           return false;
        }
        return true;
  }
  useEffect(()=>{
     if(!checkLoginToken()){
        navigate("/login");
     }
     },[])


    return(
        <>
        <Header/>
            <section className=" slider_section position-relative">
                <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                    <ol className="carousel-indicators">
                        <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="3"></li>
                    </ol>
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <div className="container-fluid">
                                <div className="row">
                                    <div className="col-md-4 offset-md-2">
                                        <div className="slider_detail-box">
                                            <h1>
                                                Professional
                                                <span>
                                                    Care Your Pet
                                                </span>
                                            </h1>
                                            <p>
                                            Lorem Ipsum is simply dummy text of the printing and
                                            typesetting industry.
                                            Lorem Ipsum has been the industry's standard dummy text ever
                                            </p>
                                            <div className="btn-box">
                                            <a href="" className="btn-1">
                                                Buy now
                                            </a>
                                            <a href="" className="btn-2">
                                                Contact
                                            </a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="slider_img-box">
                                            <img src="images/slider-img.png" alt=""/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <div className="container-fluid">
                                <div className="row">
                                    <div className="col-md-4 offset-md-2">
                                        <div className="slider_detail-box">
                                            <h1>
                                                Professional
                                                <span>
                                                Care Your Pet
                                                </span>
                                            </h1>
                                            <p>
                                            Lorem Ipsum is simply dummy text of the printing and
                                            typesetting industry.
                                            Lorem Ipsum has been the industry's standard dummy text ever
                                            </p>
                                            <div className="btn-box">
                                            <a href="" className="btn-1">
                                                Buy now
                                            </a>
                                            <a href="" className="btn-2">
                                                Contact
                                            </a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="slider_img-box">
                                            <img src="images/slider-img.png" alt=""/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <div className="container-fluid">
                            <div className="row">
                                    <div className="col-md-4 offset-md-2">
                                        <div className="slider_detail-box">
                                            <h1>
                                            Professional
                                            <span>
                                                Care Your Pet
                                            </span>
                                            </h1>
                                            <p>
                                            Lorem Ipsum is simply dummy text of the printing and
                                            typesetting industry.
                                            Lorem Ipsum has been the industry's standard dummy text ever
                                            </p>
                                            <div className="btn-box">
                                                <a href="" className="btn-1">
                                                    Buy now
                                                </a>
                                                <a href="" className="btn-2">
                                                    Contact
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="slider_img-box">
                                            <img src="images/slider-img.png" alt=""/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <div className="container-fluid">
                                <div className="row">
                                    <div className="col-md-4 offset-md-2">
                                        <div className="slider_detail-box">
                                            <h1>
                                                Professional
                                                <span>
                                                    Care Your Pet
                                                </span>
                                            </h1>
                                            <p>
                                            Lorem Ipsum is simply dummy text of the printing and
                                            typesetting industry.
                                            Lorem Ipsum has been the industry's standard dummy text ever
                                            </p>
                                            <div className="btn-box">
                                                <a href="" className="btn-1">
                                                    Buy now
                                                </a>
                                                <a href="" className="btn-2">
                                                    Contact
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="slider_img-box">
                                            <img src="images/slider-img.png" alt=""/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </section>

        <section className="about_section layout_padding">
            <div className="container">
            <div className="row">
                <div className="col-md-6">
                <div className="img-box">
                    <img src="images/about.png" alt=""/>
                </div>
                </div>
                <div className="col-md-6">
                <div className="detail-box">
                    <h2 className="custom_heading">
                    About Our Pets
                    <span>
                        Clinic
                    </span>
                    </h2>
                    <p>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                    industry's standard dummy text ever since theLorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the
                    </p>
                    <div>
                    <a href="">
                        About More
                    </a>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </section>
        <Footer/>
        </>
        
    );

    
}

export default Home;