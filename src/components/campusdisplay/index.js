import SingleBlog from "@/components/Blog";
import Blogs from "@/data/blogs";
import React from "react";
import dynamic from "next/dynamic";
import Image from "next/image";
import { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import campusdata from "@/data/campus";

const Campusdisplay = () => {
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
        <div className="it-gallery-shape-1 d-none d-lg-block">
          <Image
            src="/img/gallery/shape-1-1.png"
            alt=""
            width={115}
            height={117}
          />
        </div>
        <div className="it-gallery-shape-2 d-none d-lg-block">
          <Image
            src="/img/gallery/shape-1-2.png"
            alt=""
            width={190}
            height={201}
          />
        </div>
        <div className="it-gallery-shape-3 d-none d-lg-block">
          <Image
            src="/img/gallery/shape-1-3.png"
            alt=""
            width={98}
            height={87}
          />
        </div>
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className="it-gallery-title-box text-center pb-70">
                <span className="it-section-subtitle-5">
                  <i className="fa-light fa-book"></i>
                  Moanark Uni.
                  <i className="fa-light fa-book"></i>
                </span>
                <h2 className="it-section-title-3">Arts and Gallery</h2>
              </div>
            </div>
          </div>
          <div className="row">
            {campusdata.map((campus, index) => (
              <div key={index} className="col-xl-2 col-lg-2 col-md col-sm ">
                <div className="it-gallery-item p-relative">
                  <div className="it-gallery-thumb">
                    <Image src={campus.img} className="img-fluid" width={100} height={100}/>
                  </div>
                  <div className="it-gallery-icon">
                    <button className="popup-image" onClick={() => setOpen(true)}>
                      <i className="fa-light fa-plus"></i>
                    </button>
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
export default Campusdisplay;
