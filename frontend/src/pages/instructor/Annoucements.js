import React, { useState } from "react";
import { Container, Row, Col, Card, Form, Button, Alert } from "react-bootstrap";
import DashboardSidebar from "../../components/DashboardSidebar";
import Header from "../../components/Header";
const StudentAnnouncement = () => {
  const [announcement, setAnnouncement] = useState({
    type: "",
    title: "",
    description: "",
    file: null,
  });
  const [successMessage, setSuccessMessage] = useState("");

  const handleChange = (e) => {
    setAnnouncement({ ...announcement, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    setAnnouncement({ ...announcement, file: e.target.files[0] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Announcement Submitted:", announcement);
    setSuccessMessage("Your announcement has been submitted for review!");

    // Reset Form
    setAnnouncement({ type: "", title: "", description: "", file: null });
    setTimeout(() => setSuccessMessage(""), 5000);
  };

  return (
    <Container fluid>
      <Header/>
      <Row>
        {/* Sidebar */}
        <Col md={3}>
          <DashboardSidebar role="instructor" />
        </Col>

        {/* Main Content */}
        <Col md={9} className="p-4">
          <h4 className="text-center" style={{ color: "#ff5733" }}>Submit Student Announcement</h4>

          {successMessage && <Alert variant="success">{successMessage}</Alert>}

          {/* Announcement Form */}
          <Card className="p-4 shadow">
            <Form onSubmit={handleSubmit}>
              {/* Announcement Type */}
              <Form.Group className="mb-3">
                <Form.Label>Announcement Type</Form.Label>
                <Form.Select name="type" value={announcement.type} onChange={handleChange} required>
                  <option value="">Select Type</option>
                  <option value="General">General Announcement</option>
                  <option value="Event">Event Notice</option>
                  <option value="Request">Special Request</option>
                </Form.Select>
              </Form.Group>

              {/* Title */}
              <Form.Group className="mb-3">
                <Form.Label>Title</Form.Label>
                <Form.Control type="text" name="title" value={announcement.title} onChange={handleChange} placeholder="Enter announcement title" required />
              </Form.Group>

              {/* Description */}
              <Form.Group className="mb-3">
                <Form.Label>Description</Form.Label>
                <Form.Control as="textarea" rows={4} name="description" value={announcement.description} onChange={handleChange} placeholder="Provide details about the announcement" required />
              </Form.Group>


              {/* Submit Button */}
              <Button variant="success" type="submit">
                Announcement
              </Button>
            </Form>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default StudentAnnouncement;
