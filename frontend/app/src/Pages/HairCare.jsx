import React from "react";
import CardSlide from "../Components/HairCare/CardSlide";
import Carousel from "../Components/HairCare/Carousel";
import Middle from "../Components/HomePage/Middle";
import Trending from "../Components/HairCare/Trending";

const HairCare = () => {
  return (
    <div>
      <Carousel />
      <Trending />
      <CardSlide />
      <Middle />
    </div>
  );
};

export default HairCare;
