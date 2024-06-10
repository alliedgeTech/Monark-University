import React from "react";
import studentclubdata from "@/data/studentclub";
import Sidebar from "@/components/Blog/Sidebar";
import { Container, Row, Col, Table, Accordion } from "react-bootstrap";



export default function Studentclub() {
  return (
    <div className="postbox__area pt-120 pb-120" id="studentclub">
      <div className="container">
      {studentclubdata.map((std, index) => (
        <>
        <div className="three my-5">
              <h1 className="it-section-title-3">{std.club}</h1>

        </div>
          <div className="row">
          <div className="h-100 col-xl-6 col-lg-6">
            <div className="postbox__details-wrapper">
              
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
          <div className="h-100 col-xl-6 col-lg-6">
          <Container>
      <div className="mt-100">
        <Accordion>
          
            <div key={std.id}>
              {std.accordion && std.accordion.length > 0 ? (
                std.accordion.map((ac1, index) => (
                  <Accordion.Item eventKey={index.toString()} key={index}>
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