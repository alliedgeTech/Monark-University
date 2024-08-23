
import SingleTeamTwo from "@/components/Team/Two";
import Teachers from "@/data/teachers";
import dynamic from "next/dynamic";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

// Import jQuery
if (typeof window !== "undefined") {
  var $ = require("jquery");
  window.$ = window.jQuery = require("jquery");
}

// Dynamically import OwlCarousel without SSR
const OwlCarousel = dynamic(() => import('react-owl-carousel'), { ssr: false });

const Responsive = {
  0: {
    items: 1,
    margin: 5,
  },
  435: {
    items: 2,
    margin: 10,
  },
  768: {
    items: 3,
    margin: 10,
  },
  1024: {
    items: 4,
    margin: 20,
  },
};

export default function Team() {
  return (
    <>
      <div id="leadership" className="leadrship py-3">
        <div className="it-team-3-area leader-main p-relative py-4">
          <div className="container about-2 p-4">
            <div className="row">
              <div className="col-xl-12">
                <div className="it-event-title-box three pb-40">
                  <h1 className="it-section-title-3 text-white">
                    Leadership Team
                  </h1>
                </div>
              </div>
            </div>
            <div className="">
            <OwlCarousel
              className="owl-theme faculty-carousel "
              autoPlay={true}
              autoplayTimeout={5000}
              dots={true}
              responsive={Responsive}
              margin={10}
            >
              {Teachers.map((teacher) => {
                return (
                  <div className="item">
                    <SingleTeamTwo
                      Slug={teacher.slug}
                      Title={teacher.title}
                      Img={teacher.image}
                      Teacher={teacher.name}
                      Designation={teacher.designation}
                    />
                  </div>
                );
              }).slice(0, 10)}
            </OwlCarousel>
            </div>
          </div>
        </div>
        <div className="it-team-3-area dean-main p-relative py-4">
          <div className="container about-2 p-4">
            <div className="row">
              <div className="col-xl-12">
                <div className="it-event-title-box three  pb-30">
                  <h1 className="it-section-title-3 ">
                    List of Dean
                  </h1>
                </div>
              </div>
            </div>
            <div className="">
            <OwlCarousel
              className="owl-theme faculty-carousel"
              loop={true}
              autoPlay={true}
              autoplayTimeout={5000}
              dots={true}
              responsive={Responsive}
            >
              {Teachers.map((teacher) => {
                return (
                  <div className="item">
                    <SingleTeamTwo
                      Slug={teacher.slug}
                      Title={teacher.title}
                      Img={teacher.image}
                      Teacher={teacher.name}
                      Designation={teacher.designation}
                    />
                  </div>
                );
              }).slice(31, 44)}
            </OwlCarousel>
            </div>
            <div className="row"></div>
          </div>
        </div>
        <div className="it-funfact-5-area it-funfact-5-bg p-relative fix py-3" data-background="/img/funfact/bg-2.png" id="officersandauthority">
          <div className="container">
            <div className="row">
              <div className="col-xl-12">
                <div className="it-event-title-box eight text-center pb-40">
                  
                  <h1 className="it-section-title-3 text-white">
                    List of Officers
                  </h1>
                </div>
              </div>
            </div>
            <div className="list-officers-table">
              <table class="rwd-table">
                <tbody>
                  <tr>
                    <th>Name</th>
                    <th>Designation</th>
                  </tr>
                  {Teachers.map((teacher, id) => {
                    return (
                      <tr>
                        <td data-th="Name">{teacher.name}</td>
                        <td data-th="Designation">{teacher.designation}</td>
                      </tr>
                    );
                  }).slice(11, 31)}
                </tbody>
              </table>
            </div>
          </div>
        </div>
        
        <div className="it-funfact-5-area it-funfact-5-bg p-relative fix py-5" data-background="/img/funfact/bg-2.png" id="committeessgrc">
          <div className="container">
            <div className="row">
              <div className="col-xl-12">
                <div className="it-event-title-box eight text-center pb-40">
        
                  <h1 className="it-section-title-3 text-white">
                    Committee of SGRC
                  </h1>
                </div>
              </div>
            </div>
            <div className="table-committee">
              <table class="rwd-table">
                <tbody>
                  <tr>
                    <th>Name</th>
                    <th>Designation</th>
                  </tr>
                  {Teachers.map((teacher, id) => {
                    return (
                      <tr>
                        <td data-th="Name">{teacher.name}</td>
                        <td data-th="Designation">{teacher.designation}</td>
                      </tr>
                    );
                  }).slice(45, 49)}
                </tbody>
              </table>
            </div>
            {/* <div className="row">
              {Teachers.map((teacher) => {
                return (
                  <div className="col-xl-3 col-lg-4 col-md-6 mb-30">
                    <SingleTeamTwo
                      Slug={teacher.slug}
                      Title={teacher.title}
                      Img={teacher.image}
                      Teacher={teacher.name}
                      Designation={teacher.designation}
                    />
                  </div>
                );
              }).slice(45, 49)}
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
}
