import React from "react";
import { useRouter } from "next/router";
import { Container, Row, Col, Accordion, Card } from "react-bootstrap";
import syllabusdata from "@/data/syllabus";

import "bootstrap/dist/css/bootstrap.min.css";

const Showsyllabusdetails = () => {
  const router = useRouter();
  const { id } = router.query;

  if (!syllabusdata || syllabusdata.length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <table className="table">
        <tbody>
          {syllabusdata.map((s, index) => (
            <React.Fragment key={index}>
              <tr>
                <th colSpan={4}>{s.branch}</th>
              </tr>
              {s.subbranch.map((sub, subIndex) => (
                <React.Fragment key={subIndex}>
                  <tr>
                    <th colSpan={4}>{sub.name}</th>
                  </tr>
                  {sub.sub && sub.sub.map((subsub) => (
                    <React.Fragment key={subsub.id}>
                      <tr>
                        <th colSpan={4}>{subsub.title1}</th>
                      </tr>
                      <tr>
                        <th colSpan={4}>{subsub.title2}</th>
                      </tr>
                      <tr>
                        <th colSpan={4}>{subsub.title3}</th>
                      </tr>
                      {subsub.tabledata && subsub.tabledata.map((data) => (
                        <tr key={data.id}>
                          <td>{data.no}</td>
                          <td>{data.coursecode}</td>
                          <td>{data.coursename}</td>
                          <td>{data.category}</td>
                          <td>{data.l}</td>
                          <td>{data.p}</td>
                          <td>{data.c}</td>
                          <td>{data.t}</td>
                        </tr>
                      ))}
                    </React.Fragment>
                  ))}
                </React.Fragment>
              ))}
            </React.Fragment>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Showsyllabusdetails;