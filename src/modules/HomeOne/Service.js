import Image from "next/image";
import homecourse from "@/data/coursehomedata"
import after12data from "@/data/after12data"
import Link from "next/link";
import syllabusdata from "@/data/syllabus";
import { useEffect } from "react";
import pgcourse from "@/data/pgcourse";
export default function Service() {

  useEffect(() => {
    const carousel = document.getElementById('carouselExampleIndicators');
    const buttons = document.querySelectorAll('.carousel-buttons button');

    const handleSlide = (event) => {
      buttons.forEach((button) => button.classList.remove('active'));
      buttons[event.to].classList.add('active');
    };

    if (carousel) {
      carousel.addEventListener('slide.bs.carousel', handleSlide);
    }

    return () => {
      if (carousel) {
        carousel.removeEventListener('slide.bs.carousel', handleSlide);
      }
    };
  }, []);

  return (
    <>
      <div className="mu_course pt-4 bg-light">
        <div className="container">
        
          
          <div class="highlight_section container mt-5 py-5">
          <div
            id="carouselExampleIndicators"
            class="carousel carousel1 slide mt-5"
          >
            <div className="row flex-row-reverse">
              <div className="col-lg-6">
              <div className="course-heading-home">
            <h1>Choose from our extensive <span>selection</span> of <span className="blue"> over 100 +</span>  industry-specific programs.</h1>
          </div>
              </div>
              <div className="col-lg-6 d-flex align-items-center mt-lg-0 mt-4">
                <div class="carousel-buttons mr-auto mb-30 d-flex align-items-center">
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
                After 12
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
                Rearch
              </button>
              
            </div>
              </div>
            </div>
            
            <div class="carousel-inner mt-30">
              <div class="carousel-item item active">
              <div className="course-div">
                  <div className=" three mb-20">
                    <h4>Diploma Engineering</h4>
                  </div>
                  <div className="course-links">
                    <div className="row pb-5">
                      {homecourse.map((item,index)=>{
                        return(
                          <>
                      <div className="col-lg-3 col-md-6 col-12 mt-4">
                        <Link href={`/services/service?id=${index+1}`}>
                          <div className="course-link-box px-2 py-3  d-flex align-items-center ">

    <img className="" src={item.img} alt="" />
                            <h6 className="ps-3 mb-0">
                            {item.name}

                            </h6>
                          </div>
                          </Link>
                      </div>
                          </>
                        )
                      })}
                    </div>
                  </div>
                </div>
              </div>
              <div class="carousel-item item">
              <div className="course-div">
                  <div className=" three mb-20">
                    <h4>Bechlor Courses</h4>
                  </div>
                  <div className="course-links">
                    <div className="row pb-5">
                      {after12data.map((item,index)=>{
                        return(
                          <>
                      <div className="col-lg-3 col-md-6 col-12 mt-4">
                        <Link href={`/services-2/ser?id=${item.id}`}>
                          <div className="course-link-box px-2 py-3  d-flex align-items-center ">

    <img className="" src={item.img} alt="" />
                            <h6 className="ps-3 mb-0">
                            {item.name}

                            </h6>
                          </div>
                          </Link>
                      </div>
                          </>
                        )
                      })}
                    </div>
                  </div>
                </div>
                
              </div>
              <div class="carousel-item item">
              <div className="course-div">
                  <div className=" three mb-20">
                    <h4>Bechlor Courses</h4>
                  </div>
                  <div className="course-links">
                    <div className="row pb-5">
                      {pgcourse.map((item,index)=>{
                        return(
                          <>
                      <div className="col-lg-3 col-md-6 col-12 mt-4">
                        <Link href={`/services-2/ser?id=${item.id}`}>
                          <div className="course-link-box px-2 py-3  d-flex align-items-center ">

    <img className="" src={item.img} alt="" />
                            <h6 className="ps-3 mb-0">
                            {item.name}

                            </h6>
                          </div>
                          </Link>
                      </div>
                          </>
                        )
                      })}
                    </div>
                  </div>
                </div>
                
              </div>
              <div class="carousel-item item">
                <div className="course-div pb-3">
                  <div className="three mb-30">
                    <h4>PHD</h4>
                  </div>
                  <div className="row"></div>
                  <div className="col-lg-3 col-md-6 col-12">
                    <Link href="/services-4">
                      <div className="course-link-box px-2 py-3 d-flex align-items-center">
                      <img className="" src="/img/service/book.png" alt="" />
                      <h6 className="ps-3 mb-0">
                              PHD

                              </h6>
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
