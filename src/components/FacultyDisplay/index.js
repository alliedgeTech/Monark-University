import React, { useEffect, useRef, useState } from "react";
import dynamic from "next/dynamic";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import facultydata from "../../data/faculty";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useRouter } from "next/router";
import studentsaydata from "../../data/studentsay";
import "aos/dist/aos.css"; // Import AOS CSS
import aos from "aos"; // Import AOS library
import Link from "next/link";

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
    items: 3,
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
      offset: 50, // Offset (in pixels) from the original trigger point
      duration: 800, // Duration of animation (in milliseconds)
    });
    const carousel = document.getElementById("carouselExampleIndicators");
    const buttons = document.querySelectorAll(".carousel-buttons button");

    const handleSlide = (event) => {
      buttons.forEach((button) => button.classList.remove("active"));
      buttons[event.to].classList.add("active");
    };

    if (carousel) {
      carousel.addEventListener("slide.bs.carousel", handleSlide);
    }

    return () => {
      if (carousel) {
        carousel.removeEventListener("slide.bs.carousel", handleSlide);
      }
    };
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
          <div className="">
            <div
              className="faculty-heading mb-30  one w-100"
              data-aos="fade-up"
            >
              <h1 className=" ">{faculty.name}</h1>
            </div>

            <div className="row row-1 py-lg-5 py-2">
              <div className="col-lg-5 col-12 p-0 d-flex align-items-center justify-content-center">
                <div className="faculty-img faculty-left" data-aos="fade-right">
                  <img src={faculty.img1} />
                </div>
              </div>
              <div className="col-lg-7 col-12 p-0 px-5 pt-4 h-100 d-flex align-items-center justify-content-center">
                <div
                  className="d-flex align-items-start justify-content-center faculty-white"
                  data-aos="fade-left"
                >
                  <i class="fa-regular fa-hand-point-right mr-10 mt-2"></i>
                  <p className="faculty-right">{faculty.text_1}</p>
                </div>
              </div>
            </div>
            <div className="row row-2 py-lg-5 py-1 mt-lg-4 mt-0">
              <div className="col-lg-7 col-12 p-0 px-5 pt-4  order-lg-1 order-h-100 d-flex align-items-center justify-content-center">
                <div
                  className="d-flex align-items-start justify-content-center faculty-white"
                  data-aos="fade-right"
                >
                  <i class="fa-regular fa-hand-point-right mr-10 mt-2"></i>
                  <p className="faculty-left">{faculty.text_2}</p>
                </div>
              </div>
              <div className="col-lg-5 col-12 mt-4 mt-lg-0 p-0  order-lg-2 order-1 d-flex align-items-center justify-content-center">
                <div className="faculty-img faculty-right" data-aos="fade-left">
                  <img src={faculty.img2} alt="" />
                </div>
              </div>
            </div>
            <div style={{ marginTop: "40px" }} data-aos="fade-up">
              <OwlCarousel
                className="owl-theme faculty-carousel"
                dots={false}
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

          <div className="related-course-section py-4 mt-4">
      <div className="container">
        <div className="carousel-buttons carousel-orange-buttons mx-auto mb-30 d-flex align-items-center">
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          >
            After 10
          </button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          >
            UG Course
          </button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          >
            PG Course
          </button>
        </div>

        <div id="carouselExampleIndicators" className="carousel slide mt-30" data-bs-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item faculty-item  active">
              {faculty.after10.map((ten, index) => (
                <div className="inline" key={index}>
                  <Link href={ten.link}>
                    <p><i class="fa-solid fa-book-open-reader mr-10"></i>{ten.lname}</p>
                  </Link>
                </div>
              ))}
            </div>
            <div className="carousel-item faculty-item">
              {faculty.after12.map((twelve, index) => (
                <div className="inline" key={index}>
                  <Link href={twelve.link}>
                    <p><i class="fa-solid fa-book-open-reader mr-10"></i>{twelve.lname}</p>
                  </Link>
                </div>
              ))}
            </div>
            <div className="carousel-item faculty-item">
              {faculty.PGCoures.map((pg, index) => (
                <div className="inline" key={index}>
                  <Link href={pg.link}>
                    <p><i class="fa-solid fa-book-open-reader mr-10"></i>{pg.lname}</p>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>

          <div className="row py-5 px-5 dean-msg-container p-relative ">
            <div className="col-lg-7">
              <div className="dean-text p-relative">
                <div className="shape-img2">
                  <img
                    src="\img\bgs\dotspng.png"
                    className="img-fluid shape"
                    alt=""
                  />
                </div>
                <div className="three">
                  <h4 className="poppins">dean message</h4>
                </div>
                <p>
                  Lorem ipsum dolor sit. Maiores reiciendis aspernatur earum.
                  Labore explicabo vitae ipsam animi unde magni distinctio quae
                  iste iusto illum. Omnis! Lorem ipsum dolor sit amet
                  consectetur adipisicing elit. Natus earum soluta reiciendis?
                  Inventore nisi, illum fugit odio culpa hic obcaecati error
                  dignissimos repellendus velit fuga quaerat autem ea officia
                  voluptatem dolore quas dolor laudantium perspiciatis quidem
                  aperiam. Accusamus laudantium autem facere velit voluptates
                  dicta, eum esse laborum voluptas dignissimos aperiam. Debitis
                  doloremque cumque nam illum unde dignissimos, impedit quia
                  nulla.
                </p>
              </div>
            </div>
            <div className="col-lg-5 mt-4 d-flex align-items-center justify-content-center">
              <div className="dean-img">
                <div className="shape-img">
                  <img
                    src="\img\bgs\dotspng.png"
                    className="img-fluid shape"
                    alt=""
                  />
                </div>

                <img
                  className="img-fluid"
                  src="https://monarkuni.ac.in/wp-content/uploads/2021/06/SMET-175-Copy.jpg"
                  alt=""
                />
              </div>
            </div>
          </div>

        </div>
          <div className="student-say bg-white  py-4">
            <div className="container">
              <div className="say-heading mt-4">
                <div className="one" data-aos="fade-up">
                  <h1 className="text-center">What Students Say..</h1>
                </div>
              </div>
              <OwlCarousel
                className="owl-theme"
                loop={true}
                autoPlay={true}
                margin={15}
                autoplayTimeout={5000}
                responsive={Responsive2}
              >
                {studentsaydata.map((students) => (
                  <div class="item px-2" data-aos="fade-up">
                    <div className="test-card d-flex align-items-center flex-column">
                      <div className="test-img">
                        <img className="h-100 w-100" src={students.img} alt="" />
                      </div>
                      <div className="test-name">
                        <h6>{students.name}</h6>
                      </div>
                      <div className="test-text">
                        <i class="fa-solid fa-quote-left"></i>
                        <small className="stu-say-text">{students.text}</small>
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
