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
    items: 2,
    margin: 5,
  },
  435: {
    items: 3,
    margin: 10,
  },
  768: {
    items: 4,
    margin: 10,
  },
  1024: {
    items: 7,
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

  return (
    <div className="student-placement pb-2 pt-4 container-fluid">
      <div className="student-placement-heading one">
        <h1 className="mb-0 w-100">Student Placement</h1>
      </div>

      {/* <OwlCarousel
                    className="owl px-3"
                    loop={true}
                    autoPlay={true}
                    responsive={Responsive}
                    responsiveRefreshRate={100}
              autoplay={true}
              autoplayTimeout={1000}
                  >
                    <div className="item">
                      <div className="img-box">
                    <img className="img-fluid" src="https://monarkuni.ac.in/wp-content/uploads/2022/06/3.Toyoto.png" alt="" />

                      </div>
                    </div>
                    <div className="item">
                      <div className="img-box">
                    <img className="img-fluid" src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Axis_Bank_logo.svg/2560px-Axis_Bank_logo.svg.png" alt="" />

                      </div>
                    </div>
                    <div className="item">
                      <div className="img-box">
                    <img className="img-fluid" src="https://www.logo.wine/a/logo/Microsoft_Azure/Microsoft_Azure-Logo.wine.svg" alt="" />

                      </div>
                    </div>
                    <div className="item">
                      <div className="img-box">
                    <img className="img-fluid" src="https://monarkuni.ac.in/wp-content/uploads/2021/06/snlfinanciallogo-300x53.jpg" alt="" />

                      </div>
                    </div>
                    <div className="item">
                      <div className="img-box">
                    <img className="img-fluid" src="https://monarkuni.ac.in/wp-content/uploads/2021/06/smc.jpg" alt="" />

                      </div>
                    </div>
                    <div className="item">
                      <div className="img-box">
                    <img className="img-fluid" src="https://monarkuni.ac.in/wp-content/uploads/2021/06/prakshal-300x81.jpg" alt="" />

                      </div>
                    </div>
                    <div className="item">
                      <div className="img-box">
                    <img className="img-fluid" src="https://monarkuni.ac.in/wp-content/uploads/2021/06/practo_logo.jpg" alt="" />

                      </div>
                    </div>
                    <div className="item">
                      <div className="img-box">
                    <img className="img-fluid" src="https://monarkuni.ac.in/wp-content/uploads/2021/06/nj-300x83.jpg" alt="" />

                      </div>
                    </div>
                    <div className="item">
                      <div className="img-box">
                    <img className="img-fluid" src="https://monarkuni.ac.in/wp-content/uploads/2021/06/microlink-solution-pvt-ltd-11318313387.jpg" alt="" />

                      </div>
                    </div>
                    <div className="item">
                      <div className="img-box">
                    <img className="img-fluid" src="https://monarkuni.ac.in/wp-content/uploads/2021/06/mazda1.jpg" alt="" />

                      </div>
                    </div>
                    <div className="item">
                      <div className="img-box">
                    <img className="img-fluid" src="https://monarkuni.ac.in/wp-content/uploads/2021/06/fp.jpg" alt="" />

                      </div>
                    </div>
                    <div className="item">
                      <div className="img-box">
                    <img className="img-fluid" src="https://monarkuni.ac.in/wp-content/uploads/2021/06/essae-teraoka-ltd-350x120-1.jpg" alt="" />

                      </div>
                    </div>
                    <div className="item">
                      <div className="img-box">
                    <img className="img-fluid" src="https://monarkuni.ac.in/wp-content/uploads/2021/06/EPOCH.jpg" alt="" />

                      </div>
                    </div>
                    <div className="item">
                      <div className="img-box">
                    <img className="img-fluid" src="https://monarkuni.ac.in/wp-content/uploads/2021/06/ECLINICAL.jpg" alt="" />

                      </div>
                    </div>
                    <div className="item">
                      <div className="img-box">
                    <img className="img-fluid" src="https://monarkuni.ac.in/wp-content/uploads/2021/06/bharti-axa-life-insurance-logo2.jpg" alt="" />

                      </div>
                    </div>
                    <div className="item">
                      <div className="img-box">
                    <img className="img-fluid" src="https://monarkuni.ac.in/wp-content/uploads/2021/06/aricent.jpg" alt="" />

                      </div>
                    </div>
                    <div className="item">
                      <div className="img-box">
                    <img className="img-fluid" src="https://monarkuni.ac.in/wp-content/uploads/2021/06/925608981-2813930-1_s.jpg" alt="" />

                      </div>
                    </div>
                    <div className="item">
                      <div className="img-box">
                    <img className="img-fluid" src="https://monarkuni.ac.in/wp-content/uploads/2022/06/2.-BYJUS.png" alt="" />

                      </div>
                    </div>
                    <div className="item">
                      <div className="img-box">
                    <img className="img-fluid" src="https://monarkuni.ac.in/wp-content/uploads/2022/06/4.-Maruti-Suzuki.jpg" alt="" />

                      </div>
                    </div>
                    <div className="item">
                      <div className="img-box">
                    <img className="img-fluid" src="https://monarkuni.ac.in/wp-content/uploads/2022/06/5.-torrent-300x93.png" alt="" />

                      </div>
                    </div>
                    <div className="item">
                      <div className="img-box">
                    <img className="img-fluid" src="https://monarkuni.ac.in/wp-content/uploads/2022/06/6.-Zydus-Cadila-300x225.jpg" alt="" />

                      </div>
                    </div>
                    <div className="item">
                      <div className="img-box">
                    <img className="img-fluid" src="https://monarkuni.ac.in/wp-content/uploads/2022/06/9.-IBM-300x143.jpg" alt="" />

                      </div>
                    </div>
                    <div className="item">
                      <div className="img-box">
                    <img className="img-fluid" src="https://monarkuni.ac.in/wp-content/uploads/2022/06/8.-VODAFONE-IMAGE.jpg" alt="" />

                      </div>
                    </div>
                    <div className="item">
                      <div className="img-box">
                    <img className="img-fluid" src="https://monarkuni.ac.in/wp-content/uploads/2022/06/11.-Jindal-Steel-Power-300x107.png" alt="" />

                      </div>
                    </div>
                    <div className="item">
                      <div className="img-box">
                    <img className="img-fluid" src="https://monarkuni.ac.in/wp-content/uploads/2022/06/18.-ICICI-2-300x188.jpg" alt="" />

                      </div>
                    </div>
                  </OwlCarousel> */}
      <Marquee className="placement-carousel" behavior="alternate" direction="">
        <div className="img-box">
          <img
            className="img-fluid"
            src="https://monarkuni.ac.in/wp-content/uploads/2022/06/3.Toyoto.png"
            alt=""
          />
        </div>
        <div className="img-box">
          <img
            className="img-fluid"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Axis_Bank_logo.svg/2560px-Axis_Bank_logo.svg.png"
            alt=""
          />
        </div>
        <div className="img-box">
          <img
            className="img-fluid"
            src="https://www.logo.wine/a/logo/Microsoft_Azure/Microsoft_Azure-Logo.wine.svg"
            alt=""
          />
        </div>
        <div className="img-box">
          <img
            className="img-fluid"
            src="https://monarkuni.ac.in/wp-content/uploads/2021/06/snlfinanciallogo-300x53.jpg"
            alt=""
          />
        </div>
        <div className="img-box">
          <img
            className="img-fluid"
            src="https://monarkuni.ac.in/wp-content/uploads/2021/06/smc.jpg"
            alt=""
          />
        </div>
        <div className="img-box">
          <img
            className="img-fluid"
            src="https://monarkuni.ac.in/wp-content/uploads/2021/06/prakshal-300x81.jpg"
            alt=""
          />
        </div>
        <div className="img-box">
          <img
            className="img-fluid"
            src="https://monarkuni.ac.in/wp-content/uploads/2021/06/practo_logo.jpg"
            alt=""
          />
        </div>
        <div className="img-box">
          <img
            className="img-fluid"
            src="https://monarkuni.ac.in/wp-content/uploads/2021/06/nj-300x83.jpg"
            alt=""
          />
        </div>
        <div className="img-box">
          <img
            className="img-fluid"
            src="https://monarkuni.ac.in/wp-content/uploads/2021/06/microlink-solution-pvt-ltd-11318313387.jpg"
            alt=""
          />
        </div>
        <div className="img-box">
          <img
            className="img-fluid"
            src="https://monarkuni.ac.in/wp-content/uploads/2021/06/mazda1.jpg"
            alt=""
          />
        </div>
        <div className="img-box">
          <img
            className="img-fluid"
            src="https://monarkuni.ac.in/wp-content/uploads/2021/06/fp.jpg"
            alt=""
          />
        </div>
        <div className="img-box">
          <img
            className="img-fluid"
            src="https://monarkuni.ac.in/wp-content/uploads/2021/06/essae-teraoka-ltd-350x120-1.jpg"
            alt=""
          />
        </div>
        <div className="img-box">
          <img
            className="img-fluid"
            src="https://monarkuni.ac.in/wp-content/uploads/2021/06/EPOCH.jpg"
            alt=""
          />
        </div>
        <div className="img-box">
          <img
            className="img-fluid"
            src="https://monarkuni.ac.in/wp-content/uploads/2021/06/ECLINICAL.jpg"
            alt=""
          />
        </div>
        <div className="img-box">
          <img
            className="img-fluid"
            src="https://monarkuni.ac.in/wp-content/uploads/2021/06/bharti-axa-life-insurance-logo2.jpg"
            alt=""
          />
        </div>
        <div className="img-box">
          <img
            className="img-fluid"
            src="https://monarkuni.ac.in/wp-content/uploads/2021/06/aricent.jpg"
            alt=""
          />
        </div>
        <div className="img-box">
          <img
            className="img-fluid"
            src="https://monarkuni.ac.in/wp-content/uploads/2021/06/925608981-2813930-1_s.jpg"
            alt=""
          />
        </div>
        <div className="img-box">
          <img
            className="img-fluid"
            src="https://monarkuni.ac.in/wp-content/uploads/2022/06/2.-BYJUS.png"
            alt=""
          />
        </div>
        <div className="img-box">
          <img
            className="img-fluid"
            src="https://monarkuni.ac.in/wp-content/uploads/2022/06/4.-Maruti-Suzuki.jpg"
            alt=""
          />
        </div>
        <div className="img-box">
          <img
            className="img-fluid"
            src="https://monarkuni.ac.in/wp-content/uploads/2022/06/5.-torrent-300x93.png"
            alt=""
          />
        </div>
        <div className="img-box">
          <img
            className="img-fluid"
            src="https://monarkuni.ac.in/wp-content/uploads/2022/06/6.-Zydus-Cadila-300x225.jpg"
            alt=""
          />
        </div>
        <div className="img-box">
          <img
            className="img-fluid"
            src="https://monarkuni.ac.in/wp-content/uploads/2022/06/9.-IBM-300x143.jpg"
            alt=""
          />
        </div>
        <div className="img-box">
          <img
            className="img-fluid"
            src="https://monarkuni.ac.in/wp-content/uploads/2022/06/8.-VODAFONE-IMAGE.jpg"
            alt=""
          />
        </div>
        <div className="img-box">
          <img
            className="img-fluid"
            src="https://monarkuni.ac.in/wp-content/uploads/2022/06/11.-Jindal-Steel-Power-300x107.png"
            alt=""
          />
        </div>
        <div className="img-box">
          <img
            className="img-fluid"
            src="https://monarkuni.ac.in/wp-content/uploads/2022/06/18.-ICICI-2-300x188.jpg"
            alt=""
          />
        </div>
      </Marquee>
    </div>
  );
}
