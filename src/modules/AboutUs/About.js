import Image from "next/image";
import Link from "next/link";
import ai from "../../../public/img/choose/AICTE.png";
import nc from "../../../public/img/choose/NCTE.png";
import gn from "../../../public/img/choose/GNC.jpg";
import bc from "../../../public/img/choose/BCI.png";
import na from "../../../public/img/choose/NAAC.png";
import is from "../../../public/img/choose/ISTE.jpg";
import vi from "../../../public/img/choose/VIPNET.png";
import ncc from "../../../public/img/choose/NCC.jpg";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "animate.css";
export default function About() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    let mm = gsap.matchMedia();

    mm.add("(min-width:991px)", () => {
      gsap.from(".it-choose-title-box", {
        opacity: 0,
        x: -100,
        delay: "1",
      });
      gsap.from(".it-choose-text", {
        opacity: 0,
        x: -100,
        delay: "1",
      });
      gsap.from(".it-choose-thumb", {
        opacity: 0,
        x: 100,
        delay: "1",
      });
      gsap.from(".it-choose-content", {
        opacity: 0,
        x: 100,
        stagger: 0.5,
        scrollTrigger: {
          trigger: ".it-choose-content",
          scroller: "body",
          start: "top bottom",
          end: "top center",
          scrub: 0.2,
        },
      });
      gsap.from(".it-event-2-area", {
        opacity: 0,
        x: -100,
        stagger: 1,
        scrollTrigger: {
          trigger: ".it-event-2-area",
          scroller: "body",
          start: "top bottom",
          end: "top 10%",
          scrub: 0.2,
        },
      });
      gsap.from(".it-career-item-left", {
        opacity: 0,
        x: -100,
        scale: 0.5,
        scrollTrigger: {
          trigger: ".it-career-item-left",
          scroller: "body",
          start: "top bottom",
          end: "top 65%",
          scrub: 0.2,
        },
      });
      gsap.from(".it-career-item-right", {
        opacity: 0,
        x: 100,
        scale: 0.5,
        scrollTrigger: {
          trigger: ".it-career-item-right",
          scroller: "body",
          start: "top bottom",
          end: "top 65%",
          scrub: 0.2,
        },
      });
      gsap.from(".discover-heading", {
        opacity: 0,
        y: 100,
        scale: 1.5,
        scrollTrigger: {
          trigger: ".discover-heading",
          scroller: "body",
          start: "top bottom",
          end: "top 60%",
          scrub: 0.2,
        },
      });
    });
  }, []);
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };
  return (
    <div id="historicalbackground">
      
      <div>
        <div class="container">
          
        <div id="recognitionandapproval">
                    <div
                      className="it-funfact-5-area it-funfact-5-bg p-relative fix pt-35 pb-30"
                      data-background="/img/funfact/bg-2.png"
                      layout="fill"
                      objectFit="cover"
                    >
                      <div className="one mb-25">
                        <h4 className="it-section-title-5">
                          Approvals & Recognitions
                        </h4>
                      </div>

                      <div className="container">
                        <div className="row">
                          <div className="col-xl-3 mt-lg-0 mt-4 col-lg-3">
                            <div className="it-feature-item text-center">
                              <div className="it-feature-item-content z-index">
                                <div className="it-feature-icon">
                                  <Image src={ai} className="img-fluid" />
                                </div>
                                <div className="it-feature-text pt-30">
                                  <h4 className="it-feature-title">AICTE</h4>
                                </div>
                                <div className="it-feature-button">
                                  <Link
                                  target="_blank"

                                    href="https://www.aicte-india.org/"
                                    className="it-btn-border"
                                    style={{ display: "inline-block" }}
                                  >
                                    <span
                                      style={{
                                        display: "inline-flex",
                                        alignItems: "center",
                                      }}
                                    >
                                      Learn More
                                      <svg
                                        width="17"
                                        height="14"
                                        viewBox="0 0 17 14"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                        style={{ marginLeft: "8px" }}
                                      >
                                        <path
                                          d="M11 1.24023L16 7.24023L11 13.2402"
                                          stroke="currentcolor"
                                          strokeWidth="1.5"
                                          strokeMiterlimit="10"
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                        />
                                        <path
                                          d="M1 7.24023H16"
                                          stroke="currentcolor"
                                          strokeWidth="1.5"
                                          strokeMiterlimit="10"
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                        />
                                      </svg>
                                    </span>
                                  </Link>
                                </div>
                              </div>
                            </div>
                          </div>

                          <div className="col-xl-3 mt-lg-0 mt-4 col-lg-3">
                            <div className="it-feature-item text-center">
                              <div className="it-feature-item-content z-index">
                                <div className="it-feature-icon">
                                  <Image src={nc} className="img-fluid" />
                                </div>
                                <div className="it-feature-text pt-30">
                                  <h4 className="it-feature-title">NCTE</h4>
                                </div>
                                <div className="it-feature-button">
                                  <Link
                                  target="_blank"
                                    href="https://ncte.gov.in/website/index.aspx"
                                    className="it-btn-border"
                                  >
                                    <span>
                                      Learn More
                                      <svg
                                        width="17"
                                        height="14"
                                        viewBox="0 0 17 14"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                      >
                                        <path
                                          d="M11 1.24023L16 7.24023L11 13.2402"
                                          stroke="currentcolor"
                                          strokeWidth="1.5"
                                          strokeMiterlimit="10"
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                        />
                                        <path
                                          d="M1 7.24023H16"
                                          stroke="currentcolor"
                                          strokeWidth="1.5"
                                          strokeMiterlimit="10"
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                        />
                                      </svg>
                                    </span>
                                  </Link>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-xl-3 mt-lg-0 mt-4 col-lg-3">
                            <div className="it-feature-item text-center">
                              <div className="it-feature-item-content z-index">
                                <div className="it-feature-icon">
                                  <Image src={gn} className="img-fluid" />
                                </div>
                                <div className="it-feature-text pt-30">
                                  <h4 className="it-feature-title">GNC</h4>
                                </div>
                                <div className="it-feature-button">
                                  <Link
                                  target="_blank"
                                    href="https://www.gujaratnursingcouncil.org/"
                                    className="it-btn-border"
                                  >
                                    <span>
                                      Learn More
                                      <svg
                                        width="17"
                                        height="14"
                                        viewBox="0 0 17 14"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                      >
                                        <path
                                          d="M11 1.24023L16 7.24023L11 13.2402"
                                          stroke="currentcolor"
                                          strokeWidth="1.5"
                                          strokeMiterlimit="10"
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                        />
                                        <path
                                          d="M1 7.24023H16"
                                          stroke="currentcolor"
                                          strokeWidth="1.5"
                                          strokeMiterlimit="10"
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                        />
                                      </svg>
                                    </span>
                                  </Link>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-xl-3 mt-lg-0 mt-4 col-lg-3">
                            <div className="it-feature-item text-center">
                              <div className="it-feature-item-content z-index">
                                <div className="it-feature-icon">
                                  <Image src={bc} className="img-fluid" />
                                </div>
                                <div className="it-feature-text pt-30">
                                  <h4 className="it-feature-title">BCI</h4>
                                </div>
                                <div className="it-feature-button">
                                  <Link
                                  target="_blank"
                                    href="https://www.barcouncilofindia.org/home"
                                    className="it-btn-border"
                                  >
                                    <span>
                                      Learn More
                                      <svg
                                        width="17"
                                        height="14"
                                        viewBox="0 0 17 14"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                      >
                                        <path
                                          d="M11 1.24023L16 7.24023L11 13.2402"
                                          stroke="currentcolor"
                                          strokeWidth="1.5"
                                          strokeMiterlimit="10"
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                        />
                                        <path
                                          d="M1 7.24023H16"
                                          stroke="currentcolor"
                                          strokeWidth="1.5"
                                          strokeMiterlimit="10"
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                        />
                                      </svg>
                                    </span>
                                  </Link>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-xl-3 mt-lg-0 mt-4 col-lg-3">
                            <div
                              className="it-feature-item text-center"
                              style={{ marginTop: "10px" }}
                            >
                              <div className="it-feature-item-content z-index">
                                <div className="it-feature-icon">
                                  <Image src={na} className="img-fluid" />
                                </div>
                                <div className="it-feature-text pt-30">
                                  <h4 className="it-feature-title">NAAC</h4>
                                </div>
                                <div className="it-feature-button">
                                  <Link
                                  target="_blank"
                                    href="http://naac.gov.in/index.php/en/"
                                    className="it-btn-border"
                                  >
                                    <span>
                                      Learn More
                                      <svg
                                        width="17"
                                        height="14"
                                        viewBox="0 0 17 14"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                      >
                                        <path
                                          d="M11 1.24023L16 7.24023L11 13.2402"
                                          stroke="currentcolor"
                                          strokeWidth="1.5"
                                          strokeMiterlimit="10"
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                        />
                                        <path
                                          d="M1 7.24023H16"
                                          stroke="currentcolor"
                                          strokeWidth="1.5"
                                          strokeMiterlimit="10"
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                        />
                                      </svg>
                                    </span>
                                  </Link>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-xl-3 mt-lg-0 mt-4 col-lg-3">
                            <div
                              className="it-feature-item text-center"
                              style={{ marginTop: "10px" }}
                            >
                              <div className="it-feature-item-content z-index">
                                <div className="it-feature-icon">
                                  <Image src={is} className="img-fluid" />
                                </div>
                                <div className="it-feature-text pt-30">
                                  <h4 className="it-feature-title">ISTE</h4>
                                </div>
                                <div className="it-feature-button">
                                  <Link
                                  target="_blank"
                                    href="http://www.isteonline.in/"
                                    className="it-btn-border"
                                  >
                                    <span>
                                      Learn More
                                      <svg
                                        width="17"
                                        height="14"
                                        viewBox="0 0 17 14"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                      >
                                        <path
                                          d="M11 1.24023L16 7.24023L11 13.2402"
                                          stroke="currentcolor"
                                          strokeWidth="1.5"
                                          strokeMiterlimit="10"
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                        />
                                        <path
                                          d="M1 7.24023H16"
                                          stroke="currentcolor"
                                          strokeWidth="1.5"
                                          strokeMiterlimit="10"
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                        />
                                      </svg>
                                    </span>
                                  </Link>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-xl-3 mt-lg-0 mt-4 col-lg-3">
                            <div
                              className="it-feature-item text-center"
                              style={{ marginTop: "10px" }}
                            >
                              <div className="it-feature-item-content z-index">
                                <div className="it-feature-icon">
                                  <Image src={vi} className="img-fluid" />
                                </div>
                                <div className="it-feature-text pt-30">
                                  <h4 className="it-feature-title">VIPNET</h4>
                                </div>
                                <div className="it-feature-button">
                                  <Link
                                  target="_blank"
                                    href="https://vigyanprasar.gov.in/vipnet/"
                                    className="it-btn-border"
                                  >
                                    <span>
                                      Learn More
                                      <svg
                                        width="17"
                                        height="14"
                                        viewBox="0 0 17 14"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                      >
                                        <path
                                          d="M11 1.24023L16 7.24023L11 13.2402"
                                          stroke="currentcolor"
                                          strokeWidth="1.5"
                                          strokeMiterlimit="10"
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                        />
                                        <path
                                          d="M1 7.24023H16"
                                          stroke="currentcolor"
                                          strokeWidth="1.5"
                                          strokeMiterlimit="10"
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                        />
                                      </svg>
                                    </span>
                                  </Link>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-xl-3 mt-lg-0 mt-4 col-lg-3">
                            <div
                              className="it-feature-item text-center"
                              style={{ marginTop: "10px" }}
                            >
                              <div className="it-feature-item-content z-index">
                                <div className="it-feature-icon">
                                  <Image src={ncc} className="img-fluid" />
                                </div>
                                <div className="it-feature-text pt-30">
                                  <h4 className="it-feature-title">NCC</h4>
                                </div>
                                <div className="it-feature-button">
                                  <Link
                                  target="_blank"
                                    href="https://indiancc.mygov.in/"
                                    className="it-btn-border"
                                  >
                                    <span>
                                      Learn More
                                      <svg
                                        width="17"
                                        height="14"
                                        viewBox="0 0 17 14"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                      >
                                        <path
                                          d="M11 1.24023L16 7.24023L11 13.2402"
                                          stroke="currentcolor"
                                          strokeWidth="1.5"
                                          strokeMiterlimit="10"
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                        />
                                        <path
                                          d="M1 7.24023H16"
                                          stroke="currentcolor"
                                          strokeWidth="1.5"
                                          strokeMiterlimit="10"
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                        />
                                      </svg>
                                    </span>
                                  </Link>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/*Approvals & Recognitions ends*/}
                  </div>
        </div>
      </div>
    </div>
  );
}
