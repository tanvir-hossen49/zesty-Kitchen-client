/* eslint-disable no-unused-vars */
import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const AboutUs = () => {
  return (
    <Container>
      <Row className="mt-4">
        <Col>
          <p>
            At ZestyKitchen, we are passionate about bringing the best recipes
            and culinary inspiration to our readers. Our team of experienced
            chefs and food enthusiasts works tirelessly to curate a diverse
            collection of recipes, featuring a wide range of cuisines and
            flavors to suit every taste.
          </p>
          <p>
            We believe that cooking should be fun, creative, and accessible to
            everyone, regardless of their level of experience in the kitchen.
            That is why we provide easy-to-follow recipes, cooking tips, and
            techniques that will help you become a better cook and impress your
            family and friends with your culinary skills.
          </p>
          <p>
            We are committed to providing the highest quality content, and we
            are constantly updating our website with new recipes and features.
            We also welcome feedback and suggestions from our readers, as we
            strive to create a community of passionate food lovers who share our
            love for great food.
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default AboutUs;
