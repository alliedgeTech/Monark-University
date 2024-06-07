import React from "react";
import studentclubdata from "@/data/studentclub";
import Sidebar from "@/components/Blog/Sidebar";

export default function Studentclub() {
  return (
    <div className="postbox__area pt-120 pb-120" id="studentclub">
      <div className="container">
        {studentclubdata.map((std, index) => (
          <div className="row mt-50">
            <div className="h-100 col-xl-6 col-lg-6">
              <div className="postbox__details-wrapper">
                <div key={index}>
                  <div className="three">
                    <h1 className="it-section-title-3 mb-20">{std.club}</h1>
                  </div>
                  <div className="it-gallery-item p-relative">
                    <div className="it-gallery-thumb">
                      <img
                        src={std.img}
                        width={300}
                        height={300}
                        className="img-fluid"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="h-100 col-xl-6 col-lg-6">
              <div className="container d-flex align-items-center justify-content-center w-100">
                <div className="accordion w-100" id="accordionExample">
                  {std.accordion && std.accordion.length > 0 && (
                    std.accordion.map((ac1, index) => (
                      <div className="accordion-item">
                        <h2 className="accordion-header">
                          <button
                            className="accordion-button"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target={`#${index}`}
                            aria-expanded="true"
                            aria-controls="collapseOne"
                          >
                            {ac1.header}
                          </button>
                        </h2>
                        <div
                          id={`${index}`}
                          className="accordion-collapse collapse show"
                          data-bs-parent="#accordionExample"
                        >
                          <div className="accordion-body">
                            <div
                              dangerouslySetInnerHTML={{ __html: ac1.content }}
                            />
                          </div>
                        </div>
                      </div>
                    ))
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}