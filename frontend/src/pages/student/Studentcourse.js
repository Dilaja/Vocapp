import React, { useState, useEffect } from "react";
import axios from "axios";
import { Container, Row, Col, Card, ListGroup, Button } from "react-bootstrap";
import DashboardSidebar from "../../components/DashboardSidebar";
import Header from "../../components/Header";

const StudentCourseCurriculum = () => {
  const [courses, setCourses] = useState([]);
  const [selectedCourse, setSelectedCourse] = useState(null);

  const userId = localStorage.getItem("userId");

  useEffect(() => {
    if (userId) {
      axios.get(`http://localhost:5000/api/coursematerials/student/materials/${userId}`)
        .then(res => {
          setCourses(res.data);
          if (res.data.length > 0) {
            setSelectedCourse(res.data[0]);
          }
        })
        .catch(err => {
          console.error("Failed to fetch materials", err);
        });
    }
  }, [userId]);

  return (
    <Container fluid>
      <Header />
      <Row>
        <Col md={3}>
          <DashboardSidebar role="student" />
        </Col>
  
        <Col md={9} className="p-4">
          <h4 className="text-left" style={{ color: "#ff5733" }}>My Course Material</h4>
  
          {courses.length === 0 ? (
            <p>You are not enrolled in any courses yet.</p>
          ) : (
            <>
              <Card className="mb-4">
                <Card.Body>
                  <h4>Select Course</h4>
                  <ListGroup horizontal>
                    {courses.map(course => (
                      <ListGroup.Item
                        key={course.course_code}
                        action
                        active={selectedCourse?.course_code === course.course_code}
                        onClick={() => setSelectedCourse(course)}
                      >
                        {course.course_code}
                      </ListGroup.Item>
                    ))}
                  </ListGroup>
                </Card.Body>
              </Card>
  
              {/* Curriculum */}
              <Card>
                <Card.Body>
                  <h4>{selectedCourse?.course_code} Curriculum</h4>
                  {selectedCourse?.modules?.map((module, index) => (
                    <div key={index} className="mb-3">
                      <h5 className="text-secondary">{module.title}</h5>
                      <ListGroup>
                        {module.materials.map((material, i) => (
                          <ListGroup.Item key={i}>
                            {material.name} ({material.type})
                            <Button variant="link" href={material.link} download>
                              Download
                            </Button>
                          </ListGroup.Item>
                        ))}
                      </ListGroup>
                    </div>
                  ))}
                </Card.Body>
              </Card>
            </>
          )}
        </Col>
      </Row>
    </Container>
  );
  
};

export default StudentCourseCurriculum;
