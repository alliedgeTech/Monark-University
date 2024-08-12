import React, { use, useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { Container, Row, Col, Accordion, Card } from 'react-bootstrap';
import Slider from 'react-slick';
import pgcourses from '@/data/pgcourses';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "./ServiceDetailsArea.module.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Link from 'next/link';
import dynamic from "next/dynamic";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import 'aos/dist/aos.css'; 
import aos from 'aos'; 
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

export default function ServiceDetailsArea() {
  const [isMounted, setIsMounted] = useState(false);
  const [item, setItem] = useState(null);
  const [courses, setCourses] = useState([]);
  const router = useRouter();
  const [activeTab, setActiveTab] = useState(0); // State for active tab index

  const { id } = router.query;

  useEffect(() => {
    setIsMounted(true);
    if (id) {
      const foundItem = pgcourses.find(data => data?.id == id);
      setItem(foundItem);
      if (foundItem) {
        setCourses(foundItem.corse);
      }
      console.log('foundItem', foundItem);
      console.log('foundItemData', foundItem?.corse);
    }
  }, [id]);
  useEffect(()=>{
    aos.init({
      offset: 50, // Offset (in pixels) from the original trigger point
      duration: 700, // Duration of animation (in milliseconds)
    });
  })

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  };

  if (!item) {
    return <div>Loading...</div>;
  }

  return (
    <div className={styles.serviceDetailsArea}>
      <Container>
        

      <div className="mt-20">
          <nav>
            <div className="mb-3 d-flex flex-wrap" id="nav-tab" role="tablist">
              {courses.map((course, index) => (
                <button
                  key={index}
                  className={` navigation-link btn-31 ms-3 mt-2 ${index === activeTab ? 'active2' : ''}`}
                  onClick={() => setActiveTab(index)}
                  id={`nav-${index}`}
                  data-bs-toggle="tab"
                  data-bs-target={`#nav-${course.id}`}
                  type="button"
                  role="tab"
                  aria-controls={`nav-${course.id}`}
                  aria-selected={index === activeTab ? 'true' : 'false'}
                >

                  <span className="text-container">
                  <span class="text">
                    {course.title}
                  </span>
                  </span>
                </button>
              ))}
            </div>
          </nav>

          <div className="tab-content p-3 bg-light">
            {courses.map((course, index) => (
              <div
                key={index}
                className={`tab-pane fade ${index === activeTab ? 'show active' : ''}`}
                id={`nav-${course.id}`}
                role="tabpanel"
                aria-labelledby={`nav-${index}`}
              >
                <Row>
                  <div className={styles.detailsTopWrap}>
                    <div className="row">
                      <div className="col-lg-5 col-12 d-flex align-items-center">
                        <div className={styles.chooseThumbBox}>
                          <div className={styles.chooseThumb} data-aos='fade-right'>
                            <img
                              src={course.titleImage}
                              className="img-fluid rounded"
                              alt=""
                            />
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-7 col-12 d-flex align-items-center">
                        <div>
                          <h4  data-aos='fade-up'className="oswald">{course.title}</h4>
                          <p data-aos='fade-left'>{course.titlePera}</p>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-12">
                        <h4 className="oswald" data-aos='fade-up'>Program Outcomes</h4>
                        <p data-aos='fade-right'>{course.programOutcomesPera}</p>
                        {isMounted && (
  <OwlCarousel
    data-aos="zoom-out"
    className="owl-theme px-2"
    loop={true}
    autoPlay={true}
    margin={10}
    dots={true}
    autoplayTimeout={5000}
    responsive={Responsive}
  >
    {course.programOutcomesImages?.map((value) => (
      <div key={value.id} className={"item "}>
        <img
          src={value.image}
          className="img-fluid "
          alt={value.name}
        />
        <p>{value.name}</p>
      </div>
    ))}
  </OwlCarousel>
)}
                      </div>
                    </div>
                  </div>
                  <div className="pb-20">
                    <div className="three">
                      <h1>{course.title}</h1>
                    </div>
                    <div className="row px-4">
                      <div className="col-lg-6 col-md-12 mt-4" data-aos='fade-up'>
                        <div className='deg15'>
                          <div className="service-box px-5 py-4 deg-15">
                            <h5>Course Duration</h5>
                            <p>{course.coureDuration}</p>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-12 mt-4" data-aos='fade-up'>
                        <div className='deg15'>
                          <div className="service-box px-5 py-4 deg-15">
                            <h5>Eligibility Criteria</h5>
                            <p>{course.eligibilityCriteria}</p>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-12 mt-4" data-aos='fade-up'>
                        <div className='deg15'>
                          <div className="service-box px-5 py-4 deg-15">
                            <h5>Annual Fees</h5>
                            <p>{course.annualFees}</p>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-12 mt-4" data-aos='fade-up'>
                        <div className='deg15'>
                          <div className="service-box px-5 py-4 deg-15">
                            <h5>Apply Now</h5>
                            <Link href="/applynow">Apply now</Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Row>
                <div className={styles.laboratoriesSection}>
                  <div className="three mb-20" data-aos='fade-right'>
                    <h1>Laboratories</h1>
                  </div>
                  {course.laboratories?.map((lab, labIndex) => (
                    <div
                    data-aos='zoom-in'
                      key={labIndex}
                      className="up my-5 lab-box px-lg-5 px-4 py-5"
                    >
                      <div className="row">
                        <div className="col-lg-5 col-12 d-flex align-items-center px-3">
                          <img
                            className="img-fluid rounded"
                            src={lab.image}
                            alt={lab.title}
                          />
                        </div>
                        <div className="col-lg-7 col-12 mt-lg-0 mt-4 d-flex align-items-center ps-5">
                          <div className="lab-white w-100">
                            <h4 className="mb-20">{lab.title}</h4>
                            <ul className="service-ul">
                              {lab.pera.split("/").map((line, lineIndex) => (
                                <li key={lineIndex}>
                                  <i className="fa-regular fa-hand-point-right mr-10"></i>
                                  {line.trim()}
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
}
