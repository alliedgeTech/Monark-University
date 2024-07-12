import React, { useEffect } from "react";
import studentclubdata from "@/data/studentclub";
import { Container, Accordion } from "react-bootstrap";
import 'aos/dist/aos.css'; // Import AOS CSS
import aos from 'aos'; // Import AOS library



export default function Studentclub() {
  useEffect(()=>{
    aos.init({
      offset: 50, // Offset (in pixels) from the original trigger point
      duration: 700,
    });
  })
  return (
    <div className="postbox__area pt-20 pb-20" >
      <div className="container" id="studentclub">
      {studentclubdata.map((std, index) => (
        <>
        <div className="three my-5" data-aos='fade-right'>
              <h1 className="it-section-title-3">{std.club}</h1>

        </div>
          <div className="row">
          <div className="col-xl-6 col-lg-6">
            <div data-aos='zoom-in-right' className="postbox__details-wrapper mb-lg-0 mb-10">
              
                <div key={index}>
                  
                  <div className="it-gallery">
                  
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
          <div className="col-xl-6 col-lg-6">
          <Container>
      <div className="">
        <Accordion>
          
            <div key={std.id}>
              {std.accordion && std.accordion.length > 0 ? (
                std.accordion.map((ac1, index) => (
                  <Accordion.Item data-aos='fade-left' eventKey={index.toString()} key={index}>
                    <Accordion.Header>{ac1.header}</Accordion.Header>
                    <Accordion.Body>
                      <div className="ms-4"
                        dangerouslySetInnerHTML={{ __html: ac1.content }}
                      />
                    </Accordion.Body>
                  </Accordion.Item>
                ))
              ) : (
                <div>No accordion data available</div>
              )}
            </div>
          
        </Accordion>
      </div>
    </Container>
          </div>
        </div>
        </>
      ))}
      </div>
    </div>
  );
}