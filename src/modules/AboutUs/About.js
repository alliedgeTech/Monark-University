import Image from "next/image";
import Link from "next/link";
import fullimg from "../../../public/img/choose/monarknew.jpg";
import blankm from "../../../public/img/choose/NS.jpg";
import sb from "../../../public/img/choose/sb.jpg";
import hs from "../../../public/img/choose/hs.jpg";
import ai from "../../../public/img/choose/AICTE.png"
import nc from "../../../public/img/choose/NCTE.png"
import gn from "../../../public/img/choose/GNC.jpg"
import bc from"../../../public/img/choose/BCI.png"
import na from "../../../public/img/choose/NAAC.png"
import is from "../../../public/img/choose/ISTE.jpg"
import vi from "../../../public/img/choose/VIPNET.png"
import ncc from "../../../public/img/choose/NCC.jpg"
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
  return (
    <div id="historicalbackground" >
      <div className="it-choose-area p-relative pt-100">
        <div className="it-choose-shape-4 d-none d-md-block">
          <Image
            src="/img/choose/shape-1-4.png"
            width={85}
            height={24}
            alt=""
          />
        </div>
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-12">
            <div className="it-choose-title-box ">
                  <span className="it-section-subtitle">
                    Historical Background
                  </span>
                  <h4 className="it-section-title">
                    Historical Background of the Sponsoring Body
                  </h4>
                </div>
                <div className="it-choose-text pb-15">
                  <p>
                    With the blessings of the Goddess Saraswati, Shree Monark
                    Education Trust (SMET) being the sponsoring/promoting body
                    of the Monark University was established in the year 2001 as
                    a result of the vision of its founder Chairman, Shri
                    Mohanbharthi R. Goswami, a farmer and philanthropist, to
                    promote world-class academic institutions. The following
                    erstwhile institutions promoted by the Trust at fast pace
                    have now come under the purview of the Monark University.
                  </p>
                </div>
            </div>
            <div className="col-lg-6 col-12">
            <div className="it-choose-thumb-box text-center text-md-end">
                <div className="it-choose-thumb p-relative">
                  <Image src={fullimg} className="img-fluid" alt="" />
                  <div className="it-choose-shape-1">
                    <Image
                      src="/img/choose/shape-1-1.png"
                      width={357}
                      height={306}
                      alt=""
                    />
                  </div>
                  <div className="it-choose-shape-2">
                    <Image
                      src="/img/choose/shape-1-2.png"
                      width={357}
                      height={303}
                      alt=""
                    />
                  </div>
                  <div className="it-choose-shape-3 d-none d-lg-block">
                    <Image
                      src="/img/choose/shape-1-3.png"
                      width={277}
                      height={271}
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6 col-12 mt-lg-0 mt-4">
            <div className="it-choose-content">
                        <h5>
                          <i className="fa-solid fa-circle-check"></i>World
                          Class Trainers
                        </h5>
                        <p>
                          Experience excellence with our world-class faculty,
                          dedicated to nurturing your academic journey with
                          expertise and passion.
                        </p>
                      </div>
            </div>
            <div className="col-lg-6 col-12 mt-lg-0 mt-4">
            <div className="it-choose-content">
                        <h5>
                          <i className="fa-solid fa-circle-check"></i>Easy
                          Learning
                        </h5>
                        <p>
                          Embark on a journey of effortless learning with our
                          engaging approach and supportive faculty, making
                          education a seamless and enjoyable experience.{" "}
                        </p>
                      </div>
            </div>
            <div className="col-lg-6 col-12 mt-4">
            <div className="it-choose-content">
                        <h5>
                          <i className="fa-solid fa-circle-check"></i>Flexible
                        </h5>
                        <p>
                          Experience easy, flexible learning with our adaptable
                          approach and supportive faculty, empowering you to
                          learn at your own pace and convenience.
                        </p>
                      </div>
            </div>
            <div className="col-lg-6 col-12 mt-4">
            <div className="it-choose-content">
                        <h5>
                          <i className="fa-solid fa-circle-check"></i>Affordable
                          Price
                        </h5>
                        <p>
                          Unlock the door to easy, affordable learning with our
                          accessible approach and budget-friendly options,
                          ensuring education is within reach for all.
                        </p>
                      </div>
            </div>
          </div>
        </div>
      </div>
      {/* Years and trust start*/}
      <div>
        <div class="container">
          <div class="row">
            <div class="col-xl-3 col-lg-3 col-md-3 mt-4 h-100">
              <div class="it-event-2-area it-event-style-3 p-relative ">
                <div class="it-event-2-item-box">
                  <div class="it-event-2-item">
                    <div class="it-event-2-thumb fix">
                      <img
                        alt=""
                        loading="lazy"
                        width="352"
                        height="256"
                        decoding="async"
                        data-nimg="1"
                        src="/img/choose/sgu.jpg"
                      />

                      <div class="it-event-2-date">
                        <span>
                          <i>2001</i>
                        </span>
                      </div>
                    </div>
                    <div class="it-event-2-content">
                      <h4 class="it-event-2-title">
                        Shree Monark education trust
                      </h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-xl-3 col-lg-3 col-md-3 mt-4 h-100">
              <div class="it-event-2-area it-event-style-3 p-relative ">
                <div class="it-event-2-item-box">
                  <div class="it-event-2-item">
                    <div class="it-event-2-thumb fix">
                      <img
                        alt=""
                        loading="lazy"
                        width="352"
                        height="256"
                        decoding="async"
                        data-nimg="1"
                        src="/img/choose/mmc.jpg"
                      />

                      <div class="it-event-2-date">
                        <span>
                          <i>2005</i>
                        </span>
                      </div>
                    </div>
                    <div class="it-event-2-content">
                      <h4 class="it-event-2-title">
                        Smt. Maniba Mahila B.Ed. College
                      </h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-xl-3 col-lg-3 col-md-3 mt-4 h-100">
              <div class="it-event-2-area it-event-style-3 p-relative ">
                <div class="it-event-2-item-box">
                  <div class="it-event-2-item">
                    <div class="it-event-2-thumb fix">
                      <img
                        alt=""
                        loading="lazy"
                        width="352"
                        height="256"
                        decoding="async"
                        data-nimg="1"
                        src="/img/choose/hge.png"
                      />

                      <div class="it-event-2-date">
                        <span>
                          <i>2007</i>
                        </span>
                      </div>
                    </div>
                    <div class="it-event-2-content">
                      <h4 class="it-event-2-title">
                        Hasmukh Goswami College of Engineering
                      </h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-xl-3 col-lg-3 col-md-3 mt-4 h-100">
              <div class="it-event-2-area it-event-style-3 p-relative ">
                <div class="it-event-2-item-box">
                  <div class="it-event-2-item">
                    <div class="it-event-2-thumb fix">
                      <img
                        alt=""
                        loading="lazy"
                        width="352"
                        height="256"
                        decoding="async"
                        data-nimg="1"
                        src="/img/choose/sgu.jpg"
                      />

                      <div class="it-event-2-date">
                        <span>
                          <i>2007</i>
                        </span>
                      </div>
                    </div>
                    <div class="it-event-2-content">
                      <h4 class="it-event-2-title">
                        Piyuni pre-school teacher education
                      </h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-xl-3 col-lg-3 col-md-3 mt-4 h-100">
              <div class="it-event-2-area it-event-style-3 p-relative ">
                <div class="it-event-2-item-box">
                  <div class="it-event-2-item">
                    <div class="it-event-2-thumb fix">
                      <img
                        alt=""
                        loading="lazy"
                        width="352"
                        height="256"
                        decoding="async"
                        data-nimg="1"
                        src="/img/choose/jaa.jpg"
                      />

                      <div class="it-event-2-date">
                        <span>
                          <i>2007</i>
                        </span>
                      </div>
                    </div>
                    <div class="it-event-2-content">
                      <h4 class="it-event-2-title">Jeel adhyapan mandir</h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-xl-3 col-lg-3 col-md-3 mt-4 h-100">
              <div class="it-event-2-area it-event-style-3 p-relative ">
                <div class="it-event-2-item-box">
                  <div class="it-event-2-item">
                    <div class="it-event-2-thumb fix">
                      <a href="/event/event-one">
                        <img
                          alt=""
                          loading="lazy"
                          width="352"
                          height="256"
                          decoding="async"
                          data-nimg="1"
                          src="/img/choose/sgu.jpg"
                        />
                      </a>
                      <div class="it-event-2-date">
                        <span>
                          <i>2007</i>
                        </span>
                      </div>
                    </div>
                    <div class="it-event-2-content">
                      <h4 class="it-event-2-title">Satish adhyapan mandir</h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-xl-3 col-lg-3 col-md-3 mt-4 h-100">
              <div class="it-event-2-area it-event-style-3 p-relative ">
                <div class="it-event-2-item-box">
                  <div class="it-event-2-item">
                    <div class="it-event-2-thumb fix">
                      <img
                        alt=""
                        loading="lazy"
                        width="352"
                        height="256"
                        decoding="async"
                        data-nimg="1"
                        src="/img/choose/mce.png"
                      />

                      <div class="it-event-2-date">
                        <span>
                          <i>2008</i>
                        </span>
                      </div>
                    </div>
                    <div class="it-event-2-content">
                      <h4 class="it-event-2-title">
                        Maniba College of education
                      </h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-xl-3 col-lg-3 col-md-3 mt-4 h-100">
              <div class="it-event-2-area it-event-style-3 p-relative ">
                <div class="it-event-2-item-box">
                  <div class="it-event-2-item">
                    <div class="it-event-2-thumb fix">
                      <img
                        alt=""
                        loading="lazy"
                        width="352"
                        height="256"
                        decoding="async"
                        data-nimg="1"
                        src="/img/choose/mmed.png"
                      />

                      <div class="it-event-2-date">
                        <span>
                          <i>2008</i>
                        </span>
                      </div>
                    </div>
                    <div class="it-event-2-content">
                      <h4 class="it-event-2-title">Manguba M.Ed College</h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-xl-3 col-lg-3 col-md-3 mt-4 h-100">
              <div class="it-event-2-area it-event-style-3 p-relative ">
                <div class="it-event-2-item-box">
                  <div class="it-event-2-item">
                    <div class="it-event-2-thumb fix">
                      <img
                        alt=""
                        loading="lazy"
                        width="352"
                        height="256"
                        decoding="async"
                        data-nimg="1"
                        src="/img/choose/rba.jpg"
                      />

                      <div class="it-event-2-date">
                        <span>
                          <i>2011</i>
                        </span>
                      </div>
                    </div>
                    <div class="it-event-2-content">
                      <h4 class="it-event-2-title">
                        Rudra College of business administration
                      </h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-xl-3 col-lg-3 col-md-3 mt-4 h-100">
              <div class="it-event-2-area it-event-style-3 p-relative ">
                <div class="it-event-2-item-box">
                  <div class="it-event-2-item">
                    <div class="it-event-2-thumb fix">
                      <img
                        alt=""
                        loading="lazy"
                        width="352"
                        height="256"
                        decoding="async"
                        data-nimg="1"
                        src="/img/choose/pgc.png"
                      />

                      <div class="it-event-2-date">
                        <span>
                          <i>2011</i>
                        </span>
                      </div>
                    </div>
                    <div class="it-event-2-content">
                      <h4 class="it-event-2-title">
                        Piyuni Goswami College of commerce
                      </h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-xl-3 col-lg-3 col-md-3 mt-4 h-100">
              <div class="it-event-2-area it-event-style-3 p-relative ">
                <div class="it-event-2-item-box">
                  <div class="it-event-2-item">
                    <div class="it-event-2-thumb fix">
                      <img
                        alt=""
                        loading="lazy"
                        width="352"
                        height="256"
                        decoding="async"
                        data-nimg="1"
                        src="/img/choose/jgs.png"
                      />

                      <div class="it-event-2-date">
                        <span>
                          <i>2015</i>
                        </span>
                      </div>
                    </div>
                    <div class="it-event-2-content">
                      <h4 class="it-event-2-title">
                        Jeel Goswami College of Science and research
                      </h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-xl-3 col-lg-3 col-md-3 mt-4 h-100">
              <div class="it-event-2-area it-event-style-3 p-relative ">
                <div class="it-event-2-item-box">
                  <div class="it-event-2-item">
                    <div class="it-event-2-thumb fix">
                      <img
                        alt=""
                        loading="lazy"
                        width="352"
                        height="256"
                        decoding="async"
                        data-nimg="1"
                        src="/img/choose/sgu.jpg"
                      />

                      <div class="it-event-2-date">
                        <span>
                          <i>2015</i>
                        </span>
                      </div>
                    </div>
                    <div class="it-event-2-content">
                      <h4 class="it-event-2-title">
                        Satish Goswami College of Physiotherapist
                      </h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-xl-3 col-lg-3 col-md-3 mt-4 h-100">
              <div class="it-event-2-area it-event-style-3 p-relative ">
                <div class="it-event-2-item-box">
                  <div class="it-event-2-item">
                    <div class="it-event-2-thumb fix">
                      <img
                        alt=""
                        loading="lazy"
                        width="352"
                        height="256"
                        decoding="async"
                        data-nimg="1"
                        src="/img/choose/ug.jpg"
                      />

                      <div class="it-event-2-date">
                        <span>
                          <i>2018</i>
                        </span>
                      </div>
                    </div>
                    <div class="it-event-2-content">
                      <h4 class="it-event-2-title">
                        Urmila Goswami College of Nursing
                      </h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-xl-3 col-lg-3 col-md-3 mt-4 h-100">
              <div class="it-event-2-area it-event-style-3 p-relative ">
                <div class="it-event-2-item-box">
                  <div class="it-event-2-item">
                    <div class="it-event-2-thumb fix">
                      <img
                        alt=""
                        loading="lazy"
                        width="352"
                        height="256"
                        decoding="async"
                        data-nimg="1"
                        src="/img/choose/mgl.jpg"
                      />

                      <div class="it-event-2-date">
                        <span>
                          <i>2019</i>
                        </span>
                      </div>
                    </div>
                    <div class="it-event-2-content">
                      <h4 class="it-event-2-title">
                        Mohan Goswami College of law
                      </h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-xl-3 col-lg-3 col-md-3 mt-4 h-100">
              <div class="it-event-2-area it-event-style-3 p-relative ">
                <div class="it-event-2-item-box">
                  <div class="it-event-2-item">
                    <div class="it-event-2-thumb fix">
                      <img
                        alt=""
                        loading="lazy"
                        width="352"
                        height="256"
                        decoding="async"
                        data-nimg="1"
                        src="/img/choose/pgu.jpeg"
                      />

                      <div class="it-event-2-date">
                        <span>
                          <i>2019</i>
                        </span>
                      </div>
                    </div>
                    <div class="it-event-2-content">
                      <h4 class="it-event-2-title">
                        Piyuni Goswami College of arts
                      </h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-xl-3 col-lg-3 col-md-3 mt-4 h-100">
              <div class="it-event-2-area it-event-style-3 p-relative ">
                <div class="it-event-2-item-box">
                  <div class="it-event-2-item">
                    <div class="it-event-2-thumb fix">
                      <img
                        alt=""
                        loading="lazy"
                        width="352"
                        height="256"
                        decoding="async"
                        data-nimg="1"
                        src="/img/choose/rdg.jpeg"
                      />

                      <div class="it-event-2-date">
                        <span>
                          <i>2019</i>
                        </span>
                      </div>
                    </div>
                    <div class="it-event-2-content">
                      <h4 class="it-event-2-title">
                        Rudra Goswami College of computer application
                      </h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-xl-3 col-lg-3 col-md-3 mt-4 h-100">
              <div class="it-event-2-area it-event-style-3 p-relative ">
                <div class="it-event-2-item-box">
                  <div class="it-event-2-item">
                    <div class="it-event-2-thumb fix">
                      <img
                        alt=""
                        loading="lazy"
                        width="352"
                        height="256"
                        decoding="async"
                        data-nimg="1"
                        src="/img/choose/monarkuni.jpeg"
                      />

                      <div class="it-event-2-date">
                        <span>
                          <i>2021</i>
                        </span>
                      </div>
                    </div>
                    <div class="it-event-2-content">
                      <h4 class="it-event-2-title">Monark University</h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Years and trust end*/}

          {/* vision and mission start*/}

          <div id="visionandmission">
            <div class="it-career-area it-career-bg p-relative pt-120">
              <div class="it-career-shape-2 d-none d-xl-block">
                <img
                  alt=""
                  loading="lazy"
                  width="366"
                  height="255"
                  decoding="async"
                  data-nimg="1"
                  src="/_next/image?url=%2Fimg%2Fcareer%2Fshape-1-1.png&amp;w=750&amp;q=75"
                />
              </div>
              <div class="it-career-shape-3 d-none d-xl-block">
                <img
                  alt=""
                  loading="lazy"
                  width="66"
                  height="65"
                  decoding="async"
                  data-nimg="1"
                  src="/_next/image?url=%2Fimg%2Fcareer%2Fshape-1-2.png&amp;w=256&amp;q=75"
                />
              </div>

              <div class="it-career-shape-6 d-none d-xl-block">
                <img
                  alt=""
                  loading="lazy"
                  width="77"
                  height="85"
                  decoding="async"
                  data-nimg="1"
                  src="/_next/image?url=%2Fimg%2Fcareer%2Fshape-1-5.png&amp;w=256&amp;q=75"
                />
              </div>
              <div class="container">
                <div class="row">
                  <div class="col-xl-12">
                    <div class="it-career-title-box text-center mb-70">
                      <span class="it-section-subtitle">
                        Vision and Mission
                      </span>
                      <h4 class="it-section-title">
                        Discover your gain{" "}
                        <svg
                          class="title-shape-2"
                          width="168"
                          height="65"
                          viewBox="0 0 168 65"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M73.3761 8.49147C78.4841 6.01353 82.5722 4.25154 88.8933 3.3035C94.2064 2.50664 99.6305 2.0701 104.981 1.94026C120.426 1.56549 135.132 4.90121 146.506 9.70405C158.628 14.8228 166.725 22.5638 166.074 31.6501C165.291 42.5779 151.346 51.7039 133.508 56.8189C110.253 63.4874 81.7065 63.8025 58.5605 60.8285C37.5033 58.123 11.6304 51.7165 3.58132 40.0216C-3.43085 29.8337 12.0728 18.1578 27.544 11.645C40.3656 6.24763 55.7082 2.98328 70.8043 4.08403C81.9391 4.89596 93.2164 6.87822 102.462 9.99561C112.874 13.5066 120.141 18.5932 127.862 23.6332"
                            stroke="#0AB99D"
                            stroke-width="3"
                            stroke-linecap="round"
                          ></path>
                        </svg>
                      </h4>
                    </div>
                  </div>
                  <div class="col-xl-6 col-lg-6 ">
                    <div class="it-career-item p-relative fix">
                      <div class="it-career-content">
                        <span>Vision</span>
                        <p>
                          Monark University will be an inclusive
                          <br /> and engaged research-intensive
                          <br /> university that inspires creativity
                          <br /> through outstanding achievements
                          <br /> in learning, with up to date <br /> curriculum
                          and contemporary
                          <br /> delivery to meet the demands
                          <br /> of the global higher education
                          <br /> landscape.
                        </p>
                      </div>
                      <div class="it-career-thumb">
                        <img
                          alt=""
                          loading="lazy"
                          width="309"
                          height="252"
                          decoding="async"
                          data-nimg="1"
                          src="/_next/image?url=%2Fimg%2Fcareer%2Fthumb-1.png&amp;w=640&amp;q=75"
                        />
                      </div>
                      <div class="it-career-shape-1">
                        <img
                          alt=""
                          loading="lazy"
                          width="642"
                          height="350"
                          decoding="async"
                          data-nimg="1"
                          src="/_next/image?url=%2Fimg%2Fcareer%2Fshape-1.png&amp;w=1920&amp;q=75"
                        />
                      </div>
                    </div>
                  </div>
                  <div class="col-xl-6 col-lg-6 ">
                    <div class="it-career-item p-relative fix">
                      <div class="it-career-content">
                        <span>Mission</span>
                        <p>
                          Monark University is committed to engaging <br /> with
                          the key issues of our natural <br /> and social worlds
                          through outstanding <br /> teaching, research, and
                          scholarship.
                          <br /> Monark University will provide <br /> a vibrant
                          and supportive <br /> intellectual environment that{" "}
                          <br /> attracts and connects people <br /> from all
                          over the world.
                        </p>
                      </div>
                      <div class="it-career-thumb">
                        <img
                          alt=""
                          loading="lazy"
                          width="309"
                          height="252"
                          decoding="async"
                          data-nimg="1"
                          src="/_next/image?url=%2Fimg%2Fcareer%2Fthumb-2.png&amp;w=640&amp;q=75"
                        />
                      </div>
                      <div class="it-career-shape-1">
                        <img
                          alt=""
                          loading="lazy"
                          width="642"
                          height="350"
                          decoding="async"
                          data-nimg="1"
                          src="/_next/image?url=%2Fimg%2Fcareer%2Fshape-1.png&amp;w=1920&amp;q=75"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* vision and mission end*/}

            {/* President message start*/}
            <div id="presidentmessage">
              <div className="it-sv-details-area pt-120 pb-120">
                <div className="container">
                  <div className="row">
                    <div className="col-xl col-lg">
                      <div className="it-sv-details-top-wrap mb-20">
                        <div className="row">
                          <div className="col-xl-6 col-lg-6">
                            <div className="it-sv-details-top-thumb">
                              <Image src={blankm} className="img-fluid" />
                            </div>
                          </div>
                          <div className="col-xl-6 col-lg-6">
                            <div className="it-sv-details-top-content">
                              <h4 className="it-sv-details-title">
                                About President{" "}
                              </h4>
                              <p>
                                Dr. Hasmukhbharthi M. Goswami is the esteemed
                                President of Monark University. He brings a
                                wealth of experience in academic leadership and
                                a strong commitment to educational excellence.
                                Under his guidance, Monark University aims to
                                foster innovation, research, and holistic
                                development. Dr. Goswami is dedicated to
                                creating a dynamic and inclusive learning
                                environment that empowers students to achieve
                                their fullest potential. His vision is to
                                elevate the university to new heights of
                                academic and institutional success.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-xl-12">
                          <div className="it-sv-details-top-content mb-50">
                            <h4 className="it-sv-details-title">
                              President's Message
                            </h4>
                            <p>
                              Welcome to Monark University. As a President of
                              Monark University, it gives me immense pleasure to
                              share with you the vision of this University. The
                              University aims at imparting quality education and
                              achieving excellence in all of its academic
                              programs. In fast changing technological
                              advancements and global economic environment, we
                              planned to strive to bring global perspective to
                              its academic programs and activities. The focus is
                              on building a strong team of highly qualified
                              faculty members and dedicated supporting staff to
                              meet national and global challenges and deliver
                              world class education using latest technologies
                              and contemporary teaching methodology. In order to
                              enhance the knowledge of the students in several
                              core areas, emphasis is given on wide variety of
                              academic programs for their multifaceted
                              development. We have huge academic and physical
                              infrastructures and facilities with well equipped
                              labs, workshops, qualified and motivated faculty
                              members who work with commitment and dedication
                              for the cause of education and research. The
                              outcome based course curriculum of our programs
                              has been designed and developed with the help of
                              national level experts so that desired competency
                              and skills can be inculcated in the students to
                              make them employable. Moreover, world-class
                              assessment methods and systems are established by
                              the University for proper implementation of the
                              curriculum and ensuring quality education. We
                              extend an invitation to you to visit our sprawling
                              campus of our University to know more about the
                              University and its physical and infrastructural
                              facilities. I also take this opportunity to invite
                              the students from all parts of the world to join
                              our academic courses. We will be happy to guide
                              and help you to succeed in your educational
                              journey.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-xl-6 col-lg-6">
                          <div className="it-sv-details-content-box mb-50">
                            <h5 className="it-sv-details-title-sm">
                              <span>
                                <i className="fa-sharp fa-light fa-check"></i>
                              </span>
                              Requirements
                            </h5>
                            <p>
                              Dui id ornare arcu odio ut sem nulla pharetra diam
                              eget aliquet nibh praesent tristiq.
                            </p>
                          </div>
                        </div>
                        <div className="col-xl-6 col-lg-6">
                          <div className="it-sv-details-content-box mb-50">
                            <h5 className="it-sv-details-title-sm">
                              <span>
                                <i className="fa-sharp fa-light fa-check"></i>
                              </span>
                              Description
                            </h5>
                            <p>
                              {" "}
                              "Dui id ornare arcu odio ut sem nulla pharetra
                              diam eget aliquet"
                            </p>
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
                <div className="it-sv-details-area pt-120 pb-120">
                  <div className="container">
                    <div className="row">
                      <div className="col-xl col-lg">
                        <div className="it-sv-details-top-wrap mb-20">
                          <div className="row">
                            <div className="col-xl-6 col-lg-6">
                              <div className="it-sv-details-top-thumb">
                                <Image src={sb} className="img-fluid" />
                              </div>
                            </div>
                            <div className="col-xl-6 col-lg-6">
                              <div className="it-sv-details-top-content">
                                <h4 className="it-sv-details-title">
                                  About Vice-President{" "}
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
                        <div className="row">
                          <div className="col-xl-12">
                            <div className="it-sv-details-top-content mb-50">
                              <h4 className="it-sv-details-title">
                                Vice-President's Message
                              </h4>
                              <p>
                                Welcome to Monark University. We are pleased to
                                welcome you to Monark University. As a blooming
                                University, we endeavor to impart best in class
                                education in line with today's market needs. Our
                                principal responsibilities as an educational
                                institution is to nurture today’s minds to be
                                able to create ample opportunities in today’s
                                marketplace. We wish to create a space of
                                knowledge along with all the practical aspects
                                of it. So we have identified all sectors of
                                education so helping students enhance the scope
                                for such education. “The purpose of education is
                                not to validate ignorance but to overcome it.”
                                We here at Monark University welcome you to a
                                world to build your career with an institute of
                                repute. We are offering a plethora of courses
                                like basic sciences, commerce and administration
                                as well as applied sciences of engineering,
                                technology, paramedical and other allied areas
                                of higher education. We have a dedicated team of
                                highly trained and professional faculty members
                                who impart best in class education. We have best
                                in class infrastructure including but not
                                limited to classrooms equipped for great
                                teaching- learning experiences, fully equipped
                                laboratories, workshop for practical training.
                                Also we know the importance of curriculum hence
                                we take special care as to who designs our
                                curriculum hence a team with deep subject
                                knowledge as well as experience in industry.
                                Here we focus on overall development of our
                                students as they need to be able to make a place
                                in their respective
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-xl-6 col-lg-6">
                            <div className="it-sv-details-content-box mb-50">
                              <h5 className="it-sv-details-title-sm">
                                <span>
                                  <i className="fa-sharp fa-light fa-check"></i>
                                </span>
                                Requirements
                              </h5>
                              <p>
                                Dui id ornare arcu odio ut sem nulla pharetra
                                diam eget aliquet nibh praesent tristiq.
                              </p>
                            </div>
                          </div>
                          <div className="col-xl-6 col-lg-6">
                            <div className="it-sv-details-content-box mb-50">
                              <h5 className="it-sv-details-title-sm">
                                <span>
                                  <i className="fa-sharp fa-light fa-check"></i>
                                </span>
                                Description
                              </h5>
                              <p>
                                {" "}
                                "Dui id ornare arcu odio ut sem nulla pharetra
                                diam eget aliquet"
                              </p>
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
                  <div className="it-sv-details-area pt-120 pb-120">
                    <div className="container">
                      <div className="row">
                        <div className="col-xl col-lg">
                          <div className="it-sv-details-top-wrap mb-20">
                            <div className="row">
                              <div className="col-xl-6 col-lg-6">
                                <div className="it-sv-details-top-thumb">
                                  <Image src={hs} className="img-fluid" />
                                </div>
                              </div>
                              <div className="col-xl-6 col-lg-6">
                                <div className="it-sv-details-top-content">
                                  <h4 className="it-sv-details-title">
                                    About Provost
                                  </h4>
                                  <p>
                                    Dr. Urmilaben S. Goswami is the Provost of
                                    Monark University. She is renowned for her
                                    academic expertise and leadership in higher
                                    education. Dr. Goswami is dedicated to
                                    enhancing the university's academic
                                    standards and fostering a culture of
                                    research and innovation. She plays a crucial
                                    role in curriculum development and faculty
                                    support, ensuring a high-quality education
                                    for all students. Her commitment to academic
                                    excellence and holistic student development
                                    significantly contributes to the
                                    university's reputation and growth.
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="row">
                            <div className="col-xl-12">
                              <div className="it-sv-details-top-content mb-50">
                                <h4 className="it-sv-details-title">
                                  Provost's Message
                                </h4>
                                <p>
                                  Greetings from Monark University, Ahmedabad.
                                  Our prime duty as a university is to nurture
                                  today’s minds to be able to create ample
                                  opportunities in today’s marketplace. The
                                  purpose of education is not restricted to
                                  imparting knowledge but has shifted towards
                                  holistic development of the students as needs
                                  of the society changed. The new education
                                  system has taken the responsibility of
                                  bringing forth worthy citizens who are
                                  proactive in their approach and have the
                                  required dynamism to create a new order. We as
                                  a Monark University are committed to provide a
                                  dynamic, supportive and creative environment
                                  to the students. Our focus is to provide
                                  qualitative and value based education. We aim
                                  to provide an educational exploration and
                                  strengthen the potential which is innate in
                                  every individual. We welcome all the students
                                  who select to be a part of Monark University
                                  and we assure you that you will feel proud on
                                  your decision on being associated with us. I
                                  wish you best wishes for your academic
                                  excellence at Monark University. “The purpose
                                  of education is to make good human beings with
                                  skill and expertise. Enlightened human beings
                                  can be created by teachers.” – Dr. APJ Abdul
                                  Kalam
                                </p>
                              </div>
                            </div>
                          </div>
                          <div className="row">
                            <div className="col-xl-6 col-lg-6">
                              <div className="it-sv-details-content-box mb-50">
                                <h5 className="it-sv-details-title-sm">
                                  <span>
                                    <i className="fa-sharp fa-light fa-check"></i>
                                  </span>
                                  Requirements
                                </h5>
                                <p>
                                  Dui id ornare arcu odio ut sem nulla pharetra
                                  diam eget aliquet nibh praesent tristiq.
                                </p>
                              </div>
                            </div>
                            <div className="col-xl-6 col-lg-6">
                              <div className="it-sv-details-content-box mb-50">
                                <h5 className="it-sv-details-title-sm">
                                  <span>
                                    <i className="fa-sharp fa-light fa-check"></i>
                                  </span>
                                  Description
                                </h5>
                                <p>
                                  {" "}
                                  "Dui id ornare arcu odio ut sem nulla pharetra
                                  diam eget aliquet"
                                </p>
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
                      className="it-funfact-5-area it-funfact-5-bg p-relative fix yellow-bg pt-100 pb-60"
                      data-background="/img/funfact/bg-2.png"
                      layout="fill"
                      objectFit="cover"
                    >
						<h4 className="it-section-title-5" style={{ marginBottom: '100px', textAlign: 'center' }}>Approvals & Recognitions</h4>

                      <div className="container">
                        <div className="row">
                          <div className="col-xl-3 col-lg-3">
                            <div className="it-feature-item text-center">

                              <div className="it-feature-item-content z-index">
                                <div className="it-feature-icon">
								<Image
                                src={ai} className="img-fluid"
                                
                              />
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

                          <div className="col-xl-3 col-lg-3">
                            <div className="it-feature-item text-center">

                              <div className="it-feature-item-content z-index">
                                <div className="it-feature-icon">
								<Image
                                src={nc} className="img-fluid"
                                
                              />
                                </div>
                                <div className="it-feature-text pt-30">
                                  <h4 className="it-feature-title">
                                    NCTE
                                  </h4>
                                
                                </div>
                                <div className="it-feature-button">
                                  <Link href="https://ncte.gov.in/website/index.aspx" className="it-btn-border">
                                    <span>
                                      'Learn More'
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
						  <div className="col-xl-3 col-lg-3">
                            <div className="it-feature-item text-center">

                              <div className="it-feature-item-content z-index">
                                <div className="it-feature-icon">
								<Image
                                src={gn} className="img-fluid"
                                
                              />
                                </div>
                                <div className="it-feature-text pt-30">
                                  <h4 className="it-feature-title">
                                   GNC
                                  </h4>
                                
                                </div>
                                <div className="it-feature-button">
                                  <Link href="https://www.gujaratnursingcouncil.org/" className="it-btn-border">
                                    <span>
                                      'Learn More'
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
						  <div className="col-xl-3 col-lg-3">
                            <div className="it-feature-item text-center">
                            
                              <div className="it-feature-item-content z-index">
                                <div className="it-feature-icon">
								<Image
                                src={bc} className="img-fluid"
                                
                              />
                                </div>
                                <div className="it-feature-text pt-30">
                                  <h4 className="it-feature-title">
                                   BCI
                                  </h4>
                                
                                </div>
                                <div className="it-feature-button">
                                  <Link href="https://www.barcouncilofindia.org/home" className="it-btn-border">
                                    <span>
                                      'Learn More'
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
						  <div className="col-xl-3 col-lg-3">
                            <div className="it-feature-item text-center" style={{ marginTop: '10px' }}>
                           
                              <div className="it-feature-item-content z-index">
                                <div className="it-feature-icon">
								<Image
                                src={na} className="img-fluid"
                                
                              />
                                </div>
                                <div className="it-feature-text pt-30">
                                  <h4 className="it-feature-title">
                                    NAAC
                                  </h4>
                                
                                </div>
                                <div className="it-feature-button">
                                  <Link href="http://naac.gov.in/index.php/en/" className="it-btn-border">
                                    <span>
                                      'Learn More'
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
						  <div className="col-xl-3 col-lg-3">
                            <div className="it-feature-item text-center" style={{ marginTop: '10px' }}>
                           
                              <div className="it-feature-item-content z-index">
                                <div className="it-feature-icon">
								<Image
                                src={is} className="img-fluid"
                                
                              />
                                </div>
                                <div className="it-feature-text pt-30">
                                  <h4 className="it-feature-title">
                                  ISTE
                                  </h4>
                                
                                </div>
                                <div className="it-feature-button">
                                  <Link href="http://www.isteonline.in/" className="it-btn-border">
                                    <span>
                                      'Learn More'
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
						  <div className="col-xl-3 col-lg-3">
                            <div className="it-feature-item text-center" style={{ marginTop: '10px' }}>
                           
                              <div className="it-feature-item-content z-index">
                                <div className="it-feature-icon">
								<Image
                                src={vi} className="img-fluid"
                                
                              />
                                </div>
                                <div className="it-feature-text pt-30">
                                  <h4 className="it-feature-title">
                                    VIPNET
                                  </h4>
                                
                                </div>
                                <div className="it-feature-button">
                                  <Link href="https://vigyanprasar.gov.in/vipnet/" className="it-btn-border">
                                    <span>
                                      'Learn More'
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
						  <div className="col-xl-3 col-lg-3">
                            <div className="it-feature-item text-center" style={{ marginTop: '10px' }}>
                           
                              <div className="it-feature-item-content z-index">
                                <div className="it-feature-icon">
								<Image
                                src={ncc} className="img-fluid"
                                
                              />
                                </div>
                                <div className="it-feature-text pt-30">
                                  <h4 className="it-feature-title">
                                    NCC
                                  </h4>
                                
                                </div>
                                <div className="it-feature-button">
                                  <Link href="https://indiancc.mygov.in/" className="it-btn-border">
                                    <span>
                                      'Learn More'
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
