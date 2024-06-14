import React, { useEffect, useRef, useState } from "react";
import dynamic from "next/dynamic";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import CountUp from "react-countup";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

// Import jQuery
if (typeof window !== "undefined") {
  var $ = require("jquery");
  window.$ = window.jQuery = require("jquery");
}

// Dynamically import OwlCarousel without SSR
const OwlCarousel = dynamic(() => import("react-owl-carousel"), {
  ssr: false,
});

// Responsive settings for OwlCarousel
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
    margin: 20,
  },
};

const index = () => {
  
    
    const [state, setState] = useState(true);

  return (
    <div className="counter py-4">
      <div className="container">
        <div className="counter-div">
            <div className="row flex-row-reverse">
                <div className="col-lg-6 col-md-12 col-12 mt-lg-0 mt-4">
                    <div className="row py-2 p-relative">
                        <p className="why_mu d-flex align-items-center justify-content-center flex-column">Why <span>MU</span></p>
                        <div className="col-6">
                            <div className="counter-box counter-box-1 d-flex align-items-center flex-column">
                                <img src="/img/counter/school.png" alt="" />
                                <div className="count-text mt-4 d-flex align-items-center justify-content-center">
                                <CountUp
                            start={0}
                            end={50}
                            duration={6}
                            onEnd={() => setState(false)}
                            />
                                    +
                                </div>
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="counter-box counter-box-2 d-flex align-items-center flex-column">
                                <img src="/img/counter/network.png" alt="" />
                                <div className="count-text mt-4 d-flex align-items-center justify-content-center">
                                <CountUp
                            start={0}
                            end={100}
                            duration={6}
                            onEnd={() => setState(false)}
                            />
                                    +
                                </div>
                            </div>
                        </div>
                        <div className="col-6 mt-4">
                            <div className="counter-box counter-box-3 d-flex align-items-center flex-column">
                                <img src="/img/counter/teacher.png" alt="" />
                                <div className="count-text mt-4 d-flex align-items-center justify-content-center">
                                <CountUp
                            start={0}
                            end={250}
                            duration={6}
                            onEnd={() => setState(false)}
                            />
                                    +
                                </div>
                            </div>
                        </div>
                        <div className="col-6 mt-4">
                            <div className="counter-box counter-box-4 d-flex align-items-center flex-column">
                                <img src="/img/counter/data.png" alt="" />
                                <div className="count-text mt-4 d-flex align-items-center justify-content-center">
                                <CountUp
                            start={0}
                            end={50}
                            duration={6}
                            onEnd={() => setState(false)}
                            />
                                    +
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                <div className="col-lg-6 col-md-12 col-12 mt-lg-0 mt-4">
                    <div className="d-flex counter-heading align-items-center-justify-content-between h-100 flex-column">
                        <h1>Experience Unmatched Academic Diversity with Leading Experts and Programs</h1>
                        <div className="counter-box-main mt-4 d-flex align-items-center flex-column">
                                <img src="/img/counter/data.png" alt="" />
                                <div className="count-text mt-4 d-flex align-items-center justify-content-center">
                                <CountUp
                            start={0}
                            end={50}
                            duration={6}
                            onEnd={() => setState(false)}
                            />
                                    +
                                </div>
                            </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default index;
