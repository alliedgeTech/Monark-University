import Image from "next/image";
import Link from "next/link";
import { gsap } from "gsap";
import { useEffect, useState } from "react";
import Preloader from "../Preloader";
import facultydata from "@/data/faculty";
import axios from "axios";

const ApiService = async ({ method, endpoint, data }) => {
  try {
    const response = await axios({
      method,
      url: endpoint,
      data,
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};

export default function MenuItems(props) {
  const [showPreloader, setShowPreloader] = useState(false);
  const [campusData, setCampusData] = useState([]);

  
  

  useEffect(() => {
   

    const fetchData = async () => {
      try {
        const result = await ApiService({
          method: "GET",
          endpoint: `https://monarkuniversitybacked.onrender.com/Campus`,
        });
        setCampusData(result);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
    
  }, []);

  

  // Check localStorage for dark mode preference
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    // Only access localStorage on the client side
    if (typeof window !== "undefined") {
      const savedDarkMode = localStorage.getItem("darkMode");
      if (savedDarkMode) {
        setDarkMode(savedDarkMode === "true");
      }
    }
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("darkmode");
    } else {
      document.body.classList.remove("darkmode");
    }
    // Save dark mode preference to localStorage
    if (typeof window !== "undefined") {
      localStorage.setItem("darkMode", darkMode);
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const { onePage } = props;

  const onepageHomeMenu = (
    <li className="has-dropdown p-static">
      <Link href="/">home</Link>
      <div className="it-submenu submenu has-home-img">
        <div className="row gx-6 row-cols-1 row-cols-md-2 row-cols-lg-2 row-cols-xl-5">
          <div className="col home-img">
            <div className="home-img-thumb mb-15">
              <Image
                src="/img/menu/home-1.jpg"
                alt=""
                width={238}
                height={298}
              />
              <div className="home-img-btn">
                <Link className="it-btn-white-sm" href="/">
                  Multi Page
                </Link>
                <Link className="it-btn-white-sm" href="/home1-onepage">
                  One Page
                </Link>
              </div>
            </div>
            <div className="home-img-content text-center">
              <h4 className="home-img-title">
                <Link href="/">Home 01</Link>
              </h4>
            </div>
          </div>
          <div className="col home-img">
            <div className="home-img-thumb mb-15">
              <Image
                src="/img/menu/home-2.jpg"
                alt=""
                width={238}
                height={298}
              />
              <div className="home-img-btn">
                <Link className="it-btn-white-sm" href="/home-2">
                  Multi Page
                </Link>
                <Link className="it-btn-white-sm" href="/home2-onepage">
                  One Page
                </Link>
              </div>
            </div>
            <div className="home-img-content text-center">
              <h4 className="home-img-title">
                <Link href="/home-2">Home 02</Link>
              </h4>
            </div>
          </div>
          <div className="col home-img">
            <div className="home-img-thumb mb-15">
              <Image
                src="/img/menu/home-3.jpg"
                alt=""
                width={238}
                height={298}
              />
              <div className="home-img-btn">
                <Link className="it-btn-white-sm" href="home-3">
                  Multi Page
                </Link>
                <Link className="it-btn-white-sm" href="/home3-onepage">
                  One Page
                </Link>
              </div>
            </div>
            <div className="home-img-content text-center">
              <h4 className="home-img-title">
                <Link href="/home-3">Home 03</Link>
              </h4>
            </div>
          </div>
          <div className="col home-img">
            <div className="home-img-thumb mb-15">
              <Image
                src="/img/menu/home-4.jpg"
                alt=""
                width={238}
                height={298}
              />
              <div className="home-img-btn">
                <Link className="it-btn-white-sm" href="/home-4">
                  Multi Page
                </Link>
                <Link className="it-btn-white-sm" href="/home4-onepage">
                  One Page
                </Link>
              </div>
            </div>
            <div className="home-img-content text-center">
              <h4 className="home-img-title">
                <Link href="/home-4">Home 04</Link>
              </h4>
            </div>
          </div>
          <div className="col home-img">
            <div className="home-img-thumb mb-15">
              <Image
                src="/img/menu/home-5.jpg"
                alt=""
                width={238}
                height={298}
              />
              <div className="home-img-btn">
                <Link className="it-btn-white-sm" href="/home-5">
                  Multi Page
                </Link>
                <Link className="it-btn-white-sm" href="/home5-onepage">
                  One Page
                </Link>
              </div>
            </div>
            <div className="home-img-content text-center">
              <h4 className="home-img-title">
                <Link href="home-5">Home 05</Link>
              </h4>
            </div>
          </div>
        </div>
      </div>
    </li>
  );

  return (
    <>
      {onePage == "onepage1" ? (
        <ul className="d-flex align-items-center">
          {onepageHomeMenu}
          <li>
            <Link href="#it-course">Course</Link>
          </li>
          <li>
            <Link href="#it-about">About Us</Link>
          </li>
          <li>
            <Link href="#it-team">Team</Link>
          </li>
          <li>
            <Link href="#it-blog">Blog</Link>
          </li>
          <li>
            <Link href="#it-newsletter">Contact</Link>
          </li>
        </ul>
      ) : onePage == "onepage2" ? (
        <ul>
          {onepageHomeMenu}
          <li>
            <Link href="#it-about">About Us</Link>
          </li>
          <li>
            <Link href="#it-course">Course</Link>
          </li>
          <li>
            <Link href="#it-contact">Contact</Link>
          </li>
          <li>
            <Link href="#it-event">Event</Link>
          </li>
          <li>
            <Link href="#it-blog">Blog</Link>
          </li>
        </ul>
      ) : onePage == "onepage3" ? (
        <ul>
          {onepageHomeMenu}
          <li>
            <Link href="#it-about">About Us</Link>
          </li>
          <li>
            <Link href="#it-course">Course</Link>
          </li>
          <li>
            <Link href="#it-service">Admission</Link>
          </li>
          <li>
            <Link href="#it-team">Team</Link>
          </li>
          <li>
            <Link href="#it-blog">Blog</Link>
          </li>
        </ul>
      ) : onePage == "onepage4" ? (
        <ul>
          {onepageHomeMenu}
          <li>
            <Link href="#it-about">About Us</Link>
          </li>
          <li>
            <Link href="#it-course">Course</Link>
          </li>
          <li>
            <Link href="#it-testimonial">Testimonial</Link>
          </li>
          <li>
            <Link href="#it-event">Event</Link>
          </li>
          <li>
            <Link href="#it-blog">Blog</Link>
          </li>
        </ul>
      ) : onePage == "onepage5" ? (
        <ul>
          {onepageHomeMenu}
          <li>
            <Link href="#it-about">About Us</Link>
          </li>
          <li>
            <Link href="#it-testimonial">Testimonial</Link>
          </li>
          <li>
            <Link href="#it-contact">Contact</Link>
          </li>
          <li>
            <Link href="#it-gallery">Gallery</Link>
          </li>
          <li>
            <Link href="#it-blog">Blog</Link>
          </li>
        </ul>
      ) : (
        <ul className="d-flex align-items-center navbar-links">
          <li className="nav-link main-link p-static">
            <Link href="/">home</Link>
          </li>

          <li className="nav-link main-link has-dropdown about-us-dropdown">
            <Link href="#">About MU</Link>
            <ul className="about-us-submenu submenu">
              <li>
                <Link href="/about-us2">
                  Historical Background
                </Link>
              </li>
              <li>
                <Link href="/about-us4#visionandmission">Vision & Mission</Link>
              </li>
              <li>
                <Link href="/about-us3#presidentmessage">
                  President's Message
                </Link>
              </li>
              
              <li>
                <Link href="/about-us#recognitionandapproval">
                  Recognition & Approval
                </Link>
              </li>
              <li>
                <Link href="/about-us3#vicepresidentmessage">
                  Vice President's Message
                </Link>
              </li>
              
              
              
              <li>
                <Link href="/about-us#officersandauthority">
                  Officers & Authority
                </Link>
              </li>
              <li>
                <Link href="/about-us3#provostmessage">Provost Message</Link>
              </li>
              
              <li>
                <Link
                  target="_blank"
                  href="https://monarkuni.ac.in/wp-content/uploads/2021/06/1_About-MU-Gazatte-Ex.-18-Act-15-of-2021.pdf"
                >
                  Gazette Act-15 of 2021
                </Link>
              </li>
              <li>
                <Link href="/about-us#leadership">Leadership</Link>
              </li>
              <li>
                <Link
                  target="_blank"
                  href="https://monarkuni.ac.in/wp-content/uploads/2021/06/2_About-MU-Education-Department-Notification.pdf"
                >
                  Education Department Notification
                </Link>
              </li>
              <li>
                <Link
                  target="_blank"
                  href="https://monarkuni.ac.in/wp-content/uploads/2022/07/UGC-LETTER_ORIGINAL-COPY.pdf"
                >
                  UGC Approval Letter
                </Link>
              </li>
              <li className="has-dropdown comiti-drop">
                <Link href="/about-us#committeessgrc">Committees SGRC</Link>
                <ul className="it-submenu submenu comiti-submenu">
                  <li>
                    <Link href="/">Committees1</Link>
                  </li>
                  <li>
                    <Link href="/">Committees1</Link>
                  </li>
                  <li>
                    <Link href="/">Committees1</Link>
                  </li>
                </ul>
              </li>
            </ul>
          </li>

          <li className="nav-link main-link has-dropdown">
            <Link href="/services">Admission</Link>
            <ul className="it-submenu submenu">
              <li>
                <Link href="/services">After 10th</Link>
              </li>
              <li>
                <Link href="/services-2">UG Course</Link>
              </li>
              <li>
                <Link href="/services-3">Pg Courses</Link>
              </li>
              <li>
                <Link href="/services-4">Research</Link>
              </li>
            </ul>
          </li>

          <li className="nav-link main-link has-dropdown">
            <Link href="/faculty">Faculty</Link>
            <ul className="it-submenu submenu has-megamenu">
        {facultydata.map((faculty) => (
          <li key={faculty.id}>
            <Link href={`/faculty?id=${faculty.id}`}>{faculty.name}</Link>
          </li>
        ))}
      </ul>
          </li>
          <li className="nav-link main-link has-dropdown">
            <Link href="/calander">Academic</Link>
            <ul className="it-submenu submenu">
              <li>
                <Link href="/calander">Academic Calender</Link>
              </li>
              <li>
                <Link href="/circular">Circular</Link>
              </li>
              <li>
                <Link href="/syllabus">Syllabus</Link>
              </li>
              {/* <li>
                <Link href="/exam">Exam Schedule</Link>
              </li> */}
              <li>
                <Link target="_blank" href="https://monark.icrp.in/academic/">
                  Results
                </Link>
              </li>
            </ul>
          </li>
          <li className="nav-link main-link has-dropdown">
            <Link href="/placement">Placement</Link>
            <ul className="it-submenu submenu">
            <li>
                <Link href="/placement#training">
                  Training & Placement Cell
                </Link>
              </li>
              <li>
                <Link href="/placement#recruiters">Recruiters</Link>
              </li>
              <li>
                <Link href="/placement#latest-news">Placement News</Link>
              </li>
              <li>
                <Link href="/placement#placement_record">
                  Placement Records
                </Link>
              </li>
              <li>
                <Link href="/register">
                Career Now
                </Link>
              </li>
              
            </ul>
          </li>
          <li className="nav-link main-link has-dropdown">
            <Link href="#">Campus Life</Link>
            <ul className="it-submenu submenu">
            {campusData.map((campus,index) => (
      <li key={index}>
        <Link href={`/campus2?id=${campus._id}`}>{campus.title}</Link>
      </li>
    ))}
              <li>
                <Link href="/campus3#studentclub">Students Club</Link>
              </li>
            </ul>
          </li>
          <li className="nav-link main-link has-dropdown">
            <Link href="/infrastructure">Infrastructure</Link>
            <ul className="it-submenu submenu bigger-submenu">
              <li>
                <Link href="/infrastructure#lab">Laboratories</Link>
              </li>
              <li>
                <Link href="/infrastructure2#library">Library</Link>
              </li>
              <li>
                <Link href="/infrastructure2#hostel">Hostel</Link>
              </li>
              <li>
                <Link href="/infrastructure#ac">
                  Auditorium & Conference Hall
                </Link>
              </li>
              <li>
                <Link href="/infrastructure#ground">Sports Ground & Court</Link>
              </li>
            </ul>
          </li>
          <li className="nav-link main-link">
            <Link href="/contact">contact</Link>
          </li>
          <button className="dark-btn" onClick={toggleDarkMode}>
        <i className="fa-solid fa-moon"></i>
      </button>
        </ul>
        
      )}
      {showPreloader && <Preloader />}
    </>
  );
}
