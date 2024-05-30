import React from "react";
import dynamic from "next/dynamic";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import campusdata from "../../data/campus"

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
            campusdata.map((campus,num)=>{
              return(
                <div key={num} className="faculty-info mt-4">
      
          
          <div className="row">
            <div className="col-lg-6 col-12 mt-4">
              <div className="faculty-img">
                <img
                  src={campus.img}
                />
              </div>
            </div>
            
       
           
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
