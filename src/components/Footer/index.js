import Image from "next/image";
import Link from "next/link";
import footerImg from "../../../public/img/logo/MONARK_LOGO.png";

export default function Footer(props) {
  const { footerLogo, footerClass } = props;
  return (
    <footer className="footer  pt-3">
      <div className="container">
        <div className="footer-middle pb-3">
          <div className="row">
            <div className="col-lg-3 col-md-6 col-12">
              <div className="d-flex flex-column">
                <h6>Enroll With Us</h6>
                <ul style={{ listStyle: "none" }}>
                  <li>
                    <i class="fa-solid fa-circle-chevron-right mr-10"></i>
                    <Link href="">How to apply</Link>
                  </li>
                </ul>
                <h6>Print & Media</h6>
                <ul style={{ listStyle: "none" }}>
                  <li>
                    <i class="fa-solid fa-circle-chevron-right mr-10"></i>
                    <Link href="/mediacoverage">Media & Coverage</Link>
                  </li>
                  <li>
                    <i class="fa-solid fa-circle-chevron-right mr-10"></i>
                    <Link href="/mumirror">MU Mirror</Link>
                  </li>
                  <li>
                    <i class="fa-solid fa-circle-chevron-right mr-10"></i>
                    <Link
                      href="https://www.facebook.com/rjakash88/videos/560419008857402/?extid=CL-UNK-UNK-UNK-AN_GK0T-GK1C"
                      target="_blank"
                    >
                      MU By Rj Akash
                    </Link>
                  </li>
                </ul>
                <h6>Grow With Us</h6>
                <ul style={{ listStyle: "none" }}>
                  <li>
                    <i class="fa-solid fa-circle-chevron-right mr-10"></i>
                    <Link href="/placement">Placement</Link>
                  </li>
                  {/* <li><i class="fa-solid fa-circle-chevron-right mr-10"></i><Link href="">Alumni</Link></li> */}
                  <li>
                    <i class="fa-solid fa-circle-chevron-right mr-10"></i>
                    <Link href="/career">Career @ MU</Link>
                  </li>
                </ul>
              </div>
            </div>
            {/* <div className="col-lg-3 col-md-6 col-12">
							<h6>Multi-Skills Development & Training Centre</h6>
							<ul>
								<li><Link href="/faculty#music">Music & Production</Link></li>
								<li><Link href="/faculty#fitness">Fitness & Nutriton</Link></li>
								<li><Link href="/faculty#it">IT Courses</Link></li>
								<li><Link href="/faculty#aviation">Aviation & Management</Link></li>
								<li><Link href="/faculty#mlt"> Medical Laboratory Technology (MLT)</Link></li>
								<li><Link href="/faculty#hair">Hair Dressing & Beauty</Link></li>
							</ul>
						</div> */}
            <div className="col-lg-6 col-md-6 col-12">
              <div className="d-flex flex-column ">
                <h6>List of Institutes</h6>
                <div className="d-flex flex-column flex-lg-row justify-content-around">
                  <ul className="faculty-list-1" style={{ listStyle: "none" }}>
                    <li>
                      <Link href="/faculty?id=2">
                        <i class="fa-solid fa-chalkboard-user mr-10"></i>Faculty
                        of Science
                      </Link>
                    </li>
                    <li>
                      <Link href="/faculty?id=9">
                        <i class="fa-solid fa-chalkboard-user mr-10"></i>Faculty
                        of Nursing
                      </Link>
                    </li>
                    <li>
                      <Link href="/faculty?id=6">
                        <i class="fa-solid fa-chalkboard-user mr-10"></i>Faculty
                        of Law
                      </Link>
                    </li>
                    <li>
                      <Link href="/faculty?id=7">
                        <i class="fa-solid fa-chalkboard-user mr-10"></i>Faculty
                        of Arts
                      </Link>
                    </li>
                    <li>
                      <Link href="/faculty?id=10">
                        <i class="fa-solid fa-chalkboard-user mr-10"></i>Faculty
                        of Education
                      </Link>
                    </li>
                    <li>
                      <Link href="/faculty?id=11">
                        <i class="fa-solid fa-chalkboard-user mr-10"></i>Faculty
                        of Social Work
                      </Link>
                    </li>
                    <li>
                      <Link href="/faculty?id=13">
                        <i class="fa-solid fa-chalkboard-user mr-10"></i>Faculty
                        of Ayurved
                      </Link>
                    </li>
                  </ul>
                  <ul className="faculty-list-2" style={{ listStyle: "none" }}>
                    <li>
                      <Link href="/faculty?id=4">
                        <i class="fa-solid fa-chalkboard-user mr-10"></i>Faculty
                        of Management
                      </Link>
                    </li>
                    <li>
                      <Link href="/faculty?id=5">
                        <i class="fa-solid fa-chalkboard-user mr-10"></i>Faculty
                        of Commerce
                      </Link>
                    </li>
                    <li>
                      <Link href="/faculty?id=1">
                        <i class="fa-solid fa-chalkboard-user mr-10"></i>Faculty
                        of Engineering & Technology
                      </Link>
                    </li>
                    <li>
                      <Link href="/faculty?id=3">
                        <i class="fa-solid fa-chalkboard-user mr-10"></i>Faculty
                        of Physiotherapy
                      </Link>
                    </li>
                    <li>
                      <Link href="/faculty?id=8">
                        <i class="fa-solid fa-chalkboard-user mr-10"></i>Faculty
                        of Computer Application
                      </Link>
                    </li>
                    <li>
                      <Link href="/faculty?id=14">
                        <i class="fa-solid fa-chalkboard-user mr-10"></i>Faculty
                        of Homeopathy
                      </Link>
                    </li>
                    <li>
                      <Link href="/faculty?id=15">
                        <i class="fa-solid fa-chalkboard-user mr-10"></i>Faculty
                        of Information & Communication Technology
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 col-12">
              <div className="d-flex flex-column">
                <h6>Contact detail</h6>
                <ul style={{ listStyle: "none" }}>
                  <li>
                    <Link href="tel:+91 7970707001">
                      <i class="fa-solid fa-square-phone mr-10"></i>
                      +91-7970707001
                    </Link>
                  </li>
                  <li>
                    <Link href="tel:+91 2718-247138/215">
                      <i class="fa-solid fa-square-phone mr-10"></i>
                      +91-2718-247138/215
                    </Link>
                  </li>
                  <li>
                    <Link href="tel:+91 2718-247131">
                      <i class="fa-solid fa-square-phone mr-10"></i>
                      +91-2718-247131
                    </Link>
                  </li>
                  <li>
                    <Link href="mailto:info@monarkuni.ac.in">
                      <i class="fa-solid fa-envelope mr-10"></i>
                      info@monarkuni.ac.in
                    </Link>
                  </li>
                  <li>
                    <Link href="">
                      <i class="fa-solid fa-map-location mr-10"></i>At. & Post
                      Vahelal, Naroda-Dahegam Road, Ta. Dascroi, Dist.
                      Ahmedabad-382330
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="d-flex align=items-center mt-3">
                <Link
                  target="_blank"
                  href="https://www.facebook.com/monark.university"
                >
                  <button className="footer-btn">
                    <i class="fa-brands fa-facebook"></i>
                  </button>
                </Link>
                <Link target="_blank" href="https://x.com/monarkuni?mx=2">
                  <button className="footer-btn">
                    <i class="fa-brands fa-twitter"></i>
                  </button>
                </Link>
                <Link
                  target="_blank"
                  href="https://www.instagram.com/hgce_vahelal/"
                >
                  <button className="footer-btn">
                    <i class="fa-brands fa-instagram"></i>
                  </button>
                </Link>
                <Link
                  target="_blank"
                  href="https://www.linkedin.com/company/monark-university/"
                >
                  <button className="footer-btn">
                    <i class="fa-brands fa-linkedin"></i>
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="footer-bottom	text-center"
        style={{ background: "#001A39" }}
      >
        <small className=" mb-0 text-white">
          Copyright © 2024 Monark University
        </small>
      </div>
    </footer>
  );
}
