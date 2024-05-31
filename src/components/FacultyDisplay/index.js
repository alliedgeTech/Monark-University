import React from "react";
import dynamic from "next/dynamic";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import facultydata from "../../data/faculty";

// Import jQuery
if (typeof window !== "undefined") {
  var $ = require("jquery");
  window.$ = window.jQuery = require("jquery");
}

// Dynamically import OwlCarousel without SSR
const OwlCarousel = dynamic(() => import("react-owl-carousel"), {
  ssr: false,
});
// Dynamically import OwlCarousel without SSR
const OwlCarousel2 = dynamic(() => import("react-owl-carousel"), {
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
// Responsive settings for OwlCarousel
const Responsive2 = {
  0: {
    items: 1,
    margin: 5,
  },
  435: {
    items: 2,
    margin: 10,
  },
  768: {
    items: 2,
    margin: 10,
  },
  1024: {
    items: 2,
    margin: 10,
  },
};

const index = () => {
  return (
    <div>
      <div style={{ marginTop: "120px" }} className="min-vh-100 bg-light py-4">
        <div className="container">
          {facultydata.map((faculty, index) => {
            return (
              <div id={faculty.hastagID} key={index} className="faculty-info">
                <h1 className="text-center">{faculty.name}</h1>
                <hr />
                <h4 className="mt-5">
                  <i class="fa-solid fa-arrow-right-long"></i>
                  {faculty.heading}
                </h4>
                <div className="row">
                  <div className="col-lg-6 col-12 mt-4">
                    <div className="faculty-img">
                      <img src={faculty.img1} />
                    </div>
                  </div>
                  <div className="col-lg-6 col-12 mt-4">
                    <p>{faculty.text_1}</p>
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-6 col-12 mt-4 order-lg-1 order-2">
                    <p>{faculty.text_2}</p>
                  </div>
                  <div className="col-lg-6 col-12 mt-4 order-lg-2 order-1">
                    <div className="faculty-img">
                      <img src={faculty.img2} alt="" />
                    </div>
                  </div>
                </div>
                <div style={{ marginTop: "40px" }}>
                  <OwlCarousel
                    className="owl"
                    loop={true}
                    autoPlay={true}
                    autoplayTimeout={5000}
                    dots={true}
                    responsive={Responsive}
                  >
                    <div className="item">
                      <img src={faculty.car_1} alt="" />
                    </div>
                    <div className="item">
                      <img src={faculty.car_2} alt="" />
                    </div>
                    <div className="item">
                      <img src={faculty.car_3} alt="" />
                    </div>
                    <div className="item">
                      <img src={faculty.car_4} alt="" />
                    </div>
                  </OwlCarousel>
                </div>
              </div>
            );
          })}

          <div className="student-say py-4">
            <div className="say-heading mt-4">
              <h2 className="text-center">What Students Say..</h2>
              <hr />
            </div>
            <OwlCarousel2
              className="owl-theme"
              loop={true}
              autoPlay={true}
              autoplayTimeout={5000}
              responsive={Responsive2}
            >
              <div class="item">
                <div className="test-card d-flex align-items-center flex-column">
                  <div className="test-img">
                    <img
                      className=""
                      src="https://monarkuni.ac.in/wp-content/uploads/2021/07/WhatsApp-Image-2021-07-15-at-10.38.55-AM.jpeg"
                      alt=""
                    />
                  </div>
                  <div className="test-name">
                    <h6>Jainish Vasani</h6>
                  </div>
                  <div className="test-text">
                    <i class="fa-solid fa-quote-left"></i>
                    <small>
                      Excellent content and assignments that build on your
                      knowledge, reinforce, and then expand. I recently secured
                      new employment using PHP and couldnt have done so without
                      the Professional Web Development courses.
                    </small>
                    <i class="fa-solid fa-quote-right"></i>
                  </div>
                </div>
              </div>
              <div class="item">
                <div className="test-card d-flex align-items-center flex-column">
                  <div className="test-img">
                    <img
                      className=""
                      src="https://monarkuni.ac.in/wp-content/uploads/2021/07/WhatsApp-Image-2021-07-15-at-10.38.55-AM.jpeg"
                      alt=""
                    />
                  </div>
                  <div className="test-name">
                    <h6>Jainish Vasani</h6>
                  </div>
                  <div className="test-text">
                    <i class="fa-solid fa-quote-left"></i>
                    <small>
                      Excellent content and assignments that build on your
                      knowledge, reinforce, and then expand. I recently secured
                      new employment using PHP and couldnt have done so without
                      the Professional Web Development courses.
                    </small>
                    <i class="fa-solid fa-quote-right"></i>
                  </div>
                </div>
              </div>
              <div class="item">
                <div className="test-card d-flex align-items-center flex-column">
                  <div className="test-img">
                    <img
                      className=""
                      src="https://monarkuni.ac.in/wp-content/uploads/2021/07/WhatsApp-Image-2021-07-15-at-10.38.55-AM.jpeg"
                      alt=""
                    />
                  </div>
                  <div className="test-name">
                    <h6>Jainish Vasani</h6>
                  </div>
                  <div className="test-text">
                    <i class="fa-solid fa-quote-left"></i>
                    <small>
                      Excellent content and assignments that build on your
                      knowledge, reinforce, and then expand. I recently secured
                      new employment using PHP and couldnt have done so without
                      the Professional Web Development courses.
                    </small>
                    <i class="fa-solid fa-quote-right"></i>
                  </div>
                </div>
              </div>
              <div class="item">
                <div className="test-card d-flex align-items-center flex-column">
                  <div className="test-img">
                    <img
                      className=""
                      src="https://monarkuni.ac.in/wp-content/uploads/2021/07/WhatsApp-Image-2021-07-15-at-10.38.55-AM.jpeg"
                      alt=""
                    />
                  </div>
                  <div className="test-name">
                    <h6>Jainish Vasani</h6>
                  </div>
                  <div className="test-text">
                    <i class="fa-solid fa-quote-left"></i>
                    <small>
                      Excellent content and assignments that build on your
                      knowledge, reinforce, and then expand. I recently secured
                      new employment using PHP and couldnt have done so without
                      the Professional Web Development courses.
                    </small>
                    <i class="fa-solid fa-quote-right"></i>
                  </div>
                </div>
              </div>
              <div class="item">
                <div className="test-card d-flex align-items-center flex-column">
                  <div className="test-img">
                    <img
                      className=""
                      src="https://monarkuni.ac.in/wp-content/uploads/2021/07/WhatsApp-Image-2021-07-15-at-10.38.55-AM.jpeg"
                      alt=""
                    />
                  </div>
                  <div className="test-name">
                    <h6>Jainish Vasani</h6>
                  </div>
                  <div className="test-text">
                    <i class="fa-solid fa-quote-left"></i>
                    <small>
                      Excellent content and assignments that build on your
                      knowledge, reinforce, and then expand. I recently secured
                      new employment using PHP and couldnt have done so without
                      the Professional Web Development courses.
                    </small>
                    <i class="fa-solid fa-quote-right"></i>
                  </div>
                </div>
              </div>
            </OwlCarousel2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default index;
