import React, { useEffect } from "react";
import "aos/dist/aos.css";
import aos from "aos";
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

  useEffect(()=>{
    aos.init({
      offset: 50, // Offset (in pixels) from the original trigger point
      duration: 700, // Duration of animation (in milliseconds)
    });
  },[])

  return (
    <>
      <div className="highlight-section pt-4">
        <div className="container">
          <OwlCarousel
            className="owl-theme px-2"
            autoPlay={true}
            margin={10}
            loop={true}
            responsive={Responsive}
            responsiveRefreshRate={0}
            autoplay={true}
            autoplayTimeout={6000}
            autoplayHoverPause={false}
          >
            <div className="item">
              <div className="high-heading-box mt-60 one d-flex align-items-center" data-aos='zoom-in' >
                <h1 className="mb-0 oswald text-center">
                  Discover <span> Excellence in Education </span> at Ahmedabad’s Pioneering
                  Institutions Welcome to the <span> Future of Learning </span>  in Ahmedabad
                </h1>
              </div>
            </div>
            <div className="item ">
              <div className="row">
                <div className="col-lg-5">
                  <div className="high-img-box p-relative" data-aos='zoom-in'>
                    <img
                      className="img-fluid"
                      src="https://images.shiksha.com/mediadata/images/1626701580phphurJ1Q.jpeg"
                      alt=""
                    />
                    <small className="high-button">1. Highlight</small>
                  </div>
                </div>
                <div className="col-lg-7 mt-lg-0 mt-4 d-flex align-items-center">
                  <div className="high-text" data-aos='fade-up'>
                    <h3 className="oswald">Ahmedabad’s First Techno Campus
                    </h3>
                    <p className="mt-20">
                      Step into the future at our cutting-edge techno campus, where innovation meets education. Our state-of-the-art facilities and forward-thinking curriculum are designed to equip students with the skills and knowledge to thrive in the tech-driven world.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="item ">
              <div className="row">
                <div className="col-lg-5">
                  <div className="high-img-box p-relative" data-aos='zoom-in'>
                    <img
                      className="img-fluid"
                      src="/img/highlight/high2.jpg"
                      alt=""
                    />
                    <small className="high-button">2. Highlight</small>
                  </div>
                </div>
                <div className="col-lg-7 mt-lg-0 mt-4 d-flex align-items-center">
                  <div className="high-text" data-aos='fade-up'>
                    <h3 className="oswald">Ahmedabad’s 1st University Offering BBA with Built-in Aviation Management & Data Analytics
                    </h3>
                    <p className="mt-20">
                    Elevate your career prospects with a unique blend of business acumen, aviation expertise, and data analytics, preparing you for leadership roles in dynamic industries.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="item ">
              <div className="row">
                <div className="col-lg-5">
                  <div className="high-img-box p-relative" data-aos='zoom-in'>
                    <img
                      className="img-fluid"
                      src="https://images.shiksha.com/mediadata/images/1626701580phphurJ1Q.jpeg"
                      alt=""
                    />
                    <small className="high-button">3. Highlight</small>
                  </div>
                </div>
                <div className="col-lg-7 mt-lg-0 mt-4 d-flex align-items-center">
                  <div className="high-text" data-aos='fade-up'>
                    <h3 className="oswald">Ahmedabad’s 1st Self-Financed Ayurved Medical College

                    </h3>
                    <p className="mt-20">

                    Experience world-class Ayurvedic education and practice in a pioneering institution dedicated to holistic health and traditional medicine.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </OwlCarousel>
        </div>
      </div>
    </>
  );
};

export default index;
