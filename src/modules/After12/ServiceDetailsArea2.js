import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { Container, Row, Col, Accordion, Card } from "react-bootstrap";
import Slider from "react-slick";
import After12 from "@/data/after12";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "./ServiceDetailsArea.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Link from "next/link";
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
  const { id } = router.query;

  useEffect(() => {
    
    setIsMounted(true);
    if (id) {
      const foundItem = After12.find((data) => data?.id == id);
      setItem(foundItem);
      if (foundItem) {
        setCourses(foundItem.corse);
      }
      console.log("foundItem", foundItem);
      console.log("foundItemData", foundItem?.corse);
    }
  }, [id]);
  useEffect(()=>{
    aos.init({
      offset: 100, // Offset (in pixels) from the original trigger point
      duration: 700, // Duration of animation (in milliseconds)
    });
  },[onclick])

  

  if (!item) {
    return <div>Loading...</div>;
  }

  return (
    <div className={styles.serviceDetailsArea}>
      <Container>
        

        <div className="mt-100">
          <Accordion defaultActiveKey="0">
            {courses.map((course, index) => (
              <Accordion.Item eventKey={index.toString()} key={course.id}>
                <Accordion.Header>{course.title}</Accordion.Header>
                <Accordion.Body>
                  <Row>
                    <div className={styles.detailsTopWrap}>
                      <div className="row">
                        <div className="col-lg-5 col-12 d-flex align-items-center">
                        <div className={styles.chooseThumbBox} data-aos="fade-right">
                            <div className={styles.chooseThumb}>
                              <img
                                src={course.titleImage}
                                className="img-fluid rounded"
                                alt=""
                              />
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-7 col-12 d-flex align-items-center">
                          <div className="">
                            <h4 className='oswald' data-aos="fade-up">
                                {course.title}
                              </h4>
                              <p> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; {course.titlePera}</p>

                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-12">
                        <h4 className='oswald' data-aos="fade-right">
                            Program Outcomes
                          </h4>
                          <p data-aos="fade-up"> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; {course.programOutcomesPera}</p>
                        </div>
                        <div className="col-12">
                          {isMounted && (
                            <OwlCarousel
                            data-aos="zoom-out"
                className="owl-theme px-2"
          loop={true}
          autoPlay={true}
          margin={10}
          dots={true}
          autoplayTimeout={5000}
          responsive={Responsive}>
            {course.programOutcomesImages?.map((value) => (
                                <div
                                  key={value.id}
                                  className={'item '}
                                >
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
                    <div className=" pb-20">
                      <div className="three" data-aos="fade-right">
                        <h1 className=''>{course.title}</h1>
                      </div>
                      <div className="row px-4">
                        <div className="col-lg-6 col-md-12 mt-4">
                          <div className="deg15">
                          <div data-aos="fade-up" className="service-box deg-15 h-100 p-4">
                            <h5>
                              <span>
                                <i className="fa-sharp fa-light fa-check mr-10"></i>
                              </span>
                              Course Duration
                            </h5>
                            <p>{course.coureDuration}</p>
                          </div>

                          </div>
                        </div>
                        <div className="col-lg-6 col-md-12 mt-4">
                          <div className="deg15">
                          <div data-aos="fade-up" className="service-box deg-15 h-100 p-4">
                            <h5>
                              <span>
                                <i className="fa-sharp fa-light fa-check mr-10"></i>
                              </span>
                              Eligibility Criteria
                            </h5>
                            <p>{course.eligibilityCriteria}</p>
                          </div>

                          </div>
                        </div>
                        <div className="col-lg-6 col-md-12 mt-4">
                          <div className="deg15">
                          <div data-aos="fade-up" className="service-box deg-15 h-100 p-4">
                            <h5>
                              <span>
                                <i className="fa-sharp fa-light fa-check mr-10"></i>
                              </span>
                              Annual Fees
                            </h5>
                            <p>{course.annualFees}</p>
                          </div>

                          </div>
                        </div>
                        <div className="col-lg-6 col-md-12 mt-4">
                          <div className="deg15">
                          <div data-aos="fade-up" className="service-box deg-15 h-100 p-4">
                            <h5>
                              <span>
                                <i className="fa-sharp fa-light fa-check mr-10"></i>
                              </span>
                              From
                            </h5>
                            <Link href="/applynow">Apply now</Link>
                          </div>

                          </div>
                        </div>
                      </div>
                    </div>
                  </Row>
                  <div className={styles.laboratoriesSection}>
                    <div className="three mb-20" data-aos="fade-up">
                      <h1>Laboratories</h1>
                    </div>
                    {course.laboratories?.map((lab, labIndex) => (
                      <>
                        <div key={labIndex} className="up my-5 lab-box px-lg-5 px-4 py-5" data-aos="fade-right">
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
                                <ul style={{listStyle:'none'}} className="service-ul">
                                  {lab.pera.split("/")?.map((line, lineIndex) => (
                                    <li key={lineIndex}><i class="fa-regular fa-hand-point-right mr-10"></i>{line.trim()}</li>
                                  ))}
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </>
                    ))}
                  </div>
                </Accordion.Body>
              </Accordion.Item>
            ))}
          </Accordion>
        </div>
      </Container>
    </div>
  );
}
