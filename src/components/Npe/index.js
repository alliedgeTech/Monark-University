import Link from "next/link";
import React from "react";

const index = () => {
  return (
    <div className="npe-section py-5">
      <div className="container">
        <div className="npe-heading">
          <div className="one">
            <h1>Introduction</h1>
          </div>
          <p className="text-center mt-4">
            The National Education Policy (NEP) - 2020 was approved by the
            Indian government in July 2020 and aims to bring significant reforms
            and changes to the education system in the country. Some key
            highlights of the NEP 2020 include:
          </p>
        </div>
        <div className="row ">
          <div className="col-lg-6 px-5 px-lg-3 col-md-12 mt-4">
            <div className="deg15 px-lg-4">
              <div data-aos="fade-up" className="service-box deg-15 h-100 p-4">
                <div className="three"></div>
                <h5>Higher Education</h5>
                <p>
                  NEP 2020 proposes reforms in higher education, including the
                  establishment of the National Research Foundation (NRF), a
                  common regulatory framework for higher education institutions,
                  and an emphasis on multidisciplinary education. It also aims
                  to increase the gross enrollment ratio (GER) in higher
                  education to 50% by 2035.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-6 px-5 px-lg-3 col-md-12 mt-4">
            <div className="deg15 px-lg-4">
              <div data-aos="fade-up" className="service-box deg-15 h-100 p-4">
                <div className="three"></div>
                <h5>Global Engagement</h5>
                <p>
                  NEP 2020 encourages internationalization and global engagement
                  in higher education, allowing foreign universities to set up
                  campuses in India and Indian universities to collaborate with
                  foreign institutions.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-6 px-5 px-lg-3 col-md-12 mt-4">
            <div className="deg15 px-lg-4">
              <div data-aos="fade-up" className="service-box deg-15 h-100 p-4">
                <div className="three"></div>
                <h5>Financial Support</h5>
                <p>
                  The policy suggests increased public investment in education
                  and the creation of a National Education Fund.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-6 px-5 px-lg-3 col-md-12 mt-4">
            <div className="deg15 px-lg-4">
              <div data-aos="fade-up" className="service-box deg-15 h-100 p-4">
                <div className="three"></div>
                <h5>Teacher Education</h5>
                <p>
                  The policy suggests changes in teacher education programs and
                  continuous professional development for teachers.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-6 px-5 px-lg-3 col-md-12 mt-4">
            <div className="deg15 px-lg-4">
              <div data-aos="fade-up" className="service-box deg-15 h-100 p-4">
                <div className="three"></div>
                <h5>Language Policy</h5>
                <p>
                  It advocates for a flexible approach to language learning,
                  promoting both the mother tongue and multilingualism in
                  education.
                </p>
              </div>
            </div>
          </div>

          <div className="col-lg-6 px-5 px-lg-3 col-md-12 mt-4">
            <div className="deg15 px-lg-4">
              <div data-aos="fade-up" className="service-box deg-15 h-100 p-4">
                <div className="three"></div>
                <h5>Technology in Education</h5>
                <p>
                  The policy encourages the integration of technology in
                  education and online and digital learning resources.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-6 px-5 px-lg-3 col-md-12 mt-4">
            <div className="deg15 px-lg-4">
              <div data-aos="fade-up" className="service-box deg-15 h-100 p-4">
                <div className="three"></div>
                <h5>Equity and Inclusion</h5>
                <p>
                  NEP 2020 places a strong emphasis on achieving equity and
                  inclusion in education, with special provisions for
                  disadvantaged groups and students with disabilities.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-6 px-5 px-lg-3 col-md-12 mt-4">
            <div className="deg15 px-lg-4">
              <div data-aos="fade-up" className="service-box deg-15 h-100 p-4">
                <div className="three"></div>
                <h5>Regulatory Reforms</h5>
                <p>
                  It proposes the establishment of a single regulatory body for
                  higher education, replacing multiple regulatory bodies.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="npe-pdf1 mt-30 py-4">
            <div className="three">
                <h4 className="oswald">Sensitization Workshop on Common Curriculum
                and Credit Framework under NEP-2020</h4>
            </div>
            <p><strong>Date & Day : </strong> 17th July, 2023 (Monday)</p>
            <p><strong>Time : </strong> 3:00 P.M. onward</p>
            <p><strong>Venue : </strong> Auditorium, Nilkanth Bhavan</p>
            <p>Click here for presentation : <Link target="_blank" href='https://res.cloudinary.com/dnjgopun8/image/upload/v1719991031/PowerPoint_Presentation__bvprfp.pdf'><strong>Click Here</strong></Link></p>
        </div>
        <div className="npe-pdf1 py-4">
            <div className="three">
                <h4 className="oswald">Sensitization Workshop on Common Curriculum
                and Credit Framework under NEP-2020</h4>
            </div>
            <p>Bachelor of Science – Honours – <strong>Click Here</strong></p>
            <p>Bachelor of Business Administration – Honours – <strong>Click Here</strong></p>
            <p>Bachelor of Library & Information Science – <strong>Click Here</strong></p>
            <p>Bachelor of Computer Applications – Honours – <strong>Click Here</strong></p>
            <p>Bachelor of Commerce – Honours – <strong>Click Here</strong></p>
            <p>Bachelor of Arts – Honours – <strong>Click Here</strong></p>
            <p>Integrated Bachelor & Master of Science – Information Technology – <strong>Click Here</strong></p>
        </div>
      </div>
    </div>
  );
};

export default index;
