import React, { useState } from "react";
import { Card, Table, Form } from "react-bootstrap";
import { Bar } from "react-chartjs-2"; // Import Bar chart from react-chartjs-2
import DashboardSidebar from "../../components/DashboardSidebar"; // Import Sidebar
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from "chart.js";
import Header from "../../components/Header";
// Register the required components for Chart.js
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const InstructorEvaluationSummary = () => {
  // Sample evaluations data
  const [evaluations] = useState([
    {
      studentName: "John Doe",
      courseModule: "Mathematics",
      participation: 4,
      assignmentQuality: 5,
      understanding: 4,
      attendance: 5,
      comments: "Great participation, needs to work on assignments.",
    },
    {
      studentName: "Alice Smith",
      courseModule: "Physics",
      participation: 3,
      assignmentQuality: 4,
      understanding: 5,
      attendance: 4,
      comments: "Strong understanding, but could participate more in class.",
    },
    {
      studentName: "Michael Brown",
      courseModule: "Computer Science",
      participation: 5,
      assignmentQuality: 5,
      understanding: 5,
      attendance: 5,
      comments: "Excellent performance overall.",
    },
  ]);

  const [selectedStudent, setSelectedStudent] = useState("");
  const [selectedModule, setSelectedModule] = useState("");

  // Filter evaluations based on the selected student and module
  const filteredEvaluations = evaluations.filter(
    (evaluation) =>
      (selectedStudent ? evaluation.studentName === selectedStudent : true) &&
      (selectedModule ? evaluation.courseModule === selectedModule : true)
  );

  // Helper function to render stars
  const renderStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <span
          key={i}
          style={{
            fontSize: "1.5rem",
            color: i <= rating ? "gold" : "gray",
            cursor: "pointer",
          }}
        >
          ★
        </span>
      );
    }
    return stars;
  };

  // Prepare chart data based on filtered evaluations
  const chartData = {
    labels: filteredEvaluations.map((evaluation) => evaluation.studentName),
    datasets: [
      {
        label: "Participation",
        data: filteredEvaluations.map((evaluation) => evaluation.participation),
        backgroundColor: "rgba(255, 159, 64, 0.6)", // Color for Participation bars
      },
      {
        label: "Assignment Quality",
        data: filteredEvaluations.map((evaluation) => evaluation.assignmentQuality),
        backgroundColor: "rgba(75, 192, 192, 0.6)", // Color for Assignment Quality bars
      },
      {
        label: "Understanding",
        data: filteredEvaluations.map((evaluation) => evaluation.understanding),
        backgroundColor: "rgba(54, 162, 235, 0.6)", // Color for Understanding bars
      },
      {
        label: "Attendance",
        data: filteredEvaluations.map((evaluation) => evaluation.attendance),
        backgroundColor: "rgba(153, 102, 255, 0.6)", // Color for Attendance bars
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Instructor Evaluation Summary",
      },
    },
  };

  return (
    <div className="d-flex">
      <Header/>
      {/* Sidebar */}
      <DashboardSidebar role="admin" />

      {/* Main Content */}
      <div className="container-fluid" style={{ marginLeft: "250px", padding: "20px" }}>
        <Card className="shadow-lg p-4 mx-auto" style={{ maxWidth: "900px", marginTop: "50px" }}>
          <Card.Title className="text-center text-primary">Instructor Evaluation Summary</Card.Title>
          <Card.Body>
            {/* Filters for Student and Module */}
            <Form>
              <Form.Group className="mb-3">
                <Form.Label>Student</Form.Label>
                <Form.Select
                  value={selectedStudent}
                  onChange={(e) => setSelectedStudent(e.target.value)}
                >
                  <option value="">-- Select Student --</option>
                  <option value="John Doe">John Doe</option>
                  <option value="Alice Smith">Alice Smith</option>
                  <option value="Michael Brown">Michael Brown</option>
                </Form.Select>
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Course Module</Form.Label>
                <Form.Select
                  value={selectedModule}
                  onChange={(e) => setSelectedModule(e.target.value)}
                >
                  <option value="">-- Select Module --</option>
                  <option value="Mathematics">Mathematics</option>
                  <option value="Physics">Physics</option>
                  <option value="Computer Science">Computer Science</option>
                </Form.Select>
              </Form.Group>
            </Form>

            {/* Bar Chart */}
            <Bar data={chartData} options={options} />

            {/* Evaluations Table */}
            <Table striped bordered hover responsive style={{ marginTop: "30px" }}>
              <thead>
                <tr>
                  <th>Student Name</th>
                  <th>Course Module</th>
                  <th>Participation</th>
                  <th>Assignment Quality</th>
                  <th>Understanding</th>
                  <th>Attendance</th>
                  <th>Comments</th>
                </tr>
              </thead>
              <tbody>
                {filteredEvaluations.map((evaluation, index) => (
                  <tr key={index}>
                    <td>{evaluation.studentName}</td>
                    <td>{evaluation.courseModule}</td>
                    <td>{renderStars(evaluation.participation)}</td>
                    <td>{renderStars(evaluation.assignmentQuality)}</td>
                    <td>{renderStars(evaluation.understanding)}</td>
                    <td>{renderStars(evaluation.attendance)}</td>
                    <td>{evaluation.comments}</td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};

export default InstructorEvaluationSummary;
