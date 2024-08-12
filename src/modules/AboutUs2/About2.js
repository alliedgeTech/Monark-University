import { useEffect, useState } from "react";
import "animate.css";
import 'aos/dist/aos.css'; 
import aos from 'aos'; 
import dynamic from "next/dynamic";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
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
    items: 3,
    margin: 10,
  },
  1024: {
    items: 4,
    margin: 20,
  },
};
export default function About() {
  useEffect(() => {
    aos.init({
      offset: 50, // Offset (in pixels) from the original trigger point
      duration: 700, // Duration of animation (in milliseconds)
    });
    

    
  }, []);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };
  return (
    <div id="historicalbackground">
      <div className="it-choose-area p-relative pt-15">
        <div className="it-choose-shape-4 d-none d-md-block"></div>
        <div className="container mt-20 ">
          <div className="deg45">
          <div className="px-lg-5 px-md-5 px-3 py-4 py-lg-5 deg-45">
            <div className="it-choose-title-box three curve" data-aos="fade-right">
              <h1 className="it-section-title mb-20 ">
                Historical Background
              </h1>
            </div>
            <div className="row">
              <div className="col-lg-6 col-12">
                <div className="it-choose-text pb-15" data-aos="fade-up">
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
                  <div className="it-choose p-relative in-img" data-aos="zoom-in">
                    <img
                      src="/img/choose/monarknew.jpg"
                      className="img-fluid "
                      alt=""
                    />
                    <div className="it-choose-shape-3 d-none d-lg-block"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          </div>
        </div>
      </div>
      {/* Years and trust start*/}
      <div>
        <div class="container">
        {/* <div class="timeline"> 
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
  

</div> */}
          <div className="our-history pt-2 ">
            <OwlCarousel
              className="owl-theme history-carousel"
              loop={true}
              dots={true}
              margin={20}
              autoPlay={true}
              responsive={Responsive}
              responsiveRefreshRate={0}
              autoplay={true}
              autoplayTimeout={3000}
              autoplayHoverPause={false}
            >
              <div className="item py-5 px-2 m-0">
                <div className="history-item d-flex align-items-center">
                  <div className="history-card w-100 px-4">
                    <div className="history-card-heading d-flex align-items-center justify-content-center">
                      <h5 >2001</h5>
                    </div>
                    <h4 className="text-black">Shree Monark education trust</h4>
                  </div>
                </div>
              </div>
              <div className="item py-5 px-2 m-0">
                <div className="history-item d-flex align-items-center">
                  <div className="history-card w-100 px-4">
                    <div className="history-card-heading d-flex align-items-center justify-content-center">
                      <h5 className="mb-0">2005</h5>
                    </div>
                    <h4 className="text-black">Smt. Maniba Mahila B.Ed. College</h4>
                  </div>
                </div>
              </div>
              <div className="item py-5 px-2 m-0">
                <div className="history-item d-flex align-items-center">
                  <div className="history-card w-100 px-4">
                    <div className="history-card-heading d-flex align-items-center justify-content-center">
                      <h5 className="mb-0">2007</h5>
                    </div>
                    <h4 className="text-black">Hasmukh Goswami College of Engineering</h4>
                  </div>
                </div>
              </div>
              <div className="item py-5 px-2 m-0">
                <div className="history-item d-flex align-items-center">
                  <div className="history-card w-100 px-4">
                    <div className="history-card-heading d-flex align-items-center justify-content-center">
                      <h5 className="mb-0">2007</h5>
                    </div>
                    <h4 className="text-black">Piyuni pre-school teacher education</h4>
                  </div>
                </div>
              </div>
              <div className="item py-5 px-2 m-0">
                <div className="history-item d-flex align-items-center">
                  <div className="history-card w-100 px-4">
                    <div className="history-card-heading d-flex align-items-center justify-content-center">
                      <h5 className="mb-0">2007</h5>
                    </div>
                    <h4 className="text-black">Jeel adhyapan mandir</h4>
                  </div>
                </div>
              </div>
              <div className="item py-5 px-2 m-0">
                <div className="history-item d-flex align-items-center">
                  <div className="history-card w-100 px-4">
                    <div className="history-card-heading d-flex align-items-center justify-content-center">
                      <h5 className="mb-0">2007</h5>
                    </div>
                    <h4 className="text-black">Satish adhyapan mandir</h4>
                  </div>
                </div>
              </div>
              <div className="item py-5 px-2 m-0">
                <div className="history-item d-flex align-items-center">
                  <div className="history-card w-100 px-4">
                    <div className="history-card-heading d-flex align-items-center justify-content-center">
                      <h5 className="mb-0">2008</h5>
                    </div>
                    <h4 className="text-black">Maniba College of education</h4>
                  </div>
                </div>
              </div>
              <div className="item py-5 px-2 m-0">
                <div className="history-item d-flex align-items-center">
                  <div className="history-card w-100 px-4">
                    <div className="history-card-heading d-flex align-items-center justify-content-center">
                      <h5 className="mb-0">2008</h5>
                    </div>
                    <h4 className="text-black">Manguba M.Ed College</h4>
                  </div>
                </div>
              </div>
              <div className="item py-5 px-2 m-0">
                <div className="history-item d-flex align-items-center">
                  <div className="history-card w-100 px-4">
                    <div className="history-card-heading d-flex align-items-center justify-content-center">
                      <h5 className="mb-0">2011</h5>
                    </div>
                    <h4 className="text-black">Rudra College of business administration</h4>
                  </div>
                </div>
              </div>
              <div className="item py-5 px-2 m-0">
                <div className="history-item d-flex align-items-center">
                  <div className="history-card w-100 px-4">
                    <div className="history-card-heading d-flex align-items-center justify-content-center">
                      <h5 className="mb-0">2011</h5>
                    </div>
                    <h4 className="text-black">Piyuni Goswami College of commerce</h4>
                  </div>
                </div>
              </div>
              <div className="item py-5 px-2 m-0">
                <div className="history-item d-flex align-items-center">
                  <div className="history-card w-100 px-4">
                    <div className="history-card-heading d-flex align-items-center justify-content-center">
                      <h5 className="mb-0">2015</h5>
                    </div>
                    <h4 className="text-black">Jeel Goswami College of Science and research</h4>
                  </div>
                </div>
              </div>
              <div className="item py-5 px-2 m-0">
                <div className="history-item d-flex align-items-center">
                  <div className="history-card w-100 px-4">
                    <div className="history-card-heading d-flex align-items-center justify-content-center">
                      <h5 className="mb-0">2015</h5>
                    </div>
                    <h4 className="text-black">Satish Goswami College of Physiotherapist</h4>
                  </div>
                </div>
              </div>
              <div className="item py-5 px-2 m-0">
                <div className="history-item d-flex align-items-center">
                  <div className="history-card w-100 px-4">
                    <div className="history-card-heading d-flex align-items-center justify-content-center">
                      <h5 className="mb-0">2018</h5>
                    </div>
                    <h4 className="text-black">Urmila Goswami College of Nursing</h4>
                  </div>
                </div>
              </div>
              <div className="item py-5 px-2 m-0">
                <div className="history-item d-flex align-items-center">
                  <div className="history-card w-100 px-4">
                    <div className="history-card-heading d-flex align-items-center justify-content-center">
                      <h5 className="mb-0">2019</h5>
                    </div>
                    <h4 className="text-black">Mohan Goswami College of law</h4>
                  </div>
                </div>
              </div>
              <div className="item py-5 px-2 m-0">
                <div className="history-item d-flex align-items-center">
                  <div className="history-card w-100 px-4">
                    <div className="history-card-heading d-flex align-items-center justify-content-center">
                      <h5 className="mb-0">2019</h5>
                    </div>
                    <h4 className="text-black">Piyuni Goswami College of arts</h4>
                  </div>
                </div>
              </div>
              <div className="item py-5 px-2 m-0">
                <div className="history-item d-flex align-items-center">
                  <div className="history-card w-100 px-4">
                    <div className="history-card-heading d-flex align-items-center justify-content-center">
                      <h5 className="mb-0">2019</h5>
                    </div>
                    <h4 className="text-black">Rudra Goswami College of computer application</h4>
                  </div>
                </div>
              </div>
              <div className="item py-5 px-2 m-0">
                <div className="history-item d-flex align-items-center">
                  <div className="history-card w-100 px-4">
                    <div className="history-card-heading d-flex align-items-center justify-content-center">
                      <h5 className="mb-0">2021</h5>
                    </div>
                    <h4 className="text-black">Monark University</h4>
                  </div>
                </div>
              </div>
            </OwlCarousel>
          </div>  
        </div>
      </div>
    </div>
  );
}
