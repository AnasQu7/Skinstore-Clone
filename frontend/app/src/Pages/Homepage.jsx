import { Box } from "@chakra-ui/react";
import React from "react";
import CardSlide from "../Components/HomePage/CardSlide";
import Carousel from "../Components/HomePage/Carousel";
import Middle from "../Components/HomePage/Middle";
import Trending from "../Components/HomePage/Trending";

const Homepage = () => {
  return (
    <Box mt={{lg:"150px",md:"100px",sm:"80px",base:"80px"}}>
      <Carousel />
      <Trending />
      <CardSlide />
      <Middle />
    </Box>
  );
};

export default Homepage;
