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
  return (
    <div className="student-club bg-light container-fluid py-5">
		<div className="student-club-heading">
			<h2 className="text-center">Student Club</h2>
		</div>
    <div className="student-club-main">
      <div className="row">
        <div className="student-club-info col-lg-8 mt-lg-0 mt-4 h-100">
          <div className="student-club-image">
          <img className="img-fluid" src="/img/studentclub/multy.jpg" alt="" />
          </div>
          <div className="student-club-text">
          <h4>Multi Activity club</h4>
          <p>Green clubs in colleges will empower students to participate and take up meaningful environmental activities and projects.</p>
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
          <p>Green clubs in colleges will empower students to participate and take up meaningful environmental activities and projects.</p>
          </div>
        </div>
        <div className="student-club-info col-lg-8 h-100 mt-4">
          <div className="student-club-image">
          <img className="img-fluid" src="/img/studentclub/devlop.jpg" alt="" />
          </div>
          <div className="student-club-text">
          <h4>Personality Develop Club</h4>
          <p>Green clubs in colleges will empower students to participate and take up meaningful environmental activities and projects.</p>
          </div>
        </div>
      </div>
      <div className="student-club-btn text-center">
        <button className="mt-5">Know More</button>
      </div>
    </div>
    </div>
  );
}
