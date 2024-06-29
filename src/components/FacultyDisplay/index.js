import React, { useEffect, useRef } from "react";
import dynamic from "next/dynamic";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import facultydata from "../../data/faculty";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useRouter } from "next/router";
import 'aos/dist/aos.css'; // Import AOS CSS
import aos from 'aos'; // Import AOS library

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
  useEffect(() => {
    aos.init({
      offset: 200, // Offset (in pixels) from the original trigger point
      duration: 800, // Duration of animation (in milliseconds)
    }); 
  }, []);

  const router = useRouter();
  const { id } = router.query;
  const faculty = facultydata.find((fac) => fac.id == id);
  if (!faculty) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <div style={{ marginTop: "75px" }} className="faculty-info">
        <div className="p-0">
          <div
            className={` mb-45 pb-40`}
          >
            <div className="faculty-heading mb-30  eight w-100" data-aos="zoom-in">
              <h1 className=" ">{faculty.name}</h1>
            </div>

            <div className="row row-1">
              <div className="col-lg-6 col-12 p-0 ">
                <div className="faculty-img faculty-left" data-aos="fade-right">
                  <img src={faculty.img1} />
                </div>
              </div>
              <div className="col-lg-6 col-12 p-0 px-5 pt-4 ">
                <div className="d-flex align-items-start" data-aos="fade-left">
                <i class="fa-regular fa-hand-point-right mr-10 mt-2"></i><p className="faculty-right">{faculty.text_1}</p>

                </div>
              </div>
            </div>
            <div className="row row-2">
              <div className="col-lg-6 col-12 p-0 px-5 pt-4  order-lg-1 order-2">
                <div className="d-flex align-items-start" data-aos="fade-left">
                <i class="fa-regular fa-hand-point-right mr-10 mt-2"></i><p className="faculty-left">{faculty.text_2}</p>

                </div>
              </div>
              <div className="col-lg-6 col-12 p-0  order-lg-2 order-1">
                <div className="faculty-img faculty-right" data-aos="fade-left">
                  <img src={faculty.img2} alt="" />
                </div>
              </div>
            </div>
            <div style={{ marginTop: "40px" }} data-aos="fade-up">
              <OwlCarousel
                className="owl-theme px-3 faculty-carousel"
                dots={true}
                loop={true}
                autoPlay={true}
                autoplayTimeout={5000}
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

          <div className="student-say container py-4">
            <div className="say-heading mt-4">
              <div className="one" data-aos="fade-up">
                <h1 className="text-center">What Students Say..</h1>
              </div>
            </div>
            <OwlCarousel
              className=""
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
            </OwlCarousel>
          </div>
        </div>
      </div>
    </div>
  );
};

export default index;
