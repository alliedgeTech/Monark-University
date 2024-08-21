import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "animate.css";
import "aos/dist/aos.css"; // Import AOS CSS
import aos from "aos"; // Import AOS library
import Visionmision from "@/components/Visionmision";

// Import jQuery
if (typeof window !== "undefined") {
  var $ = require("jquery");
  window.$ = window.jQuery = require("jquery");
}

// Dynamically import OwlCarousel without SSR
const OwlCarousel = dynamic(() => import('react-owl-carousel'), { ssr: false });


const Responsive = {
  0: {
    items: 1,
    margin: 5,
  },
  435: {
    items: 1,
    margin: 10,
  },
  768: {
    items: 1,
    margin: 10,
  },
  1024: {
    items: 1,
    margin: 10,
  },
};

export default function About() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    aos.init({
      offset: 50, // Offset (in pixels) from the original trigger point
      duration: 800, // Duration of animation (in milliseconds)
    });
    let mm = gsap.matchMedia();

    mm.add("(min-width:991px)", () => {
      gsap.from(".it-choose-title-box", {
        opacity: 0,
        x: -100,
        delay: "1",
      });
      gsap.from(".it-choose-text", {
        opacity: 0,
        x: -100,
        delay: "1",
      });
      gsap.from(".it-choose-thumb", {
        opacity: 0,
        x: 100,
        delay: "1",
      });
      gsap.from(".it-choose-content", {
        opacity: 0,
        x: 100,
        stagger: 0.5,
        scrollTrigger: {
          trigger: ".it-choose-content",
          scroller: "body",
          start: "top bottom",
          end: "top center",
          scrub: 0.2,
        },
      });
      gsap.from(".it-event-2-area", {
        opacity: 0,
        x: -100,
        stagger: 1,
        scrollTrigger: {
          trigger: ".it-event-2-area",
          scroller: "body",
          start: "top bottom",
          end: "top 10%",
          scrub: 0.2,
        },
      });
      gsap.from(".it-career-item-left", {
        opacity: 0,
        x: -100,
        scale: 0.5,
        scrollTrigger: {
          trigger: ".it-career-item-left",
          scroller: "body",
          start: "top bottom",
          end: "top 65%",
          scrub: 0.2,
        },
      });
      gsap.from(".it-career-item-right", {
        opacity: 0,
        x: 100,
        scale: 0.5,
        scrollTrigger: {
          trigger: ".it-career-item-right",
          scroller: "body",
          start: "top bottom",
          end: "top 65%",
          scrub: 0.2,
        },
      });
    });
  }, []);

 
  return (
    <>
      <div id="presidentmessage">
        <div className="it-sv-details-area mt-50 bg-change py-3">
          <div className="container">
            <div className="three mb-20">
              <h4>President's Message</h4>
            </div>
            <div className="row">
              <div className="col-12">
                <div className="it-sv-details-top-wrap mb-20">
                  <div className="row">
                    <div className="col-md-4">
                      <div
                        className="it-sv-details-top-thumb Left"
                        data-aos="fade-right"
                      >
                        <img
                          src="https://monarkuni.ac.in/wp-content/uploads/2021/06/SMET-175-Copy.jpg"
                          className="img-fluid"
                          alt="President Image"
                        />
                      </div>
                      <p className="text-right mt-4">
                        <strong>Dr. Hasmukhbharthi M. Goswami</strong>
                        <br />
                        President
                        <br />
                        Monark University
                      </p>
                    </div>
                    <div className="col-md-8">
                      <OwlCarousel
                        data-aos="fade-left"
                        className="owl-theme"
                        autoPlay={true}
                        margin={10}
                        loop={true}
                        responsive={Responsive}
                        responsiveRefreshRate={0}
                      >
                        <div className="item">
                          <p>
                            <i class="fa-regular fa-circle-right mr-15"></i>
                            Welcome to Monark University. As a President of
                            Monark University, it gives me immense pleasure to
                            share with you the vision of this University. The
                            University aims at imparting quality education and
                            achieving excellence in all of its academic
                            programmes.
                          </p>
                          <p>
                            <i class="fa-regular fa-circle-right mr-15"></i>
                            In fast changing technological advancements and
                            global economic environment, we planned to strive to
                            bring global perspective to its academic programmes
                            and activities. The focus is on building a strong
                            team of highly qualified faculty members and
                            dedicated supporting staff to meet national and
                            global challenges and deliver world class education
                            using latest technologies and contemporary teaching
                            methodology. Moreover, world-class assessment
                            methods and systems are established by the
                            University for proper implementation of the
                            curriculum and ensuring quality education. In order
                            to enhance the knowledge of the students in several
                            core areas, emphasis is given on wide variety of
                            academic programmes for their multifaceted
                            development.
                          </p>
                        </div>
                        <div className="item">
                          <p>
                            <i class="fa-regular fa-circle-right mr-15"></i>
                            We have huge academic and physical infrastructures
                            and facilities with well equipped labs, workshops,
                            qualified and motivated faculty members who work
                            with commitment and dedication for the cause of
                            education and research. The outcome based course
                            curriculum of our programmes has been designed and
                            developed with the help of national level experts so
                            that desired competency and skills can be inculcated
                            in the students to make them employable.
                          </p>
                          <p>
                            <i class="fa-regular fa-circle-right mr-15"></i>
                            We extend an invitation to you to visit our
                            sprawling campus of our University to know more
                            about the University and its physical and
                            infrastructural facilities. I also take this
                            opportunity to invite the students from all parts of
                            the world to join our academic courses. We will be
                            happy to guide and help you to succeed in your
                            educational journey.
                          </p>
                        </div>
                      </OwlCarousel>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div id="vicepresidentmessage">
          <div className="it-sv-details-area py-4 bg-change2 ">
            <div className="container">
              <div className="three mb-20">
                <h4>Vice President's Message</h4>
              </div>
              <div className="row">
                <div className="col-12">
                  <div className="it-sv-details-top-wrap mb-20">
                    <div className="row flex-row-reverse">
                      <div className="col-md-4">
                        <div
                          className="it-sv-details-top-thumb Left"
                          data-aos="fade-left"
                        >
                          <img
                            src="https://monarkuni.ac.in/wp-content/uploads/2021/07/SMET-163.jpg"
                            className="img-fluid  "
                            alt="President Image"
                          />
                        </div>
                        <p className="text-right mt-4">
                          <strong>Dr. Satishbharthi M. Goswami</strong>
                          <br />
                          Vice President
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
                          responsive={Responsive}
                        >
                          <div className="item">
                            <p>
                              <i class="fa-regular fa-circle-right mr-15"></i>
                              Welcome to Monark University. We are pleased to
                              welcome you to Monark University. As a blooming
                              University, we endeavor to impart best in class
                              education in line with today's market needs. Our
                              principal responsibilities as an educational
                              institution is to nurture today’s minds to be able
                              to create ample opportunities in today’s
                              marketplace. We wish to create a space of
                              knowledge along with all the practical aspects of
                              it. So we have identified all sectors of education
                              so helping students enhance the scope for such
                              education.
                            </p>
                            <div className="msg-strong-box">
                              <strong>
                                “The purpose of education is not to validate
                                ignorance but to overcome it.”
                              </strong>
                            </div>
                          </div>
                          <div className="item">
                            <p>
                              <i class="fa-regular fa-circle-right mr-15"></i>
                              We here at Monark University welcome you to a
                              world to build your career with an institute of
                              repute. We are offering a plethora of courses like
                              basic sciences, commerce and administration as
                              well as applied sciences of engineering,
                              technology, paramedical and other allied areas of
                              higher education. We have a dedicated team of
                              highly trained and professional faculty members
                              who impart best in class education. We have best
                              in class infrastructure including but not limited
                              to classrooms equipped for great teaching-
                              learning experiences, fully equipped laboratories,
                              workshop for practical training. Also we know the
                              importance of curriculum hence we take special
                              care as to who designs our curriculum hence a team
                              with deep subject knowledge as well as experience
                              in industry. Here we focus on overall development
                              of our students as they need to be able to make a
                              place in their respective
                            </p>
                          </div>
                        </OwlCarousel>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div id="provostmessage" className="bg-change">
            <div className="it-sv-details-area py-4">
              <div className="container">
                <div className="three mb-20">
                  <h4>Provost Message</h4>
                </div>
                <div className="row ">
                  <div className="col-12">
                    <div className="it-sv-details-top-wrap mb-20">
                      <div className="row ">
                        <div className="col-md-4">
                          <div
                            className="it-sv-details-top-thumb Left"
                            data-aos="fade-right"
                          >
                            <img
                              src="https://monarkuni.ac.in/wp-content/uploads/2021/06/SMET-218-Copy.jpg"
                              className="img-fluid  "
                              alt="President Image"
                            />
                          </div>
                          <p className="text-right mt-4">
                            <strong>Dr. Jayesh K. Ratnadhariya</strong>
                            <br />
                            Provost
                            <br />
                            Monark University
                          </p>
                        </div>
                        <div className="col-md-8">
                          <OwlCarousel
                            data-aos="fade-left"
                            className="owl-theme"
                            dots={true}
                            loop={true}
                            autoPlay={true}
                            autoplayTimeout={5000}
                            responsive={Responsive}
                          >
                            <div className="item">
                              <p>
                                <i class="fa-regular fa-circle-right mr-15"></i>
                                Greetings from Monark University, Ahmedabad. Our
                                prime duty as a university is to nurture today’s
                                minds to be able to create ample opportunities
                                in today’s marketplace. The purpose of education
                                is not restricted to imparting knowledge but has
                                shifted towards holistic development of the
                                students as needs of the society changed. The
                                new education system has taken the
                                responsibility of bringing forth worthy citizens
                                who are proactive in their approach and have the
                                required dynamism to create a new order.z
                              </p>
                              <p>
                                <i class="fa-regular fa-circle-right mr-15"></i>
                                We as a Monark University are committed to
                                provide a dynamic, supportive and creative
                                environment to the students. Our focus is to
                                provide qualitative and value based education.
                                We aim to provide an educational exploration and
                                strengthen the potential which is innate in
                                every individual.
                              </p>
                            </div>
                            <div className="item">
                              <p>
                                <i class="fa-regular fa-circle-right mr-15"></i>
                                We warmly welcome all the students who choose to
                                join Monark University, a prestigious
                                institution known for its academic excellence
                                and vibrant community. We assure you that your
                                decision to be a part of our university will be
                                one that you will cherish and feel proud of. At
                                Monark University, we are committed to providing
                                a supportive learning environment where you can
                                thrive and achieve your academic goals. We wish
                                you the very best as you embark on this exciting
                                journey with us, confident that you will find
                                success and fulfillment during your time at
                                Monark University.
                              </p>
                              <p className="mt-20">
                                <div className="msg-strong-box">
                                  <strong className="text-black">
                                    “The purpose of education is to make good
                                    human beings with skill and expertise.
                                    Enlightened human beings can be created by
                                    teachers.” – Dr. APJ Abdul Kalam
                                  </strong>
                                </div>
                              </p>
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
        </div>
      </div>
    </>
    
    
  );
}
