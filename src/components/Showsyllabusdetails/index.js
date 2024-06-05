import React from "react";
import { useRouter } from "next/router";
import { Container, Row, Col, Table } from "react-bootstrap";
import syllabusdata from "@/data/syllabus";

import "bootstrap/dist/css/bootstrap.min.css";

const Showsyllabusdetails = () => {
  const router = useRouter();
  const { id } = router.query;

  if (!syllabusdata || syllabusdata.length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <Container>
      <Row>
        <Col>
          {syllabusdata.map((s, index) => (
            <div key={index}>
              <h1 className="text-center text-warning">{s.branch}</h1>
              {s.subbranch.map((sub, subIndex) => (
                <div key={subIndex}>
                  <h3 className="mt-3">{sub.name}</h3>
                  {sub.sub.map((subsub) => (
                    <div key={subsub.id}>
                      {subsub.tables.map((table, tableIndex) => (
                        <div key={tableIndex}>
                          <h4>{table.title1}</h4>
                          <h5>{table.title2}</h5>
                          <h6>{table.title3}</h6>
                          <Table striped bordered hover responsive className="mt-3">
                            <thead>
                              <tr>
                                <th>Sr. No.</th>
                                <th>Course Code</th>
                                <th>Name of Course</th>
                                <th>L</th>
                                <th>T</th>
                                <th>P</th>
                                <th>C</th>
                                <th>Category</th>
                              </tr>
                            </thead>
                            <tbody>
                              {table.tabledata.map((data) => (
                                <tr key={data.id}>
                                  <td>{data.no}</td>
                                  <td>{data.coursecode}</td>
                                  <td>{data.coursename}</td>
                                  <td>{data.l}</td>
                                  <td>{data.t}</td>
                                  <td>{data.p}</td>
                                  <td>{data.c}</td>
                                  <td>{data.category}</td>
                                </tr>
                              ))}
                            </tbody>
                          </Table>
                        </div>
                      ))}
                    </div>
                  ))}
                </div>
              ))}
            </div>
          ))}
        </Col>
      </Row>
    </Container>
  );
};

export default Showsyllabusdetails;
