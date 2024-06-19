import facultydata from "@/data/faculty";
import Link from "next/link";
import { useState } from "react";

export default function MobileMenuItems(props) {
  const { onePage } = props;

  const [home, setHome] = useState(false);
  const [page, setPage] = useState(false);
  const [service, setService] = useState(false);
  const [blog, setBlog] = useState(false);
  const [about, setAbout] = useState(false);
  const [academic, setAcademic] = useState(false);
  const [placement, setPlacement] = useState(false);
  const [campuslife, setCampuslife] = useState(false);

  const openMobileMenu = (menu) => {
    if (menu === "home") {
      setHome(!home);
      setPage(false);
      setService(false);
      setBlog(false);
      setAbout(false);
    } else if (menu === "page") {
      setHome(false);
      setPage(!page);
      setService(false);
      setBlog(false);
      setAbout(false);
    } else if (menu === "service") {
      setHome(false);
      setPage(false);
      setService(!service);
      setBlog(false);
      setAbout(false);
    } else if (menu === "blog") {
      setHome(false);
      setPage(false);
      setService(false);
      setBlog(!blog);
      setAbout(false);
    }
    else if(menu=="about"){
      setHome(false);
      setPage(false);
      setService(false);
      setBlog(false);
      setAbout(!about);
    }
    else if(menu=="academic"){
      setHome(false);
      setPage(false);
      setService(false);
      setBlog(false);
      setAcademic(!academic);
    }
    else if(menu=="placement"){
      setHome(false);
      setPage(false);
      setService(false);
      setBlog(false);
      setPlacement(!placement);
    }
    else if(menu=="campuslife"){
      setHome(false);
      setPage(false);
      setService(false);
      setBlog(false);
      setCampuslife(!campuslife);
    }
  };

  const onepageMobileMenuHome = (
    <li className="has-dropdown p-static">
      <Link
        href="/"
        className={home ? "active" : ""}
        onClick={() => {
          openMobileMenu("home");
        }}
      >
        Home
        <svg
          width="9"
          height="7"
          viewBox="0 0 9 7"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M4.47035e-08 2.145L1.275 0.854999L4.5 4.08L7.725 0.854999L9 2.145L4.5 6.645L4.47035e-08 2.145Z"
            fill="#0E2A46"
          ></path>
        </svg>
      </Link>
    </li>
  );

  return (
    <>
      {onePage == "onepage1" ? (
        <ul>
          {onepageMobileMenuHome}
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
          {onepageMobileMenuHome}
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
          {onepageMobileMenuHome}
          <li>
            <Link href="#it-about">About Us</Link>
          </li>
          <li>
            <Link href="#it-course">Course</Link>
          </li>
          <li>
            <Link href="#it-service">Services</Link>
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
          {onepageMobileMenuHome}
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
          {onepageMobileMenuHome}
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
        <ul>
          {/* Home */}
          <li className=" p-static nav-link2">
            <Link
              href="/"
              className={home ? "active" : ""}
              onClick={() => {
                openMobileMenu("home");
              }}
            >
              Home
            </Link>
          </li>
          {/* About MU */}
          <li className="has-dropdown nav-link2">
            <Link
              href=""
              className={about ? "active" : ""}
              onClick={() => {
                openMobileMenu("about");
              }}
            >
              About MU
              <svg
                width="9"
                height="7"
                viewBox="0 0 9 7"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4.47035e-08 2.145L1.275 0.854999L4.5 4.08L7.725 0.854999L9 2.145L4.5 6.645L4.47035e-08 2.145Z"
                  fill="#0E2A46"
                ></path>
              </svg>
            </Link>
            <ul className={about ? "it-submenu submenu-open" : "it-submenu"}>
              <li>
                <Link href="/about-us#historicalbackground">Historical Background</Link>
              </li>
              <li>
                <Link href="/about-us#visionandmission">Vision & Mission</Link>
              </li>
              <li>
                <Link href="/about-us#presidentmessage">President's Message</Link>
              </li>
              <li>
                <Link href="/about-us#presidentmessage">Vice President's Message</Link>
              </li>
              <li>
                <Link href="/about-us#provostmessage">Provost Message</Link>
              </li>
              <li>
                <Link href="/about-us#leadership">Leadership</Link>
              </li>
              <li>
                <Link target="_blank" href="https://monarkuni.ac.in/wp-content/uploads/2021/06/1_About-MU-Gazatte-Ex.-18-Act-15-of-2021.pdf">Gazette Act-15 Of 2021</Link>
              </li>
              <li>
                <Link target="_blank" href="https://monarkuni.ac.in/wp-content/uploads/2022/07/UGC-LETTER_ORIGINAL-COPY.pdf">UGC Approval Letter</Link>
              </li>
              
              
              <li>
                <Link href="/about-us#recognitionandapproval">Recognition & Approval</Link>
              </li>
              <li>
                <Link href="/about-us#officersandauthority">Officers & Authority</Link>
              </li>
              <li>
                <Link target="_blank" href="https://monarkuni.ac.in/wp-content/uploads/2021/06/2_About-MU-Education-Department-Notification.pdf">
                  Education Department Notification
                </Link>
              </li>
              <li>
                <Link href="/about-us#committeessgrc">Committees1</Link>
              </li>
              <li>
                <Link href="/about-us#committeessgrc">Committees2</Link>
              </li>
              <li>
                <Link href="/about-us#committeessgrc">Committees3</Link>
              </li>
            </ul>
          </li>
          {/* Admission */}
          <li className="has-dropdown nav-link2">
            <Link
              href=""
              className={service ? "active" : ""}
              onClick={() => {
                openMobileMenu("service");
              }}
            >
              Admission
              <svg
                width="9"
                height="7"
                viewBox="0 0 9 7"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4.47035e-08 2.145L1.275 0.854999L4.5 4.08L7.725 0.854999L9 2.145L4.5 6.645L4.47035e-08 2.145Z"
                  fill="#0E2A46"
                ></path>
              </svg>
            </Link>
            <ul className={service ? "it-submenu submenu-open" : "it-submenu"}>
              <li>
                <Link href="/services">After 10th</Link>
              </li>
              <li>
                <Link href="/services-2">After 12th</Link>
              </li>
              <li>
                <Link href="/services-3">Pg Courses</Link>
              </li>
              <li>
                <Link href="/services-4">Research</Link>
              </li>
            </ul>
          </li>
          {/* Faculty */}
          <li className="has-dropdown nav-link2">
            <Link
              href=""
              className={page ? "active" : ""}
              onClick={() => {
                openMobileMenu("page");
              }}
            >
              Faculty
              <svg
                width="9"
                height="7"
                viewBox="0 0 9 7"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4.47035e-08 2.145L1.275 0.854999L4.5 4.08L7.725 0.854999L9 2.145L4.5 6.645L4.47035e-08 2.145Z"
                  fill="#0E2A46"
                ></path>
              </svg>
            </Link>
            <ul className={page ? "it-submenu submenu-open" : "it-submenu"}>
            {facultydata.map((faculty) => (
          <li key={faculty.id}>
            <Link href={`/faculty?id=${faculty.id}`}>{faculty.name}</Link>
          </li>
        ))}
              
            </ul>
          </li>
          {/* Academic */}
          <li className="has-dropdown nav-link2">
            <Link
              href=""
              className={academic ? "active" : ""}
              onClick={() => {
                openMobileMenu("academic");
              }}
            >
              Academic  
              <svg
                width="9"
                height="7"
                viewBox="0 0 9 7"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4.47035e-08 2.145L1.275 0.854999L4.5 4.08L7.725 0.854999L9 2.145L4.5 6.645L4.47035e-08 2.145Z"
                  fill="#0E2A46"
                ></path>
              </svg>
            </Link>
            <ul className={academic ? "it-submenu submenu-open" : "it-submenu"}>
              <li>
                <Link href="/calander">Academic Calender</Link>
              </li>
              <li>
                <Link href="/circular">Circuler</Link>
              </li>
              <li>
                <Link href="/syllabus">Syllabus</Link>
              </li>
              <li>
                <Link href="/exam">Exam Schedule</Link>
              </li>
              <li>
                <Link target="_blank" href="https://monark.icrp.in/academic/">Results</Link>
              </li>
            </ul>
          </li>
          {/*Placement  */}
          <li className="has-dropdown nav-link2">
            <Link
              href=""
              className={placement ? "active" : ""}
              onClick={() => {
                openMobileMenu("placement");
              }}
            >
              Placement
              <svg
                width="9"
                height="7"
                viewBox="0 0 9 7"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4.47035e-08 2.145L1.275 0.854999L4.5 4.08L7.725 0.854999L9 2.145L4.5 6.645L4.47035e-08 2.145Z"
                  fill="#0E2A46"
                ></path>
              </svg>
            </Link>
            <ul className={placement ? "it-submenu submenu-open" : "it-submenu"}>
              <li>
                <Link href="/placement#training">Training & Placement Cell</Link>
              </li>
              <li>
                <Link href="/placement#latest-news">Placement News</Link>
              </li>
              <li>
                <Link href="/placement#placement_record">Placement Records</Link>
              </li>
              <li>
                <Link href="/placement#recruiters">Recruiters</Link>
              </li>
            </ul>
          </li>
          {/* Campus Life */}
          <li className="has-dropdown nav-link2">
            <Link
              href=""
              className={campuslife ? "active" : ""}
              onClick={() => {
                openMobileMenu("campuslife");
              }}
            >
              Campus Life
              <svg
                width="9"
                height="7"
                viewBox="0 0 9 7"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4.47035e-08 2.145L1.275 0.854999L4.5 4.08L7.725 0.854999L9 2.145L4.5 6.645L4.47035e-08 2.145Z"
                  fill="#0E2A46"
                ></path>
              </svg>
            </Link>
            <ul className={campuslife ? "it-submenu submenu-open" : "it-submenu"}>
              <li>
                <Link href="/campus2#artsandculture">Arts & Culture</Link>
              </li>
              <li>
                <Link href="/campus2#campusevent">Campus Event</Link>
              </li>
              <li>
                <Link href="/campus#nss">Community Services</Link>
              </li>
              <li>
                <Link href="/campus#ncc">NCC</Link>
              </li>
              <li>
                <Link href="/campus#sports">Sports</Link>
              </li>
              <li>
                <Link href="/campus2#workshopsandseminars">
                  Workshops & Seminars
                </Link>
              </li>
              <li>
                <Link href="/campus2#yoga">Yoga Day</Link>
              </li>
              {/* <li>
                <Link href="/campus#teacherday">Teacher's Day</Link>
              </li> */}
              <li>
                <Link href="/campus3#studentclub">Students Club</Link>
              </li>
            </ul>
          </li>
          {/* Infrastructure */}
          <li className="has-dropdown nav-link2">
            <Link
              href=""
              className={blog ? "active" : ""}
              onClick={() => {
                openMobileMenu("blog");
              }}
            >
              Infrastructure
              <svg
                width="9"
                height="7"
                viewBox="0 0 9 7"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4.47035e-08 2.145L1.275 0.854999L4.5 4.08L7.725 0.854999L9 2.145L4.5 6.645L4.47035e-08 2.145Z"
                  fill="#0E2A46"
                ></path>
              </svg>
            </Link>
            <ul className={blog ? "it-submenu  submenu-open" : "it-submenu"}>
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
          <li className="nav-link2">
            <Link href="/contact">contact</Link>
          </li>
        </ul>
      )}
    </>
  );
}