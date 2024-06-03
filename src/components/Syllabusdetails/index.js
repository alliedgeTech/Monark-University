import React from "react";
import { useRouter } from "next/router";
import { Container, Row, Col, Accordion, Card } from "react-bootstrap";
import syllabusdata from "@/data/syllabus";

import "bootstrap/dist/css/bootstrap.min.css";

const Syllabusdetails = () => {
  const router = useRouter();
  const { id } = router.query;

  if (!syllabusdata || syllabusdata.length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Container>
        <div className="mt-100" id="syllabus">
        <h2 className="it-section-title-3" style={{textAlign:"center" , marginBottom:50}}>Teaching scheme & Syllabus</h2>
          <Accordion defaultActiveKey="0">
         
            {syllabusdata
              .map((sl, index) => (
                <Accordion.Item eventKey={index.toString()} key={sl.id}>
                  <Accordion.Header>{sl.branch}</Accordion.Header>
                  <Accordion.Body>
                    <Row>
                      <div>
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
                                            <a href={`/syllabus/id=${subsub.slug}}`}>
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
                      </div>
                    </Row>
                  </Accordion.Body>
                </Accordion.Item>
              ))
              .slice(0, 1)}
          </Accordion>
        </div>
      </Container>

      <Accordion defaultActiveKey="0">
        {syllabusdata
          .map((sl, index) => (
            <Accordion.Item eventKey={index.toString()} key={sl.id}>
              <Accordion.Header>{sl.branch}</Accordion.Header>
              <Accordion.Body>
                <Row>
                  <div>
                    {sl.subbranch.map((sub) => (
                      <Accordion key={sub.id}>
                        <h4>{sub.name}</h4>
                      </Accordion>
                    ))}
                  </div>
                </Row>
              </Accordion.Body>
            </Accordion.Item>
          ))
          .slice(1, 11)}
      </Accordion>
    </div>
  );
};

export default Syllabusdetails;
