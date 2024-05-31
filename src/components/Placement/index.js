import React from "react";
import m1 from "../../../public/img/placement/tcs_logo.jpeg"
import Image from "next/image";

const index = () => {
  return (
    <div className="placement container">
      <div className="training-placement py-4">
        <div className="training-placement-heading">
          <h2 className="text-center">Training & Placement Cell</h2>
          <hr />
          <div className="row">
            <div className="col-lg-6 col-12 h-100">
              <div className="training-img">
                <img
                  className="img-fluid"
                  src="https://monarkuni.ac.in/wp-content/uploads/2021/12/WhatsApp-Image-2021-12-24-at-6.48.09-PM.jpeg"
                  alt=""
                />
              </div>
            </div>
            <div className="col-lg-6 col-12 h-100">
              <div className="training-text">
                <h4>- ABOUT TRAINING AND PLACEMENT CELL</h4>
                <small>
                  The ultimate aim of the institute is not only just creating
                  the engineers, but to eventually producing and delivering
                  working professionals to the industry by imparting employable
                  skill to the students. In order to achieve this objective, the
                  institute imparts soft, managerial and technical skills to
                  students. A placement team consisting of seven qualified
                  professionals has been set up and is functioning under the
                  guidance and direction of the top management and
                  Director/Principal in the process of placement. The management
                  of the institute has resolved and is committed to achieve 100%
                  placement of the students. The Management has stepped forward
                  to frame out long-term strategies to develop and strengthen
                  Institute-Industries Relationship. The campus
                  recruitment/placement process has already commenced. The
                  Institute has also taken initiatives to organize a series of
                  in-house training courses/ workshops/seminars/guest lecturers
                  for imparting extra knowledge and providing exposure,
                  practical knowledge a skill to the student community and
                  faculties.
                </small>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="placement-record py-4">
        <div className="placement-record-heading">
          <h2 className="text-center">Placement Records</h2>
          <hr />
        </div>
        <div className="row">
          <div className="col-lg-4 col-md-4 col-12 mt-lg-5 mt-4 h-100">
            <div className="record-box">
              <div className="icon-box d-flex flex-column align-items-center">
                <i class="fa-regular fa-credit-card mb-4"></i>
                <h4>Placement Record</h4>
              </div>
              <div className="record-text mt-5">
                <p>
                  <i class="fa-solid fa-right-long"></i>10.50 LPA Highest
                  Package
                </p>
                <p>
                  <i class="fa-solid fa-right-long"></i>500 + Annual
                  Placements
                </p>
                <p>
                  <i class="fa-solid fa-right-long"></i>350+ Annual
                  Recruiters
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-4 col-12 mt-lg-0 mt-4 h-100">
            <div className="record-box">
              <div className="icon-box d-flex flex-column align-items-center">
              <i class="fa-solid fa-dice-d20 mb-4"></i>
                <h4>Placement Activities</h4>
              </div>
              <div className="record-text mt-5">
                <p>
                  <i class="fa-solid fa-right-long"></i>100 + Seminars
                </p>
                <p>
                  <i class="fa-solid fa-right-long"></i>10 + Startups
                </p>
                <p>
                  <i class="fa-solid fa-right-long"></i>15 + MoUs Year
                  2020-2021
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-4 col-12 mt-lg-5 mt-4 h-100">
            <div className="record-box">
              <div className="icon-box d-flex flex-column align-items-center">
              <i class="fa-solid fa-clock-rotate-left mb-4"></i>
                <h4>Year 2022-2023 (Cont.)</h4>
              </div>
              <div className="record-text mt-5">
                <p>
                  <i class="fa-solid fa-right-long"></i>Number of Eligible
                  Students : 1500 +
                </p>
                <p>
                  <i class="fa-solid fa-right-long"></i>
                  Number of Students Placed : 500 +
                </p>
                <p>
                  <i class="fa-solid fa-right-long"></i>Number of Companies
                  Participated : 375 +
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="our-recruiters py-4">
        <div className="our-recruiters-heading">
            <h2 className="text-center">Our Recruiters</h2>
            <hr />
            <div className="marquee">
                <marquee behavior="" direction="">
                    <Image   className="img-fluid" src={m1} alt="" />
                    <img className="img-fluid" src="https://seeklogo.com/images/T/toyota-logo-3A02221675-seeklogo.com.png" alt="" />
                    <img className="img-fluid" src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Axis_Bank_logo.svg/2560px-Axis_Bank_logo.svg.png" alt="" />
                    <img className="img-fluid" src="https://www.logo.wine/a/logo/Microsoft_Azure/Microsoft_Azure-Logo.wine.svg" alt="" />
                    <img className="img-fluid" src="data:image/png;base64,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" alt="" />
                </marquee>
            </div>
        </div>
      </div>
    </div>
  );
};

export default index;
