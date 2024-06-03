import SingleCategory from "@/components/Service";
import Image from "next/image";
import Link from "next/link";
import Services from "@/data/services";
import { useEffect } from "react";
import best1 from "../../../public/img/category/best-2.jpg";
import best2 from "../../../public/img/category/best-3.jpg";
import best3 from "../../../public/img/category/best-7.jpg";
import best4 from "../../../public/img/category/best-4.jpg";

export default function Category() {
  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);
  return (
    <div className="best-university container-fluid">
      <div className="best-university-heading">
        <h1>- Best University in Ahmedabad</h1>
      </div>
      <div className="row">
        <div className="col-lg-6">
          <div className="best-carousel">
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
          </div>
        </div>
        <div className="col-lg-6 mt-lg-0 mt-4">
          <div className="best-university-text">
            <p>
              Monark University is one of the leading University in Gujarat,
              which provides Quality Education to the aspirants. Various study
              options available at Monark University and required Infrastructure
              for the courses makes the University on of the best option for
              study.
            </p>
            <p>
              Monark University is committed to engaging with the key issues of
              our natural and social worlds through outstanding teaching,
              research, and scholarship. Monark University will provide a
              vibrant and supportive intellectual environment that attracts and
              connects people from all over the world.
            </p>
            <button
              className="text-white"
              style={{
                borderRadius: "5px",
                padding: "4px 12px",
                background: "#054B81",
              }}
            >
              More Details
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
