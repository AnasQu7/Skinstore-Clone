import { Box } from "@chakra-ui/react";
import React from "react";
import CardSlide from "../Components/HomePage/CardSlide";
import Carousel from "../Components/HomePage/Carousel";
import Middle from "../Components/HomePage/Middle";
import Trending from "../Components/HomePage/Trending";

const Homepage = () => {
  return (
    <Box mt="150px">
      <Carousel />
      <Trending />
      <CardSlide />
      <Middle />
    </Box>
  );
};

export default Homepage;
