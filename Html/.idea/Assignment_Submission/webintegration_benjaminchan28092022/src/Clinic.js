import Header from "./Header";
import Footer from "./Footer";
import React from 'react';


export default function Clinic(){
    return(
        <>
        <Header/>
        <section classNameName="about_section layout_padding">
    <div classNameName="container">
      <div classNameName="row">
        <div classNameName="col-md-6">
          <div classNameName="img-box">
            <img src="images/about.png" alt=""/>
          </div>
        </div>
        <div classNameName="col-md-6">
          <div classNameName="detail-box">
            <h2 classNameName="custom_heading">
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