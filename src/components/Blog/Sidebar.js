import React from "react";
import { Container, Row, Col, Accordion, Card } from "react-bootstrap";
import studentclubdetailsdata from "@/data/studentclubdetails";
import studentclubdata from "@/data/studentclub";

export default function Sidebar() {
  return (
    <Container>
      <div className="mt-100">
        <Accordion defaultActiveKey="0">
          {studentclubdata.map((std) => (
            <div key={std.id}>
              {std.accordion && std.accordion.length > 0 ? (
                std.accordion.map((ac1, index) => (
                  <Accordion.Item eventKey={index.toString()} key={std.id}>
                    <Accordion.Header>{ac1.header}</Accordion.Header>
                    <Accordion.Body>
                      <h5>{ac1.content}</h5>
                    </Accordion.Body>
                  </Accordion.Item>
                ))
              ) : (
                <div>No accordion data available</div>
              )}
            </div>
          ))}
        </Accordion>
      </div>
    </Container>
  );
}