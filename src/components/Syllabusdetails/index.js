import React from "react";
import { useRouter } from "next/router";
import { Container, Row, Col, Accordion } from "react-bootstrap";
import syllabusdata from "@/data/syllabus";

import "bootstrap/dist/css/bootstrap.min.css";

const Syllabusdetails = () => {
  const router = useRouter();

  if (!syllabusdata || syllabusdata.length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Container>
        <div id="syllabus">
          <Accordion defaultActiveKey="0">
            <div className="container py-5">
              <div className="mt-5" id="syllabus">
                <div className="one">
                  <h1
                    className=""
                  >
                    Teaching scheme & Syllabus
                  </h1>
                </div>
                <div className="accordion mt-25" id="accordionExample">
                  {syllabusdata.map((sl, index) => (
                    <Accordion.Item eventKey={index.toString()} key={sl.id}>
                      <Accordion.Header>{sl.branch}</Accordion.Header>
                      <Accordion.Body>
                        <Row>
                          <Col>
                            {sl.subbranch.map((sub, subIndex) => (
                              <Accordion key={sub.id}>
                                <Accordion.Item eventKey={`${index}-${subIndex}`}>
                                  <Accordion.Header>{sub.name}</Accordion.Header>
                                  <Accordion.Body>
                                    {sub.sub && (
                                      <table className="table">
                                        <tbody>
                                          {sub.sub.map((subsub) => (
                                            <tr key={subsub.id}>
                                              <td>
                                                <a
                                                  href={`/showsyllabus?id=${sl.id}&branchId=${sub.id}&subId=${subsub.id}`}
                                                >
                                                  {subsub.name}
                                                </a>
                                              </td>
                                            </tr>
                                          ))}
                                        </tbody>
                                      </table>
                                    )}
                                  </Accordion.Body>
                                </Accordion.Item>
                              </Accordion>
                            ))}
                          </Col>
                        </Row>
                      </Accordion.Body>
                    </Accordion.Item>
                  ))}
                </div>
              </div>
            </div>
          </Accordion>
        </div>
      </Container>
    </div>
  );
};

export default Syllabusdetails;