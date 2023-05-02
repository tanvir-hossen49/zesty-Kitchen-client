/* eslint-disable no-unused-vars */
import React from "react";
import HeroComponent from "./HeroComponent";
import chef from "../../assets/real-chef.jpg";

const Home = () => {
  return (
    <div>
      <HeroComponent />

      <h2 className="text-center fs-1 fw-bold mt-5">Your_Chef</h2>
      <div className="container mx-auto my-5 g-5 chef-card-container">
        <div className=" d-flex align-items-center gap-3 border rounded chef-card">
          <div className="chef-profile-picture">
            <img src={chef} alt="" />
          </div>
          <div>
            <h4 className="fw-bolder">Chicken Handi</h4>
            <p className="experience"> 5 years experience</p>
            <p className="recipe">30 recipes</p>
            <p className="likes">500 Likes</p>
            <button className="button">View Recipes</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
