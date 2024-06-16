import SingleCourse from "@/components/Course";
import Image from "next/image";
import Link from "next/link";
import Courses from "@/data/courses";
import dynamic from "next/dynamic";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import carimg1 from "../../../public/img/course/Avinya_Club.png";
import carimg2 from "../../../public/img/course/go-green.png";
import carimg3 from "../../../public/img/course/Language_club.png";
import carimg4 from "../../../public/img/course/Personality_dev_club.png";
import carimg5 from "../../../public/img/course/sci-gen.png";
import carimg6 from "../../../public/img/course/Smile_Please_EVent.png";
import carimg7 from "../../../public/img/course/social_media_club.png";
import carimg8 from "../../../public/img/course/spiritula_club.png";
import carimg9 from "../../../public/img/course/Work-From-Home.png";
import carimg10 from "../../../public/img/course/yoga_club.png";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useEffect } from "react";

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
    items: 2,
    margin: 10,
  },
  768: {
    items: 3,
    margin: 10,
  },
  1024: {
    items: 4,
    margin: 20,
  },
};

export default function Course() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    let mm = gsap.matchMedia();

    mm.add("(min-width:991px)", () => {
      gsap.from(".student-club h1", {
        opacity: 0,
        scale: 0.5,
        y: 100,
        scrollTrigger: {
          trigger: ".student-club h1",
          scroller: "body",
          start: "top bottom",
          end: "top 90%",
          scrub: 0.2,
        },
      });

      gsap.from(".student-club-info", {
        opacity: 0,
        scale: 0.7,
        x: -100,
        stagger: 0.2,
        scrollTrigger: {
          trigger: ".student-club-info",
          scroller: "body",
          start: "top bottom",
          end: "top 90%",
          scrub: 0.2,
        },
      });
    });
  }, []);

  useEffect(() => {
    const carousel = document.getElementById('carouselExampleIndicators2');
    const buttons = document.querySelectorAll('.carousel-club-buttons button');

    const handleSlide = (event) => {
      buttons.forEach((button) => button.classList.remove('active'));
      buttons[event.to].classList.add('active');
    };

    if (carousel) {
      carousel.addEventListener('slide.bs.carousel', handleSlide);
    }

    return () => {
      if (carousel) {
        carousel.removeEventListener('slide.bs.carousel', handleSlide);
      }
    };
  }, []);

  return (
    <div className="student-club container-fluid py-5  pb-4">
      <div className="container">
        <div className="course-heading-home w-50 mb-40">
          <h1 className="">
            Explore Our <span>Vibrant</span>  Student Clubs and <span>Communities</span>
          </h1>
        </div>

        <div
          id="carouselExampleIndicators2"
          class="carousel carousel2 slide mt-5"
        >
          <div class="carousel-buttons carousel-club-buttons gap-4 flex-wrap mx-auto mb-30 d-flex align-items-center">
            <button
              type="button"
              className="ski-button active"
              data-bs-target="#carouselExampleIndicators2"
              data-bs-slide-to="0"
              aria-current="true"
              aria-label="Slide 1"
            >
              Multi Activiti Club
            </button>
            <button
              type="button"
              className="ski-button"
              data-bs-target="#carouselExampleIndicators2"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            >
              Green Club
            </button>
            <button
              type="button"
              className="ski-button"
              data-bs-target="#carouselExampleIndicators2"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            >
              Spiritual Club
            </button>
            <button
              type="button"
              className="ski-button"
              data-bs-target="#carouselExampleIndicators2"
              data-bs-slide-to="3"
              aria-label="Slide 4"
            >
              Personality Develop Club
            </button>
          </div>

          <div class="carousel-inner py-4 px-3 mt-10">
            <div class="carousel-item item active">
              <div className="student-club-info about-2 w-100 mt-4 h-100">
                <div className="row">
                  <div className="col-lg-4 col-md-12 mt-lg-0 mt-4">
                    <div className="student-club-image">
                      <img
                        className="img-fluid"
                        src="/img/studentclub/multy.jpg"
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="col-lg-8 col-md-12 mt-lg-0 mt-4">
                    <div className="student-club-text">
                      <div className="three mb-20">
                        <h4>01. Multi Activity club</h4>
                      </div>
                      <p>
                        Multi Activity club is to give an opportunity to
                        students to perform their inner talent and participate
                        in number of activities, to build their self-confidence
                        also.This club is organized by the faculty of computer
                        applications of Monark University. In this club students
                        can do so many activities such as acting, dancing,
                        anchoring, writing and many others cultural and
                        curricular activities.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="carousel-item item">
              <div className="student-club-info about-2 w-100 mt-4 h-100">
                <div className="row">
                  <div className="col-lg-4 col-md-12 mt-lg-0 mt-4">
                    <div className="student-club-image">
                      <img
                        className="img-fluid"
                        src="/img/studentclub/go_green.jpg"
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="col-lg-8 col-md-12 mt-lg-0 mt-4">
                    <div className="student-club-text">
                      <div className="three mb-20">
                        <h4>02. Go Green Clubs</h4>
                      </div>
                      <p>
                        Green clubs in colleges will empower students to
                        participate and take up meaningful environmental
                        activities and projects. It is a forum through which
                        students can reach out to influence, engage their
                        parents and neighbourhood communities to promote sound
                        environmental behaviour.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="carousel-item item">
              <div className="student-club-info about-2 w-100 col-lg-4 h-100 mt-4">
                <div className="row">
                  <div className="col-lg-4 col-md-12 mt-lg-0 mt-4">
                    <div className="student-club-image">
                      <img
                        className="img-fluid"
                        src="/img/studentclub/spiritual.jpg"
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="col-lg-8 col-md-12 mt-lg-0 mt-4">
                    <div className="student-club-text">
                      <div className="three mb-20">
                        <h4>03. Spiritual Club</h4>
                      </div>
                      <p>
                        Our institution has established health club and
                        spiritual club in the month of May-2022 for the benefit
                        of students, faculties and staff members of our college
                        based on the scope and guidelines given by our C.E.O
                        Shree Monark Goswami sir of Monark University. The
                        club’s vision is to develop sensitivity among students
                        and faculties in general regarding health, yoga,
                        awareness and maintainance of the healthy life style.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="carousel-item item">
              <div className="student-club-info about-2 w-100 h-100 mt-4">
                <div className="row">
                  <div className="col-lg-4 col-md-12 mt-lg-0 mt-4">
                    <div className="student-club-image">
                      <img
                        className="img-fluid"
                        src="/img/studentclub/devlop.jpg"
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="col-lg-8 col-md-12 mt-lg-0 mt-4">
                    <div className="student-club-text">
                      <div className="three mb-20">
                        <h4>04. Personality Develop Club</h4>
                      </div>
                      <p>
                        This will help club members to gain personal and
                        professional skills in the area of leadership
                        development. To become better leaders in their families
                        or personal lives as they develop skills to better
                        manage their own lives.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
