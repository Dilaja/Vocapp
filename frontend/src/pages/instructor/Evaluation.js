import React, { useState } from "react";
import { Form, Button, Card } from "react-bootstrap";
import DashboardSidebar from "../../components/DashboardSidebar"; // Import Sidebar
import Header from "../../components/Header";
const InstructorStudentEvaluation = () => {
  const [evaluation, setEvaluation] = useState({
    studentName: "",
    courseModule: "",
    participation: 0,
    assignmentQuality: 0,
    understanding: 0,
    attendance: 0,
    comments: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEvaluation({ ...evaluation, [name]: value });
  };

  const handleRating = (field, rating) => {
    setEvaluation({ ...evaluation, [field]: rating });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Instructor Evaluation Submitted:", evaluation);
    alert("Evaluation submitted successfully!");
  };

  return (
    <div className="d-flex">
      <Header/>
      {/* Sidebar */}
      <DashboardSidebar role="instructor" />

      {/* Main Content */}
      <div className="container-fluid" style={{ marginLeft: "250px", padding: "20px" }}>
        <Card className="shadow-lg p-4 mx-auto" style={{ maxWidth: "700px", marginTop: "50px" }}>
          <Card.Title className="text-center" style={{ color: "#ff5733" }}>Instructor Evaluation of Student</Card.Title>
          <Card.Body>
            <Form onSubmit={handleSubmit}>

              {/* Select Student */}
              <Form.Group className="mb-3">
                <Form.Label>Student Name</Form.Label>
                <Form.Select name="studentName" onChange={handleChange} required>
                  <option value="">-- Select Student --</option>
                  <option value="John Doe">John Doe</option>
                  <option value="Alice Smith">Alice Smith</option>
                  <option value="Michael Brown">Michael Brown</option>
                </Form.Select>
              </Form.Group>

              {/* Select Course Module */}
              <Form.Group className="mb-3">
                <Form.Label>Course Module</Form.Label>
                <Form.Select name="courseModule" onChange={handleChange} required>
                  <option value="">-- Select Module --</option>
                  <option value="Mathematics">Mathematics</option>
                  <option value="Physics">Physics</option>
                  <option value="Computer Science">Computer Science</option>
                </Form.Select>
              </Form.Group>

              {/* Participation Rating */}
              <Form.Group className="mb-3">
                <Form.Label>Participation</Form.Label>
                <div>
                  {[1, 2, 3, 4, 5].map((star) => (
                    <span
                      key={star}
                      style={{
                        fontSize: "1.5rem",
                        cursor: "pointer",
                        color: evaluation.participation >= star ? "gold" : "gray",
                      }}
                      onClick={() => handleRating("participation", star)}
                    >
                      ★
                    </span>
                  ))}
                </div>
              </Form.Group>

              {/* Assignment Quality Rating */}
              <Form.Group className="mb-3">
                <Form.Label>Assignment Quality</Form.Label>
                <div>
                  {[1, 2, 3, 4, 5].map((star) => (
                    <span
                      key={star}
                      style={{
                        fontSize: "1.5rem",
                        cursor: "pointer",
                        color: evaluation.assignmentQuality >= star ? "gold" : "gray",
                      }}
                      onClick={() => handleRating("assignmentQuality", star)}
                    >
                      ★
                    </span>
                  ))}
                </div>
              </Form.Group>

              {/* Understanding Level Rating */}
              <Form.Group className="mb-3">
                <Form.Label>Understanding of Concepts</Form.Label>
                <div>
                  {[1, 2, 3, 4, 5].map((star) => (
                    <span
                      key={star}
                      style={{
                        fontSize: "1.5rem",
                        cursor: "pointer",
                        color: evaluation.understanding >= star ? "gold" : "gray",
                      }}
                      onClick={() => handleRating("understanding", star)}
                    >
                      ★
                    </span>
                  ))}
                </div>
              </Form.Group>

              {/* Attendance Rating */}
              <Form.Group className="mb-3">
                <Form.Label>Attendance</Form.Label>
                <div>
                  {[1, 2, 3, 4, 5].map((star) => (
                    <span
                      key={star}
                      style={{
                        fontSize: "1.5rem",
                        cursor: "pointer",
                        color: evaluation.attendance >= star ? "gold" : "gray",
                      }}
                      onClick={() => handleRating("attendance", star)}
                    >
                      ★
                    </span>
                  ))}
                </div>
              </Form.Group>

              {/* Additional Comments */}
              <Form.Group className="mb-3">
                <Form.Label>Additional Comments</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={3}
                  name="comments"
                  placeholder="Provide feedback..."
                  value={evaluation.comments}
                  onChange={handleChange}
                  required
                />
              </Form.Group>

              {/* Submit Button */}
              <Button variant="success" type="submit" className="w-100">
                Module Evaluation
              </Button>
            </Form>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};

export default InstructorStudentEvaluation;
