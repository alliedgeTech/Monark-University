import React from "react";
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
          <h1 className="text-center">Faculty of Engineering & Technology</h1>
          <hr />
          <h4 className="mt-5">
            <i class="fa-solid fa-arrow-right-long"></i> About Faculty of
            Engineering & Technology
          </h4>
          <div className="row">
            <div className="col-lg-6 col-12 mt-4">
              <div className="faculty-img">
                <img
                  src={`https://monarkuni.ac.in/wp-content/uploads/2023/08/eng-tech-6-1536x1024.jpg`}
                />
              </div>
            </div>
            <div className="col-lg-6 col-12 mt-4">
              <p>
                The institute is imparting value based technical education and
                developing knowledge, skill, creativity, and personality of
                budding engineers/professionals, enabling them to meet
                challenges of the present globalized world and fulfil the demand
                of the industries. The institute has a ultra modern building
                located in the university campus with lush green eco-friendly
                and peaceful environment, aesthetically designed covered area
                with more than adequate number of Class Rooms, Tutorial Rooms,
                Labs, Workshops, Seminar Halls, Conference Room and Multipurpose
                Auditorium with a seating capacity of 200 persons developed on
                modern concept.
              </p>
            </div>
            <div className="col-lg-6 col-12 mt-4">
              <p>
                Faculty of Engineering and Technology was established by Shree
                Monark Education Trust in the year 2007 with an aim to impart
                quality education for holistic development in the field of
                technology and management. It also aims to provide technical
                education of the highest standard with the help of state-of-art
                infrastructure and qualified faculty members, researches and
                innovation
              </p>
            </div>
            <div className="col-lg-6 col-12 mt-4">
              <div className="faculty-img">
                <img
                  src="https://monarkuni.ac.in/wp-content/uploads/2023/08/eng-tech-1-1536x1024.jpg"
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
                  src="https://monarkuni.ac.in/wp-content/uploads/2023/08/eng-tech-2-1024x683.jpg"
                  alt=""
                />
              </div>
              <div className="item">
                <img
                  src="https://monarkuni.ac.in/wp-content/uploads/2023/08/eng-tech-4-1024x683.jpg"
                  alt=""
                />
              </div>
              <div className="item">
                <img
                  src="https://monarkuni.ac.in/wp-content/uploads/2023/08/eng-tech-2-1024x683.jpg"
                  alt=""
                />
              </div>
              <div className="item">
                <img
                  src="https://monarkuni.ac.in/wp-content/uploads/2023/08/eng-tech-4-1024x683.jpg"
                  alt=""
                />
              </div>
            </OwlCarousel>
          </div>
          <div className="student-say">
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default index;
