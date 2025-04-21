import React, { useState } from "react";
import { Table, Card, Form } from "react-bootstrap";
import DashboardSidebar from "../../components/DashboardSidebar"; // Import Sidebar
import Header from "../../components/Header";

const StudentEvaluationSummary = () => {
  // Sample evaluation data
  const evaluationData = [
    { studentName: "Kasun Perera", courseModule: "PHP Programming", participation: 4, assignmentQuality: 5, understanding: 3, attendance: 5, overallScore: 4.25 },
    { studentName: "Alice Smith", courseModule: "Physics", participation: 5, assignmentQuality: 4, understanding: 4, attendance: 4, overallScore: 4.25 },
    { studentName: "Jagath perera", courseModule: "PHP Programming", participation: 3, assignmentQuality: 4, understanding: 5, attendance: 5, overallScore: 4.25 },
    { studentName: "Emma Watson", courseModule: "Mathematics", participation: 5, assignmentQuality: 5, understanding: 5, attendance: 5, overallScore: 5.0 },
  ];

  // Extract unique course modules for dropdown
  const modules = [...new Set(evaluationData.map((item) => item.courseModule))];

  // State for selected module
  const [selectedModule, setSelectedModule] = useState(modules[0]);

  // Filter data based on selected module
  const filteredData = evaluationData.filter((data) => data.courseModule === selectedModule);

  return (
    <div className="d-flex">
      <Header/>
      {/* Sidebar for student role */}
      <DashboardSidebar role="instructor" />

      {/* Main Content */}
      <div className="container-fluid" style={{ marginLeft: "250px", padding: "20px" }}>
        <Card className="shadow-lg p-4 mx-auto" style={{ maxWidth: "1100px", marginTop: "50px" }}>
          <Card.Title className="text-center" style={{ color: "#ff5733" }}>Student Module Evaluation Summary</Card.Title>
          <Card.Body>
            {/* Module Selection Dropdown */}
            <Form.Group className="mb-3">
              <Form.Label><strong>Select Course Module:</strong></Form.Label>
              <Form.Control as="select" value={selectedModule} onChange={(e) => setSelectedModule(e.target.value)}>
                {modules.map((module, index) => (
                  <option key={index} value={module}>{module}</option>
                ))}
              </Form.Control>
            </Form.Group>

            {/* Evaluation Table */}
            <Table bordered hover responsive>
              <thead className="bg-primary text-white text-center">
                <tr>
                  <th>Student Name</th>
                  <th>Course Module</th>
                  <th>Participation</th>
                  <th>Assignment Quality</th>
                  <th>Understanding</th>
                  <th>Attendance</th>
                  <th>Overall Score</th>
                </tr>
              </thead>
              <tbody>
                {filteredData.length > 0 ? (
                  filteredData.map((data, index) => (
                    <tr key={index} className="text-center">
                      <td>{data.studentName}</td>
                      <td>{data.courseModule}</td>
                      <td>{data.participation} ★</td>
                      <td>{data.assignmentQuality} ★</td>
                      <td>{data.understanding} ★</td>
                      <td>{data.attendance} ★</td>
                      <td><strong>{data.overallScore}</strong></td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="7" className="text-center text-danger">No evaluations available for this module</td>
                  </tr>
                )}
              </tbody>
            </Table>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};

export default StudentEvaluationSummary;



