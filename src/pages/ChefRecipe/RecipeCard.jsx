/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { Card, Col, Row } from "react-bootstrap";
import { FaStar, FaRegStar, FaRegHeart } from "react-icons/fa";
import Rating from "react-rating";
import { showToast } from "../../utilities/showToast";
// eslint-disable-next-line react/prop-types
const RecipeCard = ({ recipes }) => {
  const [isDisable, setDisable] = useState([]);

  const handleFavoriteButton = id => {
    const selected = [...isDisable, id];
    setDisable(selected);
    showToast("success", "Added Favorite");
  };

  return (
    <div>
      <h2 className="text-center fw-bold fs-2 mt-4">recipes</h2>
      <Row xs={1} md={3} className="g-4 mt-3">
        {recipes.map(recipe => {
          const {
            recipe_pic,
            recipe_name,
            ingredients,
            cooking_method,
            rating,
            id,
          } = recipe;
          return (
            <Col key={id}>
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
                    <ul type="circle" className="mt-3 text-capitalize">
                      {ingredients.map((ingredient, index) => (
                        <li key={index} className="fs-6 mt-3">
                          {ingredient}
                        </li>
                      ))}
                    </ul>
                  </Card.Title>

                  <Card.Text>
                    <span className="fw-bold pe-2">Cooking Method:</span>
                    {cooking_method}
                  </Card.Text>

                  <div className="fs-3 mb-3 d-flex align-items-center justify-content-between">
                    <Rating
                      placeholderRating={Math.round(rating)}
                      readonly
                      emptySymbol={<FaRegStar />}
                      placeholderSymbol={<FaStar className="text-warning" />}
                      fullSymbol={<FaStar />}
                    />
                    <span className="ms-3 inline-block">
                      {"("} {rating.toFixed(1)} {")"}
                    </span>
                  </div>

                  <button
                    className="button w-100 mt-auto"
                    disabled={isDisable.find(d => d === id)}
                    onClick={() => handleFavoriteButton(id)}
                  >
                    Favorite
                    <span className="ms-3">
                      <FaRegHeart />
                    </span>
                  </button>
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
