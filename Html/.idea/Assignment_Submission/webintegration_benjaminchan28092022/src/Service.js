import Header from "./Header";
import Footer from "./Footer";


export default function Service(){
    return(
        <>
        <Header/>

        <section className="service_section layout_padding">
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-6 offset-md-2">
          <h2 className="custom_heading">
            Our <span>Services</span>
          </h2>
          <div className="container layout_padding2">
            <div className="row">
              <div className="col-md-4">
                <div className="img_box">
                  <img src="images/s-1.png" alt=""/>
                </div>
                <div className="detail_box">
                  <h6>
                    Pet Care
                  </h6>
                  <p>
                    onsectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                    enim ad minim veniam, quis nostrud exe
                  </p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="img_box">
                  <img src="images/s-2.png" alt=""/>
                </div>
                <div className="detail_box">
                  <h6>
                    Pet Hotel
                  </h6>
                  <p>
                    onsectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                    enim ad minim veniam, quis nostrud exe
                  </p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="img_box">
                  <img src="images/s-3.png" alt=""/>
                </div>
                <div className="detail_box">
                  <h6>
                    Emergency
                  </h6>
                  <p>
                    onsectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                    enim ad minim veniam, quis nostrud exe
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <a href="">
              Read More
            </a>
          </div>
        </div>
        <div className="col-md-4">
          <img src="images/tool.png" alt="" className="w-100"/>
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