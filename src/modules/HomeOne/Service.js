import Image from "next/image";
import homecourse from "@/data/coursehomedata";
import after12data from "@/data/after12data";
import Link from "next/link";
import syllabusdata from "@/data/syllabus";
import { useEffect } from "react";
import pgcourse from "@/data/pgcourse";
export default function Service() {
  useEffect(() => {
    const carousel = document.getElementById("carouselExampleIndicators");
    const buttons = document.querySelectorAll(".carousel-buttons button");

    const handleSlide = (event) => {
      buttons.forEach((button) => button.classList.remove("active"));
      buttons[event.to].classList.add("active");
    };

    if (carousel) {
      carousel.addEventListener("slide.bs.carousel", handleSlide);
    }

    return () => {
      if (carousel) {
        carousel.removeEventListener("slide.bs.carousel", handleSlide);
      }
    };
  }, []);

  return (
    <>
      <div className="mu_course pt-4">
        <div className="container">
          <div class="highlight_section container mt-5 py-5">
            <div
              id="carouselExampleIndicators"
              class="carousel carousel1 slide mt-5"
            >
              <div className="row flex-row-reverse">
                <div className="col-lg-6">
                  <div className="course-heading-home" data-aos="fade-left">
                    <h1 className="text-white">
                         <span>selection</span> of
                      <span className="blue"> over 100 +</span>
                      industry-specific programmes.
                    </h1>
                  </div>
                </div>
                <div className="col-lg-6 d-flex align-items-center mt-lg-0 mt-4" data-aos="zoom-in-right">
                  <div class="carousel-buttons carousel-orange-buttons mr-auto mb-30 d-flex align-items-center">
                    <button
                      type="button"
                      data-bs-target="#carouselExampleIndicators"
                      data-bs-slide-to="0"
                      class="active"
                      aria-current="true"
                      aria-label="Slide 1"
                    >
                      After 10
                    </button>
                    <button
                      type="button"
                      data-bs-target="#carouselExampleIndicators"
                      data-bs-slide-to="1"
                      aria-label="Slide 2"
                    >
                      UG Course
                    </button>
                    <button
                      type="button"
                      data-bs-target="#carouselExampleIndicators"
                      data-bs-slide-to="2"
                      aria-label="Slide 3"
                    >
                      PG Course
                    </button>
                    <button
                      type="button"
                      data-bs-target="#carouselExampleIndicators"
                      data-bs-slide-to="3"
                      aria-label="Slide 4"
                    >
                      
                      Research
                    </button>
                  </div>
                </div>
              </div>

              <div class="carousel-inner mt-30">
                <div class="carousel-item item active">
                  <div className="course-div">
                    <div className="  mb-20" data-aos='fade-right'>
                      <h3 className="sub-head">Diploma Engineering</h3>
                    </div>
                    <div className="course-links">
                      <div className="row pb-5">
                        {homecourse.map((item, index) => {
                          return (
                            <>
                              <div className="col-lg-3 col-md-6 col-12 mt-4">
                                <Link
                                  href={`/services/service?id=${index + 1}`}
                                >
                                  <div className="course-link-box px-2 py-3  d-flex align-items-center " data-aos="fade-up">
                                    <img className="" src={item.img} alt="" />
                                    <h6 className="ps-3 mb-0">{item.name}</h6>
                                  </div>
                                </Link>
                              </div>
                            </>
                          );
                        })}
                        <div className="col-lg-3 col-md-6 col-12 mt-4">
                          <Link href="/faculty?id=17">
                            <div className="course-link-box px-2 py-3  d-flex align-items-center " data-aos="fade-up">
                              <img
                                className=""
                                src="/img/service/music.png"
                                alt=""
                              />
                              <h6 className="ps-3 mb-0">
                                Music and Production
                              </h6>
                            </div>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="carousel-item item">
                  <div className="course-div">
                    <div className=" mb-20">
                      <h3 className="sub-head">Bachelor Courses</h3>
                    </div>
                    <div className="course-links">
                      <div className="row pb-5">
                        {after12data.map((item, index) => {
                          return (
                            <>
                              <div className="col-lg-3 col-md-6 col-12 mt-4">
                                <Link href={`/services-2/ser?id=${item.id}`}>
                                  <div className="course-link-box px-2 py-3  d-flex alig data-aos='fade-up'n-items-center ">
                                    <img className="" src={item.img} alt="" />
                                    <h6 className="ps-3 mb-0">{item.name}</h6>
                                  </div>
                                </Link>
                              </div>
                            </>
                          );
                        })}
                        <div className="col-lg-3 col-md-6 col-12 mt-4">
                          <Link href="/faculty?id=17">
                            <div className="course-link-box px-2 py-3  d-flex align-items-center " data-aos='fade-up'>
                              <img
                                className=""
                                src="/img/service/music.png"
                                alt=""
                              />
                              <h6 className="ps-3 mb-0">
                                Music and Production
                              </h6>
                            </div>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="carousel-item item">
                  <div className="course-div">
                    <div className="  mb-20" data-aos='fade-right'>
                      <h3 className="sub-head">PG Courses</h3>
                    </div>
                    <div className="course-links">
                      <div className="row pb-5">
                        {pgcourse.map((item, index) => {
                          return (
                            <>
                              <div className="col-lg-3 col-md-6 col-12 mt-4">
                                <Link href={`/services-3/ser?id=${item.id}`}>
                                  <div className="course-link-box px-2 py-3  d-flex align-items-center " data-aos='fade-up'>
                                    <img className="" src={item.img} alt="" />
                                    <h6 className="ps-3 mb-0">{item.name}</h6>
                                  </div>
                                </Link>
                              </div>
                            </>
                          );
                        })}
                        <div className="col-lg-3 col-md-6 col-12 mt-4">
                          <Link href="/faculty?id=17">
                            <div className="course-link-box px-2 py-3  d-flex align-items-center " data-aos='fade-up'>
                              <img
                                className=""
                                src="/img/service/music.png"
                                alt=""
                              />
                              <h6 className="ps-3 mb-0">
                                Music and Production
                              </h6>
                            </div>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="carousel-item item">
                  <div className="course-div pb-3">
                    <div className=" mb-30" data-aos='fade-right'>
                      <h3 className="sub-head">PHD</h3>
                    </div>
                    <div className="row"></div>
                    <div className="col-lg-3 col-md-6 col-12">
                      <Link href="/services-4">
                        <div className="course-link-box px-2 py-3 d-flex align-items-center" data-aos='fade-up'>
                          <img
                            className=""
                            src="/img/service/book.png"
                            alt=""
                          />
                          <h6 className="ps-3 mb-0">PHD</h6>
                        </div>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
