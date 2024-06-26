import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { Container, Row, Col } from "react-bootstrap";
import Slider from "react-slick";
import Diploma from "@/data/diploma";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "./ServiceDetailsArea.module.css";
import dynamic from "next/dynamic";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import Link from "next/link";
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
  const router = useRouter();
  const { id } = router.query;
  console.log("iddd", id);
  useEffect(() => {
    aos.init({
      offset: 100, // Offset (in pixels) from the original trigger point
      duration: 700, // Duration of animation (in milliseconds)
    });
    setIsMounted(true);
    if (id) {
      const foundItem = Diploma.find((data) => data?.id == id);
      console.log("foundItem", foundItem);
      setItem(foundItem);
    }
  }, [id]);

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
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  if (!item) {
    return <div>Loading...</div>;
  }

  return (
    <div className={styles.serviceDetailsArea}>
      <Container>
        <div className={styles.detailsTopWrap}>
          <div className="eight" data-aos="fade-up">
        <h1   className='oswald '>{item.title}</h1>
          </div>

          <div className="row mt-40">
            <div className="col-lg-5 col-12">
            <div className={styles.chooseThumbBox} data-aos="fade-right">
                <div className={styles.chooseThumb}>
                  <img
                    src={item.titleImage}
                    className="img-fluid rounded"
                    alt=""
                  />
                </div>
              </div>
            </div>
            <div className="col-lg-7 col-12" data-aos="fade-left">
            <p> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; {item.titlePera}</p>
            </div>
          </div>
          
        </div>

        <div className={styles.detailsTopContent}>
          
          <div>
            <div className="mb-20">
              <div className="three" data-aos="fade-right">
                <h4 className="oswald">Program Outcomes</h4>
              </div>
              <p data-aos="fade-up"> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; {item.programOutcomesPera}</p>
            </div>
            <div className="service-car">
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
                    {item.programOutcomesImages.map((value) => (
                    <div
                      key={value.id}
                      className='item'
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
        <div className="pb-40 pt-10 mt-50 px-4">
          <div className="three" data-aos="fade-right">
            <h1 className={styles.boxTitle}>{item.title}</h1>
          </div>
          <div className="row w-100">
            <div className="col-lg-6 col-md-12 mt-4">
              <div data-aos="fade-up" className="service-box h-100 p-4">
                <h5>
                  <span>
                    <i className="fa-sharp fa-light fa-check mr-10"></i>
                  </span>
                  Course Duration
                </h5>
                <p>{item.coureDuration}</p>
              </div>
            </div>
            <div className="col-lg-6 col-md-12 mt-4">
              <div data-aos="fade-up" className="service-box h-100 p-4">
                <h5>
                  <span>
                    <i className="fa-sharp fa-light fa-check mr-10"></i>
                  </span>
                  Eligibility Criteria
                </h5>
                <p>{item.eligibilityCriteria}</p>
              </div>
            </div>
            <div className="col-lg-6 col-md-12 mt-4">
              <div data-aos="fade-up" className="service-box h-100 p-4">
                <h5>
                  <span>
                    <i className="fa-sharp fa-light fa-check mr-10"></i>
                  </span>
                  Annual Fees
                </h5>
                <p>{item.annualFees}</p>
              </div>
            </div>
            <div className="col-lg-6 col-md-12 mt-4">
              <div data-aos="fade-up" className="service-box h-100 p-4">
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
        <div className="">
          <div className="eight mb-30" data-aos="fade-up">
            <h1 className="">Laboratories</h1>
          </div>
          <div>
            {item.laboratories.map((lab, index) => (
              <div key={index} className="about-1 mb-4" data-aos="fade-right">
                <div className="row">
                            <div className="col-lg-6 col-12 px-3">
                              <img
                                className="img-fluid rounded"
                                src={lab.image}
                                alt={lab.title}
                              />
                            </div>
                            <div className="col-lg-6 col-12 ps-5">
                              <div className="three">
                                <h4 className="mb-20">{lab.title}</h4>

                              </div>
                              <ul className="service-ul">
                                {lab.pera.split("/")?.map((line, lineIndex) => (
                                  <li key={lineIndex}>{line.trim()}</li>
                                ))}
                              </ul>
                            </div>
                          </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
}
