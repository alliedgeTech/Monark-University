import React from "react";
import studentclubdata from "@/data/studentclub";
import Sidebar from "@/components/Blog/Sidebar";

export default function Studentclub() {
  return (
    <div className="postbox__area pt-120 pb-120" id="studentclub">
      <div className="container">
        <div className="row">
          <div className="h-100 col-xl-6 col-lg-6">
            <div className="postbox__details-wrapper">
              {studentclubdata.map((std, index) => (
                <div key={index}>
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
              ))}
            </div>
          </div>
          <div className="h-100 col-xl-6 col-lg-6">
            <Sidebar />
          </div>
        </div>
      </div>
    </div>
  );
}