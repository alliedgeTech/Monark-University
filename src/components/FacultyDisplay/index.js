import React, { useEffect, useRef } from "react";
import dynamic from "next/dynamic";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import facultydata from "../../data/faculty";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useRouter } from "next/router";
import studentsaydata from "../../data/studentsay"
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
    items: 1,
    margin: 10,
  },
  768: {
    items: 1,
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
        <div className="container">
          <div
            className=''
          >
            <div className="faculty-heading mb-30  one w-100" data-aos="fade-up">
              <h1 className=" ">{faculty.name}</h1>
            </div>

            <div className="row row-1 py-lg-5 py-2">
              <div className="col-lg-5 col-12 p-0 d-flex align-items-center justify-content-center">
                <div className="faculty-img faculty-left" data-aos="fade-right">
                  <img src={faculty.img1} />
                </div>
              </div>
              <div className="col-lg-7 col-12 p-0 px-5 pt-4 h-100 d-flex align-items-center justify-content-center">
                <div className="d-flex align-items-start justify-content-center faculty-white" data-aos="fade-left">
                <i class="fa-regular fa-hand-point-right mr-10 mt-2"></i><p className="faculty-right">{faculty.text_1}</p>

                </div>
              </div>
            </div>
            <div className="row row-2 py-lg-5 py-1 mt-lg-4 mt-0">
              <div className="col-lg-7 col-12 p-0 px-5 pt-4  order-lg-1 order-h-100 d-flex align-items-center justify-content-center">
                <div className="d-flex align-items-start justify-content-center faculty-white" data-aos="fade-right">
                <i class="fa-regular fa-hand-point-right mr-10 mt-2"></i><p className="faculty-left">{faculty.text_2}</p>

                </div>
              </div>
              <div className="col-lg-5 col-12 mt-4 mt-lg-0 p-0  order-lg-2 order-1 d-flex align-items-center justify-content-center" >
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

          <div className="row mt-40">
            <div className="col-lg-7">
              <div className="three">
              <h4 className="poppins">dean message</h4>

              </div>
              <p>
                Lorem ipsum dolor sit. Maiores reiciendis aspernatur earum. Labore explicabo vitae ipsam animi unde magni distinctio quae iste iusto illum. Omnis! Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus earum soluta reiciendis? Inventore nisi, illum fugit odio culpa hic obcaecati error dignissimos repellendus velit fuga quaerat autem ea officia voluptatem dolore quas dolor laudantium perspiciatis quidem aperiam. Accusamus laudantium autem facere velit voluptates dicta, eum esse laborum voluptas dignissimos aperiam. Debitis doloremque cumque nam illum unde dignissimos, impedit quia nulla.
              </p>
            </div>
            <div className="col-lg-5 mt-4 d-flex align-items-center justify-content-center">
              <div className="dean-img">
                <div className="shape-img">
                <img src="/img/choose/shape-1-3.png" className="img-fluid shape" alt="" />

                </div>
                <img className="img-fluid" src="https://monarkuni.ac.in/wp-content/uploads/2021/06/SMET-175-Copy.jpg" alt="" />
              </div>
            </div>
          </div>

          <div className="student-say container py-4">
            <div className="say-heading mt-4">
              <div className="one" data-aos="fade-up">
                <h1 className="text-center">What Students Say..</h1>
              </div>
            </div>
            <OwlCarousel
              className="owl-theme"
              loop={true}
              autoPlay={true}
              autoplayTimeout={5000}
              responsive={Responsive2}
            >
              {studentsaydata.map((students)=>(
                <div class="item" data-aos="fade-up">
                  <div className="test-card d-flex align-items-center flex-column">
                    <div className="test-img">
                      <img
                        className=""
                        src={students.img}
                        alt=""
                      />
                    </div>
                    <div className="test-name">
                      <h6>{students.name}</h6>
                    </div>
                    <div className="test-text">
                      <i class="fa-solid fa-quote-left"></i>
                      <small>
                        {students.text}
                      </small>
                      <i class="fa-solid fa-quote-right"></i>
                    </div>
                  </div>
                </div>
                
              ))}
             
            </OwlCarousel>
          </div>
        </div>
      </div>
    </div>
  );
};

export default index;
