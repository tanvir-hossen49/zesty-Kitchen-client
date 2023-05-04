/* eslint-disable no-unused-vars */
import React from "react";
import Banner from "./Banner";
import { useLoaderData } from "react-router-dom";
import RecipeCard from "./RecipeCard";
import { Container } from "react-bootstrap";
import "../../styles/chefRecipe.css";

const ChefRecipe = () => {
  const chefData = useLoaderData();

  return (
    <Container>
      <Banner chefData={chefData} />
      <RecipeCard recipes={chefData.recipes} />
    </Container>
  );
};

export default ChefRecipe;
