import React, { useState } from "react";
import { Form, Button, Card, Alert, Modal } from "react-bootstrap";

const AnnouncementForm = () => {
  const [title, setTitle] = useState("");
  const [message, setMessage] = useState("");
  const [group, setGroup] = useState("All Students");
  const [schedule, setSchedule] = useState(false);
  const [date, setDate] = useState("");
  const [showAlert, setShowAlert] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowAlert(true);
    // Send data to backend (API Call)
  };

  return (
    <Card className="p-4">
      <h4>📢 Create Announcement</h4>
      {showAlert && <Alert variant="success">Announcement Sent Successfully!</Alert>}
      
      <Form onSubmit={handleSubmit}>
        <Form.Group>
          <Form.Label>Title</Form.Label>
          <Form.Control type="text" placeholder="Enter title" value={title} onChange={(e) => setTitle(e.target.value)} required />
        </Form.Group>

        <Form.Group className="mt-3">
          <Form.Label>Message</Form.Label>
          <Form.Control as="textarea" rows={3} placeholder="Enter announcement details" value={message} onChange={(e) => setMessage(e.target.value)} required />
        </Form.Group>

        <Form.Group className="mt-3">
          <Form.Label>Target Audience</Form.Label>
          <Form.Select value={group} onChange={(e) => setGroup(e.target.value)}>
            <option>All Students</option>
            <option>Group A</option>
            <option>Group B</option>
            <option>Individual Selection</option>
          </Form.Select>
        </Form.Group>

        <Form.Group className="mt-3">
          <Form.Check type="checkbox" label="Schedule for later" onChange={() => setSchedule(!schedule)} />
          {schedule && (
            <Form.Control type="datetime-local" className="mt-2" value={date} onChange={(e) => setDate(e.target.value)} />
          )}
        </Form.Group>

        <Button variant="primary" type="submit" className="mt-3">Send Announcement</Button>
      </Form>
    </Card>
  );
};

export default AnnouncementForm;
