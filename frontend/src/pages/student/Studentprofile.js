import React, { useState, useEffect } from "react";
import { Container, Row, Col, Card, ListGroup, Table } from "react-bootstrap";
import DashboardSidebar from "../../components/DashboardSidebar";
import Header from "../../components/Header";
const StudentProfile = () => {
  // Sample student data
  const [student, setStudent] = useState({
    name: "Saman Perera",
    studentId: "S123456",
    email: "saman_perera@example.com",
    phone: "+1 234 567 890",
    Coursename: "Vocational Training - Electrical Engineering",
    
    gpa: 3.8,
    attendance: "92%",
    enrolledCourses: [
      { id: 1, name: "Electrical Wiring Basics", progress: "85%" },
      { id: 2, name: "Safety & Regulations", progress: "78%" },
      { id: 3, name: "Advanced Circuitry", progress: "90%" },
    ],
  });

  return (
    <Container fluid>
      <Header/>
      <Row>
        {/* Sidebar */}
        <Col md={3}>
          <DashboardSidebar role="student" />
        </Col>

        {/* Main Content */}
        <Col md={9} className="p-4">
          <Card className="shadow p-4">
            <h4 className="text-center" style={{ color: "#ff5733" }}>Student Profile</h4>
            <hr />

            {/* Personal Details */}
            <Card className="mb-4 p-3">
              <h4 className="text-secondary">Personal Information</h4>
              <ListGroup variant="flush">
                <ListGroup.Item><strong>Name:</strong> {student.name}</ListGroup.Item>
                <ListGroup.Item><strong>Student ID:</strong> {student.studentId}</ListGroup.Item>
                <ListGroup.Item><strong>Email:</strong> {student.email}</ListGroup.Item>
                <ListGroup.Item><strong>Phone:</strong> {student.phone}</ListGroup.Item>
                <ListGroup.Item><strong>Program:</strong> {student.Coursename}</ListGroup.Item>
                
              </ListGroup>
            </Card>

            {/* Academic Performance */}
            <Row>
              <Col md={6}>
                <Card className="p-3 text-center bg-light">
                  <h5>GPA</h5>
                  <h3 className="text-success">{student.gpa}</h3>
                </Card>
              </Col>
              <Col md={6}>
                <Card className="p-3 text-center bg-light">
                  <h5>Attendance</h5>
                  <h3 className="text-primary">{student.attendance}</h3>
                </Card>
              </Col>
            </Row>

            {/* Enrolled Courses */}
            <Card className="mt-4 p-3">
              <h4 className="text-secondary">Enrolled Courses</h4>
              <Table striped bordered hover>
                <thead className="bg-primary text-white">
                  <tr>
                    <th>Course Module</th>
                    <th>Progress</th>
                  </tr>
                </thead>
                <tbody>
                  {student.enrolledCourses.map((course, index) => (
                    <tr key={index}>
                      <td>{course.name}</td>
                      <td>{course.progress}</td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </Card>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default StudentProfile;
