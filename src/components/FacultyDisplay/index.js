import React from "react";
import dynamic from "next/dynamic";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import facultydata from "../../data/faculty"

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
    items: 2,
    margin: 10,
  },
  768: {
    items: 3,
    margin: 10,
  },
  1024: {
    items: 4,
    margin: 20,
  },
};

const index = () => {
  return (
    <div>
      <div style={{ marginTop: "150px" }} className="min-vh-100 bg-light py-4">
        <div className="container">
          {
            facultydata.map((faculty,index)=>{
              return(
                <div id={faculty.hastagID}key={index} className="faculty-info mt-4">
                  <h1 className="text-center">{faculty.name}</h1>
          <hr />
          <h4 className="mt-5">
            <i class="fa-solid fa-arrow-right-long"></i>{faculty.heading}
          </h4>
          <div className="row">
            <div className="col-lg-6 col-12 mt-4">
              <div className="faculty-img">
                <img
                  src={faculty.img1}
                />
              </div>
            </div>
            <div className="col-lg-6 col-12 mt-4">
              <p>
                {faculty.text_1}
              </p>
            </div>
            <div className="col-lg-6 col-12 mt-4">
              <p>
                {faculty.text_2}
              </p>
            </div>
            <div className="col-lg-6 col-12 mt-4">
              <div className="faculty-img">
                <img
                  src={faculty.img2}
                  alt=""
                />
              </div>
            </div>
          </div>
          <div style={{ marginTop: "40px" }}>
            <OwlCarousel
              className="owl-theme"
              loop={true}
              autoPlay={true}
              autoplayTimeout={5000}
              dots={true}
              responsive={Responsive}
            >
              <div className="item">
                <img
                  src={faculty.car_1}
                  alt=""
                />
              </div>
              <div className="item">
                <img
                  src={faculty.car_2}
                  alt=""
                />
              </div>
              <div className="item">
                <img
                  src={faculty.car_3}
                  alt=""
                />
              </div>
              <div className="item">
                <img
                  src={faculty.car_4}
                  alt=""
                />
              </div>
            </OwlCarousel>
          </div>

                </div>
              )
            })
          }
          
          
          <div className="student-say">

          </div>
        </div>
      </div>
    </div>
  );
};

export default index;
