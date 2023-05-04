/* eslint-disable no-unused-vars */
import React from "react";
import {
  FaFacebook,
  FaTwitter,
  FaYoutube,
  FaGithub,
  FaGoogle,
} from "react-icons/fa";
import "../../styles/footer.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Footer = () => {
  return (
    <footer className="mt-5">
      <div className="d-lg-flex align-items-center container justify-content-between">
        <div>
          <h4>Get connected with us on social networks:</h4>
        </div>
        <div className="social-media-icon fs-3 text-center">
          <FaFacebook />
          <FaTwitter />
          <FaYoutube />
          <FaGithub />
          <FaGoogle />
        </div>
      </div>

      <div className="line mx-auto mb-5 mt-3"></div>

      <Container>
        <Row className="g-4 footer-middle-row">
          <Col lg={4}>
            <h3>ZestyKitchen</h3>
            <p>
              Our website offers a vast collection of recipes from talented
              chefs around the world, featuring a diverse range of cuisines and
              flavors to suit every taste.
            </p>
          </Col>
          <Col lg={4}>
            <h3>Some Useful Links</h3>
            <ul>
              <li>
                <a href="#">FAQ </a>{" "}
              </li>
              <li>
                <a href="#">Cookies Policy </a>{" "}
              </li>
              <li>
                <a href="#">Terms Of Service </a>{" "}
              </li>
            </ul>
          </Col>

          <Col lg={4}>
            <h3>Newsletter</h3>
            <div>
              <input type="email" placeholder="Your email id here" />
              <button>Subscribe</button>
            </div>
          </Col>
        </Row>
      </Container>

      <div className="line mx-auto my-3"></div>

      <p className="text-center mb-0 copyright-text">
        &copy; 2023 Copyright: ZestyKitchen.com
      </p>
    </footer>
  );
};

export default Footer;
