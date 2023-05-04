/* eslint-disable no-unused-vars */
import React from "react";
import { Container } from "react-bootstrap";
import Accordion from "react-bootstrap/Accordion";
const FAQ = () => {
  return (
    <Container className="mt-5">
      <h2>Frequently Asked Questions</h2>
      <Accordion defaultActiveKey="0" flush className="border">
        <Accordion.Item eventKey="0">
          <Accordion.Header>
            How do I search for recipes on your website?
          </Accordion.Header>
          <Accordion.Body>
            You can search for recipes using our search bar, located at the top
            of the page. Simply type in the name of the dish, ingredient, or
            cuisine you are looking for, and our website will generate a list of
            relevant recipes for you to browse.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>
            Are your recipes suitable for special diets, such as vegan or
            gluten-free?
          </Accordion.Header>
          <Accordion.Body>
            Yes, we have a variety of recipes that cater to different dietary
            needs and restrictions. You can use our search bar to filter recipes
            by dietary requirements, or browse our categories for specific
            cuisines or types of dishes.
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="2">
          <Accordion.Header>
            Can I submit my own recipes to your website?
          </Accordion.Header>
          <Accordion.Body>
            Yes! We welcome submissions from home cooks and professional chefs
            alike. To submit a recipe, please fill out our contact form and
            include the recipe and any relevant photos.
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </Container>
  );
};

export default FAQ;
