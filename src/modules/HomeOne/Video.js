import { useEffect, useState } from "react";
import ModalVideo from "react-modal-video";
import Image from "next/image";
import Courses from "@/data/courses";
import dynamic from "next/dynamic";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import Link from "next/link";
import lnews1 from "../../../public/img/video/hdfc-1.jpg";
import lnews2 from "../../../public/img/video/PressureJet.jpg";
import lnews3 from "../../../public/img/video/Prodesk.jpg";
import lnews4 from "../../../public/img/video/suzuki.jpg";
import lnews5 from "../../../public/img/video/tcs_job_new.png";
import lnews6 from "../../../public/img/video/torrent.jpg";
import styles from "yet-another-react-lightbox/styles.css";
import ApiService from "@/service/service";
import { apiPaths } from "@/service/apipath";

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
export default function Video() {
  const [isOpen, setIsOpen] = useState(false);
  const [latestNews,setLatestNews] = useState([])
  const openModal = () => setIsOpen(!isOpen);

  useEffect(() => {
    fetchData();
  }, []);


  const fetchData = async () => {
    try {
      const result = await ApiService({
        method: 'GET',
        endpoint: apiPaths.latestNews,
      });
      // setLatestNews(result);
      console.log(result)
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  // const requestOptions = {
  //   method: "GET",
  //   redirect: "follow"
  // };
  
  // fetch("https://mu-l50w.onrender.com/home-updates", requestOptions)
  //   .then((response) => response.text())
  //   .then((result) => console.log(result))
  //   .catch((error) => console.error(error));

  return (
	
	
    <div  className="Latest-News container-fluid py-4">
      <div className="student-placement-heading eight mb-20">
				<h1 className="text-center mb-0 w-100">Latest News</h1>
			</div>

      <OwlCarousel
        className="owl-theme px-2"
        loop={true}
        autoPlay={true}
		margin={10}
        autoplayTimeout={5000}
        responsive={Responsive}
      >
        {latestNews?.map((items , id) => (
          <div className="item" id={id}>
          <div className="latest-box d-flex flex-column">
            <div className="latest-img">
              <img className="img-fluid" src={items?.image}></img>
            </div>
            <div className="latest-text mt-5">
              <button
                className="text-white"
                style={{borderRadius:'5px', background: "#054B81", padding: "3px 8px" }}
              >
                <small>{items?.title}</small>
              </button>
				<p className="mt-3">{items?.description}</p>
            </div>
          </div>
        </div>
        ))
        }
        {/* <div className="item">
          <div className="latest-box d-flex flex-column">
            <div className="latest-img">
              <Image className="img-fluid" src={lnews2}></Image>
            </div>
            <div className="latest-text pt-5">
              <button
                className="text-white"
                style={{borderRadius:'5px', background: "#054B81", padding: "3px 8px" }}
              >
                <small>Placement news</small>
              </button>
			  <h5 className="mt-3">Placement Opportunity From HDFC for Any Graduate Students || for B.com/BBA/BA/BE & MBA</h5>
			  <p>Dear Students, Greetings from Prodesk IT, This message is regarding the campus recruitment drive at…</p>

            </div>
          </div>
        </div>
        <div className="item">
          <div className="latest-box d-flex flex-column">
            <div className="latest-img">
              <Image className="img-fluid" src={lnews3}></Image>
            </div>
            <div className="latest-text pt-5">
              <button
                className="text-white"
                style={{borderRadius:'5px', background: "#054B81", padding: "3px 8px" }}
              >
                <small>Placement news</small>
              </button>
			  <h5 className="mt-3">Placement Opportunity From HDFC for Any Graduate Students || for B.com/BBA/BA/BE & MBA</h5>
			  <p>Dear Students, Greetings from Prodesk IT, This message is regarding the campus recruitment drive at…</p>

            </div>
          </div>
        </div>
        <div className="item">
          <div className="latest-box d-flex flex-column">
            <div className="latest-img">
              <Image className="img-fluid" src={lnews4}></Image>
            </div>
            <div className="latest-text pt-5">
              <button
                className="text-white"
                style={{borderRadius:'5px', background: "#054B81", padding: "3px 8px" }}
              >
                <small>Placement news</small>
              </button>
			  <h5 className="mt-3">Placement Opportunity From HDFC for Any Graduate Students || for B.com/BBA/BA/BE & MBA</h5>
			  <p>Dear Students, Greetings from Prodesk IT, This message is regarding the campus recruitment drive at…</p>

            </div>
          </div>
        </div>
        <div className="item">
          <div className="latest-box d-flex flex-column">
            <div className="latest-img">
              <Image className="img-fluid" src={lnews5}></Image>
            </div>
            <div className="latest-text pt-5">
              <button
                className="text-white"
                style={{borderRadius:'5px', background: "#054B81", padding: "3px 8px" }}
              >
                <small>Placement news</small>
              </button>
			  <h5 className="mt-3">Placement Opportunity From HDFC for Any Graduate Students || for B.com/BBA/BA/BE & MBA</h5>
			  <p>Dear Students, Greetings from Prodesk IT, This message is regarding the campus recruitment drive at…</p>

            </div>
          </div>
        </div>
        <div className="item">
          <div className="latest-box d-flex flex-column">
            <div className="latest-img">
              <Image className="img-fluid" src={lnews6}></Image>
            </div>
            <div className="latest-text pt-5">
              <button
                className="text-white"
                style={{borderRadius:'5px', background: "#054B81", padding: "3px 8px" }}
              >
                <small>Placement news</small>
              </button>
			  <h5 className="mt-3">Placement Opportunity From HDFC for Any Graduate Students || for B.com/BBA/BA/BE & MBA</h5>
			  <p>Dear Students, Greetings from Prodesk IT, This message is regarding the campus recruitment drive at…</p>

            </div>
          </div>
        </div> */}
      </OwlCarousel>
    </div>
  );
}
