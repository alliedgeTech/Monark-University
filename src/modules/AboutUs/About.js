import Image from "next/image";
import Link from "next/link";
import fullimg from "../../../public/img/choose/monarknew.jpg";
import blankm from "../../../public/img/choose/NS.jpg";
import sb from "../../../public/img/choose/sb.jpg";
import hs from "../../../public/img/choose/hs.jpg";
import ai from "../../../public/img/choose/AICTE.png";
import nc from "../../../public/img/choose/NCTE.png";
import gn from "../../../public/img/choose/GNC.jpg";
import bc from "../../../public/img/choose/BCI.png";
import na from "../../../public/img/choose/NAAC.png";
import is from "../../../public/img/choose/ISTE.jpg";
import vi from "../../../public/img/choose/VIPNET.png";
import ncc from "../../../public/img/choose/NCC.jpg";
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
          <div className="our-history pt-2">
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
                      <h5 className="mb-0">2001</h5>
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
          </div>

          {/* Years and trust end*/}

          {/* vision and mission start*/}

          <div id="visionandmission" className="mt-5">
            <div class="it-career-area it-career-bg py-2">
              <div class="container">
                <div class="it-career-title-box three mb-30">
                  <h1 class="it-section-title discover-heading">
                    Discover your gain
                  </h1>
                </div>

                <div class="row about-1">
                  <div className="col-lg-6 col-md-5 col-12 mt-lg-0 mt-4">
                    <div className="vision-img">
                      <img
                        className="img-fluid"
                        src="/img/vision/vision1.jpg"
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-7 col-12 mt-lg-0 mt-4">
                    <div className="three">
                      <h1>Vision</h1>
                    </div>
                    <p>
                      Monark University will be an inclusive and engaged
                      research-intensive university that inspires creativity
                      through outstanding achievements in learning, with up to
                      date curriculum and contemporary delivery to meet the
                      demands of the global higher education landscape.
                    </p>
                  </div>
                </div>
                <div className="row flex-row-reverse about-2 mt-4">
                  <div className="col-lg-6 col-md-5 col-12 mt-lg-0 mt-4">
                    <div className="vision-img">
                      <img src="/img/vision/mission1.jpg" alt="" />
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-7 col-12 mt-lg-0 mt-4">
                    <div className="three">
                      <h1>Mission</h1>
                    </div>
                    <p>
                      Monark University is committed to engaging with the key
                      issues of our natural and social worlds through
                      outstanding teaching, research, and scholarship. Monark
                      University will provide a vibrant and supportive
                      intellectual environment that attracts and connects people
                      from all over the world.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* vision and mission end*/}

            {/* President message start*/}
            <div id="presidentmessage">
              <div className="it-sv-details-area mt-50 animate__animated animate__fadeIn">
                <div className="container">
                  <div className="row">
                    <div className="col-12">
                      <div className="it-sv-details-top-wrap mb-20">
                        <div className="row align-items-center">
                          <div className="col-md-4">
                            <div className="it-sv-details-top-thumb animate__animated animate__fadeInLeft">
                              <img
                                src="https://monarkuni.ac.in/wp-content/uploads/2021/06/SMET-175-Copy.jpg"
                                className="img-fluid rounded shadow"
                                alt="President Image"
                              />
                            </div>
                          </div>
                          <div className="col-md-8">
                            <div className="it-sv-details-top-content three animate__animated animate__fadeInRight">
                              <h4 className="it-sv-details-title display-4 animate__animated animate__bounceIn">
                                President's Message
                              </h4>
                              <p className="lead">
                                Welcome to Monark University. As a President of
                                Monark University, it gives me immense pleasure
                                to share with you the vision of this University.
                              </p>
                              <p>
                                {isExpanded ? (
                                  <>
                                    The University aims at imparting quality
                                    education and achieving excellence in all of
                                    its academic programs. In fast changing
                                    technological advancements and global
                                    economic environment, we planned to strive
                                    to bring global perspective to its academic
                                    programs and activities. The focus is on
                                    building a strong team of highly qualified
                                    faculty members and dedicated supporting
                                    staff to meet national and global challenges
                                    and deliver world class education using
                                    latest technologies and contemporary
                                    teaching methodology. In order to enhance
                                    the knowledge of the students in several
                                    core areas, emphasis is given on wide
                                    variety of academic programs for their
                                    multifaceted development.
                                    <br />
                                    We have huge academic and physical
                                    infrastructures and facilities with well
                                    equipped labs, workshops, qualified and
                                    motivated faculty members who work with
                                    commitment and dedication for the cause of
                                    education and research. The outcome based
                                    course curriculum of our programs has been
                                    designed and developed with the help of
                                    national level experts so that desired
                                    competency and skills can be inculcated in
                                    the students to make them employable.
                                    Moreover, world-class assessment methods and
                                    systems are established by the University
                                    for proper implementation of the curriculum
                                    and ensuring quality education.
                                    <br />
                                    We extend an invitation to you to visit our
                                    sprawling campus of our University to know
                                    more about the University and its physical
                                    and infrastructural facilities. I also take
                                    this opportunity to invite the students from
                                    all parts of the world to join our academic
                                    courses. We will be happy to guide and help
                                    you to succeed in your educational journey.
                                    <br />
                                    <span
                                      className="read-more"
                                      onClick={toggleExpand}
                                      style={{
                                        color: "blue",
                                        cursor: "pointer",
                                        textDecoration: "underline",
                                      }}
                                    >
                                      Read Less
                                    </span>
                                  </>
                                ) : (
                                  <>
                                    The University aims at imparting quality
                                    education and achieving excellence in all of
                                    its academic programs...&nbsp;&nbsp;
                                    <span
                                      className="read-more"
                                      onClick={toggleExpand}
                                      style={{
                                        color: "blue",
                                        cursor: "pointer",
                                        textDecoration: "underline",
                                      }}
                                    >
                                      Read More
                                    </span>
                                  </>
                                )}
                              </p>
                              <p className="text-right">
                                <strong>Dr. Hasmukhbharthi M. Goswami</strong>
                                <br />
                                President
                                <br />
                                Monark University
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* President message end*/}

              {/* Vice President message start*/}
              <div id="vicepresidentmessage">
                <div className="it-sv-details-area mt-50">
                  <div className="container">
                    <div className="row">
                      <div className="col-xl col-lg">
                        <div className="it-sv-details-top-wrap mb-20">
                          <div className="row flex-row-reverse">
                            <div className="col-xl-4 col-lg-6">
                              <div className="it-sv-details-top-thumb">
                                <img
                                  src="https://monarkuni.ac.in/wp-content/uploads/2021/07/SMET-163.jpg"
                                  className="img-fluid"
                                />
                              </div>
                            </div>
                            <div className="col-xl-8 col-lg-6">
                              <div className="it-sv-details-top-content three">
                                <h4 className="it-sv-details-title">
                                  About Vice-President
                                </h4>
                                <p>
                                  Dr. Satishbharthi Goswami is the Vice
                                  President of Monark University. He is known
                                  for his strategic vision and dedication to
                                  advancing the university's mission. With a
                                  strong background in academia and
                                  administration, Dr. Goswami plays a pivotal
                                  role in fostering an environment of innovation
                                  and excellence. He is committed to enhancing
                                  the university's academic programs and
                                  supporting faculty and student development.
                                  His leadership is instrumental in driving
                                  Monark University's growth and success.
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Vice President message end*/}

                {/* Provost message start*/}
                <div id="provostmessage">
                  <div className="it-sv-details-area mt-50">
                    <div className="container">
                      <div className="row">
                        <div className="col-xl col-lg">
                          <div className="it-sv-details-top-wrap mb-20">
                            <div className="row">
                              <div className="col-xl-4 col-lg-6 ">
                                <div className="it-sv-details-top-thumb">
                                  <img
                                    src="https://monarkuni.ac.in/wp-content/uploads/2021/06/SMET-218-Copy.jpg"
                                    className="img-fluid"
                                  />
                                </div>
                              </div>
                              <div className="col-xl-8 col-lg-6">
                                <div className="it-sv-details-top-content three">
                                  <h4 className="it-sv-details-title">
                                    About Provost
                                  </h4>
                                  <p>
                                    Greetings from Monark University, Ahmedabad.
                                    Our prime duty as a university is to nurture
                                    today’s minds to be able to create ample
                                    opportunities in today’s marketplace. The
                                    purpose of education is not restricted to
                                    imparting knowledge but has shifted towards
                                    holistic development of the students as
                                    needs of the society changed. The new
                                    education system has taken the
                                    responsibility of bringing forth worthy
                                    citizens who are proactive in their approach
                                    and have the required dynamism to create a
                                    new order.
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Provost message end*/}

                  {/*Approvals & Recognitions starts*/}
                  <div id="recognitionandapproval">
                    <div
                      className="it-funfact-5-area it-funfact-5-bg p-relative fix pt-35 pb-30"
                      data-background="/img/funfact/bg-2.png"
                      layout="fill"
                      objectFit="cover"
                    >
                      <div className="one mb-25">
                        <h4 className="it-section-title-5">
                          Approvals & Recognitions
                        </h4>
                      </div>

                      <div className="container">
                        <div className="row">
                          <div className="col-xl-3 mt-lg-0 mt-4 col-lg-3">
                            <div className="it-feature-item text-center">
                              <div className="it-feature-item-content z-index">
                                <div className="it-feature-icon">
                                  <Image src={ai} className="img-fluid" />
                                </div>
                                <div className="it-feature-text pt-30">
                                  <h4 className="it-feature-title">AICTE</h4>
                                </div>
                                <div className="it-feature-button">
                                  <Link
                                    href="#"
                                    className="it-btn-border"
                                    style={{ display: "inline-block" }}
                                  >
                                    <span
                                      style={{
                                        display: "inline-flex",
                                        alignItems: "center",
                                      }}
                                    >
                                      Learn More
                                      <svg
                                        width="17"
                                        height="14"
                                        viewBox="0 0 17 14"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                        style={{ marginLeft: "8px" }}
                                      >
                                        <path
                                          d="M11 1.24023L16 7.24023L11 13.2402"
                                          stroke="currentcolor"
                                          strokeWidth="1.5"
                                          strokeMiterlimit="10"
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                        />
                                        <path
                                          d="M1 7.24023H16"
                                          stroke="currentcolor"
                                          strokeWidth="1.5"
                                          strokeMiterlimit="10"
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                        />
                                      </svg>
                                    </span>
                                  </Link>
                                </div>
                              </div>
                            </div>
                          </div>

                          <div className="col-xl-3 mt-lg-0 mt-4 col-lg-3">
                            <div className="it-feature-item text-center">
                              <div className="it-feature-item-content z-index">
                                <div className="it-feature-icon">
                                  <Image src={nc} className="img-fluid" />
                                </div>
                                <div className="it-feature-text pt-30">
                                  <h4 className="it-feature-title">NCTE</h4>
                                </div>
                                <div className="it-feature-button">
                                  <Link
                                    href="https://ncte.gov.in/website/index.aspx"
                                    className="it-btn-border"
                                  >
                                    <span>
                                      Learn More
                                      <svg
                                        width="17"
                                        height="14"
                                        viewBox="0 0 17 14"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                      >
                                        <path
                                          d="M11 1.24023L16 7.24023L11 13.2402"
                                          stroke="currentcolor"
                                          strokeWidth="1.5"
                                          strokeMiterlimit="10"
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                        />
                                        <path
                                          d="M1 7.24023H16"
                                          stroke="currentcolor"
                                          strokeWidth="1.5"
                                          strokeMiterlimit="10"
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                        />
                                      </svg>
                                    </span>
                                  </Link>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-xl-3 mt-lg-0 mt-4 col-lg-3">
                            <div className="it-feature-item text-center">
                              <div className="it-feature-item-content z-index">
                                <div className="it-feature-icon">
                                  <Image src={gn} className="img-fluid" />
                                </div>
                                <div className="it-feature-text pt-30">
                                  <h4 className="it-feature-title">GNC</h4>
                                </div>
                                <div className="it-feature-button">
                                  <Link
                                    href="https://www.gujaratnursingcouncil.org/"
                                    className="it-btn-border"
                                  >
                                    <span>
                                      Learn More
                                      <svg
                                        width="17"
                                        height="14"
                                        viewBox="0 0 17 14"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                      >
                                        <path
                                          d="M11 1.24023L16 7.24023L11 13.2402"
                                          stroke="currentcolor"
                                          strokeWidth="1.5"
                                          strokeMiterlimit="10"
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                        />
                                        <path
                                          d="M1 7.24023H16"
                                          stroke="currentcolor"
                                          strokeWidth="1.5"
                                          strokeMiterlimit="10"
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                        />
                                      </svg>
                                    </span>
                                  </Link>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-xl-3 mt-lg-0 mt-4 col-lg-3">
                            <div className="it-feature-item text-center">
                              <div className="it-feature-item-content z-index">
                                <div className="it-feature-icon">
                                  <Image src={bc} className="img-fluid" />
                                </div>
                                <div className="it-feature-text pt-30">
                                  <h4 className="it-feature-title">BCI</h4>
                                </div>
                                <div className="it-feature-button">
                                  <Link
                                    href="https://www.barcouncilofindia.org/home"
                                    className="it-btn-border"
                                  >
                                    <span>
                                      Learn More
                                      <svg
                                        width="17"
                                        height="14"
                                        viewBox="0 0 17 14"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                      >
                                        <path
                                          d="M11 1.24023L16 7.24023L11 13.2402"
                                          stroke="currentcolor"
                                          strokeWidth="1.5"
                                          strokeMiterlimit="10"
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                        />
                                        <path
                                          d="M1 7.24023H16"
                                          stroke="currentcolor"
                                          strokeWidth="1.5"
                                          strokeMiterlimit="10"
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                        />
                                      </svg>
                                    </span>
                                  </Link>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-xl-3 mt-lg-0 mt-4 col-lg-3">
                            <div
                              className="it-feature-item text-center"
                              style={{ marginTop: "10px" }}
                            >
                              <div className="it-feature-item-content z-index">
                                <div className="it-feature-icon">
                                  <Image src={na} className="img-fluid" />
                                </div>
                                <div className="it-feature-text pt-30">
                                  <h4 className="it-feature-title">NAAC</h4>
                                </div>
                                <div className="it-feature-button">
                                  <Link
                                    href="http://naac.gov.in/index.php/en/"
                                    className="it-btn-border"
                                  >
                                    <span>
                                      Learn More
                                      <svg
                                        width="17"
                                        height="14"
                                        viewBox="0 0 17 14"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                      >
                                        <path
                                          d="M11 1.24023L16 7.24023L11 13.2402"
                                          stroke="currentcolor"
                                          strokeWidth="1.5"
                                          strokeMiterlimit="10"
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                        />
                                        <path
                                          d="M1 7.24023H16"
                                          stroke="currentcolor"
                                          strokeWidth="1.5"
                                          strokeMiterlimit="10"
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                        />
                                      </svg>
                                    </span>
                                  </Link>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-xl-3 mt-lg-0 mt-4 col-lg-3">
                            <div
                              className="it-feature-item text-center"
                              style={{ marginTop: "10px" }}
                            >
                              <div className="it-feature-item-content z-index">
                                <div className="it-feature-icon">
                                  <Image src={is} className="img-fluid" />
                                </div>
                                <div className="it-feature-text pt-30">
                                  <h4 className="it-feature-title">ISTE</h4>
                                </div>
                                <div className="it-feature-button">
                                  <Link
                                    href="http://www.isteonline.in/"
                                    className="it-btn-border"
                                  >
                                    <span>
                                      Learn More
                                      <svg
                                        width="17"
                                        height="14"
                                        viewBox="0 0 17 14"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                      >
                                        <path
                                          d="M11 1.24023L16 7.24023L11 13.2402"
                                          stroke="currentcolor"
                                          strokeWidth="1.5"
                                          strokeMiterlimit="10"
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                        />
                                        <path
                                          d="M1 7.24023H16"
                                          stroke="currentcolor"
                                          strokeWidth="1.5"
                                          strokeMiterlimit="10"
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                        />
                                      </svg>
                                    </span>
                                  </Link>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-xl-3 mt-lg-0 mt-4 col-lg-3">
                            <div
                              className="it-feature-item text-center"
                              style={{ marginTop: "10px" }}
                            >
                              <div className="it-feature-item-content z-index">
                                <div className="it-feature-icon">
                                  <Image src={vi} className="img-fluid" />
                                </div>
                                <div className="it-feature-text pt-30">
                                  <h4 className="it-feature-title">VIPNET</h4>
                                </div>
                                <div className="it-feature-button">
                                  <Link
                                    href="https://vigyanprasar.gov.in/vipnet/"
                                    className="it-btn-border"
                                  >
                                    <span>
                                      Learn More
                                      <svg
                                        width="17"
                                        height="14"
                                        viewBox="0 0 17 14"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                      >
                                        <path
                                          d="M11 1.24023L16 7.24023L11 13.2402"
                                          stroke="currentcolor"
                                          strokeWidth="1.5"
                                          strokeMiterlimit="10"
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                        />
                                        <path
                                          d="M1 7.24023H16"
                                          stroke="currentcolor"
                                          strokeWidth="1.5"
                                          strokeMiterlimit="10"
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                        />
                                      </svg>
                                    </span>
                                  </Link>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-xl-3 mt-lg-0 mt-4 col-lg-3">
                            <div
                              className="it-feature-item text-center"
                              style={{ marginTop: "10px" }}
                            >
                              <div className="it-feature-item-content z-index">
                                <div className="it-feature-icon">
                                  <Image src={ncc} className="img-fluid" />
                                </div>
                                <div className="it-feature-text pt-30">
                                  <h4 className="it-feature-title">NCC</h4>
                                </div>
                                <div className="it-feature-button">
                                  <Link
                                    href="https://indiancc.mygov.in/"
                                    className="it-btn-border"
                                  >
                                    <span>
                                      Learn More
                                      <svg
                                        width="17"
                                        height="14"
                                        viewBox="0 0 17 14"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                      >
                                        <path
                                          d="M11 1.24023L16 7.24023L11 13.2402"
                                          stroke="currentcolor"
                                          strokeWidth="1.5"
                                          strokeMiterlimit="10"
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                        />
                                        <path
                                          d="M1 7.24023H16"
                                          stroke="currentcolor"
                                          strokeWidth="1.5"
                                          strokeMiterlimit="10"
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                        />
                                      </svg>
                                    </span>
                                  </Link>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/*Approvals & Recognitions ends*/}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
