import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import landingImage from "../assets/landing-image.png";
import Navbar from "../components/Navbar";

const Home = () => {
  

  return (
    
    <div className="landing-page d-flex align-items-center ">
      <Navbar/>
      <Container>
        <Row className="align-items-center">
          {/* Left Side: App Info */}
          <Col md={6} className="text-left">
           
            <p className="lead text-dark">
              
                 "Empowering Your Future with VoEdu."
                
            </p>
            <Button variant="success" size="lg" href="/about">
              About
            </Button>
          </Col>

          {/* Right Side: Image */}
          <Col md={6} className="text-center">
            <img
              src={landingImage}
              alt="Vocational Education"
              className="img-fluid rounded shadow-lg"
              style={{ maxWidth: "80%", height: "80%" }}
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Home;

