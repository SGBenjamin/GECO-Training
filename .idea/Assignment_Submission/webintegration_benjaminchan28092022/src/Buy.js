import Header from "./Header";
import Footer from "./Footer";

function Buy(){

    return(
        <>
        <Header/>
        <section className="buy_section layout_padding">
    <div className="container">
      <h2>
        You Can Buy Pet From Our Clinic
      </h2>
      <p>
        consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
      </p>
      <div className="d-flex justify-content-center">
        <a href="">
          Buy Now
        </a>
      </div>
    </div>
  </section>

  <section className="client_section layout_padding-bottom">
    <div className="container">
      <h2 className="custom_heading text-center">
        What Say Our
        <span>
          clients
        </span>
      </h2>
      <p className="text-center">
        orem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut la
      </p>
      <div id="carouselExample2Indicators" className="carousel slide" data-ride="carousel">
        <ol className="carousel-indicators">
          <li data-target="#carouselExample2Indicators" data-slide-to="0" className="active"></li>
          <li data-target="#carouselExample2Indicators" data-slide-to="1"></li>
          <li data-target="#carouselExample2Indicators" data-slide-to="2"></li>
        </ol>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <div className="layout_padding2 pl-100">
              <div className="client_container ">
                <div className="img_box">
                  <img src="images/client.jpg" alt=""/>
                </div>
                <div className="detail_box">
                  <h5>
                    Sandy Mark
                  </h5>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                    et
                    dolore
                    magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
                    ea
                    commodo
                    consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="layout_padding2 pl-100">
              <div className="client_container ">
                <div className="img_box">
                  <img src="images/client.jpg" alt=""/>
                </div>
                <div className="detail_box">
                  <h5>
                    Sandy Mark
                  </h5>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                    et
                    dolore
                    magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
                    ea
                    commodo
                    consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="layout_padding2 pl-100">
              <div className="client_container ">
                <div className="img_box">
                  <img src="images/client.jpg" alt=""/>
                </div>
                <div className="detail_box">
                  <h5>
                    Sandy Mark
                  </h5>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                    et
                    dolore
                    magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
                    ea
                    commodo
                    consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore
                  </p>
                </div>
              </div>
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

export default Buy;