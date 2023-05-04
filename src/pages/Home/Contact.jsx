/* eslint-disable no-unused-vars */
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { FaLocationArrow, FaPhone, FaMailBulk } from "react-icons/fa";

const Contact = () => {
  return (
    <Container>
      <h2 className="mt-5 mb-2">Contact With Us</h2>

      <Row xs={1} md={2} lg={3} className="mt-4 g-4">
        <Col className="text-center border p-2">
          <div className="fs-3">
            <FaLocationArrow />
          </div>
          <h4 className="my-2">Address</h4>
          <p>Mumbai,India</p>
        </Col>
        <Col className="text-center border p-2">
          <div className="fs-3">
            <FaPhone />
          </div>
          <h4 className="my-2">Call Us</h4>
          <p>01914-433136</p>
        </Col>
        <Col className="text-center border p-2">
          <div className="fs-3">
            <FaMailBulk />
          </div>
          <h4 className="my-2">Email</h4>
          <p>thossen49@gmail.com</p>
        </Col>
      </Row>
    </Container>
  );
};

export default Contact;
