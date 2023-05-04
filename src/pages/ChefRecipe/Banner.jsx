/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import { Container } from "react-bootstrap";
import { LazyLoadImage } from "react-lazy-load-image-component";
import chef_placeholder from "../../assets/placeholder.png";

const Banner = ({ chefData }) => {
  const {
    name,
    chef_img,
    years_of_experience,
    number_of_recipes,
    likes,
    bio_description,
    recipes,
  } = chefData;
  return (
    <Container className="d-lg-flex gap-5 mt-3 align-items-center border p-0 pe-3">
      <LazyLoadImage
        src={chef_img}
        height={400}
        effect="blur"
        placeholderSrc={chef_placeholder}
        className="rounded chef-recipe-img"
      />
      <div className="chef-recipe-chef-info">
        <h2>{name}</h2>
        <p>{bio_description}</p>
        <div className="d-flex flex-wrap gap-5">
          <span>{likes} likes</span>
          <span> {number_of_recipes} recipes</span>
          <span>{years_of_experience} years experience</span>
        </div>
      </div>
    </Container>
  );
};

export default Banner;
