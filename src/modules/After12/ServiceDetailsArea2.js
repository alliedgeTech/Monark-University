import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { Container, Row, Col, Accordion, Card } from 'react-bootstrap';
import Slider from 'react-slick';
import After12 from '@/data/after12';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import styles from "./ServiceDetailsArea.module.css";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function ServiceDetailsArea() {
  const [isMounted, setIsMounted] = useState(false);
  const [item, setItem] = useState(null);
  const [courses, setCourses] = useState([]);
  const router = useRouter();
  const { id } = router.query;
  
  useEffect(() => {
    setIsMounted(true);
    if (id) {
      const foundItem = After12.find(data => data?.id == id);
      setItem(foundItem);
      if (foundItem) {
        setCourses(foundItem.corse);
      }
      console.log('foundItem', foundItem);
      console.log('foundItemData', foundItem?.corse);
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
        <div className={styles.detailsTopWrap}>
          <Row>
            <Col lg={6} className="text-center">
              <div className={styles.chooseThumbBox}>
                <div className={styles.chooseThumb}>
                  <img src={item.titleImage} className="img-fluid rounded" alt="" />
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
                  {item.programOutcomesImages?.map((value) => (
                    <div key={value.id} className={styles.programOutcomeItem}>
                      <img src={value.image} className="img-fluid rounded" alt={value.name} />
                      <p>{value.name}</p>
                    </div>
                  ))}
                </Slider>
              )}
            </Col>
          </Row>
        </div>
        
        <div className='mt-100'>
          <Accordion defaultActiveKey="0">
            {courses.map((course, index) => (
              <Accordion.Item eventKey={index.toString()} key={course.id}>
                <Accordion.Header>{course.title}</Accordion.Header>
                <Accordion.Body>
                  <h5>{course.title}</h5>
                  <p>{course.titlePera}</p>
                  <Row>
                    <Col lg={6}>
                      <h5>Course Duration</h5>
                      <p>{course.coureDuration}</p>
                    </Col>
                    <Col lg={6}>
                      <h5>Eligibility Criteria</h5>
                      <p>{course.eligibilityCriteria}</p>
                    </Col>
                    <Col lg={6}>
                      <h5>Annual Fees</h5>
                      <p>{course.annualFees}</p>
                    </Col>
                  </Row>
                  <div className={styles.laboratoriesSection}>
                    <h2 className={styles.laboratoriesTitle}>Laboratories</h2>
                    <div className={styles.laboratoriesContainer}>
                      {course.laboratories?.map((lab, labIndex) => (
                        <div key={labIndex} className={styles.laboratoryCard}>
                          <img src={lab.image} alt={lab.title} />
                          <div className={styles.laboratoryCardContent}>
                            <h4>{lab.title}</h4>
                            <ul>
                              {lab.pera.split('/')?.map((line, lineIndex) => (
                                <li key={lineIndex}>{line.trim()}</li>
                              ))}
                            </ul>
                          </div>
                        </div>
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
