import SingleBlog from "@/components/Blog";
import Blogs from "@/data/blogs";
import React, { useEffect } from "react";
import dynamic from "next/dynamic";
import Image from "next/image";
import { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import campusdata from "@/data/campus";
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

const Campusdisplay = () => {

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    let mm=gsap.matchMedia()

    mm.add("(min-width:991px)",()=>{
      gsap.from(".best-university-heading h1", {
        opacity:0,
        scale:0.5,
        y:100,
        scrollTrigger: {
          trigger: ".best-university-heading h1",
          scroller:'body',
          start: "top bottom",
          end: "top 70%",
          scrub: 0.2,
        },
      });
  
      
    })


  }, []);

  const [open, setOpen] = useState(false);
  return (
    <>
      <Lightbox
        open={open}
        close={() => setOpen(false)}
        slides={[
          { src: "/img/campus/cm1.jpg", width: 422, height: 710 },
          { src: "/img/campus/cm2.jpg", width: 422, height: 337 },
          { src: "/img/campus/cm3.jpg", width: 422, height: 337 },
          { src: "/img/campus/cm4.jpg", width: 422, height: 710 },
          { src: "/img/campus/cm5.jpg", width: 422, height: 710 },
        ]}
      />
      <div
        id="it-gallery"
        className="it-gallery-area p-relative grey-bg-2 pt-120 pb-120"
      >
        
        <div className="container" id="artsandculture">
          <div className="row">
            <div className="col-xl-12">
              <div className="it-gallery-title-box pb-70">
                <div className="three">
                <h1 className="it-section-title-3">Arts and Gallery</h1>

                </div>
              </div>
            </div>
          </div>
          <div className="row">
            {campusdata
              .map((campus, index) => (
                <div key={index} className="col-xl-2 col-lg-2 col-md col-sm ">
                  <div className="it-gallery-item p-relative">
                    <div className="it-gallery-thumb">
                      <img src={campus.img} className="img-fluid" />
                    </div>
                    <div className="it-gallery-icon">
                      <button
                        className="popup-image"
                        onClick={() => setOpen(true)}
                      >
                        <i className="fa-light fa-plus"></i>
                      </button>
                    </div>
                  </div>
                </div>
              ))
              .slice(0, 18)}
          </div>
        </div>
        <div className="container" id="campusevent">
          <div className="row">
            <div className="col-xl-12">
              <div className="it-gallery-title-box text-center pb-70">
                <span className="it-section-subtitle-5">
                  <i className="fa-light fa-book"></i>
                  Moanark Uni.
                  <i className="fa-light fa-book"></i>
                </span>
                <h2 className="it-section-title-3">Campus Life</h2>
              </div>
            </div>
          </div>
          <div className="row">
            {campusdata
              .map((campus, index) => (
                <div key={index} className="col-xl-3 col-lg-3 col-md col-sm ">
                  <div className="it-gallery-item p-relative">
                    <div className="it-gallery-thumb">
                      <img src={campus.img} className="img-fluid" />
                    </div>
                    <div className="it-gallery-icon">
                      <button
                        className="popup-image"
                        onClick={() => setOpen(true)}
                      >
                        <i className="fa-light fa-plus"></i>
                      </button>
                    </div>
                  </div>
                </div>
              ))
              .slice(18,34)}
          </div>
        </div>
        <div className="container" id="nss">
          <div className="row">
            <div className="col-xl-12">
              <div className="it-gallery-title-box text-center pb-70">
                <span className="it-section-subtitle-5">
                  <i className="fa-light fa-book"></i>
                  Moanark Uni.
                  <i className="fa-light fa-book"></i>
                </span>
                <h2 className="it-section-title-3">NSS</h2>
              </div>
            </div>
          </div>
          <div className="row">
            {campusdata
              .map((campus, index) => (
                <div key={index} className="col-xl-3 col-lg-3 col-md col-sm ">
                  <div className="it-gallery-item p-relative">
                    <div className="it-gallery-thumb">
                      <img src={campus.img} className="img-fluid" />
                    </div>
                    <div className="it-gallery-icon">
                      <button
                        className="popup-image"
                        onClick={() => setOpen(true)}
                      >
                        <i className="fa-light fa-plus"></i>
                      </button>
                    </div>
                  </div>
                </div>
              ))
              .slice(34, 66)}
          </div>
        </div>
        <div className="container" id="ncc">
          <div className="row">
            <div className="col-xl-12">
              <div className="it-gallery-title-box text-center pb-70">
                <span className="it-section-subtitle-5">
                  <i className="fa-light fa-book"></i>
                  Moanark Uni.
                  <i className="fa-light fa-book"></i>
                </span>
                <h2 className="it-section-title-3">NCC</h2>
              </div>
            </div>
          </div>
          <div className="row">
            {campusdata
              .map((campus, index) => (
                <div key={index} className="col-xl-3 col-lg-3 col-md col-sm ">
                  <div className="it-gallery-item p-relative">
                    <div className="it-gallery-thumb">
                      <img src={campus.img} className="img-fluid" />
                    </div>
                    <div className="it-gallery-icon">
                      <button
                        className="popup-image"
                        onClick={() => setOpen(true)}
                      >
                        <i className="fa-light fa-plus"></i>
                      </button>
                    </div>
                  </div>
                </div>
              ))
              .slice(66, 82)}
          </div>
        </div>
        <div className="container" id="sports">
          <div className="row">
            <div className="col-xl-12">
              <div className="it-gallery-title-box text-center pb-70">
                <span className="it-section-subtitle-5">
                  <i className="fa-light fa-book"></i>
                  Moanark Uni.
                  <i className="fa-light fa-book"></i>
                </span>
                <h2 className="it-section-title-3">Sports</h2>
              </div>
            </div>
          </div>
          <div className="row">
            {campusdata
              .map((campus, index) => (
                <div key={index} className="col-xl-3 col-lg-3 col-md col-sm ">
                  <div className="it-gallery-item p-relative">
                    <div className="it-gallery-thumb">
                      <img src={campus.img} className="img-fluid" />
                    </div>
                    <div className="it-gallery-icon">
                      <button
                        className="popup-image"
                        onClick={() => setOpen(true)}
                      >
                        <i className="fa-light fa-plus"></i>
                      </button>
                    </div>
                  </div>
                </div>
              ))
              .slice(82, 102)}
          </div>
        </div>
        <div className="container" id="workshopsandseminars">
          <div className="row">
            <div className="col-xl-12">
              <div className="it-gallery-title-box text-center pb-70">
                <span className="it-section-subtitle-5">
                  <i className="fa-light fa-book"></i>
                  Moanark Uni.
                  <i className="fa-light fa-book"></i>
                </span>
                <h2 className="it-section-title-3">Workshops & Seminars</h2>
              </div>
            </div>
          </div>
          <div className="row">
            {campusdata
              .map((campus, index) => (
                <div key={index} className="col-xl-4 -col-lg-4 col-md col-sm ">
                  <div className="it-gallery-item p-relative">
                    <div className="it-gallery-thumb">
                      <img src={campus.img} className="img-fluid" />
                    </div>
                    <div className="it-gallery-icon">
                      <button
                        className="popup-image"
                        onClick={() => setOpen(true)}
                      >
                        <i className="fa-light fa-plus"></i>
                      </button>
                    </div>
                  </div>
                </div>
              ))
              .slice(102, 108)}
          </div>
        </div>
        <div className="container" id="yoga">
          <div className="row">
            <div className="col-xl-12">
              <div className="it-gallery-title-box text-center pb-70">
                <span className="it-section-subtitle-5">
                  <i className="fa-light fa-book"></i>
                  Moanark Uni.
                  <i className="fa-light fa-book"></i>
                </span>
                <h2 className="it-section-title-3">International Yoga Day</h2>
              </div>
            </div>
          </div>
          <div className="row">
            {campusdata
              .map((campus, index) => (
                <div key={index} className="col-xl-4 col-lg-4 col-md col-sm ">
                  <div className="it-gallery-item p-relative">
                    <div className="it-gallery-thumb">
                      <img src={campus.img} className="img-fluid" />
                    </div>
                    <div className="it-gallery-icon">
                      <button
                        className="popup-image"
                        onClick={() => setOpen(true)}
                      >
                        <i className="fa-light fa-plus"></i>
                      </button>
                    </div>
                  </div>
                </div>
              ))
              .slice(108, 111)}
          </div>
        </div>
        <div className="container" id="teacherday">
          <div className="row">
            <div className="col-xl-12">
              <div className="it-gallery-title-box text-center pb-70">
                <span className="it-section-subtitle-5">
                  <i className="fa-light fa-book"></i>
                  Moanark Uni.
                  <i className="fa-light fa-book"></i>
                </span>
                <h2 className="it-section-title-3">Teacher's Day</h2>
              </div>
            </div>
          </div>
          <div className="row">
            {campusdata
              .map((campus, index) => (
                <div key={index} className="col-xl-3 col-lg-3 col-md col-sm ">
                  <div className="it-gallery-item p-relative">
                    <div className="it-gallery-thumb">
                      <img src={campus.img} className="img-fluid" />
                    </div>
                    <div className="it-gallery-icon">
                      <button
                        className="popup-image"
                        onClick={() => setOpen(true)}
                      >
                        <i className="fa-light fa-plus"></i>
                      </button>
                    </div>
                  </div>
                </div>
              ))
              .slice(111, 125)}
          </div>
        </div>
      </div>
    </>
  );
};
export default Campusdisplay;
