import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { Container, Row, Col, Accordion } from 'react-bootstrap';
import Slider from 'react-slick';
import After12 from '@/data/after12';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import styles from "./ServiceDetailsArea.module.css";

export default function ServiceDetailsArea() {
  const [isMounted, setIsMounted] = useState(false);
  const [item, setItem] = useState(null);
  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    setIsMounted(true);
    if (id) {
      const foundItem = After12.find(data => data?.id == id);
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

  return (
    <div className={styles.serviceDetailsArea}>
      <Container>
        <div className={styles.detailsTopWrap}>
          <Row>
            <Col lg={6} className="text-center">
              <div className={styles.chooseThumbBox}>
                <div className={styles.chooseThumb}>
                  <img src="https://monarkuni.ac.in/wp-content/uploads/2022/05/infra1-800x725.jpg" className="img-fluid rounded" alt="" />
                </div>
              </div>
            </Col>
            <Col lg={6}>
              <h4 className={styles.detailsTitle}>Ph.D.</h4>
              <p>We @ Monark University, offering the research oriented degree course: Doctor of Philosophy (Ph.D.) which is a doctorate program comprised of an advanced academic work integrated with deep research and innovative execution. Aim of the course is to develop novel or advanced concepts of existing principle/ theories/ perspectives for advancement of the society. Research is a tool for gaining knowledge and making learning more accessible.  Since research is an endless journey; We are providing a platform for researchers to pursue the Ph.D. degree program and to start-up their research career in their respective area of interest/ discipline because without research, the society individuals could not possibly survived to this point of time.

We offer Ph.D. program in Full-Time and Part-Time mode with the stipulated time durations mentioned in the University’s Doctor of Philosophy (Ph.D.) Ordinances, 2021. This program is uniquely designed in such a manner that effective contributions in the various disciplines could be achieved from the researchers through the supervision & mentoring supports from the expert guides. After successful completion of their research work; thesis is to be submitted by the researcher which will be further evaluated and then after the degree of Ph.D. will be awarded subject to the UGC Ph.D. regulations 2016 & 2018 (1st and 2nd amendment) and as amended from time to time.</p>
            </Col>
          </Row>
        </div>

        <div className={styles.detailsTopContent}>
          <Row>
            <Col className="col-left">
              <h4 className={styles.detailsTitle}>
Ordinance Governing the Award of Doctor of Philosophy (Ph.D.) Program, 2021</h4>
<h3>Have any Query Regarding Application & Submission of PhD. ?</h3>
              <p>For any query regarding online application & submission, kindly communicate to Dr. Tanmaykumar R. Pandit (Research Coordinator) at research@monarkuni.ac.in</p>
            </Col>
          </Row>
        </div>
        <div className='mt-100'>
          <Accordion defaultActiveKey="AdmissionProcess">
            <Accordion.Item eventKey="0" key="AdmissionProcess">
              <Accordion.Header>Admission Process</Accordion.Header>
              <Accordion.Body>
                For any query regarding online application & submission, kindly communicate to Dr. Tanmaykumar R. Pandit (Research Coordinator) at research@monarkuni.ac.in

Procedure for Online Application:

Monark University invites online applications for admission to Ph.D. program for the academic year 2023-24.
Online application for Ph.D. will be commenced from 2nd April, 2024 and concluded on 30th April, 2024.
Tentative date for the entrance test will be declared soon on this website.
<br />
Step-1: Interested and eligible candidates shall submit their individual’s application form in online mode using the following link:
<a href="https://monark.icrp.in/academic/admission/form_student_registration.aspx
">https://monark.icrp.in/academic/admission/form_student_registration.aspx
</a>
<br />


Step-2: Select Ph.D. program and click on “I Agree” to proceed further.
<br />

Step-3: Fill all the necessary details (marked with *) and upload the supporting documents.
<br />

Step-4: After verifying all the filled details and uploading supporting documents; click on the “SUBMIT” button.
<br />

Step-5: After submitting the application form, candidate will have to pay the application processing fees of Rs. 2,000/- (Rupees Two Thousand only) in the payment gateway through any online mode (UPI/Net Banking/Debit Card/Credit Card) or through offline mode-Cheque/DD in favour of “Monark University” (payable at Ahmedabad).
<br />

IMPORTANT INSTRUCTION: After the successful payment through any of the mode, candidates are hereby instructed to take a printout of payment reference number of the successful payment transaction.

<img src="https://monarkuni.ac.in/wp-content/uploads/2024/04/upi.png" alt="image" ></img>
<br />

Step-6: Take a print out of application (from the User ID & Password as received on your registered e-mail ID). Printed application form along with the payment details duly accompanied by self-attested copies of certificates of educational qualifications etc. to be dispatched by registered/speed post to the Registrar at Monark University, At & Post: Vahelal, Naroda-Dahegam Road, Ta. Dascroi, Dist. Ahmedabad-382330, Gujarat, India.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1" key="EligibilityCriteria">
              <Accordion.Header>Eligibility Criteria</Accordion.Header>
              <Accordion.Body>
                The minimum eligibility criteria for admission to the Ph.D. program at Monark University include:
                <ul>
                  <li>Master’s degree in a relevant discipline with a minimum of 55% marks or an equivalent grade.</li>
                  <li>Applicants with an M.Phil. degree or who have qualified NET/SLET/GATE will be preferred.</li>
                  <li>Candidates must clear the university's entrance test and interview process.</li>
                </ul>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2" key="FeeStructure">
              <Accordion.Header>Fee Structure</Accordion.Header>
              <Accordion.Body>
                The fee structure for the Ph.D. program is as follows:
                <ul>
                  <li>Application Fee: Rs. 2,000/- (non-refundable)</li>
                  <li>Registration Fee: Rs. 10,000/-</li>
                  <li>Tuition Fee: Rs. 50,000/- per semester</li>
                  <li>Thesis Submission Fee: Rs. 20,000/-</li>
                </ul>
                Please note that the fee structure is subject to change as per university regulations.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="3" key="ImportantDates">
              <Accordion.Header>Important Dates</Accordion.Header>
              <Accordion.Body>
                <ul>
                  <li>Start of Online Application: 2nd April, 2024</li>
                  <li>End of Online Application: 30th April, 2024</li>
                  <li>Entrance Test Date: To be announced</li>
                  <li>Interview Dates: To be announced</li>
                  <li>Commencement of Classes: To be announced</li>
                </ul>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="4" key="ContactInformation">
              <Accordion.Header>Contact Information</Accordion.Header>
              <Accordion.Body>
                For any further queries or information, please contact:
                <ul>
                  <li>Dr. Tanmaykumar R. Pandit, Research Coordinator</li>
                  <li>Email: research@monarkuni.ac.in</li>
                  <li>Phone: +91-1234567890</li>
                  <li>Address: Monark University, At & Post: Vahelal, Naroda-Dahegam Road, Ta. Dascroi, Dist. Ahmedabad-382330, Gujarat, India.</li>
                </ul>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </div>
      </Container>
    </div>
  );
}
