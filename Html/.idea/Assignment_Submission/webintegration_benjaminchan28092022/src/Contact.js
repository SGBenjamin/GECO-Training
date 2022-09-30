import Footer from "./Footer";
import Header from "./Header";

function Contact(){

    return(
        <>
        <Header />

        <section className="map_section" >
            <div id="map" className="h-100 w-100 ">
            </div>

            <div className="form_container " >
                <div className="row">
                    <div className="col-md-8 col-sm-10 offset-md-4" >
                        <form action="">
                            <div className="text-center">
                                <h3>
                                    Contact Us
                                </h3>
                            </div>
                            <div>
                            <input type="text" placeholder="Name" className="pt-3"/>
                            </div>
                            <div>
                            <input type=" text" placeholder="Phone Number"/>
                            </div>
                            <div>
                            <input type="email" placeholder="Email"/>
                            </div>
                            <div>
                            <input type="text" className="message-box" placeholder="Message"/>
                            </div>
                            <div className="d-flex justify-content-center">
                            <button>
                                SEND
                            </button>
                            </div>
          </form>
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


        <Footer />
        
        </>


    )




}

export default Contact;