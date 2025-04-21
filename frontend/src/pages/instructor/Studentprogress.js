import React, { useState } from "react";
import { Table, Card, Form } from "react-bootstrap";
import DashboardSidebar from "../../components/DashboardSidebar"; // Import Sidebar
import Header from "../../components/Header";

const StudentProgress = () => {
  // Sample Data
  const courses = ["Computer Science", "Mathematics", "Physics"];
  const students = ["John Emma", "Alice Smith", "Michael Brown"];

  const progressData = [
    { studentName: "John Emma", course: "Computer Science", module: "PHP Programming", marks: 85, grade: "A", gpa: 4.0 },
    { studentName: "John Emma", course: "Computer Science", module: "Database", marks: 78, grade: "B+", gpa: 3.5 },
    { studentName: "John Emma", course: "Computer Science", module: "UI/UX", marks: 90, grade: "A+", gpa: 4.0 },
    { studentName: "Alice Smith", course: "Mathematics", module: "Calculus", marks: 88, grade: "A", gpa: 3.8 },
    { studentName: "Michael Brown", course: "Physics", module: "Quantum Mechanics", marks: 76, grade: "B", gpa: 3.2 },
  ];

  // State for selected Course & Student
  const [selectedCourse, setSelectedCourse] = useState(courses[0]);
  const [selectedStudent, setSelectedStudent] = useState(students[0]);

  // Filter data based on selection
  const filteredData = progressData.filter(
    (item) => item.course === selectedCourse && item.studentName === selectedStudent
  );

  // Calculate Total GPA
  const totalGPA = filteredData.length > 0
    ? (filteredData.reduce((sum, item) => sum + item.gpa, 0) / filteredData.length).toFixed(2)
    : "N/A";

  return (
    <div className="d-flex">
      <Header/>
      {/* Sidebar */}
      <DashboardSidebar role="instructor" />

      {/* Main Content */}
      <div className="container-fluid" style={{ marginLeft: "250px", padding: "20px" }}>
        <Card className="shadow-lg p-4 mx-auto" style={{ maxWidth: "900px", marginTop: "50px" }}>
          <Card.Title className="text-center" style={{ color: "#ff5733" }}>Student Progress Report</Card.Title>
          <Card.Body>
            {/* Course Selection */}
            <Form.Group className="mb-3">
              <Form.Label><strong>Select Course:</strong></Form.Label>
              <Form.Control as="select" value={selectedCourse} onChange={(e) => setSelectedCourse(e.target.value)}>
                {courses.map((course, index) => (
                  <option key={index} value={course}>{course}</option>
                ))}
              </Form.Control>
            </Form.Group>

            {/* Student Selection */}
            <Form.Group className="mb-3">
              <Form.Label><strong>Select Student:</strong></Form.Label>
              <Form.Control as="select" value={selectedStudent} onChange={(e) => setSelectedStudent(e.target.value)}>
                {students.map((student, index) => (
                  <option key={index} value={student}>{student}</option>
                ))}
              </Form.Control>
            </Form.Group>

            {/* Progress Table */}
            <Table bordered hover responsive>
              <thead className="bg-primary text-white text-center">
                <tr>
                  <th>Module Name</th>
                  <th>Marks</th>
                  <th>Grade</th>
                  <th>GPA</th>
                </tr>
              </thead>
              <tbody>
                {filteredData.length > 0 ? (
                  filteredData.map((data, index) => (
                    <tr key={index} className="text-center">
                      <td>{data.module}</td>
                      <td>{data.marks}</td>
                      <td>{data.grade}</td>
                      <td>{data.gpa}</td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="4" className="text-center text-danger">No records found</td>
                  </tr>
                )}
              </tbody>
              {/* Total GPA Row */}
              <tfoot>
                <tr className="bg-light text-center">
                  <td colSpan="3"><strong>Total GPA</strong></td>
                  <td><strong>{totalGPA}</strong></td>
                </tr>
              </tfoot>
            </Table>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};

export default StudentProgress;
