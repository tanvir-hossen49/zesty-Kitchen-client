/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { FaRegStar, FaStar } from "react-icons/fa";
import Rating from "react-rating";

const PopularRecipes = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    fetch(
      " https://assignment-server-tanvir-hossen49.vercel.app/popular-recipes"
    )
      .then(res => res.json())
      .then(data => setRecipes(data));
  }, []);

  return (
    <Container>
      <h2 className="text-center mb-4">Popular_recipes</h2>
      <Row xs={1} md={3} className="g-4">
        {recipes.map(recipe => {
          return (
            <Col key={recipe.id}>
              <Card>
                <Card.Img variant="top" src={recipe.recipe_pic} />
                <Card.Body>
                  <Card.Title>{recipe.recipe_name}</Card.Title>
                  <Card.Text>{recipe.short_des}</Card.Text>
                  <div className="fs-3 mb-3 d-flex align-items-center justify-content-between">
                    <Rating
                      placeholderRating={Math.round(recipe.rating)}
                      readonly
                      emptySymbol={<FaRegStar />}
                      placeholderSymbol={<FaStar className="text-warning" />}
                      fullSymbol={<FaStar />}
                    />
                    <span className="ms-3 inline-block">
                      {"("} {recipe.rating.toFixed(1)} {")"}
                    </span>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          );
        })}
      </Row>
    </Container>
  );
};

export default PopularRecipes;
