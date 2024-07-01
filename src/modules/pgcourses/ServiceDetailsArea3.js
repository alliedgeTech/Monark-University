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
      offset: 100, // Offset (in pixels) from the original trigger point
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
        

        <div className='mt-100'>
          <Accordion defaultActiveKey="0">
            {courses.map((course, index) => (
              <Accordion.Item eventKey={index.toString()} key={course.id}>
                <Accordion.Header>{course.title}</Accordion.Header>
                <Accordion.Body>

                  <Row>
                    <div className={styles.detailsTopWrap}>
                      <div className="row">
                        <div className="col-lg-5">
                        <div className={styles.chooseThumbBox} data-aos="fade-right">
                            <div className={styles.chooseThumb}>
                              <img src={course.titleImage} className="img-fluid rounded" alt="" />
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-7" data-aos="fade-left">
                          <h4 className='oswald'>{course.title}</h4>
                          <p>{course.titlePera}</p>
                        </div>
                      </div>

                      <div>
                        <div className="col-left">
                          <h4 className='oswald' data-aos="fade-right">Program Outcomes</h4>
                          <p data-aos="fade-up">{course.programOutcomesPera}</p>
                        </div>
                        <div className="col-right">
                          {isMounted && (
                            <OwlCarousel
                            data-aos='zoom-out'
                            className="owl-theme px-2"
                      loop={true}
                      autoPlay={true}
                      margin={10}
                      dots={true}
                      autoplayTimeout={5000}
                      responsive={Responsive}
                            >

                              {course.programOutcomesImages?.map((value) => (
                                <div key={value.id} className={`item`}>
                                  <img src={value.image} className="img-fluid rounded" alt={value.name} />
                                  <p>{value.name}</p>
                                </div>
                              ))}
                            </OwlCarousel>
                            
                          )}
                        </div>
                      </div>
                    </div>
                    <div className='justify-content-center '>
                    <div className="three" data-aos="fade-right">
                      <h1 className={styles.boxTitle}>{course.title}</h1>
                      </div>
                      <div className="row">
                        <div className="col-lg-6 col-md-12 mt-4">
                        <div data-aos="fade-up" className="service-box h-100 p-4">
                            <h5>
                              <span><i className="fa-sharp fa-light fa-check mr-10"></i></span>
                              Course Duration
                            </h5>
                            <p>{course.coureDuration}</p>
                          </div>
                        </div>
                        <div className="col-lg-6 col-md-12 mt-4">
                        <div data-aos="fade-up" className="service-box h-100 p-4">
                            <h5>
                              <span><i className="fa-sharp fa-light fa-check mr-10"></i></span>
                              Eligibility Criteria
                            </h5>
                            <p>{course.eligibilityCriteria}</p>
                          </div>
                        </div>
                        <div className="col-lg-6 col-md-12 mt-4">
                        <div data-aos="fade-up" className="service-box h-100 p-4">
                            <h5>
                              <span><i className="fa-sharp fa-light fa-check mr-10"></i></span>
                              Annual Fees
                            </h5>
                            <p>{course.annualFees}</p>
                          </div>
                        </div>
                        <div className="col-lg-6 col-md-12 mt-4">
                        <div data-aos="fade-up" className="service-box h-100 p-4">
                            <h5>
                              <span><i className="fa-sharp fa-light fa-check mr-10"></i></span>
                              From
                            </h5>
                            <Link href="/applynow">Apply now</Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Row>
                  <div className={styles.laboratoriesSection}>
                  <div className="three mb-20" data-aos="fade-up">
                    <h1>Laboratories</h1>
                    </div>
                    <div >
                      {course.laboratories?.map((lab, labIndex) => (
                        <>
                        <div key={labIndex} className="about-1 mb-4" data-aos="fade-right">
                          <div className="row">
                            <div className="col-lg-6 col-12 px-3">
                          <img className='img-fluid rounded' src={lab.image} alt={lab.title} />

                            </div>
                            <div className="col-lg-6 col-12 ps-5">
                            <h4 className='mb-20'>{lab.title}</h4>
                            <ul>
                              {lab.pera.split('/')?.map((line, lineIndex) => (
                                <li key={lineIndex}>{line.trim()}</li>
                              ))}
                            </ul>
                            </div>
                          </div>
                        </div></>
                      ))}
                    </div>
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
