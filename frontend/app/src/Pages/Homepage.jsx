import React from "react";
import CardSlide from "../Components/HomePage/CardSlide";
import Carousel from "../Components/HomePage/Carousel";
import Footer from "../Components/HomePage/Footer";
import Middle from "../Components/HomePage/Middle";
import Trending from "../Components/HomePage/Trending";

const Homepage = () => {
  return (
    <div>
      <Carousel />
      <Trending />
      <CardSlide />
      <Middle />
      <Footer />
    </div>
  );
};

export default Homepage;
