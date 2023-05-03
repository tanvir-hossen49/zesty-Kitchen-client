/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Link } from "react-router-dom";

const ChefCard = ({ chefData }) => {
  const { chef_img, id, name, years_of_experience, number_of_recipes, likes } =
    chefData;
  return (
    <div className=" d-flex align-items-center gap-3 border rounded chef-card">
      <div className="chef-profile-picture">
        <LazyLoadImage src={chef_img} effect="blur" placeholderSrc={chef_img} />
      </div>
      <div>
        <h4 className="fw-bolder">{name}</h4>
        <p className="experience"> {years_of_experience} years experience</p>
        <p className="recipe">{number_of_recipes} recipes</p>
        <p className="likes">{likes} likes</p>
        <Link to={`/chef-recipe/${id}`}>
          <button className="button">View Recipes</button>
        </Link>
      </div>
    </div>
  );
};

export default ChefCard;
