import Image from "next/image";
import Link from "next/link";
import { gsap } from "gsap";
import { useEffect, useState } from "react";
import Preloader from "../Preloader";
import facultydata from "@/data/faculty";

export default function MenuItems(props) {
  const [showPreloader, setShowPreloader] = useState(false);

  useEffect(() => {
    let tl = gsap.timeline();
    tl.from(".nav-link", {
      y: "-50",
      opacity: 0,
      stagger: 0.1,
    });
  }, []);

  const handleNavigation = (url) => {
    setShowPreloader(true);
    setTimeout(() => {
      setShowPreloader(false);
      window.location.href = url;
    }, 1000);
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
        <ul>
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
        <ul>
          <li className="nav-link p-static">
            <Link href="/">home</Link>
          </li>

          <li className="nav-link has-dropdown about-us-dropdown">
            <Link href="/about-us">About MU</Link>
            <ul className="about-us-submenu submenu">
              <li>
                <Link href="/about-us#historicalbackground">
                  Historical Background
                </Link>
              </li>
              <li>
                <Link href="/about-us#visionandmission">Vision & Mission</Link>
              </li>
              <li>
                <Link href="/about-us#presidentmessage">
                  President's Message
                </Link>
              </li>
              <li>
                <Link href="/about-us#vicepresidentmessage">
                  Vice President's Message
                </Link>
              </li>
              <li>
                <Link href="/about-us#provostmessage">Provost Message</Link>
              </li>
              <li>
                <Link href="/about-us#recognitionandapproval">
                  Recognition & Approval
                </Link>
              </li>
              <li>
                <Link href="/about-us#leadership">Leadership</Link>
              </li>
              <li>
                <Link href="/about-us#officersandauthority">
                  Officers & Authority
                </Link>
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
              <li>
                <Link href="/about-us#committeessgrc">Committees SGRC</Link>
              </li>
            </ul>
          </li>

          <li className="nav-link has-dropdown">
            <Link href="/services">Admission</Link>
            <ul className="it-submenu submenu">
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

          <li className="nav-link has-dropdown">
            <Link href="/faculty">Faculty</Link>
            <ul className="it-submenu submenu has-megamenu">
        {facultydata.map((faculty) => (
          <li key={faculty.id}>
            <Link href={`/faculty?id=${faculty.id}`}>{faculty.name}</Link>
          </li>
        ))}
      </ul>
          </li>
          <li className="nav-link has-dropdown">
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
              <li>
                <Link href="/exam">Exam Schedule</Link>
              </li>
              <li>
                <Link target="_blank" href="https://monark.icrp.in/academic/">
                  Results
                </Link>
              </li>
            </ul>
          </li>
          <li className="nav-link has-dropdown">
            <Link href="/placement">Placement</Link>
            <ul className="it-submenu submenu">
              <li>
                <Link href="/placement#training">
                  Training & Placement Cell
                </Link>
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
                <Link href="/placement#recruiters">Recruiters</Link>
              </li>
            </ul>
          </li>
          <li className="nav-link has-dropdown">
            <Link href="/campus2">Campus Life</Link>
            <ul className="it-submenu submenu">
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
              <li>
                <Link href="/campus#teacherday">Teacher's Day</Link>
              </li>
              <li>
                <Link href="/campus3#studentclub">Students Club</Link>
              </li>
            </ul>
          </li>
          <li className="nav-link has-dropdown">
            <Link href="/infrastructure">Infrastructure</Link>
            <ul className="it-submenu submenu">
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
          <li className="nav-link">
            <Link href="/contact">contact</Link>
          </li>
        </ul>
      )}
      {showPreloader && <Preloader />}
    </>
  );
}
