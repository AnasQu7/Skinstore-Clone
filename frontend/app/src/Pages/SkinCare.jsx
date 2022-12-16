import React from "react";
import CardSlide from "../Components/SkinCare/CardSlide";
import Carousel from "../Components/SkinCare/Carousel";
import Middle from "../Components/HomePage/Middle";
import Trending from "../Components/SkinCare/Trending";

const SkinCare = () => {
  return (
    <div>
      <Carousel />
      <Trending />
      <CardSlide />
      <Middle />
    </div>
  );
};

export default SkinCare;
