
import React, { useEffect } from "react";
import { useState } from "react";
import "yet-another-react-lightbox/styles.css";
import campusdata from "@/data/campus";
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import 'aos/dist/aos.css'; 
import aos from 'aos';

const Campusdisplay = () => {

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    aos.init({
      offset: 50, // Offset (in pixels) from the original trigger point
      duration: 700, // Duration of animation (in milliseconds)
    });
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
      
      <div
        id="it-gallery"
        className="it-gallery-area p-relative pt-20 pb-20"
      >
        
        <div className="container  rounded p-3" id="artsandculture">
          <div className="row">
            <div className="col-xl-12">
              <div className="it-gallery-title-box pb-20">
                <div className="three" data-aos="fade-up">
                <h1 className="it-section-title-3">Arts and Gallery</h1>

                </div>
              </div>
            </div>
          </div>
          <div className="row">
            {campusdata
              .map((campus, index) => (
                <div key={index} className="col-xl-2 col-lg-2 col-md col-sm p-2">
                  <div className="it-gallery" >
                    <div className="it-gallery-thumb" data-aos="zoom-out">
                      <img src={campus.img} className="img-fluid" />
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
              <div className="it-gallery-title-box three pb-20" data-aos="fade-up">
                <h1 className="it-section-title-3">Campus Life</h1>
              </div>
            </div>
          </div>
          <div className="row">
            {campusdata
              .map((campus, index) => (
                <div key={index} className="col-xl-3 col-lg-3 col-md col-sm p-2">
                  <div className="it-gallery">
                    <div className="it-gallery-thumb" data-aos="zoom-out">
                      <img src={campus.img} className="img-fluid" />
                    </div>
                    
                  </div>
                </div>
              ))
              .slice(18,34)}
          </div>
        </div>
        
        <div className="container" id="workshopsandseminars">
          <div className="row">
            <div className="col-xl-12">
              <div className="it-gallery-title-box three pb-20" data-aos="fade-up">
                <h1 className="it-section-title-3">Workshops & Seminars</h1>
              </div>
            </div>
          </div>
          <div className="row">
            {campusdata
              .map((campus, index) => (
                <div key={index} className="col-xl-4 -col-lg-4 col-md col-sm p-2">
                  <div className="it-gallery">
                    <div className="it-gallery-thumb" data-aos="zoom-out">
                      <img src={campus.img} className="img-fluid" />
                    </div>
                    
                  </div>
                </div>
              ))
              .slice(102, 108)}
          </div>
        </div>
        <div className="container  rounded p-3" id="yoga">
          <div className="row">
            <div className="col-xl-12">
              <div className="it-gallery-title-box three pb-20" data-aos="fade-up">
                <h1 className="it-section-title-3">International Yoga Day</h1>
              </div>
            </div>
          </div>
          <div className="row">
            {campusdata
              .map((campus, index) => (
                <div key={index} className="col-xl-4 col-lg-4 col-md col-sm p-2">
                  <div className="it-gallery">
                    <div className="it-gallery-thumb" data-aos="zoom-out">
                      <img src={campus.img} className="img-fluid" />
                    </div>
                    
                  </div>
                </div>
              ))
              .slice(108, 111)}
          </div>
        </div>
       
      </div>
    </>
  );
};
export default Campusdisplay;
