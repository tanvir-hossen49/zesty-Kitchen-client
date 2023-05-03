/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import HeroComponent from "./HeroComponent";
import ChefCard from "./ChefCard";

const Home = () => {
  const [chefData, setChefData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/chef-data")
      .then(res => res.json())
      .then(data => setChefData(data));
  }, []);

  return (
    <div>
      <HeroComponent />

      <h2 className="text-center fs-1 fw-bold mt-5">Your_Chef</h2>
      <div className="container mx-auto my-5 g-5 chef-card-container">
        {chefData?.map(singleData => {
          return <ChefCard key={singleData.id} chefData={singleData} />;
        })}
      </div>
    </div>
  );
};

export default Home;
