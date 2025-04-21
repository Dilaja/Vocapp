import React from "react";
import { Navbar, Container, Dropdown, Form, FormControl, Button } from "react-bootstrap";
import { useLanguage } from "../context/LanguageContext"; // Import language context

const RoleBasedNavBar = () => {
  const { language, setLanguage, translations } = useLanguage(); // Get language data

  return (
    <Navbar bg="primary" variant="dark" expand="lg" style={{ marginLeft: "250px" }}>
      <Container fluid className="d-flex justify-content-between">
        {/* Search Bar */}
        <Form className="d-flex">
          <FormControl
            type="search"
            placeholder="Search..."
            className="me-2"
            aria-label="Search"
          />
          <Button variant="outline-light">Search</Button>
        </Form>

        {/* Language Selector */}
        <Dropdown>
          <Dropdown.Toggle variant="light" className="text-dark">
            🌍 {translations[language].selectLanguage}
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item onClick={() => setLanguage("en")}>English</Dropdown.Item>
            <Dropdown.Item onClick={() => setLanguage("si")}>සිංහල</Dropdown.Item>
            <Dropdown.Item onClick={() => setLanguage("ta")}>தமிழ்</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </Container>
    </Navbar>
  );
};

export default RoleBasedNavBar;


