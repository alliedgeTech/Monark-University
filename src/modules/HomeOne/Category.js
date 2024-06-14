import SingleCategory from "@/components/Service";
import Image from "next/image";
import Link from "next/link";
import Services from "@/data/services";
import { useEffect } from "react";
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

export default function Category() {

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    let mm=gsap.matchMedia()

    mm.add("(min-width:991px)",()=>{
      gsap.from(".best-university-heading h1", {
        opacity:0,
        scale:0.5,
        y:100,
        scrollTrigger: {
          trigger: ".best-university-heading h1",
          scroller:'body',
          start: "top bottom",
          end: "top 70%",
          scrub: 0.2,
        },
      });
  
      gsap.from(".best-carousel",{
        opacity:0,
        x:'-50%',
        scrollTrigger: {
          trigger: ".best-carousel",
          scroller:'body',
          start: "top bottom",
          end: "top 80%",
          scrub: 0.2,
        },
      })
      gsap.from(".best-university-text p",{
        opacity:0,
        x:'50%',
        stagger:0.4,
        scrollTrigger: {
          trigger: ".best-university-text p",
          scroller:'body',
          start: "top bottom",
          end: "top 70%",
          scrub: 0.2,
        },
      })
    })


  }, []);

  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);



  return (
    <div className="best-university container-fluid">
      
      <div className="row">
        <div className="col-lg-5">
          {/* <div className="best-carousel">
            <div
              id="carouselExampleFade"
              className="carousel slide carousel-fade"
            >
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img
                    src="/img/category/best-2.jpg"
                    className="d-block w-100"
                    alt="..."
                  />
                </div>
                <div className="carousel-item">
                  <img
                    src="/img/category/best-3.jpg"
                    className="d-block w-100"
                    alt="..."
                  />
                </div>
                <div className="carousel-item">
                  <img
                    src="/img/category/best-7.jpg"
                    className="d-block w-100"
                    alt="..."
                  />
                </div>
                <div className="carousel-item">
                  <img
                    src="/img/category/best-4.jpg"
                    className="d-block w-100"
                    alt="..."
                  />
                </div>
              </div>
              <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#carouselExampleFade"
                data-bs-slide="prev"
              >
                <span
                  className="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button
                className="carousel-control-next"
                type="button"
                data-bs-target="#carouselExampleFade"
                data-bs-slide="next"
              >
                <span
                  className="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          </div> */}
          <div className="row p-relative">
            <div className="shape-img">
                <img className="img-fluid" src="/img/choose/shape-1-3.png" alt="" />
            </div>
            <div className="col">
              <div className="img-box">
                <img className="img-fluid" src="/img/category/best-1.jpg" alt="" />
              </div>
            </div>
            <div className="col">
              <div className="img-box img-box-2">
                <img className="img-fluid" src="/img/category/best-3.jpg" alt="" />
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-7">
        <div className="best-university-heading three mb-3">
        <h1>Best University <span>in Ahmedabad</span> </h1>
      </div>
          <div className="best-university-text">
            <p className="mb-2">
              Monark University is one of the leading University in Gujarat,
              which provides Quality Education to the aspirants. Various study
              options available at Monark University and required Infrastructure
              for the courses makes the University on of the best option for
              study.
            </p>
            <p>
              Monark University is committed to engaging with the key issues of
              our natural and social worlds through outstanding teaching,
              research, and scholarship.
            </p>
            {/* <div className="shopcategory-loadmore">
            <Link href="/about-us">
          <button><div className="text-div"><p>More Details</p><p className='dec-p'>More Details</p></div></button>
        </Link>
        </div> */}
        <Link  href="/about-us">
        {/* <button className="btn hover-btn">
          <div className="text-div">
          <small>More details</small>
          <small>More details</small>
            
          </div>
        </button> */}
        <button className="circle-btn d-flex align-items-center justify-content-between px-3">
          <div className="btn-text">
            More Details
          </div>
          <div className="btn-icon d-flex align-items-center justify-content-center">
          <i class="fa-solid fa-arrow-right"></i>
          </div>
        </button>
        </Link>

            
          </div>
        </div>
      </div>
    </div>
  );
}
