import React, { useState } from "react";
import Sidebar from "@/components/Blog/Sidebar";
import SingleBlogThree from "@/components/Blog/Three";
import Blogs from "@/data/blogs";
import Image from "next/image";
import Link from "next/link";
import { Accordion, AccordionItem } from '@szhsin/react-accordion';
import studentclubdata from "@/data/studentclub";

export default function BlogArea() {
  const [open, setOpen] = useState(false);

  return (
    <div className="postbox__area pt-120 pb-120">
      <div className="container">
        <div className="row">
          <div className="col-xl-6 col-lg-6">
            <div className="postbox__details-wrapper">
              {studentclubdata.map((std, index) => (
                <div key={index}>
                  <div className="it-gallery-item p-relative">
                    <div className="it-gallery-thumb">
                      <img src={std.img} className="img-fluid" />
                    </div>
                  </div>
				  <div className="col-xl-6 col-lg-6">
            <div className="container">
              <Accordion className="accordian">
               
                  <AccordionItem key={index} >
                    <div className="it-gallery-title-box text-center pb-70">
                      <span className="it-section-subtitle-5">
                        <i className="fa-light fa-book"></i>
						{console.log("student",std.club)}
                        {std?.clubh}
                        <i className="fa-light fa-book"></i>
                      </span>
                      <h2 className="it-section-title-3 bg-black">{std?.club}</h2>
                    </div>
                    <div className="it-faq-area p-relative pt-120 pb-120">
                      <div className="container">
                        <div className="row">
                          <div className="col-12">
                            <div className="it-faq-wrap">
                              <div className="it-custom-accordion it-custom-accordion-style-3">
                                <h2>{std?.club}</h2>
                                {/* Render other details like content, header, etc. */}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </AccordionItem>
               
              </Accordion>
            </div>
          </div>
                </div>
              ))}
            </div>
          </div>
          <div className="col-xl-6 col-lg-6">
            <div className="container">
              <Accordion className="accordian">
                {studentclubdata?.map((student, index) => (
                  <AccordionItem key={index} >
                    <div className="it-gallery-title-box text-center pb-70">
                      <span className="it-section-subtitle-5">
                        <i className="fa-light fa-book"></i>
						{console.log("student",student)}
                        {student?.clubh}
                        <i className="fa-light fa-book"></i>
                      </span>
                      <h2 className="it-section-title-3 bg-black">{student?.club}</h2>
                    </div>
                    <div className="it-faq-area p-relative pt-120 pb-120">
                      <div className="container">
                        <div className="row">
                          <div className="col-12">
                            <div className="it-faq-wrap">
                              <div className="it-custom-accordion it-custom-accordion-style-3">
                                <h2>{student?.club}</h2>
                                {/* Render other details like content, header, etc. */}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}