import Header from "./Header";
import Footer from "./Footer";
import { useState } from "react";

export default function Pet(){
  const[petList, setPetList] = useState([
    {"name":"Dog","price":50, "img": "images/g-1.png"},
    {"name":"Cat","price":60, "img": "images/g-2.png"},
    {"name":"Mouse","price":70, "img": "images/g-3.png"},
    {"name":"Spider","price":80, "img": "images/g-4.png"},
    {"name":"Snake","price":90, "img": "images/g-5.png"},

    ]);

    return(
        <>
        <Header/>
        <section className="gallery-section layout_padding">
          <div className="container">
            <h2>
              Our Gallery
            </h2>
          </div>
          <div className="container ">
            {
             petList.map((petObj, index)=>{
              return(
                <div className="img_box box-1">
                  <img src={petObj.img}alt=""/>
                  <h3>Pet Type: {petObj.name} </h3>
                  <p>Cost: {petObj.price}</p>
                </div>
          )
        })
      }
    </div>
  </section>
  <section className="info_section layout_padding2">
    <div className="container">
      <div className="info_items">
        <a href="">
          <div className="item ">
            <div className="img-box box-1">
              <img src="" alt=""/>
            </div>
            <div className="detail-box">
              <p>
                Location
              </p>
            </div>
          </div>
        </a>
        <a href="">
          <div className="item ">
            <div className="img-box box-2">
              <img src="" alt=""/>
            </div>
            <div className="detail-box">
              <p>
                +02 1234567890
              </p>
            </div>
          </div>
        </a>
        <a href="">
          <div className="item ">
            <div className="img-box box-3">
              <img src="" alt=""/>
            </div>
            <div className="detail-box">
              <p>
                demo@gmail.com
              </p>
            </div>
          </div>
        </a>
      </div>
    </div>
  </section>
        <Footer/>
        
        
        </>


    )
}