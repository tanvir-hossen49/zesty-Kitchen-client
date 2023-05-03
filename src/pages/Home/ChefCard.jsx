/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";

const ChefCard = ({ chefData }) => {
  const {
    chef_picture,
    id,
    chef_name,
    years_of_experience,
    number_of_recipes,
    likes,
  } = chefData;
  return (
    <div className=" d-flex align-items-center gap-3 border rounded chef-card">
      <div className="chef-profile-picture">
        <img src={chef_picture} alt="" />
      </div>
      <div>
        <h4 className="fw-bolder">{chef_name}</h4>
        <p className="experience"> {years_of_experience} experience</p>
        <p className="recipe">{number_of_recipes} recipes</p>
        <p className="likes">{likes} likes</p>
        <button className="button">View Recipes</button>
      </div>
    </div>
  );
};

export default ChefCard;
