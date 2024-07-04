import React from 'react'
import 'aos/dist/aos.css'; 
import aos from 'aos'; 
import dynamic from "next/dynamic";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

// Import jQuery
if (typeof window !== "undefined") {
    var $ = require("jquery");
    window.$ = window.jQuery = require("jquery");
  }
  
  // Dynamically import OwlCarousel without SSR
  const OwlCarousel = dynamic(() => import("react-owl-carousel"), {
    ssr: false,
  });
  
  // Responsive settings for OwlCarousel
  const Responsive = {
    0: {
      items: 1,
      margin: 5,
    },
    435: {
      items: 1,
      margin: 10,
    },
    556: {
      items: 1,
      margin: 10,
    },
    1024: {
      items: 1,
      margin: 20,
    },
};

const index = () => {
  return (
    <>
      <div className="highlight-section py-5 mt-30">
        <div className="container">
            <OwlCarousel
            className="owl-theme px-2"
            loop={true}
            autoPlay={true}
            margin={10}
            dots={true}
            autoplayTimeout={5000}
            responsive={Responsive}
            >
                <div className="item">
                    <div className="row">
                        <div className="col-lg-5">
                        <div className="high-img-box p-relative">
                        <img className='img-fluid' src="https://images.shiksha.com/mediadata/images/1626701580phphurJ1Q.jpeg" alt="" />
                        <small className='high-button'>1. Highlight</small>
                    </div>
                        </div>
                        <div className="col-lg-7 d-flex align-items-center">
                          <div className="high-text">
                              <h3 className='oswald'>Headings</h3>
                              <p className='mt-20'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto a, similique nam rerum sint vel ad animi eius error excepturi natus ut minus eveniet repellat labore veritatis dolorem adipisci cum quos. Omnis quo nulla quod voluptatibus ex sed animi cum.</p>
                          </div>
                        </div>
                    </div>
                    
                </div>
            </OwlCarousel>
        </div>
      </div>
    </>
  )
}

export default index
