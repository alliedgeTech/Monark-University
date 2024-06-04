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
                <th>{s.branch}</th>
              </tr>
              {s.subbranch.map((sub, subIndex) => (
                <tr key={subIndex}>
                  <td>{sub.name}</td>
                </tr>
              ))}
            </React.Fragment>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Showsyllabusdetails;