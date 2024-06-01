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
    <div className="student-club container py-5">
		<div className="student-club-heading">
			<h2 className="text-center mb-2">Student Club</h2>
			<hr className="mb-4"/>
		</div>
      <OwlCarousel
        className="owl-theme"
        loop={true}
        autoPlay={true}
        autoplayTimeout={5000}
        // dots={true}
        responsive={Responsive}
      >
        <div className="item">
          <Image className="img-fluid" src={carimg1}></Image>
        </div>
        <div className="item">
          <Image className="img-fluid" src={carimg2}></Image>
        </div>
        <div className="item">
          <Image className="img-fluid" src={carimg3}></Image>
        </div>
        <div className="item">
          <Image className="img-fluid" src={carimg4}></Image>
        </div>
        <div className="item">
          <Image className="img-fluid" src={carimg5}></Image>
        </div>
        <div className="item">
          <Image className="img-fluid" src={carimg6}></Image>
        </div>
        <div className="item">
          <Image className="img-fluid" src={carimg7}></Image>
        </div>
        <div className="item">
          <Image className="img-fluid" src={carimg8}></Image>
        </div>
        <div className="item">
          <Image className="img-fluid" src={carimg9}></Image>
        </div>
        <div className="item">
          <Image className="img-fluid" src={carimg10}></Image>
        </div>
      </OwlCarousel>
    </div>
  );
}
