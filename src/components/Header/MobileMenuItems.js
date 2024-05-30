import Link from "next/link";
import { useState } from "react";

export default function MobileMenuItems(props) {
  const { onePage } = props;

  const [home, setHome] = useState(false);
  const [page, setPage] = useState(false);
  const [service, setService] = useState(false);
  const [blog, setBlog] = useState(false);

  const openMobileMenu = (menu) => {
    if (menu === "home") {
      setHome(!home);
      setPage(false);
      setService(false);
      setBlog(false);
    } else if (menu === "page") {
      setHome(false);
      setPage(!page);
      setService(false);
      setBlog(false);
    } else if (menu === "service") {
      setHome(false);
      setPage(false);
      setService(!service);
      setBlog(false);
    } else if (menu === "blog") {
      setHome(false);
      setPage(false);
      setService(false);
      setBlog(!blog);
    }
  };

  const onepageMobileMenuHome = (
    <li className="has-dropdown p-static">
      <Link
        href="#"
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
          <li className=" p-static">
            <Link
              href="#"
              className={home ? "active" : ""}
              onClick={() => {
                openMobileMenu("home");
              }}
            >
              Home
            </Link>
          </li>
          <li className="has-dropdown">
            <Link
              href="/about-us"
              className={service ? "active" : ""}
              onClick={() => {
                openMobileMenu("service");
              }}
            >
              About Mu
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
                <Link href="/services">Historical Background</Link>
              </li>
              <li>
                <Link href="/services/two">President's Message</Link>
              </li>
              <li>
                <Link href="/services/three">Provost Message</Link>
              </li>
              <li>
                <Link href="/services/details">Leadership</Link>
              </li>
              <li>
                <Link href="/services/details">Gazette Act-15 Of 2021</Link>
              </li>
              <li>
                <Link href="/services/details">UGC Approval Letter</Link>
              </li>
              <li>
                <Link href="/services/details">Vision & Mission</Link>
              </li>
              <li>
                <Link href="/services/details">Vice President's Message</Link>
              </li>
              <li>
                <Link href="/services/details">Recognition & Approval</Link>
              </li>
              <li>
                <Link href="/services/details">Officers & Authority</Link>
              </li>
              <li>
                <Link href="/services/details">
                  Education Department Notification
                </Link>
              </li>
              <li>
                <Link href="/services/details">Committees SGRC</Link>
              </li>
            </ul>
          </li>
          <li className="has-dropdown">
            <Link
              href="#"
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
                <Link href="/services/two">After 12th</Link>
              </li>
              <li>
                <Link href="/services/three">Pg Courses</Link>
              </li>
              <li>
                <Link href="/services/details">Research</Link>
              </li>
            </ul>
          </li>
          <li className="has-dropdown">
            <Link
              href="#"
              className={page ? "active" : ""}
              onClick={() => {
                openMobileMenu("page");
              }}
            >
              Pages
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
              <li>
                <Link href="/course">Course 01</Link>
              </li>
              <li>
                <Link href="/course/course-2">Course 02</Link>
              </li>
              <li>
                <Link href="/course/details">Course Details</Link>
              </li>
              <li>
                <Link href="/teacher">Teacher</Link>
              </li>
              <li>
                <Link href="/teacher/details">Teacher Details</Link>
              </li>
              <li>
                <Link href="/price">Price</Link>
              </li>
              <li>
                <Link href="/event">Event</Link>
              </li>
              <li>
                <Link href="/event/details">Event Details</Link>
              </li>
              <li>
                <Link href="/cart">Cart</Link>
              </li>
              <li>
                <Link href="/checkout">Checkout</Link>
              </li>
              <li>
                <Link href="/testimonial">Testimonial</Link>
              </li>
              <li>
                <Link href="/registration/instructor">
                  Instructor Registration
                </Link>
              </li>
              <li>
                <Link href="/registration/student">
                  Student Registration 01
                </Link>
              </li>
              <li>
                <Link href="/registration/student-2">
                  Student Registration 02
                </Link>
              </li>
              <li>
                <Link href="/faq">Faq</Link>
              </li>
              <li>
                <Link href="/signin">Sign IN</Link>
              </li>
              <li>
                <Link href="/signup">Sign UP</Link>
              </li>
              <li>
                <Link href="/404">Error</Link>
              </li>
            </ul>
          </li>
          <li className="has-dropdown">
            <Link
              href="#"
              className={blog ? "active" : ""}
              onClick={() => {
                openMobileMenu("blog");
              }}
            >
              Blog
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
            <ul className={blog ? "it-submenu submenu-open" : "it-submenu"}>
              <li>
                <Link href="/blog">Blog 01</Link>
              </li>
              <li>
                <Link href="/blog/two">Blog 02</Link>
              </li>
              <li>
                <Link href="/blog/sidebar">Blog Sidebar</Link>
              </li>
              <li>
                <Link href="/blog/details">Blog details</Link>
              </li>
            </ul>
          </li>
          <li>
            <Link href="/contact">contact</Link>
          </li>
        </ul>
      )}
    </>
  );
}
