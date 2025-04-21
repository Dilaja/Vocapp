import React, { useState } from "react";
import DashboardSidebar from "../../components/DashboardSidebar";
import { Form, Button, Container, Row, Col, Alert, Card, ListGroup } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "../../components/Header";
const StudentMessage = () => {
  const [messageData, setMessageData] = useState({
    recipient: "",
    subject: "",
    message: "",
  });

  const [alert, setAlert] = useState(null);
  const [sentMessages, setSentMessages] = useState([]);
  const [receivedMessages] = useState([
    { sender: "Instructor Gunawardena", subject: "Assignment Update", message: "Your assignment deadline is extended." },
    { sender: "Admin Support", subject: "System Maintenance", message: "The system will be down for maintenance at midnight." },
  ]);

  // Handle input change
  const handleChange = (e) => {
    setMessageData({ ...messageData, [e.target.name]: e.target.value });
  };

  // Handle message submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (messageData.recipient && messageData.subject && messageData.message) {
      setSentMessages([...sentMessages, messageData]);
      setAlert({ type: "success", text: "Message sent successfully!" });
      setMessageData({ recipient: "", subject: "", message: "" });
    } else {
      setAlert({ type: "danger", text: "Please fill all fields!" });
    }
  };

  return (
    <div className="d-flex">
      <Header/>
      {/* Student Sidebar */}
      <DashboardSidebar role="student" />

      <Container fluid className="p-4" style={{ marginLeft: "250px", maxWidth: "1200px" }}>
        <h4 className="text-left" style={{ color: "#ff5733" }}>Student Messages</h4>

        {/* Alert Messages */}
        {alert && <Alert variant={alert.type}>{alert.text}</Alert>}

        <Row>
          <Col md={6}>
            {/* Send Message Form */}
            <Card className="p-3 shadow-sm">
              <h4 className="text-primary mb-3">Send Message</h4>
              <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3">
                  <Form.Label>Recipient</Form.Label>
                  <Form.Select name="recipient" value={messageData.recipient} onChange={handleChange} required>
                    <option value="">-- Select Recipient --</option>
                    <option value="Instructor">Instructor</option>
                    <option value="Admin">Admin</option>
                  </Form.Select>
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Subject</Form.Label>
                  <Form.Control type="text" name="subject" value={messageData.subject} onChange={handleChange} required />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Message</Form.Label>
                  <Form.Control as="textarea" rows={3} name="message" value={messageData.message} onChange={handleChange} required />
                </Form.Group>

                <Button type="submit" variant="success" className="w-100">Send</Button>
              </Form>
            </Card>
          </Col>

          <Col md={6}>
            {/* Received Messages */}
            <Card className="p-3 shadow-sm">
              <h4 className="text-primary mb-3">Received Messages</h4>
              <ListGroup>
                {receivedMessages.length === 0 ? (
                  <ListGroup.Item>No messages received</ListGroup.Item>
                ) : (
                  receivedMessages.map((msg, index) => (
                    <ListGroup.Item key={index}>
                      <strong>{msg.sender}</strong> - <em>{msg.subject}</em>
                      <p className="mb-0">{msg.message}</p>
                    </ListGroup.Item>
                  ))
                )}
              </ListGroup>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default StudentMessage;
