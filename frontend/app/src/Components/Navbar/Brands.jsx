import {
  Box,
  Flex,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverContent,
  PopoverHeader,
  PopoverTrigger,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import React, { useContext } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { SearchContext } from "../../Utilis/Context/SearchContext";
import NavStyle from "./navbar.module.css";

function Brands() {
  const {toggleUrlQuery} = useContext(SearchContext)
  const [brandnames, setBrandnames] = useState(["almay","anna sui","annabelle"]);
  const [brandkeys, setBrandkeys] = useState([]);
  const navigate = useNavigate()
  console.log(brandnames);
  const brands = {
    A: [
      "almay",
"anna sui",
"annabelle",
    ],
    B: ["benefit",
    "boosh",
    "burt's bees",
    "butter london",],
    C: [
      "cargo cosmetics",
      "china glaze",
      "clinique",
      "colourpop",
      "covergirl",],
    D: ["dalish",
    "dior",
    "dr. hauschka",],
    E: ["e.l.f.",
    "essie",],
    F: [
      "fenty",],
    G: [
      "glossier",
      "green people",],
    I: ["iman",
    "l'oreal",],
    M: ["maia's mineral galaxy",
    "marcelle",
    "marienatie",
    "maybelline",
    "milani",
    "mineral fusion",
    "misa",
    "mistura",],
    N: ["null",
    "nyx",],
    O: ["orly",],
    P: [
      "pacifica",
      "physicians formula",
      "piggy paint",
      "pure anada",],
    R: ["revlon",],
    S: ["sally b's skin yummies",
    "salon perfect",
    "sante",
    "sinful colours",
    "smashbox",
    "stila",
    "suncoat",],
    W: [
      "wet n wild",],
    Z: [
      "zorah biocosmetiques",],
  };
  function setkeys() {
    let arr = [];
    for (let keys in brands) {
      arr.push(keys);
      console.log(keys);
    }
    setBrandkeys(arr);
  }
  function toggleSearch(e){
    toggleUrlQuery({brand:e.target.innerHTML})
      navigate("/productpage")
  }
  useEffect(() => {
    setkeys();
  }, []);

  return (
    <Popover trigger="hover">
      <PopoverTrigger>
        <Box className={NavStyle.blackHover} p="7px">Brands</Box>
      </PopoverTrigger>
      <PopoverContent w="100vw">
        <PopoverArrow />
        <PopoverHeader>
          <Box h="0.5px" bg="black" w="95%" m="auto"></Box>
          <Flex mx="50px" alignItems="center" justifyContent="space-between">
            <Flex gap="1px">
              {brandkeys.map((e) => (
                <Box
                  className={NavStyle.greyHover}
                  p="10px"
                  onMouseOver={() => {
                    setBrandnames(brands[e]);
                  }}
                >
                  {e}
                </Box>
              ))}
            </Flex>
            <Box>View All Brands</Box>
          </Flex>
          <Box h="1px" bg="black" w="95%" m="auto"></Box>
        </PopoverHeader>
        <PopoverBody>
          <SimpleGrid mx="50px" columns={5}>
            {brandnames.map((e) => {
              return <Box className={NavStyle.greyHover}><Text onClick={toggleSearch}>{e}</Text></Box>;
            })}
          </SimpleGrid>
        </PopoverBody>
      </PopoverContent>
    </Popover>
  );
}

export default Brands;











