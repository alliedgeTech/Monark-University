import Image from "next/image";
import Link from "next/link";

export default function Service() {
  return (
    <>
      <div className="container">
        <div className="three">
          <h1>MU Courses</h1>
        </div>
        <div class="course-main p-3">
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
              <div className="course-heading">
				<h4>Diploma Engineering</h4>
			  </div>
			  <ul className="course-links">
				<li>
					<Link href="/services/service?id=1" >Diploma In Automobile Engineering</Link>
				</li>
				<li>
					<Link href="/services/service?id=2" >Diploma In Civil Engineering</Link>
				</li>
				<li>
					<Link href="/services/service?id=3" >Diploma In Computer Engineering</Link>
				</li>
				<li>
					<Link href="/services/service?id=4" >Diploma In Electrical Engineering</Link>
				</li>
				<li>
					<Link href="/services/service?id=5" >Diploma In Electronics And Communications Engineering</Link>
				</li>
				<li>
					<Link href="/services/service?id=6" >Diploma In Information Technology Engineering</Link>
				</li>
				<li>
					<Link href="/services/service?id=7" >Diploma In Mechanical Engineering</Link>
				</li>
				<li>
					<Link href="/services/service?id=8" >Medical LaboratoryTechnology -Assistant(MLT-Assistant)</Link>
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
				<div className="course-heading">
					<h4>Bachelor Of Engineering (B.E.)</h4>
				</div>
				<ul className="course-links">
				<li>
					<Link href="/services/service?id=1" >Diploma In Automobile Engineering</Link>
				</li>
				<li>
					<Link href="/services/service?id=2" >Diploma In Civil Engineering</Link>
				</li>
				<li>
					<Link href="/services/service?id=3" >Diploma In Computer Engineering</Link>
				</li>
				<li>
					<Link href="/services/service?id=4" >Diploma In Electrical Engineering</Link>
				</li>
				<li>
					<Link href="/services/service?id=5" >Diploma In Electronics And Communications Engineering</Link>
				</li>
				<li>
					<Link href="/services/service?id=6" >Diploma In Information Technology Engineering</Link>
				</li>
				<li>
					<Link href="/services/service?id=7" >Diploma In Mechanical Engineering</Link>
				</li>
				<li>
					<Link href="/services/service?id=8" >Medical LaboratoryTechnology -Assistant(MLT-Assistant)</Link>
				</li>
			  </ul>
			  </div>
            </div>
            <div
              class="tab-pane fade"
              id="pg_course"
              role="tabpanel"
              aria-labelledby="pg_course-tab"
            >
              <div className="student-club-info w-100 col-lg-4 h-100 mt-4">
                <div className="row">
                  <div className="col-lg-4 col-md-12 mt-lg-0 mt-4">
                    <div className="student-club-image">
                      <img
                        className="img-fluid"
                        src="/img/studentclub/spiritual.jpg"
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="col-lg-8 col-md-12 mt-lg-0 mt-4">
                    <div className="student-club-text">
                      <div className="three mb-20">
                        <h4>Spiritual Club</h4>
                      </div>
                      <p>
                        Our institution has established health club and
                        spiritual club in the month of May-2022 for the benefit
                        of students, faculties and staff members of our college
                        based on the scope and guidelines given by our C.E.O
                        Shree Monark Goswami sir of Monark University. The
                        club’s vision is to develop sensitivity among students
                        and faculties in general regarding health, yoga,
                        awareness and maintainance of the healthy life style.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              class="tab-pane fade"
              id="Research_Courses"
              role="tabpanel"
              aria-labelledby="Research_Courses-tab"
            >
              <div className="student-club-info w-100 h-100 mt-4">
                <div className="row">
                  <div className="col-lg-4 col-md-12 mt-lg-0 mt-4">
                    <div className="student-club-image">
                      <img
                        className="img-fluid"
                        src="/img/studentclub/devlop.jpg"
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="col-lg-8 col-md-12 mt-lg-0 mt-4">
                    <div className="student-club-text">
                      <div className="three mb-20">
                        <h4>Personality Develop Club</h4>
                      </div>
                      <p>
                        This will help club members to gain personal and
                        professional skills in the area of leadership
                        development. To become better leaders in their families
                        or personal lives as they develop skills to better
                        manage their own lives.
                      </p>
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
