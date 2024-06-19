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
    items: 3,
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
    <div className="student-placement pb-2 pt-4 container">
      <div className="course-heading-home text-center mb-20">
        <h1 className="mb-0">Your Exceptional Placement <span>Opportunities</span> with Comprehensive Milestone <span>Packages</span></h1>
      </div>
      <Marquee className="placement-carousel" behavior="alternate" direction="">
        <div className="img-box" data-delay="1">
          <img
            className="img-fluid"
            src="https://monarkuni.ac.in/wp-content/uploads/2022/06/3.Toyoto.png"
            alt=""
          />
        </div>
        <div className="img-box" data-delay="2">
          <img
            className="img-fluid"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Axis_Bank_logo.svg/2560px-Axis_Bank_logo.svg.png"
            alt=""
          />
        </div>
        <div className="img-box" data-delay="3">
          <img
            className="img-fluid"
            src="https://www.logo.wine/a/logo/Microsoft_Azure/Microsoft_Azure-Logo.wine.svg"
            alt=""
          />
        </div>
        <div className="img-box" data-delay="4">
          <img
            className="img-fluid"
            src="https://monarkuni.ac.in/wp-content/uploads/2021/06/snlfinanciallogo-300x53.jpg"
            alt=""
          />
        </div>
        <div className="img-box" data-delay="5">
          <img
            className="img-fluid"
            src="https://monarkuni.ac.in/wp-content/uploads/2021/06/smc.jpg"
            alt=""
          />
        </div>
        <div className="img-box" data-delay="6">
          <img
            className="img-fluid"
            src="https://monarkuni.ac.in/wp-content/uploads/2021/06/prakshal-300x81.jpg"
            alt=""
          />
        </div>
        <div className="img-box" data-delay="7">
          <img
            className="img-fluid"
            src="https://monarkuni.ac.in/wp-content/uploads/2021/06/practo_logo.jpg"
            alt=""
          />
        </div>
        <div className="img-box" data-delay="8">
          <img
            className="img-fluid"
            src="https://monarkuni.ac.in/wp-content/uploads/2021/06/nj-300x83.jpg"
            alt=""
          />
        </div>
        <div className="img-box" data-delay="9">
          <img
            className="img-fluid"
            src="https://monarkuni.ac.in/wp-content/uploads/2021/06/microlink-solution-pvt-ltd-11318313387.jpg"
            alt=""
          />
        </div>
        <div className="img-box" data-delay="10">
          <img
            className="img-fluid"
            src="https://monarkuni.ac.in/wp-content/uploads/2021/06/mazda1.jpg"
            alt=""
          />
        </div>
        <div className="img-box" data-delay="11">
          <img
            className="img-fluid"
            src="https://monarkuni.ac.in/wp-content/uploads/2021/06/fp.jpg"
            alt=""
          />
        </div>
        <div className="img-box" data-delay="12">
          <img
            className="img-fluid"
            src="https://monarkuni.ac.in/wp-content/uploads/2021/06/essae-teraoka-ltd-350x120-1.jpg"
            alt=""
          />
        </div>
        <div className="img-box" data-delay="13">
          <img
            className="img-fluid"
            src="https://monarkuni.ac.in/wp-content/uploads/2021/06/EPOCH.jpg"
            alt=""
          />
        </div>
        <div className="img-box" data-delay="14">
          <img
            className="img-fluid"
            src="https://monarkuni.ac.in/wp-content/uploads/2021/06/ECLINICAL.jpg"
            alt=""
          />
        </div>
        <div className="img-box" data-delay="15">
          <img
            className="img-fluid"
            src="https://monarkuni.ac.in/wp-content/uploads/2021/06/bharti-axa-life-insurance-logo2.jpg"
            alt=""
          />
        </div>
        <div className="img-box" data-delay="16">
          <img
            className="img-fluid"
            src="https://monarkuni.ac.in/wp-content/uploads/2021/06/aricent.jpg"
            alt=""
          />
        </div>
        <div className="img-box" data-delay="17">
          <img
            className="img-fluid"
            src="https://monarkuni.ac.in/wp-content/uploads/2021/06/925608981-2813930-1_s.jpg"
            alt=""
          />
        </div>
        <div className="img-box" data-delay="18">
          <img
            className="img-fluid"
            src="https://monarkuni.ac.in/wp-content/uploads/2022/06/2.-BYJUS.png"
            alt=""
          />
        </div>
        <div className="img-box" data-delay="19">
          <img
            className="img-fluid"
            src="https://monarkuni.ac.in/wp-content/uploads/2022/06/4.-Maruti-Suzuki.jpg"
            alt=""
          />
        </div>
        <div className="img-box" data-delay="20">
          <img
            className="img-fluid"
            src="https://monarkuni.ac.in/wp-content/uploads/2022/06/5.-torrent-300x93.png"
            alt=""
          />
        </div>
        <div className="img-box" data-delay="21"> 
          <img
            className="img-fluid"
            src="https://monarkuni.ac.in/wp-content/uploads/2022/06/6.-Zydus-Cadila-300x225.jpg"
            alt=""
          />
        </div>
        <div className="img-box" data-delay="22">
          <img
            className="img-fluid"
            src="https://monarkuni.ac.in/wp-content/uploads/2022/06/9.-IBM-300x143.jpg"
            alt=""
          />
        </div>
        <div className="img-box" data-delay="23">
          <img
            className="img-fluid"
            src="https://monarkuni.ac.in/wp-content/uploads/2022/06/8.-VODAFONE-IMAGE.jpg"
            alt=""
          />
        </div>
        <div className="img-box" data-delay="24" >
          <img 
            className="img-fluid"
            src="https://monarkuni.ac.in/wp-content/uploads/2022/06/11.-Jindal-Steel-Power-300x107.png"
            alt=""
          />
        </div>
        <div className="img-box" data-delay="25">
          <img
            className="img-fluid"
            src="https://monarkuni.ac.in/wp-content/uploads/2022/06/18.-ICICI-2-300x188.jpg"
            alt=""
          />
        </div>
      </Marquee>
    </div>
    <div className="alumini-student mb-30 container">
      <div className="row">
        <div className="col-lg-5 col-12 d-flex align-items-center">
          <div className="alumini-heading p-relative">
            <h5>You May Also Be One Of Them</h5>
            <h1 className="mt-4">Our Alums Employed by the <span>World's</span> Leading <span className="blue">Organizations</span></h1>
            <img className="img-fluid d-lg-block d-none line-round" src="https://cdn.pixabay.com/photo/2014/12/10/10/08/district-562975_1280.png" alt="" />
          </div>
        </div>
        <div className="col-lg-7 col-12 px-3">
          <div className="alumini-carousel">
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

            <img className="img-fluid" src="/img/blog/pic1.png" alt="" />
                </div>

              </div>
              <div className="item px-2 py-3">
              <div className="alumini-card">
                  
            <img className="img-fluid" src="/img/blog/pic2.png" alt="" />
                  </div>

              </div>
              <div className="item px-2 py-3">
              <div className="alumini-card">
                  
            <img className="img-fluid" src="/img/blog/pic3.png" alt="" />
                  </div>

              </div>
            </OwlCarousel>
          </div>
        </div>
      </div>
    </div>
  </>
  );
}
