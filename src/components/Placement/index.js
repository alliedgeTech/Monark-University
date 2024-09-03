import React, { useEffect, useState } from "react";
import placementimg from "@/data/placement";
import m1 from "../../../public/img/placement/tcs_logo.jpeg";
import Image from "next/image";
import dynamic from "next/dynamic";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import Link from "next/link";
import axios from "axios";
import Marquee from "react-fast-marquee";
import "aos/dist/aos.css";
import aos from "aos";

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
    items: 1,
    margin: 10,
  },
  556: {
    items: 2,
    margin: 10,
  },
  1024: {
    items: 2,
    margin: 20,
  },
};
const Responsive2 = {
  0: {
    items: 1,
    margin: 5,
  },
  435: {
    items: 1,
    margin: 10,
  },
  556: {
    items: 1,
    margin: 10,
  },
  1024: {
    items: 1,
    margin: 20,
  },
};
const Responsive3 = {
  0: {
    items: 1,
    margin: 5,
  },
  435: {
    items: 1,
    margin: 10,
  },
  556: {
    items: 1,
    margin: 10,
  },
  1024: {
    items: 3,
    margin: 20,
  },
};

// ApiService function
const ApiService = async ({ method, endpoint, data }) => {
  try {
    const response = await axios({
      method,
      url: endpoint,
      data,
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};

const index = () => {
  const [latestNews, setLatestNews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    aos.init({
      offset: 50, // Offset (in pixels) from the original trigger point
      duration: 700, // Duration of animation (in milliseconds)
    });
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const result = await ApiService({
        method: "GET",
        endpoint: "https://monarkuniversitybacked.onrender.com/home-updates",
      });
      setLatestNews(result);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching data:", error);
      setLoading(false);
    }
  };
  return (
    <div className="placement ">
      <div id="training" className="training-placement py-4">
        <div className="training-placement-heading container">
          <div className="three mb-25" data-aos="fade-up">
            <h1 className="">Training & Placement Cell</h1>
          </div>
          <div className="row">
            <div className="col-lg-4 col-12">
              <div className="training-img" data-aos="zoom-in-right">
                <img
                  className="img-fluid"
                  src="https://res.cloudinary.com/dnjgopun8/image/upload/v1724927407/WhatsApp_Image_2024-08-29_at_15.59.45_6a6b7baa_ngtiy6.jpg"
                  alt=""
                />
              </div>
            </div>
            <div className="col-lg-8 col-12">
              <div className="training-text" data-aos="fade-left">
                <p>
                  The ultimate aim of the institute is not only just creating
                  the engineers, but to eventually producing and delivering
                  working professionals to the industry by imparting employable
                  skill to the students. In order to achieve this objective, the
                  institute imparts soft, managerial and technical skills to
                  students. A placement team consisting of seven qualified
                  professionals has been set up and is functioning under the
                  guidance and direction of the top management and
                  Director/Principal in the process of placement. The management
                  of the institute has resolved and is committed to achieve 100%
                  placement of the students.
                </p>
              </div>
            </div>
            <p data-aos="fade-up">
              The Management has stepped forward to frame out long-term
              strategies to develop and strengthen Institute-Industries
              Relationship. The campus recruitment/placement process has already
              commenced. The Institute has also taken initiatives to organize a
              series of in-house training courses/ workshops/seminars/guest
              lecturers for imparting extra knowledge and providing exposure,
              practical knowledge a skill to the student community and
              faculties.
            </p>
          </div>
        </div>
      </div>
      <div className="msg-placement-officer py-4">
        <div className="it-sv-details-area mt-50 ">
          <div className="container">
            <div className="three mb-20">
              <h1 className="oswald">
                Message From Training & Placement Officer
              </h1>
            </div>
            <div className="row">
              <div className="col-12">
                <div className="it-sv-details-top-wrap mb-20">
                  <div className="row flex-row-reverse">
                    <div className="col-md-4">
                      <div
                        className="it-sv-details-top-thumb tpo-img Left"
                        data-aos="fade-left"
                      >
                        <img
                          src="https://res.cloudinary.com/dnjgopun8/image/upload/v1724927440/WhatsApp_Image_2024-08-29_at_16.00.06_21c127d8_y1lf1p.jpg"
                          className="shadow mb-0 w-100 h-100"
                          alt="President Image"
                        />
                      </div>
                      <p className="text-right mt-1">
                        <p className="mb-0">
                          <strong>Prof. Nilesh J. Parekh</strong>
                        </p>
                        Training and Placement Officer
                        <br />
                        Monark University
                      </p>
                    </div>
                    <div className="col-md-8">
                      <OwlCarousel
                        data-aos="fade-right"
                        className="owl-theme"
                        dots={true}
                        loop={true}
                        autoPlay={true}
                        autoplayTimeout={5000}
                        responsive={Responsive2}
                      >
                        <div className="item">
                          <p>
                            <i className="fa-solid fa-angle-right me-4"></i>
                            As the Training and Placement Officer at Monark
                            University, it is my privilege to highlight the
                            crucial role that training and placement play in
                            your academic journey and career prospects.
                            <br />{" "}
                            <i className="fa-solid fa-angle-right me-4"></i>
                            At Monark University, we firmly believe that
                            education goes beyond classroom learning. It
                            encompasses practical exposure and real-world
                            application, which are essential for your
                            professional development. Our training programmess
                            are meticulously designed to bridge the gap between
                            academia and industry requirements. They aim to
                            equip you with not just theoretical knowledge but
                            also practical skills and competencies that are
                            highly valued in today's competitive job market.
                            <br />{" "}
                            <i className="fa-solid fa-angle-right me-4"></i>
                            The placement process at our university is a
                            testament to our commitment to your success. We
                            collaborate closely with leading companies and
                            organizations to provide you with diverse placement
                            opportunities across various sectors. Our strong
                            industry connections and alumni network further
                            enhance your prospects, opening doors to rewarding
                            career paths.
                          </p>
                        </div>
                        <div className="item">
                          <p>
                            <i className="fa-solid fa-angle-right me-4"></i>
                            Moreover, our dedicated team of faculty members and
                            career counselors are here to guide and support you
                            every step of the way. Whether it's resume building,
                            interview preparation, or career guidance, we are
                            here to ensure that you are well-prepared and
                            confident to embark on your professional journey.
                            <br />{" "}
                            <i className="fa-solid fa-angle-right me-4"></i>
                            Remember, your success is our success. We are
                            invested in nurturing your talents, honing your
                            skills, and preparing you to become an
                            industry-ready professional. Take full advantage of
                            the resources and opportunities available at Monark
                            University to shape a bright and fulfilling future.
                            <br />{" "}
                            <i className="fa-solid fa-angle-right me-4"></i>I
                            encourage you to actively participate in our
                            training programmes and engage in the placement
                            process. Your proactive involvement will undoubtedly
                            enhance your employability and pave the way for
                            exciting career prospects.
                          </p>
                          <div className="msg-strong-box">
                            <strong>
                              “Wishing you all the best in your academic
                              endeavors and future endeavors”
                            </strong>
                          </div>
                        </div>
                      </OwlCarousel>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="Latest-News py-5 px-lg-5 px-2" id="latest-news">
        <div className="container">
          <div
            data-aos="fade-right"
            className="student-placement-heading mb-20"
          >
            <div className="three">
              <h1 className="mb-0">Placement News</h1>
            </div>
          </div>

          {loading ? (
            <p>Loading...</p>
          ) : (
            <OwlCarousel
              className="owl-theme"
              loop={true}
              margin={10}
              autoPlay={true}
              responsive={Responsive3}
              responsiveRefreshRate={100}
              autoplayTimeout={3000}
            >
              {latestNews.map((item, index) => (
                <div data-aos="zoom-in" className="item p-2" key={index}>
                  <div className="news-card p-3">
                    <div className="news-head">
                      <div className="news-img-box">
                        <img src={item.image} alt="" />
                        <Link href={`/newsdetails?_id=${item._id}`}>
                          <button className="hover-btn news-hover-btn px-4">
                            <div className="text-div">
                              <small>Read</small>
                              <small>More</small>
                            </div>
                          </button>
                        </Link>
                      </div>
                      <div className="news-info-box mt-4">
                        <h4 className="truncate">{item.title}</h4>
                        <small className="news-description-ellips">
                          {item.description}
                        </small>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </OwlCarousel>
          )}
        </div>
      </div>
      <div id="placement_record" className="placement-record py-5 ">
        <div className="container">
          <div className="placement-record-heading mt-30">
            <div className=" mb-45" data-aos="fade-up">
              <h1 className="text-center">Placement Records</h1>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4 col-md-4 col-12 mt-lg-5 mt-4 h-100">
              <div className="record-box" data-aos="zoom-out">
                <div className="icon-box d-flex flex-column align-items-center">
                  <i className="fa-regular fa-credit-card mb-4"></i>
                  <h4>Placement Record</h4>
                </div>
                <div className="record-text mt-5">
                  <p>
                    <i className="fa-solid fa-right-long"></i>12.50 LPA Highest
                    Package
                  </p>
                  <p>
                    <i className="fa-solid fa-right-long"></i>1000 + Annual
                    Placements
                  </p>
                  <p>
                    <i className="fa-solid fa-right-long"></i>400+ Annual
                    Recruiters
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-12 mt-lg-0 mt-4 h-100">
              <div className="record-box" data-aos="zoom-out">
                <div className="icon-box d-flex flex-column align-items-center">
                  <i className="fa-solid fa-dice-d20 mb-4"></i>
                  <h4>Placement Activities</h4>
                </div>
                <div className="record-text mt-5">
                  <p>
                    <i className="fa-solid fa-right-long"></i>100 +
                    Seminars/Workshops/Webinars
                  </p>
                  <p>
                    <i className="fa-solid fa-right-long"></i>10 + Startups
                  </p>
                  <p>
                    <i className="fa-solid fa-right-long"></i>15 + MoUs Year
                    2023-2024
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-12 mt-lg-5 mt-4 h-100">
              <div className="record-box" data-aos="zoom-out">
                <div className="icon-box d-flex flex-column align-items-center">
                  <i className="fa-solid fa-clock-rotate-left mb-4"></i>
                  <h4>Year 2022-2023 (Cont.)</h4>
                </div>
                <div className="record-text mt-5">
                  <p>
                    <i className="fa-solid fa-right-long"></i>Number of Eligible
                    Students : 2000 +
                  </p>
                  <p>
                    <i className="fa-solid fa-right-long"></i>
                    Number of Students Placed : 700 +
                  </p>
                  <p>
                    <i className="fa-solid fa-right-long"></i>Number of
                    Companies Participated : 400 +
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="recruiters" className="student-placement py-5 bg-white">
        <div className="course-heading-home text-center mb-20">
          <h1 data-aos="fade-right" className="mb-0">
            Your Exceptional Placement <span>Opportunities</span> with
            Comprehensive Milestone <span>Packages</span>
          </h1>
        </div>
        <Marquee
          className="placement-carousel"
          behavior="alternate"
          direction=""
        >
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
          <div className="img-box" data-aos="fade-up" data-delay="24">
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
              <div
                className="alumini-heading p-relative"
                data-aos="zoom-in-right"
              >
                <h5>You May Also Be One Of Them</h5>
                <h1 className="">
                  Our Alums Employed by the <span>World's</span> Leading{" "}
                  <span className="blue">Organizations</span>
                </h1>
                <img
                  className="img-fluid d-lg-block d-none line-round"
                  src="https://cdn.pixabay.com/photo/2014/12/10/10/08/district-562975_1280.png"
                  alt=""
                />
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
                      <img
                        className="img-fluid"
                        src="https://res.cloudinary.com/dnjgopun8/image/upload/v1725000572/2.jpeg_t6idwy.jpg"
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="item px-2 py-3">
                    <div className="alumini-card">
                      <img
                        className="img-fluid"
                        src="https://res.cloudinary.com/dnjgopun8/image/upload/v1725000572/Placement_Data_4_qj6cpb.jpg "
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="item px-2 py-3">
                    <div className="alumini-card">
                      <img
                        className="img-fluid"
                        src="https://res.cloudinary.com/dnjgopun8/image/upload/v1725000572/Placement_Data_3_j47bbp.jpg "
                        alt=""
                      />
                    </div>
                  </div>{" "}
                  <div className="item px-2 py-3">
                    <div className="alumini-card">
                      <img
                        className="img-fluid"
                        src="https://res.cloudinary.com/dnjgopun8/image/upload/v1725000572/10.jpeg_bnlc5n.jpg"
                        alt=""
                      />
                    </div>
                  </div>{" "}
                  <div className="item px-2 py-3">
                    <div className="alumini-card">
                      <img
                        className="img-fluid"
                        src="https://res.cloudinary.com/dnjgopun8/image/upload/v1725000572/7_1_dkhvth.jpg"
                        alt=""
                      />
                    </div>
                  </div>{" "}
                  <div className="item px-2 py-3">
                    <div className="alumini-card">
                      <img
                        className="img-fluid"
                        src="https://res.cloudinary.com/dnjgopun8/image/upload/v1725000571/8_1_tov23d.jpg"
                        alt=""
                      />
                    </div>
                  </div>{" "}
                  <div className="item px-2 py-3">
                    <div className="alumini-card">
                      <img
                        className="img-fluid"
                        src="https://res.cloudinary.com/dnjgopun8/image/upload/v1725000571/3.jpeg_s6mdgk.jpg"
                        alt=""
                      />
                    </div>
                  </div>{" "}
                  <div className="item px-2 py-3">
                    <div className="alumini-card">
                      <img
                        className="img-fluid"
                        src="https://res.cloudinary.com/dnjgopun8/image/upload/v1725000571/6.jpeg_maz1vc.jpg"
                        alt=""
                      />
                    </div>
                  </div>{" "}
                  <div className="item px-2 py-3">
                    <div className="alumini-card">
                      <img
                        className="img-fluid"
                        src="https://res.cloudinary.com/dnjgopun8/image/upload/v1725000571/4.jpeg_u9gjwu.jpg"
                        alt=""
                      />
                    </div>
                  </div>{" "}
                  <div className="item px-2 py-3">
                    <div className="alumini-card">
                      <img
                        className="img-fluid"
                        src="https://res.cloudinary.com/dnjgopun8/image/upload/v1725000571/9.jpeg_b0qb1j.jpg"
                        alt=""
                      />
                    </div>
                  </div>{" "}
                  <div className="item px-2 py-3">
                    <div className="alumini-card">
                      <img
                        className="img-fluid"
                        src="https://res.cloudinary.com/dnjgopun8/image/upload/v1725000571/5.jpeg_qurrds.jpg"
                        alt=""
                      />
                    </div>
                  </div>{" "}
                  <div className="item px-2 py-3">
                    <div className="alumini-card">
                      <img
                        className="img-fluid"
                        src="https://res.cloudinary.com/dnjgopun8/image/upload/v1724995597/7_zlj3dw.jpg"
                        alt=""
                      />
                    </div>
                  </div>{" "}
                  <div className="item px-2 py-3">
                    <div className="alumini-card">
                      <img
                        className="img-fluid"
                        src="https://res.cloudinary.com/dnjgopun8/image/upload/v1724995597/6_lijxfr.jpg"
                        alt=""
                      />
                    </div>
                  </div>{" "}
                  <div className="item px-2 py-3">
                    <div className="alumini-card">
                      <img
                        className="img-fluid"
                        src="https://res.cloudinary.com/dnjgopun8/image/upload/v1724995597/9_zghy16.jpg"
                        alt=""
                      />
                    </div>
                  </div>{" "}
                  <div className="item px-2 py-3">
                    <div className="alumini-card">
                      <img
                        className="img-fluid"
                        src="https://res.cloudinary.com/dnjgopun8/image/upload/v1724995597/1_xyk54h.jpg"
                        alt=""
                      />
                    </div>
                  </div>{" "}
                  <div className="item px-2 py-3">
                    <div className="alumini-card">
                      <img
                        className="img-fluid"
                        src="https://res.cloudinary.com/dnjgopun8/image/upload/v1724995597/5_x8tw29.jpg"
                        alt=""
                      />
                    </div>
                  </div>{" "}
                  <div className="item px-2 py-3">
                    <div className="alumini-card">
                      <img
                        className="img-fluid"
                        src="https://res.cloudinary.com/dnjgopun8/image/upload/v1724995597/2_tissiv.jpg"
                        alt=""
                      />
                    </div>
                  </div>{" "}
                  <div className="item px-2 py-3">
                    <div className="alumini-card">
                      <img
                        className="img-fluid"
                        src="https://res.cloudinary.com/dnjgopun8/image/upload/v1724995597/4_qvmpyx.jpg"
                        alt=""
                      />
                    </div>
                  </div>{" "}
                  <div className="item px-2 py-3">
                    <div className="alumini-card">
                      <img
                        className="img-fluid"
                        src="https://res.cloudinary.com/dnjgopun8/image/upload/v1724995596/3_lkw8yc.jpg"
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="item px-2 py-3">
                    <div className="alumini-card">
                      <img
                        className="img-fluid"
                        src="https://res.cloudinary.com/dnjgopun8/image/upload/v1724995596/8_koghc1.jpg"
                        alt=""
                      />
                    </div>
                  </div>
                </OwlCarousel>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container" id="lab">
        <div className="row">
          <div className="it-career-title-box mb-10">
            <div className="three mb-5" data-aos="fade-up">
              <h1 className="">
                "The Essentials of Industrial Robotics"(certificate course with
                TATA IIS)
              </h1>
            </div>
            <p data-aos="fade-right">
              Monark University and TATA IIS (Indian Institute of Skills) have
              jointly organised a nine-day training course on "Essentials of
              Industrial Robotics" for final and pre-final year students of the
              Mechanical/Electrical and Automobile Engineering branches.
              <svg
                className="title-shape-2"
                width="168"
                height="65"
                viewBox="0 0 168 65"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              ></svg>
            </p>
          </div>
          {placementimg
            .map((plc, i) => {
              return (
                <div key={i} className="col-xl-3 col-lg-3 col-md-6 mb-30">
                  <div className={"it-blog-item"} data-aos="zoom-in">
                    <div className="">
                      <img src={plc.img} className="img-fluid" />
                    </div>
                  </div>
                </div>
              );
            })
            .slice(0, 15)}
        </div>
      </div>
      <div className="container" id="lab">
        <div className="row">
          <div className="it-career-title-box mb-10">
            <div className="three mb-5" data-aos="fade-up">
              <h1 className="">"TATA IIS"(Indian Institute of Skills)</h1>
            </div>
            <p data-aos="fade-right">
              It's an honour that our Monark University has signed 'Memorandum
              of Understanding' (MoU) with TATA IIS (Indian Institute of
              Skills), a renowned integrator of the engineering sector. We are
              very thankful to TATA IIS for this next-generation venture, where
              industries and academics will jointly contribute in the
              progressive journey of the nation.
              <svg
                className="title-shape-2"
                width="168"
                height="65"
                viewBox="0 0 168 65"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              ></svg>
            </p>
          </div>
          {placementimg
            .map((plc, i) => {
              return (
                <div key={i} className="col-xl-3 col-lg-3 col-md-6 mb-30">
                  <div className={"it-blog-item"} data-aos="zoom-in">
                    <div className="">
                      <img src={plc.img} className="img-fluid" />
                    </div>
                  </div>
                </div>
              );
            })
            .slice(20, 47)}
        </div>
      </div>
    </div>
  );
};

export default index;
