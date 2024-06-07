import React from "react";
import { Container, Accordion } from "react-bootstrap";
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
                  <Accordion.Item eventKey={index.toString()} key={index}>
                    <Accordion.Header>{ac1.header}</Accordion.Header>
                    <Accordion.Body>
                      <div
                        dangerouslySetInnerHTML={{ __html: ac1.content }}
                      />
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