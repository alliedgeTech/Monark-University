import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { Container, Row, Col } from "react-bootstrap";
import Slider from "react-slick";
import Diploma from "@/data/diploma";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "./ServiceDetailsArea.module.css";

export default function ServiceDetailsArea() {
  const [isMounted, setIsMounted] = useState(false);
  const [item, setItem] = useState(null);
  const router = useRouter();
  const { id } = router.query;
  console.log("iddd", id);
  useEffect(() => {
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
          <Row>
            <Col lg={6} className="text-center">
              <div className={styles.chooseThumbBox}>
                <div className={styles.chooseThumb}>
                  <img
                    src={item.titleImage}
                    className="img-fluid rounded"
                    alt=""
                  />
                </div>
              </div>
            </Col>
            <Col lg={6}>
              <h4 className={styles.detailsTitle}>{item.title}</h4>
              <p>{item.titlePera}</p>
            </Col>
          </Row>
        </div>

        <div className={styles.detailsTopContent}>
          <Row>
            <Col className="col-left">
              <h4 className={styles.detailsTitle}>Program Outcomes</h4>
              <p>{item.programOutcomesPera}</p>
            </Col>
            <Col className="col-right">
              {isMounted && (
                <Slider {...settings}>
                  {item.programOutcomesImages.map((value) => (
                    <div
                      key={value.id}
                      className={`service-car-items px-3 ${styles.programOutcomeItem}`}
                    >
                      <img
                        src={value.image}
                        className="img-fluid rounded"
                        alt={value.name}
                      />
                      <p>{value.name}</p>
                    </div>
                  ))}
                </Slider>
              )}
            </Col>
          </Row>
        </div>
        <div className="pb-40 pt-10 mt-50 px-4 bg-light">
          <div className="three">
            <h1 className={styles.boxTitle}>{item.title}</h1>
          </div>
          <div className="row w-100">
            <div className="col-lg-6 col-md-12 mt-4">
              <div className="service-box h-100 p-4">
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
              <div className="service-box h-100 p-4">
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
              <div className="service-box h-100 p-4">
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
              <div className="service-box h-100 p-4">
                <h5>
                  <span>
                    <i className="fa-sharp fa-light fa-check mr-10"></i>
                  </span>
                  From
                </h5>
                <p>Apply now</p>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.laboratoriesSection}>
          <h2 className={styles.laboratoriesTitle}>Laboratories</h2>
          <div>
            {item.laboratories.map((lab, index) => (
              <div key={index} className="about-1 mb-4">
                <div className="row">
                            <div className="col-lg-6 col-12 px-3">
                              <img
                                className="img-fluid rounded"
                                src={lab.image}
                                alt={lab.title}
                              />
                            </div>
                            <div className="col-lg-6 col-12 ps-5">
                              <h4 className="mb-20">{lab.title}</h4>
                              <ul>
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
