import React, { useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import gsap from 'gsap';
import Link from "next/link";

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
              <div className="img-box">
                <img
                  className="img-fluid"
                  src="/img/category/best-1.jpg"
                  alt=""
                />
              </div>
            </div>
            <div className="col-6">
              <div className="img-box img-box-2">
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
            <h1>
              Best University <span>in Ahmedabad</span>
            </h1>
          </div>
          <div className="best-university-text">
            <Slider {...settings}>
              <div>
                <p className="mb-2">
                  Monark University is one of the leading University in
                  Gujarat, which provides Quality Education to the
                  aspirants. Various study options available at Monark
                  University and required Infrastructure for the courses
                  makes the University on of the best option for study.
                </p>
                <p>
                  Monark University is committed to engaging with the key
                  issues of our natural and social worlds through
                  outstanding teaching, research, and scholarship.
                </p>
              </div>
              <div>
              <p className="mb-2">
                  Monark University is one of the leading University in
                  Gujarat, which provides Quality Education to the
                  aspirants. Various study options available at Monark
                  University and required Infrastructure for the courses
                  makes the University on of the best option for study.
                </p>
                <p>
                  Monark University is committed to engaging with the key
                  issues of our natural and social worlds through
                  outstanding teaching, research, and scholarship.
                </p>
              </div>
            </Slider>            
          </div>   
          <Link  href="/mumirror">
        <button className="circle-btn d-flex align-items-center justify-content-between px-3 ml-100">
          <div className="btn-text">
            MU Mirror
            </div>
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