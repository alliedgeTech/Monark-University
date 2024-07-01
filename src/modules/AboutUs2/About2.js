import 'aos/dist/aos.css'; 
import aos from 'aos'; 
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "animate.css";

// Import jQuery
if (typeof window !== "undefined") {
  var $ = require("jquery");
  window.$ = window.jQuery = require("jquery");
}

// Dynamically import OwlCarousel without SSR
const OwlCarousel = dynamic(() => import("react-owl-carousel"), {
  ssr: false,
});

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
    items: 4,
    margin: 10,
  },
};

const apvrs = [
  {
    Title: "AICTE",
    Logo: "../../../public/img/choose/AICTE.png",
    Url: "https://www.aicte-india.org",
  },
  {
    Title: "NCTE",
    Logo: "../../../public/img/choose/NCTE.png",
    Url: "https://ncte.gov.in/website/index.aspx",
  },
  {
    Title: "GNC",
    Logo: "../../../public/img/choose/GNC.png",
    Url: "https://www.gujaratnursingcouncil.org",
  },
  {
    Title: "BCI",
    Logo: "../../../public/img/choose/BCI.png",
    Url: "https://www.barcouncilofindia.org/home",
  },
  {
    Title: "NAAC",
    Logo: "../../../public/img/choose/NAAC.png",
    Url: "http://naac.gov.in/index.php/en/",
  },
  {
    Title: "ISTE",
    Logo: "../../../public/img/choose/ISTE.png",
    Url: "http://www.isteonline.in/",
  },
  {
    Title: "VIPNET",
    Logo: "../../../public/img/choose/VIPNET.png",
    Url: "https://vigyanprasar.gov.in/vipnet/",
  },
  {
    Title: "NCC",
    Logo: "../../../public/img/choose/NCC.jpeg",
    Url: "https://indiancc.mygov.in/",
  },
];
export default function About() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    aos.init({
      offset: 100, // Offset (in pixels) from the original trigger point
      duration: 700, // Duration of animation (in milliseconds)
    });
    let mm = gsap.matchMedia();

    mm.add("(min-width:991px)", () => {
      gsap.from(".it-choose-title-box", {
        opacity: 0,
        x: -100,
        delay: "1",
      });
      gsap.from(".it-choose-text", {
        opacity: 0,
        x: -100,
        delay: "1",
      });
      gsap.from(".it-choose-thumb", {
        opacity: 0,
        x: 100,
        delay: "1",
      });
      gsap.from(".it-choose-content", {
        opacity: 0,
        x: 100,
        stagger: 0.5,
        scrollTrigger: {
          trigger: ".it-choose-content",
          scroller: "body",
          start: "top bottom",
          end: "top center",
          scrub: 0.2,
        },
      });
      gsap.from(".it-event-2-area", {
        opacity: 0,
        x: -100,
        stagger: 1,
        scrollTrigger: {
          trigger: ".it-event-2-area",
          scroller: "body",
          start: "top bottom",
          end: "top 10%",
          scrub: 0.2,
        },
      });
      gsap.from(".it-career-item-left", {
        opacity: 0,
        x: -100,
        scale: 0.5,
        scrollTrigger: {
          trigger: ".it-career-item-left",
          scroller: "body",
          start: "top bottom",
          end: "top 65%",
          scrub: 0.2,
        },
      });
      gsap.from(".it-career-item-right", {
        opacity: 0,
        x: 100,
        scale: 0.5,
        scrollTrigger: {
          trigger: ".it-career-item-right",
          scroller: "body",
          start: "top bottom",
          end: "top 65%",
          scrub: 0.2,
        },
      });
      gsap.from(".discover-heading", {
        opacity: 0,
        y: 100,
        scale: 1.5,
        scrollTrigger: {
          trigger: ".discover-heading",
          scroller: "body",
          start: "top bottom",
          end: "top 60%",
          scrub: 0.2,
        },
      });
    });
  }, []);
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };
  return (
    <div id="historicalbackground">
      <div className="it-choose-area p-relative pt-15">
        <div className="it-choose-shape-4 d-none d-md-block"></div>
        <div className="container">
          <div className="it-choose-title-box three">
            <h1 className="it-section-title mb-20">
              Historical Background of the Sponsoring Body
            </h1>
          </div>
          <div className="row">
            <div className="col-lg-6 col-12">
              <div className="it-choose-text pb-15">
                <p>
                  With the blessings of the Goddess Saraswati, Shree Monark
                  Education Trust (SMET) being the sponsoring/promoting body of
                  the Monark University was established in the year 2001 as a
                  result of the vision of its founder Chairman, Shri
                  Mohanbharthi R. Goswami, a farmer and philanthropist, to
                  promote world-class academic institutions. The following
                  erstwhile institutions promoted by the Trust at fast pace have
                  now come under the purview of the Monark University.
                </p>
              </div>
            </div>
            <div className="col-lg-6 col-12">
              <div className="it-choose-thumb-box mx-2 text-center text-md-end">
                <div className="it-choose-thumb p-relative">
                  <img
                    src="/img/choose/monarknew.jpg"
                    className="img-fluid"
                    alt=""
                  />
                  <div className="it-choose-shape-3 d-none d-lg-block"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Years and trust start*/}
      <div>
        <div class="container">
        <div class="timeline"> 
  <div class="timeline__event  animated fadeInUp delay-3s timeline__event--type2">
    <div class="timeline__event__icon ">
      <i class="lni-cake"></i>

    </div>
    <div class="timeline__event__date">
      2001
    </div>
    <div class="timeline__event__content ">
      <div class="timeline__event__title d-flex align-items-center gap-2">
        <i class="fa-solid fa-hand-point-right"></i>
      <h4 className="mb-0">Shree Monark education trust</h4>
      </div>
    </div>
  </div>
  <div data-aos="fade-up" class="timeline__event animated fadeInUp delay-2s timeline__event--type2">
    <div class="timeline__event__icon">
      <i class="lni-burger"></i>

    </div>
    <div class="timeline__event__date">
    2005
    </div>
    <div class="timeline__event__content">
      <div class="timeline__event__title d-flex align-items-center gap-2">
        <i class="fa-solid fa-hand-point-right"></i>
      <h4>Smt. Maniba  Mahila B.Ed. College</h4>
      </div>
    </div>
  </div>
  <div data-aos="fade-up" class="timeline__event animated fadeInUp delay-1s timeline__event--type2">
    <div class="timeline__event__icon">
      <i class="lni-slim"></i>

    </div>
    <div class="timeline__event__date">
    2007
    </div>
    <div class="timeline__event__content">
      <div class="timeline__event__title d-flex align-items-center gap-2">
        <i class="fa-solid fa-hand-point-right"></i>
      <h4>Hasmukh  Goswami College of Engineering</h4>
      </div>

    </div>
  </div>
  <div data-aos="fade-up" class="timeline__event animated fadeInUp timeline__event--type2">
    <div class="timeline__event__icon">
      <i class="lni-cake"></i>

    </div>
    <div class="timeline__event__date">
    2007
    </div>
    <div class="timeline__event__content">
      <div class="timeline__event__title d-flex align-items-center gap-2">
        <i class="fa-solid fa-hand-point-right"></i>
      <h4>Piyuni  pre-school teacher education</h4>
      </div>
    </div>
  </div>
  <div data-aos="fade-up" class="timeline__event animated fadeInUp timeline__event--type2">
    <div class="timeline__event__icon">
      <i class="lni-cake"></i>

    </div>
    <div class="timeline__event__date">
    2007
    </div>
    <div class="timeline__event__content">
      <div class="timeline__event__title d-flex align-items-center gap-2">
        <i class="fa-solid fa-hand-point-right"></i>
       <h4>Jeel adhyapan mandir</h4>
      </div>
    </div>
  </div>
  <div data-aos="fade-up" class="timeline__event animated fadeInUp timeline__event--type2">
    <div class="timeline__event__icon">
      <i class="lni-cake"></i>

    </div>
    <div class="timeline__event__date">
    2007
    </div>
    <div class="timeline__event__content">
      <div class="timeline__event__title d-flex align-items-center gap-2">
        <i class="fa-solid fa-hand-point-right"></i>
       <h4>Satish adhyapan mandir</h4>
      </div>
    </div>
  </div>
  <div data-aos="fade-up" class="timeline__event animated fadeInUp timeline__event--type2">
    <div class="timeline__event__icon">
      <i class="lni-cake"></i>

    </div>
    <div class="timeline__event__date">
    2008
    </div>
    <div class="timeline__event__content">
      <div class="timeline__event__title d-flex align-items-center gap-2">
        <i class="fa-solid fa-hand-point-right"></i>
      <h4 >Maniba College of education</h4>
      </div>
    </div>
  </div>
  <div data-aos="fade-up" class="timeline__event animated fadeInUp timeline__event--type2">
    <div class="timeline__event__icon">
      <i class="lni-cake"></i>

    </div>
    <div class="timeline__event__date">
    2008
    </div>
    <div class="timeline__event__content">
      <div class="timeline__event__title d-flex align-items-center gap-2">
        <i class="fa-solid fa-hand-point-right"></i>
      <h4 >Manguba M.Ed College</h4>
      </div>
    </div>
  </div>
  <div data-aos="fade-up" class="timeline__event animated fadeInUp timeline__event--type2">
    <div class="timeline__event__icon">
      <i class="lni-cake"></i>

    </div>
    <div class="timeline__event__date">
    2011
    </div>
    <div class="timeline__event__content">
      <div class="timeline__event__title d-flex align-items-center gap-2">
        <i class="fa-solid fa-hand-point-right"></i>
      <h4>Rudra  College of business administration</h4>
      </div>
    </div>
  </div>
  <div data-aos="fade-up" class="timeline__event animated fadeInUp timeline__event--type2">
    <div class="timeline__event__icon">
      <i class="lni-cake"></i>

    </div>
    <div class="timeline__event__date">
    2011
    </div>
    <div class="timeline__event__content">
      <div class="timeline__event__title d-flex align-items-center gap-2">
        <i class="fa-solid fa-hand-point-right"></i>
      <h4>Piyuni  Goswami College of commerce</h4>
      </div>
    </div>
  </div>
  <div data-aos="fade-up" class="timeline__event animated fadeInUp timeline__event--type2">
    <div class="timeline__event__icon">
      <i class="lni-cake"></i>

    </div>
    <div class="timeline__event__date">
    2015
    </div>
    <div class="timeline__event__content">
      <div class="timeline__event__title d-flex align-items-center gap-2">
        <i class="fa-solid fa-hand-point-right"></i>
      <h4>Jeel Goswami College  of Science and research</h4>
      </div>
    </div>
  </div>
  <div data-aos="fade-up" class="timeline__event animated fadeInUp timeline__event--type2">
    <div class="timeline__event__icon">
      <i class="lni-cake"></i>

    </div>
    <div class="timeline__event__date">
    2015
    </div>
    <div class="timeline__event__content">
      <div class="timeline__event__title d-flex align-items-center gap-2">
        <i class="fa-solid fa-hand-point-right"></i>
      <h4>Satish  Goswami College of Physiotherapist</h4>
      </div>
    </div>
  </div>
  <div data-aos="fade-up" class="timeline__event animated fadeInUp timeline__event--type2">
    <div class="timeline__event__icon">
      <i class="lni-cake"></i>

    </div>
    <div class="timeline__event__date">
    2018
    </div>
    <div class="timeline__event__content">
      <div class="timeline__event__title d-flex align-items-center gap-2">
        <i class="fa-solid fa-hand-point-right"></i>
      <h4>Urmila  Goswami College of Nursing</h4>
      </div>
    </div>
  </div>
  <div data-aos="fade-up" class="timeline__event animated fadeInUp timeline__event--type2">
    <div class="timeline__event__icon">
      <i class="lni-cake"></i>

    </div>
    <div class="timeline__event__date">
    2019
    </div>
    <div class="timeline__event__content">
      <div class="timeline__event__title d-flex align-items-center gap-2">
        <i class="fa-solid fa-hand-point-right"></i>
      <h4>Mohan  Goswami College of law</h4>
      </div>
    </div>
  </div>
  <div data-aos="fade-up" class="timeline__event animated fadeInUp timeline__event--type2">
    <div class="timeline__event__icon">
      <i class="lni-cake"></i>

    </div>
    <div class="timeline__event__date">
    2019
    </div>
    <div class="timeline__event__content">
      <div class="timeline__event__title d-flex align-items-center gap-2">
        <i class="fa-solid fa-hand-point-right"></i>
      <h4>Piyuni  Goswami College of arts</h4>
      </div>
    </div>
  </div>
  <div data-aos="fade-up" class="timeline__event animated fadeInUp timeline__event--type2">
    <div class="timeline__event__icon">
      <i class="lni-cake"></i>

    </div>
    <div class="timeline__event__date">
    2019
    </div>
    <div class="timeline__event__content">
      <div class="timeline__event__title d-flex align-items-center gap-2">
        <i class="fa-solid fa-hand-point-right"></i>
      <h4>Rudra Goswami  College of computer application</h4>
      </div>
    </div>
  </div>
  <div data-aos="fade-up" class="timeline__event animated fadeInUp timeline__event--type2">
    <div class="timeline__event__icon">
      <i class="lni-cake"></i>

    </div>
    <div class="timeline__event__date">
    2021
    </div>
    <div class="timeline__event__content">
      <div class="timeline__event__title d-flex align-items-center gap-2">
        <i class="fa-solid fa-hand-point-right"></i>
       <h4>Monark University</h4>
      </div>
    </div>
  </div>
  

</div>
          {/* <div className="our-history pt-2">
            <OwlCarousel
              className="owl-theme history-carousel"
              loop={true}
              dots={true}
              autoPlay={true}
              responsive={Responsive}
              responsiveRefreshRate={0}
              autoplay={true}
              autoplayTimeout={3000}
              autoplayHoverPause={false}
            >
              <div className="item py-5 px-2 m-0">
                <div className="history-item d-flex align-items-center">
                  <div className="history-card w-100 px-2">
                    <div className="history-card-heading d-flex align-items-center justify-content-center">
                      <h5 >2001</h5>
                    </div>
                    <h4>Shree Monark education trust</h4>
                  </div>
                </div>
              </div>
              <div className="item py-5 px-2 m-0">
                <div className="history-item d-flex align-items-center">
                  <div className="history-card w-100 px-2">
                    <div className="history-card-heading d-flex align-items-center justify-content-center">
                      <h5 className="mb-0">2005</h5>
                    </div>
                    <h4>Smt. Maniba Mahila B.Ed. College</h4>
                  </div>
                </div>
              </div>
              <div className="item py-5 px-2 m-0">
                <div className="history-item d-flex align-items-center">
                  <div className="history-card w-100 px-2">
                    <div className="history-card-heading d-flex align-items-center justify-content-center">
                      <h5 className="mb-0">2007</h5>
                    </div>
                    <h4>Hasmukh Goswami College of Engineering</h4>
                  </div>
                </div>
              </div>
              <div className="item py-5 px-2 m-0">
                <div className="history-item d-flex align-items-center">
                  <div className="history-card w-100 px-2">
                    <div className="history-card-heading d-flex align-items-center justify-content-center">
                      <h5 className="mb-0">2007</h5>
                    </div>
                    <h4>Piyuni pre-school teacher education</h4>
                  </div>
                </div>
              </div>
              <div className="item py-5 px-2 m-0">
                <div className="history-item d-flex align-items-center">
                  <div className="history-card w-100 px-2">
                    <div className="history-card-heading d-flex align-items-center justify-content-center">
                      <h5 className="mb-0">2007</h5>
                    </div>
                    <h4>Jeel adhyapan mandir</h4>
                  </div>
                </div>
              </div>
              <div className="item py-5 px-2 m-0">
                <div className="history-item d-flex align-items-center">
                  <div className="history-card w-100 px-2">
                    <div className="history-card-heading d-flex align-items-center justify-content-center">
                      <h5 className="mb-0">2007</h5>
                    </div>
                    <h4>Satish adhyapan mandir</h4>
                  </div>
                </div>
              </div>
              <div className="item py-5 px-2 m-0">
                <div className="history-item d-flex align-items-center">
                  <div className="history-card w-100 px-2">
                    <div className="history-card-heading d-flex align-items-center justify-content-center">
                      <h5 className="mb-0">2008</h5>
                    </div>
                    <h4>Maniba College of education</h4>
                  </div>
                </div>
              </div>
              <div className="item py-5 px-2 m-0">
                <div className="history-item d-flex align-items-center">
                  <div className="history-card w-100 px-2">
                    <div className="history-card-heading d-flex align-items-center justify-content-center">
                      <h5 className="mb-0">2008</h5>
                    </div>
                    <h4>Manguba M.Ed College</h4>
                  </div>
                </div>
              </div>
              <div className="item py-5 px-2 m-0">
                <div className="history-item d-flex align-items-center">
                  <div className="history-card w-100 px-2">
                    <div className="history-card-heading d-flex align-items-center justify-content-center">
                      <h5 className="mb-0">2011</h5>
                    </div>
                    <h4>Rudra College of business administration</h4>
                  </div>
                </div>
              </div>
              <div className="item py-5 px-2 m-0">
                <div className="history-item d-flex align-items-center">
                  <div className="history-card w-100 px-2">
                    <div className="history-card-heading d-flex align-items-center justify-content-center">
                      <h5 className="mb-0">2011</h5>
                    </div>
                    <h4>Piyuni Goswami College of commerce</h4>
                  </div>
                </div>
              </div>
              <div className="item py-5 px-2 m-0">
                <div className="history-item d-flex align-items-center">
                  <div className="history-card w-100 px-2">
                    <div className="history-card-heading d-flex align-items-center justify-content-center">
                      <h5 className="mb-0">2015</h5>
                    </div>
                    <h4>Jeel Goswami College of Science and research</h4>
                  </div>
                </div>
              </div>
              <div className="item py-5 px-2 m-0">
                <div className="history-item d-flex align-items-center">
                  <div className="history-card w-100 px-2">
                    <div className="history-card-heading d-flex align-items-center justify-content-center">
                      <h5 className="mb-0">2015</h5>
                    </div>
                    <h4>Satish Goswami College of Physiotherapist</h4>
                  </div>
                </div>
              </div>
              <div className="item py-5 px-2 m-0">
                <div className="history-item d-flex align-items-center">
                  <div className="history-card w-100 px-2">
                    <div className="history-card-heading d-flex align-items-center justify-content-center">
                      <h5 className="mb-0">2018</h5>
                    </div>
                    <h4>Urmila Goswami College of Nursing</h4>
                  </div>
                </div>
              </div>
              <div className="item py-5 px-2 m-0">
                <div className="history-item d-flex align-items-center">
                  <div className="history-card w-100 px-2">
                    <div className="history-card-heading d-flex align-items-center justify-content-center">
                      <h5 className="mb-0">2019</h5>
                    </div>
                    <h4>Mohan Goswami College of law</h4>
                  </div>
                </div>
              </div>
              <div className="item py-5 px-2 m-0">
                <div className="history-item d-flex align-items-center">
                  <div className="history-card w-100 px-2">
                    <div className="history-card-heading d-flex align-items-center justify-content-center">
                      <h5 className="mb-0">2019</h5>
                    </div>
                    <h4>Piyuni Goswami College of arts</h4>
                  </div>
                </div>
              </div>
              <div className="item py-5 px-2 m-0">
                <div className="history-item d-flex align-items-center">
                  <div className="history-card w-100 px-2">
                    <div className="history-card-heading d-flex align-items-center justify-content-center">
                      <h5 className="mb-0">2019</h5>
                    </div>
                    <h4>Rudra Goswami College of computer application</h4>
                  </div>
                </div>
              </div>
              <div className="item py-5 px-2 m-0">
                <div className="history-item d-flex align-items-center">
                  <div className="history-card w-100 px-2">
                    <div className="history-card-heading d-flex align-items-center justify-content-center">
                      <h5 className="mb-0">2021</h5>
                    </div>
                    <h4>Monark University</h4>
                  </div>
                </div>
              </div>
            </OwlCarousel>
          </div>   */}
        </div>
      </div>
    </div>
  );
}
