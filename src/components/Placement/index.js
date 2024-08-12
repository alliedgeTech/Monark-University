import React, { useEffect, useState } from "react";

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
    items: 3,
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
                  src="/img/placement/placement.jpg"
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
      <div className="container py-4">
        <div className="it-sv-details-area mt-50 ">
          <div className="container">
            <div className="three mb-20">
              <h1 className="oswald">Message From Training & Placement Officer</h1>
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
                          src="/img/pro/tpoimg.jpg"
                          className="h-100 w-100 shadow mb-0"
                          alt="President Image"
                        />
                      </div>
                      <p className="text-right mt-1">
                      Warm regards, <br />

                        <p className="mb-0"><strong>Prof. Nilesh J. Parekh
                        </strong></p>
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
                            <i class="fa-regular fa-circle-right mr-15"></i>
                            As the Training and Placement Officer at Monark
                            University, it is my privilege to highlight the
                            crucial role that training and placement play in
                            your academic journey and career prospects.
                            <br />                             <i class="fa-regular fa-circle-right mr-15"></i>
                            At Monark University, we firmly believe that
                            education goes beyond classroom learning. It
                            encompasses practical exposure and real-world
                            application, which are essential for your
                            professional development. Our training programmess are
                            meticulously designed to bridge the gap between
                            academia and industry requirements. They aim to
                            equip you with not just theoretical knowledge but
                            also practical skills and competencies that are
                            highly valued in today's competitive job market.
                            <br />                            <i class="fa-regular fa-circle-right mr-15"></i>
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
                            <i class="fa-regular fa-circle-right mr-15"></i>
                            Moreover, our dedicated team of faculty members and
                            career counselors are here to guide and support you
                            every step of the way. Whether it's resume building,
                            interview preparation, or career guidance, we are
                            here to ensure that you are well-prepared and
                            confident to embark on your professional journey.
                            <br />                            <i class="fa-regular fa-circle-right mr-15"></i>

                            Remember, your success is our success. We are
                            invested in nurturing your talents, honing your
                            skills, and preparing you to become an
                            industry-ready professional. Take full advantage of
                            the resources and opportunities available at Monark
                            University to shape a bright and fulfilling future.
                            <br />                            <i class="fa-regular fa-circle-right mr-15"></i>
                            I encourage you to actively participate in
                            our training programmes and engage in the placement
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
              responsive={Responsive}
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
      <div id="recruiters" className="student-placement pb-2 pt-4 container">
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
              src="https://monarkuni.ac.in/wp-content/uploads/2022/06/3.Toyoto.png"
              alt=""
            />
          </div>
          <div className="img-box" data-aos="fade-up" data-delay="2">
            <img
              className="img-fluid"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Axis_Bank_logo.svg/2560px-Axis_Bank_logo.svg.png"
              alt=""
            />
          </div>
          <div className="img-box" data-aos="fade-up" data-delay="3">
            <img
              className="img-fluid"
              src="https://www.logo.wine/a/logo/Microsoft_Azure/Microsoft_Azure-Logo.wine.svg"
              alt=""
            />
          </div>
          <div className="img-box" data-aos="fade-up" data-delay="4">
            <img
              className="img-fluid"
              src="https://monarkuni.ac.in/wp-content/uploads/2021/06/snlfinanciallogo-300x53.jpg"
              alt=""
            />
          </div>
          <div className="img-box" data-aos="fade-up" data-delay="5">
            <img
              className="img-fluid"
              src="https://monarkuni.ac.in/wp-content/uploads/2021/06/smc.jpg"
              alt=""
            />
          </div>
          <div className="img-box" data-aos="fade-up" data-delay="6">
            <img
              className="img-fluid"
              src="https://monarkuni.ac.in/wp-content/uploads/2021/06/prakshal-300x81.jpg"
              alt=""
            />
          </div>
          <div className="img-box" data-aos="fade-up" data-delay="7">
            <img
              className="img-fluid"
              src="https://monarkuni.ac.in/wp-content/uploads/2021/06/practo_logo.jpg"
              alt=""
            />
          </div>
          <div className="img-box" data-aos="fade-up" data-delay="8">
            <img
              className="img-fluid"
              src="https://monarkuni.ac.in/wp-content/uploads/2021/06/nj-300x83.jpg"
              alt=""
            />
          </div>
          <div className="img-box" data-aos="fade-up" data-delay="9">
            <img
              className="img-fluid"
              src="https://monarkuni.ac.in/wp-content/uploads/2021/06/microlink-solution-pvt-ltd-11318313387.jpg"
              alt=""
            />
          </div>
          <div className="img-box" data-aos="fade-up" data-delay="10">
            <img
              className="img-fluid"
              src="https://monarkuni.ac.in/wp-content/uploads/2021/06/mazda1.jpg"
              alt=""
            />
          </div>
          <div className="img-box" data-aos="fade-up" data-delay="11">
            <img
              className="img-fluid"
              src="https://monarkuni.ac.in/wp-content/uploads/2021/06/fp.jpg"
              alt=""
            />
          </div>
          <div className="img-box" data-aos="fade-up" data-delay="12">
            <img
              className="img-fluid"
              src="https://monarkuni.ac.in/wp-content/uploads/2021/06/essae-teraoka-ltd-350x120-1.jpg"
              alt=""
            />
          </div>
          <div className="img-box" data-aos="fade-up" data-delay="13">
            <img
              className="img-fluid"
              src="https://monarkuni.ac.in/wp-content/uploads/2021/06/EPOCH.jpg"
              alt=""
            />
          </div>
          <div className="img-box" data-aos="fade-up" data-delay="14">
            <img
              className="img-fluid"
              src="https://monarkuni.ac.in/wp-content/uploads/2021/06/ECLINICAL.jpg"
              alt=""
            />
          </div>
          <div className="img-box" data-aos="fade-up" data-delay="15">
            <img
              className="img-fluid"
              src="https://monarkuni.ac.in/wp-content/uploads/2021/06/bharti-axa-life-insurance-logo2.jpg"
              alt=""
            />
          </div>
          <div className="img-box" data-aos="fade-up" data-delay="16">
            <img
              className="img-fluid"
              src="https://monarkuni.ac.in/wp-content/uploads/2021/06/aricent.jpg"
              alt=""
            />
          </div>
          <div className="img-box" data-aos="fade-up" data-delay="17">
            <img
              className="img-fluid"
              src="https://monarkuni.ac.in/wp-content/uploads/2021/06/925608981-2813930-1_s.jpg"
              alt=""
            />
          </div>
          <div className="img-box" data-aos="fade-up" data-delay="18">
            <img
              className="img-fluid"
              src="https://monarkuni.ac.in/wp-content/uploads/2022/06/2.-BYJUS.png"
              alt=""
            />
          </div>
          <div className="img-box" data-aos="fade-up" data-delay="19">
            <img
              className="img-fluid"
              src="https://monarkuni.ac.in/wp-content/uploads/2022/06/4.-Maruti-Suzuki.jpg"
              alt=""
            />
          </div>
          <div className="img-box" data-aos="fade-up" data-delay="20">
            <img
              className="img-fluid"
              src="https://monarkuni.ac.in/wp-content/uploads/2022/06/5.-torrent-300x93.png"
              alt=""
            />
          </div>
          <div className="img-box" data-aos="fade-up" data-delay="21">
            <img
              className="img-fluid"
              src="https://monarkuni.ac.in/wp-content/uploads/2022/06/6.-Zydus-Cadila-300x225.jpg"
              alt=""
            />
          </div>
          <div className="img-box" data-aos="fade-up" data-delay="22">
            <img
              className="img-fluid"
              src="https://monarkuni.ac.in/wp-content/uploads/2022/06/9.-IBM-300x143.jpg"
              alt=""
            />
          </div>
          <div className="img-box" data-aos="fade-up" data-delay="23">
            <img
              className="img-fluid"
              src="https://monarkuni.ac.in/wp-content/uploads/2022/06/8.-VODAFONE-IMAGE.jpg"
              alt=""
            />
          </div>
          <div className="img-box" data-aos="fade-up" data-delay="24">
            <img
              className="img-fluid"
              src="https://monarkuni.ac.in/wp-content/uploads/2022/06/11.-Jindal-Steel-Power-300x107.png"
              alt=""
            />
          </div>
          <div className="img-box" data-aos="fade-up" data-delay="25">
            <img
              className="img-fluid"
              src="https://monarkuni.ac.in/wp-content/uploads/2022/06/18.-ICICI-2-300x188.jpg"
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
                <h1 className="mt-4">
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
                        src="/img/blog/pic1.png"
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="item px-2 py-3">
                    <div className="alumini-card">
                      <img
                        className="img-fluid"
                        src="/img/blog/pic2.png"
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="item px-2 py-3">
                    <div className="alumini-card">
                      <img
                        className="img-fluid"
                        src="/img/blog/pic3.png"
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
      <div id="placement_record" className="placement-record py-5 ">
        <div className="container">
          <div className="placement-record-heading">
            <div className="three mb-25" data-aos="fade-up">
              <h1 className="">Placement Records</h1>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4 col-md-4 col-12 mt-lg-5 mt-4 h-100">
              <div className="record-box" data-aos="zoom-out">
                <div className="icon-box d-flex flex-column align-items-center">
                  <i class="fa-regular fa-credit-card mb-4"></i>
                  <h4>Placement Record</h4>
                </div>
                <div className="record-text mt-5">
                  <p>
                    <i class="fa-solid fa-right-long"></i>10.50 LPA Highest
                    Package
                  </p>
                  <p>
                    <i class="fa-solid fa-right-long"></i>500 + Annual
                    Placements
                  </p>
                  <p>
                    <i class="fa-solid fa-right-long"></i>350+ Annual Recruiters
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-12 mt-lg-0 mt-4 h-100">
              <div className="record-box" data-aos="zoom-out">
                <div className="icon-box d-flex flex-column align-items-center">
                  <i class="fa-solid fa-dice-d20 mb-4"></i>
                  <h4>Placement Activities</h4>
                </div>
                <div className="record-text mt-5">
                  <p>
                    <i class="fa-solid fa-right-long"></i>100 + Seminars
                  </p>
                  <p>
                    <i class="fa-solid fa-right-long"></i>10 + Startups
                  </p>
                  <p>
                    <i class="fa-solid fa-right-long"></i>15 + MoUs Year
                    2020-2021
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-12 mt-lg-5 mt-4 h-100">
              <div className="record-box" data-aos="zoom-out">
                <div className="icon-box d-flex flex-column align-items-center">
                  <i class="fa-solid fa-clock-rotate-left mb-4"></i>
                  <h4>Year 2022-2023 (Cont.)</h4>
                </div>
                <div className="record-text mt-5">
                  <p>
                    <i class="fa-solid fa-right-long"></i>Number of Eligible
                    Students : 1500 +
                  </p>
                  <p>
                    <i class="fa-solid fa-right-long"></i>
                    Number of Students Placed : 500 +
                  </p>
                  <p>
                    <i class="fa-solid fa-right-long"></i>Number of Companies
                    Participated : 375 +
                  </p>
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
