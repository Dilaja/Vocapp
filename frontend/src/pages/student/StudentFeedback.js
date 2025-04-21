import React, { useState } from "react";
import { Form, Button, Card } from "react-bootstrap";
import DashboardSidebar from "../../components/DashboardSidebar"; // Import Sidebar
import Header from "../../components/Header";
const StudentEvaluation = () => {
  const [evaluation, setEvaluation] = useState({
    studentName: "",
    instructorName: "",
    module: "",
    teachingRating: 0,
    contentRating: 0,
    resourceRating: 0,
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
    console.log("Student Evaluation Submitted:", evaluation);
    alert("Your evaluation has been submitted successfully!");
  };

  return (
    <div className="d-flex">
<Header/>
      {/* Sidebar */}
      <DashboardSidebar role="student" />

      {/* Main Content */}
      <div className="container-fluid" style={{ marginLeft: "350px", padding: "20px" }}>
        <Card className="shadow-lg p-4 mx-auto" style={{ maxWidth: "1500px", marginTop: "50px" }}>
          <Card.Title className="text-center" style={{ color: "#ff5733" }}>Course Module Evaluation</Card.Title>
          <Card.Body>
            <Form onSubmit={handleSubmit}>

              {/* Student Name */}
              <Form.Group className="mb-6">
                <Form.Label>Student Name</Form.Label>
                <Form.Control
                  type="text"
                  name="studentName"
                  placeholder="Enter your name"
                  value={evaluation.studentName}
                  onChange={handleChange}
                  required
                />
              </Form.Group>

              {/* Select Instructor */}
              <Form.Group className="mb-6">
                <Form.Label>Select Instructor</Form.Label>
                <Form.Select name="instructorName" onChange={handleChange} required>
                  <option value="">-- Select Instructor --</option>
                  <option value="Dr. Smith">Dr. Smith</option>
                  <option value="Prof. Johnson">Prof. Johnson</option>
                  <option value="Mr. Brown">Mr. Brown</option>
                </Form.Select>
              </Form.Group>

              {/* Select Course Module */}
              <Form.Group className="mb-6">
                <Form.Label>Select Module</Form.Label>
                <Form.Select name="module" onChange={handleChange} required>
                  <option value="">-- Select Module --</option>
                  <option value="Software Engineering">Software Engineering</option>
                  <option value="Artificial Intelligence">Artificial Intelligence</option>
                  <option value="Business Management">Business Management</option>
                </Form.Select>
              </Form.Group>

              {/* Teaching Effectiveness Rating */}
              <Form.Group className="mb-6">
                <Form.Label>Teaching Effectiveness</Form.Label>
                <div>
                  {[1, 2, 3, 4, 5].map((star) => (
                    <span
                      key={star}
                      style={{
                        fontSize: "1.5rem",
                        cursor: "pointer",
                        color: evaluation.teachingRating >= star ? "gold" : "gray",
                      }}
                      onClick={() => handleRating("teachingRating", star)}
                    >
                      ★
                    </span>
                  ))}
                </div>
              </Form.Group>

              {/* Course Content Clarity Rating */}
              <Form.Group className="mb-6">
                <Form.Label>Course Content Clarity</Form.Label>
                <div>
                  {[1, 2, 3, 4, 5].map((star) => (
                    <span
                      key={star}
                      style={{
                        fontSize: "1.5rem",
                        cursor: "pointer",
                        color: evaluation.contentRating >= star ? "gold" : "gray",
                      }}
                      onClick={() => handleRating("contentRating", star)}
                    >
                      ★
                    </span>
                  ))}
                </div>
              </Form.Group>

              {/* Learning Resources Quality Rating */}
              <Form.Group className="mb-6">
                <Form.Label>Learning Resources Quality</Form.Label>
                <div>
                  {[1, 2, 3, 4, 5].map((star) => (
                    <span
                      key={star}
                      style={{
                        fontSize: "1.5rem",
                        cursor: "pointer",
                        color: evaluation.resourceRating >= star ? "gold" : "gray",
                      }}
                      onClick={() => handleRating("resourceRating", star)}
                    >
                      ★
                    </span>
                  ))}
                </div>
              </Form.Group>

              {/* Additional Comments */}
              <Form.Group className="mb-6">
                <Form.Label>Additional Comments</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={3}
                  name="comments"
                  placeholder="Share your experience..."
                  value={evaluation.comments}
                  onChange={handleChange}
                  required
                />
              </Form.Group>

              {/* Submit Button */}
              <Button variant="success" type="submit" className="w-100">
                Submit Evaluation
              </Button>
            </Form>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};

export default StudentEvaluation;


