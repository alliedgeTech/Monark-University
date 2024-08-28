import React, { useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import gsap from "gsap";
import Link from "next/link";
import dynamic from "next/dynamic";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "aos/dist/aos.css"; // Import AOS CSS
import aos from "aos"; // Import AOS library

if (typeof window !== "undefined") {
  var $ = require("jquery");
  window.$ = window.jQuery = require("jquery");
}

const OwlCarousel = dynamic(() => import("react-owl-carousel"), {
  ssr: false,
});

const Responsive = {
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
    items: 1,
    margin: 20,
  },
};

export default function Category() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  useEffect(() => {
    aos.init({
      offset: 50, // Offset (in pixels) from the original trigger point
      duration: 800, // Duration of animation (in milliseconds)
    });
  });
  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);

  return (
    <div className="best-university container-fluid">
      <div className="row">
        <div className="col-lg-5">
          <div className="row p-relative">
            <div className="shape-img">
              <img
                className="img-fluid"
                src="/img/choose/shape-1-3.png"
                alt=""
              />
            </div>
            <div className="col-6">
              <div className="img-box" data-aos="zoom-in-right">
                <img
                  className="img-fluid"
                  src="/img/category/best-1.jpg"
                  alt=""
                />
              </div>
            </div>
            <div className="col-6">
              <div className="img-box img-box-2" data-aos="zoom-in-left">
                <img
                  className="img-fluid"
                  src="/img/category/best-3.jpg"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-7">
          <div className="best-university-heading three mb-3">
            <h1 data-aos="zoom-in">
              Top-tier University <span>in Ahmedabad</span>
            </h1>
          </div>
          <div className="best-university-text">
          
              <div className="item">
                <p className="mb-2">
                  Monark University stands as a beacon of excellence in
                  Ahmedabad, embodying the pinnacle of academic achievement and
                  innovation. As a top-tier institution, Monark University
                  offers a vibrant learning environment, where cutting-edge
                  technologies and an emphasis on holistic development converge
                  to shape future leaders.
                </p>
                <p>
                  Our sprawling campus, equipped with state-of-the-art
                  facilities, fosters a culture of curiosity, collaboration, and
                  creativity. With a distinguished faculty and a commitment to
                  nurturing talent, Monark University is where tradition meets
                  modernity, ensuring that students are well-prepared to excel
                  in a dynamic world. Join us, and be part of a
                  legacy of excellence.
                </p>
              </div>
           
          
          </div>
          <Link href="/mumirror">
            <button
              className="circle-btn d-flex align-items-center justify-content-between"
              data-aos="zoom-out"
            >
              <div className="btn-text">MU Mirror</div>
              <div className="btn-icon d-flex align-items-center justify-content-center">
                <i class="fa-solid fa-arrow-right"></i>
              </div>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
