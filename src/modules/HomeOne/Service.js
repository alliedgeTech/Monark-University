import Image from "next/image";
import Link from "next/link";
import syllabusdata from "@/data/syllabus";
export default function Service() {
  return (
    <>
      <div className="mu_course pt-4 bg-light">
          <div className="three">
            <h1>MU Courses</h1>
          </div>
          {/* <div class="course-main p-3">
            <nav>
              <div
                class="nav nav-tabs mb-3 d-flex align-items-center justify-content-evenly"
                id="nav-tab"
                role="tablist"
              >
                <button
                  class="nav-link active"
                  id="after_10-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#after_10"
                  type="button"
                  role="tab"
                  aria-controls="after_10"
                  aria-selected="true"
                >
                  <small>After 10</small>
                </button>
                <button
                  class="nav-link"
                  id="after_12-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#after_12"
                  type="button"
                  role="tab"
                  aria-controls="after_12"
                  aria-selected="false"
                >
                  <small>After 12</small>
                </button>
                <button
                  class="nav-link"
                  id="pg_course-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#pg_course"
                  type="button"
                  role="tab"
                  aria-controls="pg_course"
                  aria-selected="false"
                >
                  <small>Pg Courses</small>
                </button>
                <button
                  class="nav-link"
                  id="Research_Courses-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#Research_Courses"
                  type="button"
                  role="tab"
                  aria-controls="pg_course"
                  aria-selected="false"
                >
                  <small>Research</small>
                </button>
              </div>
            </nav>
            <div
              class="tab-content mt-25 p-3 rounded bg-light"
              id="nav-tabContent"
            >
              <div
                class="tab-pane fade active show"
                id="after_10"
                role="tabpanel"
                aria-labelledby="after_10-tab"
              >
                <div className="course-div">
                  <div className="course-header">
                    <h4>Diploma Engineering</h4>
                  </div>
                  <ul className="course-links">
                    <li>
                      <Link href="/services/service?id=1">
                        Diploma In Automobile Engineering
                      </Link>
                    </li>
                    <li>
                      <Link href="/services/service?id=2">
                        Diploma In Civil Engineering
                      </Link>
                    </li>
                    <li>
                      <Link href="/services/service?id=3">
                        Diploma In Computer Engineering
                      </Link>
                    </li>
                    <li>
                      <Link href="/services/service?id=4">
                        Diploma In Electrical Engineering
                      </Link>
                    </li>
                    <li>
                      <Link href="/services/service?id=5">
                        Diploma In Electronics And Communications Engineering
                      </Link>
                    </li>
                    <li>
                      <Link href="/services/service?id=6">
                        Diploma In Information Technology Engineering
                      </Link>
                    </li>
                    <li>
                      <Link href="/services/service?id=7">
                        Diploma In Mechanical Engineering
                      </Link>
                    </li>
                    <li>
                      <Link href="/services/service?id=8">
                        Medical LaboratoryTechnology -Assistant(MLT-Assistant)
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div
                class="tab-pane fade"
                id="after_12"
                role="tabpanel"
                aria-labelledby="after_12-tab"
              >
                <div className="course-div">
                  <div className="course-header">
                    <h4>
                      <i class="fa-solid fa-school mr-15"></i>Bachelor Of
                      Engineering (B.E.)
                    </h4>
                  </div>

                  {syllabusdata.map((sl, index) => (
                    <div key={sl.id}>
                      {sl.subbranch.map((sub) => (
                        <div key={sub.id}>
                          <div className="course-heading">
                            <h4>
                              <i class="fa-solid fa-building-columns mr-15"></i>
                              {sub.name}
                            </h4>
                          </div>

                          {sub.sub.map((subsub) => (
                            <div key={subsub.id}>
                              <a
                                className="sub_courses"
                                href={`/showsyllabus?id=${sl.id}&branchId=${sub.id}&subId=${subsub.id}`}
                              >
                                <i class="fa-solid fa-graduation-cap mr-5"></i>{" "}
                                {subsub.name}
                              </a>
                            </div>
                          ))}
                        </div>
                      ))}
                    </div>
                  ))}
                </div>
              </div>
              <div
                class="tab-pane fade"
                id="pg_course"
                role="tabpanel"
                aria-labelledby="pg_course-tab"
              >
                <div className="course-div">
                  <div className="course-header">
                    <h4>
                      <i class="fa-solid fa-school mr-15"></i>Bachelor Of
                      Engineering (B.E.)
                    </h4>
                  </div>

                  {syllabusdata.map((sl) => (
                    <div key={sl.id}>
                      {sl.subbranch
                        .filter((sub) => sub.id !== 3) // Filter out subbranches with id 3
                        .map((sub) => (
                          <div key={sub.id}>
                            <div className="course-heading">
                              <h4>
                                <i className="fa-solid fa-building-columns mr-15"></i>
                                {sub.name}
                              </h4>
                            </div>
                            {sub.sub.map((subsub) => (
                              <div key={subsub.id}>
                                <a
                                  className="sub_courses"
                                  href={`/showsyllabus?id=${sl.id}&branchId=${sub.id}&subId=${subsub.id}`}
                                >
                                  <i className="fa-solid fa-graduation-cap mr-5"></i>{" "}
                                  {subsub.name}
                                </a>
                              </div>
                            ))}
                          </div>
                        ))}
                    </div>
                  ))}
                </div>
              </div>
              <div
                class="tab-pane fade"
                id="Research_Courses"
                role="tabpanel"
                aria-labelledby="Research_Courses-tab"
              >
                <div className="course-div">
                  <div className="course-header">
                    <h4>
                      <i class="fa-solid fa-school mr-15"></i>Bachelor Of
                      Engineering (B.E.)
                    </h4>
                  </div>

                  {syllabusdata.map((sl, index) => (
                    <div key={sl.id}>
                      {sl.subbranch.map((sub) => (
                        <div key={sub.id}>
                          <div className="course-heading">
                            <h4>
                              <i class="fa-solid fa-building-columns mr-15"></i>
                              {sub.name}
                            </h4>
                          </div>

                          {sub.sub.map((subsub) => (
                            <div key={subsub.id}>
                              <a
                                className="sub_courses"
                                href={`/showsyllabus?id=${sl.id}&branchId=${sub.id}&subId=${subsub.id}`}
                              >
                                <i class="fa-solid fa-graduation-cap mr-5"></i>{" "}
                                {subsub.name}
                              </a>
                            </div>
                          ))}
                        </div>
                      ))}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div> */}
          <div class="highlight_section container mt-5 py-5">
          <div
            id="carouselExampleIndicators"
            class="carousel carousel1 slide mt-5"
          >
            <div class="carousel-buttons mb-30 d-flex align-items-center justify-content-between">
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
                data-bs-slide-to="2"
                aria-label="Slide 3"
              >
                Rearch
              </button>
              
            </div>
            <div class="carousel-inner">
              <div class="carousel-item item active">
              <div className="course-div">
                  <div className="course-header">
                    <h4>Diploma Engineering</h4>
                  </div>
                  <ul className="course-links">
                    <li>
                      <Link href="/services/service?id=1">
                        Diploma In Automobile Engineering
                      </Link>
                    </li>
                    <li>
                      <Link href="/services/service?id=2">
                        Diploma In Civil Engineering
                      </Link>
                    </li>
                    <li>
                      <Link href="/services/service?id=3">
                        Diploma In Computer Engineering
                      </Link>
                    </li>
                    <li>
                      <Link href="/services/service?id=4">
                        Diploma In Electrical Engineering
                      </Link>
                    </li>
                    <li>
                      <Link href="/services/service?id=5">
                        Diploma In Electronics And Communications Engineering
                      </Link>
                    </li>
                    <li>
                      <Link href="/services/service?id=6">
                        Diploma In Information Technology Engineering
                      </Link>
                    </li>
                    <li>
                      <Link href="/services/service?id=7">
                        Diploma In Mechanical Engineering
                      </Link>
                    </li>
                    <li>
                      <Link href="/services/service?id=8">
                        Medical LaboratoryTechnology -Assistant(MLT-Assistant)
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="carousel-item item">
                <img className="img-fluid" src="http://localhost:3000/img/category/best-1.jpg" alt="" />
                
              </div>
              <div class="carousel-item item">
                <img className="img-fluid" src="http://localhost:3000/img/category/best-1.jpg" alt="" />
                
              </div>
              <div class="carousel-item item">
                <img className="img-fluid" src="http://localhost:3000/img/category/best-1.jpg" alt="" />
                
              </div>
            </div>
          </div>
        </div>
        </div>
    </>
  );
}
