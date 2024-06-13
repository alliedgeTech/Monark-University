import React, { useEffect, useState } from "react";

import m1 from "../../../public/img/placement/tcs_logo.jpeg"
import Image from "next/image";
import dynamic from "next/dynamic";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import Link from "next/link";
import axios from 'axios';
import Marquee from "react-fast-marquee";

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

        <div  className="training-placement-heading container">
          <div className="three mb-25">
          <h1 className="">Training & Placement Cell</h1>
          </div>
          <div className="row">
            <div className="col-lg-5 col-12">
              <div className="training-img">
                <img
                  className="img-fluid"
                  src="https://monarkuni.ac.in/wp-content/uploads/2021/12/WhatsApp-Image-2021-12-24-at-6.48.09-PM.jpeg"
                  alt=""
                />
              </div>
            </div>
            <div className="col-lg-7 col-12">
              <div className="training-text">
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
                  placement of the students. The Management has stepped forward
                  to frame out long-term strategies to develop and strengthen
                  Institute-Industries Relationship. The campus
                  recruitment/placement process has already commenced. The
                  Institute has also taken initiatives to organize a series of
                  in-house training courses/ workshops/seminars/guest lecturers
                  for imparting extra knowledge and providing exposure,
                  practical knowledge a skill to the student community and
                  faculties.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="latest-news" className="Latest-News container py-4">
      <div className="student-placement-heading d-flex align-items-center justify-content-center mb-20">
        <div className="line"></div>
        <h1 className="text-center mb-0 w-100">Latest News</h1>
        <div className="line"></div>
      </div>

      {loading ? (
        <p>Loading...</p>
      ) : (
        <OwlCarousel
          className="owl-theme px-2"
          loop={true}
          autoPlay={true}
          margin={10}
          dots={true}
          autoplayTimeout={5000}
          responsive={Responsive}
        >
          {latestNews.map((item, index) => (
            <div className="item p-2">
              <div className="news-card p-3">
                <div className="news-head">
                  <div className="news-img-box">
                    <img src={item.image} alt="" />
                    <button className="hover-btn news-hover-btn">
                      <div className="text-div">
                        <small>Read More</small>
                        <small>Read More</small>
                      </div>
                    </button>
                  </div>
                  {/* <div className="news-date-btn mt-2">
                    <small>{item.lastDate}</small>
                  </div> */}
                  <div className="news-info-box mt-4">
                  <h4>{item.title}</h4>
                  <small className="news-description-ellips">{item.description}</small>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </OwlCarousel>
      )}
    </div>
      <div id="recruiters" className="our-recruiters pt-40">
        <div className="our-recruiters-heading">
          <div className="eight">
            <h1 className="text-center">Our Recruiters</h1>

          </div>
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
      </div>
      <div id="placement_record" className="placement-record bg-light py-5 ">
        <div className="container">
        <div className="placement-record-heading">
          <div className="three">
          <h1 className="">Placement Records</h1>

          </div>
          <hr />
        </div>
        <div className="row">
          <div className="col-lg-4 col-md-4 col-12 mt-lg-5 mt-4 h-100">
            <div className="record-box">
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
                  <i class="fa-solid fa-right-long"></i>350+ Annual
                  Recruiters
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-4 col-12 mt-lg-0 mt-4 h-100">
            <div className="record-box">
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
            <div className="record-box">
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
