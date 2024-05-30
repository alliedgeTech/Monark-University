import Image from "next/image";
import Link from "next/link";

export default function MenuItems(props) {
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
          <li className="p-static">
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
		  <li className="has-dropdown about-us-dropdown">
    <Link href="/about-us">About MU</Link>
    <ul className="about-us-submenu submenu">
        <li><Link href="#historicalbackground">Historical Background</Link></li>
        <li><Link href="#visionandmission">Vision & Mission</Link></li>
        <li><Link href="#presidentmessage">President's Message</Link></li>
        <li><Link href="#vicepresidentmessage">Vice President's Message</Link></li>
        <li><Link href="#provostmessage">Provost Message</Link></li>
        <li><Link href="#recognitionandapproval">Recognition & Approval</Link></li>
        <li><Link href="#leadership">Leadership</Link></li>
        <li><Link href="#officersandauthority">Officers & Authority</Link></li>
        <li><Link href="https://monarkuni.ac.in/wp-content/uploads/2021/06/1_About-MU-Gazatte-Ex.-18-Act-15-of-2021.pdf">Gazette Act-15 of 2021</Link></li>
        <li><Link href="https://monarkuni.ac.in/wp-content/uploads/2021/06/2_About-MU-Education-Department-Notification.pdf">Education Department Notification</Link></li>
        <li><Link href="https://monarkuni.ac.in/wp-content/uploads/2022/07/UGC-LETTER_ORIGINAL-COPY.pdf">UGC Approval Letter</Link></li>
        <li><Link href="#committeessgrc">Committees SGRC</Link></li>
    </ul>
</li>

          <li className="has-dropdown">
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
                <Link href="/services/service-one">Research</Link>
              </li>
            </ul>
          </li>
          <li className="has-dropdown">
            <Link href="#">pages</Link>
            <ul className="it-submenu submenu has-megamenu">
              <li>
                <Link href="/course">Course 01</Link>
              </li>
              <li>
                <Link href="/course-2">Course 02</Link>
              </li>
              <li>
                <Link href="/course/course-one">Course Details</Link>
              </li>
              <li>
                <Link href="/teacher">Teacher</Link>
              </li>
              <li>
                <Link href="/teacher/teacher-one">Teacher Details</Link>
              </li>
              <li>
                <Link href="/price">Price</Link>
              </li>
              <li>
                <Link href="/event">Event</Link>
              </li>
              <li>
                <Link href="/event/event-one">Event Details</Link>
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
            <Link href="blog">blog</Link>
            <ul className="it-submenu submenu">
              <li>
                <Link href="/blog">Blog 01</Link>
              </li>
              <li>
                <Link href="/blog-2">Blog 02</Link>
              </li>
              <li>
                <Link href="/blog-sidebar">Blog Sidebar</Link>
              </li>
              <li>
                <Link href="/blog/blog-one">Blog details</Link>
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
