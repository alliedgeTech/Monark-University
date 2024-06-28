import React, { useEffect, useState } from "react";
import "yet-another-react-lightbox/styles.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

const MediaCoverageImage = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    let mm = gsap.matchMedia();

    mm.add("(min-width:991px)", () => {
      gsap.from(".best-university-heading h1", {
        opacity: 0,
        scale: 0.5,
        y: 100,
        scrollTrigger: {
          trigger: ".best-university-heading h1",
          scroller: "body",
          start: "top bottom",
          end: "top 70%",
          scrub: 0.2,
        },
      });
    });
  }, []);

  const mediacoveragedata = [
    {
      id: 1,
      img: "/img/mediacoverage/img-1.jpeg",
    },
    {
      id: 2,
      img: "/img/mediacoverage/img-2.jpeg",
    },
    {
      id: 3,
      img: "/img/mediacoverage/img-3.png",
    },
    {
      id: 4,
      img: "/img/mediacoverage/img-4.jpg",
    },
    {
      id: 5,
      img: "/img/mediacoverage/img-5.jpg",
    },
    {
      id: 6,
      img: "/img/mediacoverage/img-6.png",
    },
    {
      id: 7,
      img: "/img/mediacoverage/img-7.jpg",
    },
    {
      id: 8,
      img: "/img/mediacoverage/img-8.jpg",
    },
  ];

  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="it-gallery-area p-relative pt-100 pb-20">
        <div className="container  rounded p-3">
          <div className="row">
            <div className="col-xl-12">
              <div className="it-gallery-title-box three pb-20">
                <h1 className="it-section-title-3">Media & Coverage</h1>
              </div>
            </div>
          </div>
          <div className="row">
            {mediacoveragedata
              .map((media, index) => (
                <div
                  key={index}
                  className="col-xl-3 col-lg-3 col-md col-sm p-2"
                >
                  <div className="it-gallery">
                    <div className="it-gallery-thumb">
                      <img src={media.img} className="img-fluid" />
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default MediaCoverageImage;