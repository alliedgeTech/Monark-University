import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { Container, Row, Col, Table, Accordion } from "react-bootstrap";
import syllabusdata from "@/data/syllabus";
import "bootstrap/dist/css/bootstrap.min.css";
import 'aos/dist/aos.css'; 
import aos from 'aos'; 

const Showsyllabusdetails = () => {
  const router = useRouter();
  const [item, setItem] = useState(null);
  const [found, setFound] = useState(null);
  const [branch, setBranch] = useState(null);

  const { id, branchId, subId } = router.query;

  useEffect(() => {
    if (id && branchId && subId) {
      const foundItem = syllabusdata.find((data) => data?.id == id);
      setFound(foundItem)
      if (foundItem) {
        const branch = foundItem.subbranch.find((b) => b.id == branchId);
        setBranch(branch)
        if (branch) {
          const sub = branch.sub.find((s) => s.id == subId);
          if (sub) {
            setItem(sub);
          }
        }
      }
    }
  }, [id, branchId, subId]);
  useEffect(()=>{
    aos.init({
      offset: 100, // Offset (in pixels) from the original trigger point
      duration: 700, // Duration of animation (in milliseconds)
    });
  })

  if (!item) {
    return <div>Loading...</div>;
  }

  return (
    <Container>
      <Row>
        <Col>
          
          <Accordion className="py-5" defaultActiveKey="0">
            {item.tables.map((table, tableIndex) => (
              <Accordion.Item eventKey={tableIndex.toString()} key={tableIndex}>
                
                <Accordion.Body className="course-details-credit">
                  <div className="one mb-5" data-aos='fade-up'>
                  <h1>{table.title1}</h1>

                  </div>
                  <h5 data-aos='fade-right' className="my-4">{table.title2}</h5>
                  <h6 data-aos='fade-right'>{table.title3}</h6>
                  <Table striped bordered hover responsive className="mt-3">
                    <thead>
                      <tr data-aos='fade-right'>
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
                        <tr key={data.id} data-aos='fade-right'>
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
                </Accordion.Body>
              </Accordion.Item>
            ))}
          </Accordion>
        </Col>
      </Row>
    </Container>
  );
};

export default Showsyllabusdetails;
