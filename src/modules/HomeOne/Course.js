import SingleCourse from "@/components/Course";
import Image from "next/image";
import Link from "next/link";
import Courses from "@/data/courses";
import dynamic from "next/dynamic";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import carimg1 from "../../../public/img/course/Avinya_Club.png"
import carimg2 from "../../../public/img/course/go-green.png"
import carimg3 from "../../../public/img/course/Language_club.png"
import carimg4 from "../../../public/img/course/Personality_dev_club.png"
import carimg5 from "../../../public/img/course/sci-gen.png"
import carimg6 from "../../../public/img/course/Smile_Please_EVent.png"
import carimg7 from "../../../public/img/course/social_media_club.png"
import carimg8 from "../../../public/img/course/spiritula_club.png"
import carimg9 from "../../../public/img/course/Work-From-Home.png"
import carimg10 from "../../../public/img/course/yoga_club.png"
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
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
    let mm=gsap.matchMedia()

    mm.add("(min-width:991px)",()=>{
      gsap.from(".student-club h1", {
        opacity:0,
        scale:0.5,
        y:100,
        scrollTrigger: {
          trigger: ".student-club h1",
          scroller:'body',
          start: "top bottom",
          end: "top 70%",
          scrub: 0.2,
        },
      });

      gsap.from(".student-club-info", {
        opacity:0,
        scale:0.7,
        x:-100,
        stagger:0.2,
        scrollTrigger: {
          trigger: ".student-club-info",
          scroller:'body',
          start: "top bottom",
          end: "top 60%",
          scrub: 0.2,
        },
      });
  
      
      
    })


  }, []);

  return (
    <div className="student-club container-fluid py-2  pb-4">
		<div className="student-club one">
				<h1 className="mb-0 w-100">Student Clubs</h1>
			</div>
    <div className="student-club-main">
      <div className="row">
        <div className="student-club-info col-lg-8 mt-lg-0 mt-4 h-100">
          <div className="student-club-image">
          <img className="img-fluid" src="/img/studentclub/multy.jpg" alt="" />
          </div>
          <div className="student-club-text">
          <h4>Multi Activity club</h4>
          <p>Multi Activity club is to give an opportunity to students to perform their inner talent and participate in number of activities, to build their self-confidence also.</p>
          </div>
        </div>
        <div className="student-club-info col-lg-4 mt-lg-0 mt-4 h-100">
          <div className="student-club-image">
          <img className="img-fluid" src="/img/studentclub/go_green.jpg" alt="" />
          </div>
          <div className="student-club-text">
          <h4>Go Green Clubs</h4>
          <p>Green clubs in colleges will empower students to participate and take up meaningful environmental activities and projects.</p>
          </div>
        </div>
        <div className="student-club-info col-lg-4 h-100 mt-4">
          <div className="student-club-image">
          <img className="img-fluid" src="/img/studentclub/spiritual.jpg" alt="" />
          </div>
          <div className="student-club-text">
          <h4>Spiritual Club</h4>
          <p>Our institution has established health club and spiritual club in the month of May-2022 for the benefit of students, faculties and staff members of our college based on the scope and guidelines given by our C.E.O Shree Monark Goswami sir of Monark University.</p>
          </div>
        </div>
        <div className="student-club-info col-lg-8 h-100 mt-4">
          <div className="student-club-image">
          <img className="img-fluid" src="/img/studentclub/devlop.jpg" alt="" />
          </div>
          <div className="student-club-text">
          <h4>Personality Develop Club</h4>
          <p>This will help club members to gain personal and professional skills in the area of leadership development.</p>
          </div>
        </div>
      </div>
      <div className="student-club-btn text-center">
        <Link href="/campus#studentclub">
        <button className="mt-5 hover-btn">
          <div className="text-div">
            <small>Know More</small>
            <small>Know More</small>
          </div>
        </button>

        </Link>
      </div>
    </div>
    </div>
  );
}
