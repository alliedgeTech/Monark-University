import Image from "next/image";
import Link from "next/link";
import { gsap } from 'gsap';
import { useEffect } from "react";

export default function MenuItems(props) {

  useEffect(()=>{
    
    let tl=gsap.timeline()
    gsap.from('.nav-link',{
      y:'-50',
      opacity:0,
      stagger:0.1,
    })

  },[])

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
            {/* <div className="it-submenu submenu has-home-img">
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
                      <Link className="it-btn-white-sm" href="/home-3">
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
                      <Link href="/home-5">Home 05</Link>
                    </h4>
                  </div>
                </div>
              </div>
            </div> */}
          </li>

		  <li className="nav-link has-dropdown about-us-dropdown">
    <Link href="/about-us">About MU</Link>
    <ul className="about-us-submenu submenu">
        <li><Link href="/about-us#historicalbackground">Historical Background</Link></li>
        <li><Link href="/about-us#visionandmission">Vision & Mission</Link></li>
        <li><Link href="/about-us#presidentmessage">President's Message</Link></li>
        <li><Link href="/about-us#vicepresidentmessage">Vice President's Message</Link></li>
        <li><Link href="/about-us#provostmessage">Provost Message</Link></li>
        <li><Link href="/about-us#recognitionandapproval">Recognition & Approval</Link></li>
        <li><Link href="/about-us#leadership">Leadership</Link></li>
        <li><Link href="/about-us#officersandauthority">Officers & Authority</Link></li>
        <li><Link href="https://monarkuni.ac.in/wp-content/uploads/2021/06/1_About-MU-Gazatte-Ex.-18-Act-15-of-2021.pdf">Gazette Act-15 of 2021</Link></li>
        <li><Link href="https://monarkuni.ac.in/wp-content/uploads/2021/06/2_About-MU-Education-Department-Notification.pdf">Education Department Notification</Link></li>
        <li><Link href="https://monarkuni.ac.in/wp-content/uploads/2022/07/UGC-LETTER_ORIGINAL-COPY.pdf">UGC Approval Letter</Link></li>
        <li><Link href="/about-us#committeessgrc">Committees SGRC</Link></li>
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
              <li>
                <Link href="/faculty#engineering_Technology">Engineering & Technology</Link>
              </li>
              <li>
                <Link href="/faculty#science">Science</Link>
              </li>
              <li>
                <Link href="/faculty#physiotherapy">Physiotherapy</Link>
              </li>
              <li>
                <Link href="/faculty#management">Management</Link>
              </li>
              <li>
                <Link href="/faculty#commerce">Commerce</Link>
              </li>
              <li>
                <Link href="/faculty#law">Law</Link>
              </li>
              <li>
                <Link href="/faculty#arts">Arts</Link>
              </li>
              <li>
                <Link href="/faculty#computer_application">Computer Application</Link>
              </li>
              <li>
                <Link href="/faculty#nursing">Nursing</Link>
              </li>
              <li>
                <Link href="/faculty#education">Education</Link>
              </li>
              <li>
                <Link href="/faculty#social_work">Social work</Link>
              </li>
              <li>
                <Link href="/faculty#pharmacy">Pharmacy</Link>
              </li>
              <li>
                <Link href="/faculty#ayurveda">Ayurved</Link>
              </li>
              <li>
                <Link href="/faculty#homoeopathy">Homoeopathy</Link>
              </li>
              <li>
                <Link href="/faculty#technology">Information & Communication Technology</Link>
              </li>
              <li>
                <Link href="/faculty#skills">
                  Multi-Skills Development & Training Center
                </Link>
              </li>
            </ul>
          </li>
          <li className="nav-link has-dropdown">
            <Link href="#">Academic</Link>
            <ul className="it-submenu submenu has-megamenu">
              <li>
                <Link href="/course">Academic Calender</Link>
              </li>
              <li>
                <Link href="/course-2">
                  Circuler
                </Link>
              </li>
              <li>
                <Link href="/course/course-one">Syllabus</Link>
              </li>
              <li>
                <Link href="/teacher">Exam Schedule</Link>
              </li>
              <li>
                <Link href="/teacher/teacher-one">Results</Link>
              </li>
              
            </ul>
          </li>
          <li className="nav-link has-dropdown">
            <Link href="/placement">Placement</Link>
            <ul className="it-submenu submenu">
              <li>
                <Link href="/blog">Training & Placement Cell</Link>
              </li>
              <li>
                <Link href="/blog-2">Placement News</Link>
              </li>
              <li>
                <Link href="/blog-sidebar">Placement Records</Link>
              </li>
              <li>
                <Link href="/blog/blog-one">Recruiters</Link>
              </li>
            </ul>
          </li>
          <li className="nav-link has-dropdown">
            <Link href="campus">Campus Life</Link>
            <ul className="it-submenu submenu">
              <li>
                <Link href="/campus#artsandculture">Arts & Culture</Link>
              </li>
              <li>
                <Link href="/campus#campusevent">Campus Event</Link>
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
                <Link href="/campus#workshopsandseminars">Workshops & Seminars</Link>
              </li>
              <li>
                <Link href="/campus#yoga">Yoga Day</Link>
              </li>
              <li>
                <Link href="/campus#teacherday">Teacher's Day</Link>
              </li>
              <li>
                <Link href="/blog/blog-one">Students Club</Link>
              </li>
            </ul>
          </li>
          <li className="nav-link has-dropdown">
            <Link href="blog">Infrastructure</Link>
            <ul className="it-submenu submenu">
              <li>
                <Link href="/blog">Laboratories</Link>
              </li>
              <li>
                <Link href="/blog-2">Library</Link>
              </li>
              <li>
                <Link href="/blog-sidebar">Hostel</Link>
              </li>
              <li>
                <Link href="/blog/blog-one">Auditorium & Conference Hall</Link>
              </li>
              <li>
                <Link href="/blog/blog-one">Sports Ground & Court</Link>
              </li>
            </ul>
          </li>
          <li className="nav-link">
            <Link href="/contact">contact</Link>
          </li>
        </ul>
      )}
    </>
  );
}
