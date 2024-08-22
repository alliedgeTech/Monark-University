import React, { useEffect } from "react";
import { Container, Row, Col, Accordion } from "react-bootstrap";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "./ServiceDetailsArea.module.css";
import 'aos/dist/aos.css'; 
import aos from 'aos'; 
export default function ServiceDetailsArea() {

  useEffect(()=>{
    aos.init({
      offset: 50, // Offset (in pixels) from the original trigger point
      duration: 700, // Duration of animation (in milliseconds)
    });
  })


  return (
    <div className={styles.serviceDetailsArea}>
      <Container>
        <div className={styles.detailsTopWrap}>
          <div className="row">
            <div className="col-lg-4">
            <div className={styles.chooseThumbBox} data-aos='fade-right'>
                <div className={`${styles.chooseThumb} phd-img`}>
                  <img
                    src="https://monarkuni.ac.in/wp-content/uploads/2022/05/infra1-800x725.jpg"
                    className="img-fluid  "
                    alt=""
                  />
                </div>
              </div>
            </div>
            <div className="col-lg-8" data-aos='fade-left'>
            <h3 className="oswald">PH.D.</h3>
              <p>
                We @ Monark University, offering the research oriented degree
                course: Doctor of Philosophy (Ph.D.) which is a doctorate
                programme comprised of an advanced academic work integrated with
                deep research and innovative execution. Aim of the course is to
                develop novel or advanced concepts of existing principle/
                theories/ perspectives for advancement of the society. Research
                is a tool for gaining knowledge and making learning more
                accessible. Since research is an endless journey; We are
                providing a platform for researchers to pursue the Ph.D. degree
                programme and to start-up their research career in their
                respective area of interest/ discipline because without
                research, the society individuals could not possibly survived to
                this point of time.
                
              </p>
            </div>
          </div>
          
          <p className="mt-10" data-aos='fade-up'>We offer Ph.D. programme in Full-Time and Part-Time mode with the
                stipulated time durations mentioned in the University’s Doctor
                of Philosophy (Ph.D.) Ordinances, 2021. This programme is uniquely
                designed in such a manner that effective contributions in the
                various disciplines could be achieved from the researchers
                through the supervision & mentoring supports from the expert
                guides. After successful completion of their research work;
                thesis is to be submitted by the researcher which will be
                further evaluated and then after the degree of Ph.D. will be
                awarded subject to the UGC Ph.D. regulations 2016 & 2018 (1st
                and 2nd amendment) and as amended from time to time.</p>
        </div>

        <div className={styles.detailsTopContent}>
          <Row>
            <Col className="col-left" >
              <div className="phd-div p-3 text-center mb-30" data-aos='fade-up'>
                <h4 className={styles.detailsTitle}>
                  Ordinance Governing the Award of Doctor of Philosophy (Ph.D.)
                  programme, 2021
                </h4>
              </div>
              <h3 data-aos='fade-right'>
                Have any Query Regarding Application & Submission of PhD. ?
              </h3>
              <p data-aos='fade-up'>
                For any query regarding online application & submission, kindly
                communicate to Dr. Tanmaykumar R. Pandit (Research Coordinator)
                at research@monarkuni.ac.in
              </p>
            </Col>
          </Row>
        </div>
        <div className="mt-10">
          <Accordion defaultActiveKey="AdmissionProcess" >
            <Accordion.Item eventKey="0" key="AdmissionProcess" data-aos='fade-right'>
              <Accordion.Header>Admission Process</Accordion.Header>
              <Accordion.Body>
                <p>
                  For any query regarding online application & submission, kindly
                  communicate to Dr. Tanmaykumar R. Pandit (Research Coordinator)
                  at research@monarkuni.ac.in Procedure for Online Application:
                  Monark University invites online applications for admission to
                  Ph.D. programme for the academic year 2023-24. Online application
                  for Ph.D. will be commenced from 2nd April, 2024 and concluded
                  on 30th April, 2024. Tentative date for the entrance test will
                  be declared soon on this website.
                <br />
                Step-1: Interested and eligible candidates shall submit their
                individual’s application form in online mode using the following
                link:
                <a
                className="blue-link"
                  href="https://monark.icrp.in/academic/admission/form_student_registration.aspx"
                >
                  https://monark.icrp.in/academic/admission/form_student_registration.aspx
                </a>
                <br />
                Step-2: Select Ph.D. programme and click on “I Agree” to proceed
                further.
                <br />
                Step-3: Fill all the necessary details (marked with *) and
                upload the supporting documents.
                <br />
                Step-4: After verifying all the filled details and uploading
                supporting documents; click on the “SUBMIT” button.
                <br />
                Step-5: After submitting the application form, candidate will
                have to pay the application processing fees of Rs. 2,000/-
                (Rupees Two Thousand only) in the payment gateway through any
                online mode (UPI/Net Banking/Debit Card/Credit Card) or through
                offline mode-Cheque/DD in favour of “Monark University” (payable
                at Ahmedabad).
                <br />
                IMPORTANT INSTRUCTION: After the successful payment through any
                of the mode, candidates are hereby instructed to take a printout
                of payment reference number of the successful payment
                transaction.
                </p>
                <img
                  src="https://monarkuni.ac.in/wp-content/uploads/2024/04/upi.png"
                  alt="image"
                  ></img>
                <br />
                <p>

                Step-6: Take a print out of application (from the User ID &
                Password as received on your registered e-mail ID). Printed
                application form along with the payment details duly accompanied
                by self-attested copies of certificates of educational
                qualifications etc. to be dispatched by registered/speed post to
                the Registrar at Monark University, At & Post: Vahelal,
                Naroda-Dahegam Road, Ta. Dascroi, Dist. Ahmedabad-382330,
                Gujarat, India.
                </p>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1" key="EligibilityCriteria" data-aos='fade-right'>
              <Accordion.Header>Eligibility Criteria</Accordion.Header>
              <Accordion.Body>
                <p>

                The minimum eligibility criteria for admission to the Ph.D.
                programme at Monark University include:
                <ul className="ps-4">
                  <li>
                    Master’s degree in a relevant discipline with a minimum of
                    55% marks or an equivalent grade.
                  </li>
                  <li>
                    Applicants with an M.Phil. degree or who have qualified
                    NET/SLET/GATE will be preferred.
                  </li>
                  <li>
                    Candidates must clear the university's entrance test and
                    interview process.
                  </li>
                </ul>
                </p>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2" key="FeeStructure" data-aos='fade-right'>
              <Accordion.Header>Fee Structure</Accordion.Header>
              <Accordion.Body>
                <p>

                The fee structure for the Ph.D. programme is as follows:
                <ul className="ps-4">
                  <li>Application Fee: Rs. 2,000/- (non-refundable)</li>
                  <li>Registration Fee: Rs. 10,000/-</li>
                  <li>Tuition Fee: Rs. 50,000/- per semester</li>
                  <li>Thesis Submission Fee: Rs. 20,000/-</li>
                </ul>
                Please note that the fee structure is subject to change as per
                university regulations.
                </p>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="3" key="ImportantDates" data-aos='fade-right'>
              <Accordion.Header>Important Dates</Accordion.Header>
              <Accordion.Body>
                <p>

                <ul className="ps-4">
                  <li>Start of Online Application: 2nd April, 2024</li>
                  <li>End of Online Application: 30th April, 2024</li>
                  <li>Entrance Test Date: To be announced</li>
                  <li>Interview Dates: To be announced</li>
                  <li>Commencement of Classes: To be announced</li>
                </ul>
                </p>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="4" key="ContactInformation" data-aos='fade-right'>
              <Accordion.Header>Contact Information</Accordion.Header>
              <Accordion.Body>
                <p>
                  
                For any further queries or information, please contact:
                <ul className="ps-4">
                  <li>Dr. Tanmaykumar R. Pandit, Research Coordinator</li>
                  <li>Email: research@monarkuni.ac.in</li>
                  <li>Phone: +91-1234567890</li>
                  <li>
                    Address: Monark University, At & Post: Vahelal,
                    Naroda-Dahegam Road, Ta. Dascroi, Dist. Ahmedabad-382330,
                    Gujarat, India.
                  </li>
                </ul>
                </p>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </div>
      </Container>
    </div>
  );
}

export {}
