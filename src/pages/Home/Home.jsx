/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import HeroComponent from "./HeroComponent";
import ChefCard from "./ChefCard";
import { Spinner } from "react-bootstrap";
import "../../styles/home.css";
import PopularRecipes from "./PopularRecipes";

const Home = () => {
  const [chefData, setChefData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://assignment-server-tanvir-hossen49.vercel.app/chef-data")
      .then(res => res.json())
      .then(data => {
        setChefData(data);
        setLoading(false);
      });
  }, []);

  return (
    <div>
      <HeroComponent />

      <h2 className="text-center fs-1 fw-bold mt-5">Our_Chef</h2>
      <div className="container mx-auto my-5 g-5 chef-card-container">
        {loading ? (
          <Spinner animation="border" variant="primary" />
        ) : (
          chefData?.map(singleData => {
            return <ChefCard key={singleData.id} chefData={singleData} />;
          })
        )}
      </div>

      <PopularRecipes />
    </div>
  );
};

export default Home;
