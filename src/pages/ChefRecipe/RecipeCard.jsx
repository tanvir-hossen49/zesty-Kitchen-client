/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import React from "react";
import { Card, Col, Row } from "react-bootstrap";

// eslint-disable-next-line react/prop-types
const RecipeCard = ({ recipes }) => {
  console.log(recipes);
  return (
    <div>
      <h2 className="text-center fw-bold fs-2 mt-4">Our_recipes</h2>
      <Row xs={1} md={3} className="g-4 mt-3">
        {recipes.map(recipe => {
          const {
            recipe_pic,
            recipe_name,
            ingredients,
            cooking_method,
            rating,
          } = recipe;
          console.log(ingredients);
          return (
            <Col>
              <Card>
                <div className="recipe-card">
                  <Card.Img
                    variant="top"
                    src={recipe_pic}
                    className="recipe-card"
                  />
                </div>
                <Card.Body>
                  <Card.Title className="fs-3 text-center">
                    {recipe_name}
                  </Card.Title>
                  <div className="divider mt-4">
                    <div className="line w-100"></div>
                  </div>

                  <Card.Title className="gap-2 mt-3">
                    Ingredient:
                    {ingredients.map(ingredient => {
                      return (
                        <ul type="circle" className="mt-3 text-capitalize">
                          <li className="fs-6">{ingredient}</li>
                        </ul>
                      );
                    })}
                  </Card.Title>
                  <Card.Text>{cooking_method}</Card.Text>

                  <button className="button w-100 mt-auto">Favorite</button>
                </Card.Body>
              </Card>
            </Col>
          );
        })}
      </Row>
    </div>
  );
};

export default RecipeCard;
