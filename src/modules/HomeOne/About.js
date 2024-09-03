import dynamic from "next/dynamic";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useEffect } from "react";
import Marquee from "react-fast-marquee";

// Import jQuery
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
    items: 2,
    margin: 10,
  },
  1024: {
    items: 2,
    margin: 20,
  },
};

export default function About() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    let mm = gsap.matchMedia();

    mm.add("(min-width:991px)", () => {
      gsap.from(".student-placement-heading h1", {
        opacity: 0,
        scale: 0.5,
        y: 100,
        scrollTrigger: {
          trigger: ".student-placement-heading h1",
          scroller: "body",
          start: "top bottom",
          end: "top 70%",
          scrub: 0.2,
        },
      });
    });
  }, []);


  return (<>
    <div className="student-placement bg-white pb-2 pt-4 ">
      <div className="course-heading-home text-center width_75 mx-auto mb-20">
        <h1 data-aos="fade-right" className="mb-0 text-black">Your Exceptional Placement <span>Opportunities</span> with Comprehensive Milestone <span>Packages</span></h1>
      </div>
      <Marquee className="placement-carousel" behavior="alternate" direction="">
        <div className="img-box" data-aos="fade-up" data-delay="1">
          <img
            className="img-fluid"
            src="https://res.cloudinary.com/dnjgopun8/image/upload/v1724924845/practo_logo_fdprb8.jpg "
            alt=""
          />
        </div>
        <div className="img-box" data-aos="fade-up" data-delay="2">
          <img
            className="img-fluid"
            src="https://res.cloudinary.com/dnjgopun8/image/upload/v1724924846/Microsoft_Azure-Logo.wine_rmvueg.svg "
            alt=""
          />
        </div>
        <div className="img-box" data-aos="fade-up" data-delay="3">
          <img
            className="img-fluid"
            src="https://res.cloudinary.com/dnjgopun8/image/upload/v1724924847/Axis_Bank_logo.svg_uuvreh.png "
            alt=""
          />
        </div>
        <div className="img-box" data-aos="fade-up" data-delay="4">
          <img
            className="img-fluid"
            src="https://res.cloudinary.com/dnjgopun8/image/upload/v1724924847/3.Toyoto_mcndf1.png"
            alt=""
          />
        </div>
        <div className="img-box" data-aos="fade-up" data-delay="5">
          <img
            className="img-fluid"
            src="https://res.cloudinary.com/dnjgopun8/image/upload/v1724924846/smc_fpfudn.jpg"
            alt=""
          />
        </div>
        <div className="img-box" data-aos="fade-up" data-delay="6">
          <img
            className="img-fluid"
            src="https://res.cloudinary.com/dnjgopun8/image/upload/v1724924846/snlfinanciallogo-300x53_j0j2ce.jpg "
            alt=""
          />
        </div>
        <div className="img-box" data-aos="fade-up" data-delay="7">
          <img
            className="img-fluid"
            src="https://res.cloudinary.com/dnjgopun8/image/upload/v1724924845/prakshal-300x81_skol72.jpg "
            alt=""
          />
        </div>
        <div className="img-box" data-aos="fade-up" data-delay="8">
          <img
            className="img-fluid"
            src="https://res.cloudinary.com/dnjgopun8/image/upload/v1724924845/nj-300x83_mgs8y0.jpg"
            alt=""
          />
        </div>
        <div className="img-box" data-aos="fade-up" data-delay="9">
          <img
            className="img-fluid"
            src="https://res.cloudinary.com/dnjgopun8/image/upload/v1724924843/microlink-solution-pvt-ltd-11318313387_d1eybj.jpg "
            alt=""
          />
        </div>
        <div className="img-box" data-aos="fade-up" data-delay="10">
          <img
            className="img-fluid"
            src="https://res.cloudinary.com/dnjgopun8/image/upload/v1724924843/mazda1_reqlbq.jpg"
            alt=""
          />
        </div>
        <div className="img-box" data-aos="fade-up" data-delay="11">
          <img
            className="img-fluid"
            src="https://res.cloudinary.com/dnjgopun8/image/upload/v1724924843/fp_wmktbn.jpg"
            alt=""
          />
        </div>
        <div className="img-box" data-aos="fade-up" data-delay="12">
          <img
            className="img-fluid"
            src="https://res.cloudinary.com/dnjgopun8/image/upload/v1724924842/essae-teraoka-ltd-350x120-1_h4c67l.jpg"
            alt=""
          />
        </div>
        <div className="img-box" data-aos="fade-up" data-delay="13">
          <img
            className="img-fluid"
            src="https://res.cloudinary.com/dnjgopun8/image/upload/v1724924842/EPOCH_n5rn39.jpg"
            alt=""
          />
        </div>
        <div className="img-box" data-aos="fade-up" data-delay="14">
          <img
            className="img-fluid"
            src="https://res.cloudinary.com/dnjgopun8/image/upload/v1724924842/ECLINICAL_tqdjtb.jpg"
            alt=""
          />
        </div>
        <div className="img-box" data-aos="fade-up" data-delay="15">
          <img
            className="img-fluid"
            src="https://res.cloudinary.com/dnjgopun8/image/upload/v1724924842/bharti-axa-life-insurance-logo2_mgyhh4.jpg "
            alt=""
          />
        </div>
        <div className="img-box" data-aos="fade-up" data-delay="16">
          <img
            className="img-fluid"
            src="https://res.cloudinary.com/dnjgopun8/image/upload/v1724924839/2.-BYJUS_dt1ufz.png"
            alt=""
          />
        </div>
        <div className="img-box" data-aos="fade-up" data-delay="17">
          <img
            className="img-fluid"
            src="https://res.cloudinary.com/dnjgopun8/image/upload/v1724924839/aricent_ck1law.jpg"
            alt=""
          />
        </div>
        <div className="img-box" data-aos="fade-up" data-delay="18">
          <img
            className="img-fluid"
            src="https://res.cloudinary.com/dnjgopun8/image/upload/v1724924838/5.-torrent-300x93_htf0av.png "
            alt=""
          />
        </div>
        <div className="img-box" data-aos="fade-up" data-delay="19">
          <img
            className="img-fluid"
            src="https://res.cloudinary.com/dnjgopun8/image/upload/v1724924838/6.-Zydus-Cadila-300x225_hinnab.jpg "
            alt=""
          />
        </div>
        <div className="img-box" data-aos="fade-up" data-delay="20">
          <img
            className="img-fluid"
            src="https://res.cloudinary.com/dnjgopun8/image/upload/v1724924839/925608981-2813930-1_s_dg2mei.jpg "
            alt=""
          />
        </div>
        <div className="img-box" data-aos="fade-up" data-delay="21"> 
          <img
            className="img-fluid"
            src="https://res.cloudinary.com/dnjgopun8/image/upload/v1724924838/4.-Maruti-Suzuki_hemknd.jpg "
            alt=""
          />
        </div>
        <div className="img-box" data-aos="fade-up" data-delay="22">
          <img
            className="img-fluid"
            src="https://res.cloudinary.com/dnjgopun8/image/upload/v1724924838/8.-VODAFONE-IMAGE_iywihl.jpg "
            alt=""
          />
        </div>
        <div className="img-box" data-aos="fade-up" data-delay="23">
          <img
            className="img-fluid"
            src="https://res.cloudinary.com/dnjgopun8/image/upload/v1724924838/9.-IBM-300x143_kvnhae.jpg "
            alt=""
          />
        </div>
        <div className="img-box" data-aos="fade-up" data-delay="24" >
          <img 
            className="img-fluid"
            src="https://res.cloudinary.com/dnjgopun8/image/upload/v1724924838/11.-Jindal-Steel-Power-300x107_txdcnq.png "
            alt=""
          />
        </div>
        <div className="img-box" data-aos="fade-up" data-delay="25">
          <img
            className="img-fluid"
            src="https://res.cloudinary.com/dnjgopun8/image/upload/v1724924838/18.-ICICI-2-300x188_wxlcdl.jpg "
            alt=""
          />
        </div>
      </Marquee>
    </div>
    <div className="alumini-student ">
      <div className="container">
        <div className="row">
          <div className="col-lg-5 col-12 d-flex align-items-center">
            <div className="alumini-heading p-relative" data-aos="zoom-in-right">
              <h5>You May Also Be One Of Them</h5>
              <h1  className="text-black">Our Alums Employed by the <span>World's</span> Leading <span className="blue">Organizations</span></h1>
              <img className="img-fluid d-lg-block d-none line-round" src="https://cdn.pixabay.com/photo/2014/12/10/10/08/district-562975_1280.png" alt="" />
            </div>
          </div>
          <div className="col-lg-7 col-12 px-3">
              <div className="alumini-carousel" data-aos="zoom-in-left">
                <OwlCarousel
                  className="owl-theme"
                  autoPlay={true}
                  margin={10}
                  loop={true}
                  responsive={Responsive}
                  responsiveRefreshRate={0}
                  autoplay={true}
                  autoplayTimeout={3000}
                  autoplayHoverPause={false}
                >
                  <div className="item px-2 py-3">
                    <div className="alumini-card">
                      <img
                        className="img-fluid"
                        src="https://res.cloudinary.com/dnjgopun8/image/upload/v1725000572/Placement_Data_2_titkat.jpg "
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="item px-2 py-3">
                    <div className="alumini-card">
                      <img className="img-fluid" src="https://res.cloudinary.com/dnjgopun8/image/upload/v1725000572/2.jpeg_t6idwy.jpg" alt="" />
                    </div>
                  </div>
                  <div className="item px-2 py-3">
                    <div className="alumini-card">
                      <img className="img-fluid" src="https://res.cloudinary.com/dnjgopun8/image/upload/v1725000572/Placement_Data_4_qj6cpb.jpg " alt="" />
                    </div>
                  </div>
                  <div className="item px-2 py-3">
                    <div className="alumini-card">
                      <img className="img-fluid" src="https://res.cloudinary.com/dnjgopun8/image/upload/v1725000572/Placement_Data_3_j47bbp.jpg " alt="" />
                    </div>
                  </div>{" "}
                  <div className="item px-2 py-3">
                    <div className="alumini-card">
                      <img className="img-fluid" src="https://res.cloudinary.com/dnjgopun8/image/upload/v1725000572/10.jpeg_bnlc5n.jpg" alt="" />
                    </div>
                  </div>{" "}
                  <div className="item px-2 py-3">
                    <div className="alumini-card">
                      <img className="img-fluid" src="https://res.cloudinary.com/dnjgopun8/image/upload/v1725000572/7_1_dkhvth.jpg" alt="" />
                    </div>
                  </div>{" "}
                  <div className="item px-2 py-3">
                    <div className="alumini-card">
                      <img className="img-fluid" src="https://res.cloudinary.com/dnjgopun8/image/upload/v1725000571/8_1_tov23d.jpg" alt="" />
                    </div>
                  </div>{" "}
                  <div className="item px-2 py-3">
                    <div className="alumini-card">
                      <img className="img-fluid" src="https://res.cloudinary.com/dnjgopun8/image/upload/v1725000571/3.jpeg_s6mdgk.jpg" alt="" />
                    </div>
                  </div>{" "}
                  <div className="item px-2 py-3">
                    <div className="alumini-card">
                      <img className="img-fluid" src="https://res.cloudinary.com/dnjgopun8/image/upload/v1725000571/6.jpeg_maz1vc.jpg" alt="" />
                    </div>
                  </div>{" "}
                  <div className="item px-2 py-3">
                    <div className="alumini-card">
                      <img className="img-fluid" src="https://res.cloudinary.com/dnjgopun8/image/upload/v1725000571/4.jpeg_u9gjwu.jpg" alt="" />
                    </div>
                  </div>{" "}
                  <div className="item px-2 py-3">
                    <div className="alumini-card">
                      <img className="img-fluid" src="https://res.cloudinary.com/dnjgopun8/image/upload/v1725000571/9.jpeg_b0qb1j.jpg" alt="" />
                    </div>
                  </div>{" "}
                  <div className="item px-2 py-3">
                    <div className="alumini-card">
                      <img className="img-fluid" src="https://res.cloudinary.com/dnjgopun8/image/upload/v1725000571/5.jpeg_qurrds.jpg" alt="" />
                    </div>
                  </div>{" "}
                  <div className="item px-2 py-3">
                    <div className="alumini-card">
                      <img className="img-fluid" src="https://res.cloudinary.com/dnjgopun8/image/upload/v1724995597/7_zlj3dw.jpg" alt="" />
                    </div>
                  </div>{" "}
                  <div className="item px-2 py-3">
                    <div className="alumini-card">
                      <img className="img-fluid" src="https://res.cloudinary.com/dnjgopun8/image/upload/v1724995597/6_lijxfr.jpg" alt="" />
                    </div>
                  </div>{" "}
                  <div className="item px-2 py-3">
                    <div className="alumini-card">
                      <img className="img-fluid" src="https://res.cloudinary.com/dnjgopun8/image/upload/v1724995597/9_zghy16.jpg" alt="" />
                    </div>
                  </div>{" "}
                  <div className="item px-2 py-3">
                    <div className="alumini-card">
                      <img className="img-fluid" src="https://res.cloudinary.com/dnjgopun8/image/upload/v1724995597/1_xyk54h.jpg" alt="" />
                    </div>
                  </div>{" "}
                  <div className="item px-2 py-3">
                    <div className="alumini-card">
                      <img className="img-fluid" src="https://res.cloudinary.com/dnjgopun8/image/upload/v1724995597/5_x8tw29.jpg" alt="" />
                    </div>
                  </div>{" "}
                  <div className="item px-2 py-3">
                    <div className="alumini-card">
                      <img className="img-fluid" src="https://res.cloudinary.com/dnjgopun8/image/upload/v1724995597/2_tissiv.jpg" alt="" />
                    </div>
                  </div>{" "}
                  <div className="item px-2 py-3">
                    <div className="alumini-card">
                      <img className="img-fluid" src="https://res.cloudinary.com/dnjgopun8/image/upload/v1724995597/4_qvmpyx.jpg" alt="" />
                    </div>
                  </div>{" "}
                  <div className="item px-2 py-3">
                    <div className="alumini-card">
                      <img className="img-fluid" src="https://res.cloudinary.com/dnjgopun8/image/upload/v1724995596/3_lkw8yc.jpg" alt="" />
                    </div>
                  </div>
                  <div className="item px-2 py-3">
                    <div className="alumini-card">
                      <img className="img-fluid" src="https://res.cloudinary.com/dnjgopun8/image/upload/v1724995596/8_koghc1.jpg" alt="" />
                    </div>
                  </div>
                </OwlCarousel>
              </div>
            </div>
        </div>
      </div>
    </div>
  </>
  );
}
