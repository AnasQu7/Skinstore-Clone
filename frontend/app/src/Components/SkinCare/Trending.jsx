import { Box, Text, SimpleGrid, Image, Button } from "@chakra-ui/react";
import React from "react";

import { Link } from "react-router-dom";

const Trending = () => {
  return (
    <Box
      alignSelf="normal"
      display="flex"
      flexDirection="column"
      alignItems="center"
    >
      <Text pt="2.5%" fontSize="3rem" textAlign="center">
        Trending Offers
      </Text>
      <SimpleGrid
        w="90%"
        m="auto"
        columns={[1, 2, 3]}
        spacing={10}
        pl="2.5%"
        pr="2.5%"
        pt="2.5%"
      >
        <Box
          alignSelf="normal"
          display="flex"
          flexDirection="column"
          alignItems="center"
        >
          <Image
            borderRadius="50%"
            display="block"
            boxSize={["35vw", "25vw"]}
            src="https://static.thcdn.com/images/small/webp/widgets/121-us/53/original-500x500-041753.jpeg"
          />
          <Text fontWeight="400" fontSize="20" mb={3}>
            Skin Ceuticals Gift
          </Text>
          <Text fontWeight="100">
            Receive a SkinCeuticals Resveratrol BE 4ml (Worth $21) when you
            spend $220 or more on the brand.
          </Text>
          <Button
            mt="auto"
            bgColor="white"
            borderRadius="0px"
            variant="outline"
            colorScheme="black"
          >
            <Link to="/"> SHOP NOW </Link>
          </Button>
        </Box>
        <Box
          alignSelf="normal"
          display="flex"
          flexDirection="column"
          alignItems="center"
        >
          <Image
            borderRadius="50%"
            display="block"
            boxSize="25vw"
            src="https://static.thcdn.com/images/small/webp/widgets/121-us/05/original-500x500-041805.jpeg"
          />
          <Text fontWeight="400" fontSize="20" mb={3}>
            25% off SkinMedica + $135 gift
          </Text>
          <Text fontWeight="100">
            Receive a FREE SkinMedica Eye Illuminating Kit (Worth $135) when you
            spend $250 or more on the brand.
          </Text>
          <Button
            mt="auto"
            bgColor="white"
            borderRadius="0px"
            variant="outline"
            colorScheme="black"
          >
            <Link to="/"> SHOP NOW </Link>
          </Button>
        </Box>
        <Box
          alignSelf="normal"
          display="flex"
          flexDirection="column"
          alignItems="center"
        >
          <Image
            borderRadius="50%"
            display="block"
            boxSize="25vw"
            src="https://static.thcdn.com/images/small/webp/widgets/121-us/14/original-500x500-060614.jpg"
          />
          <Text fontWeight="400" fontSize="20" mb={3}>
            25% off 111SKIN with code REPLAY + $95 gift
          </Text>
          <Text fontWeight="100">
            Plus, receive a 111SKIN Space Defence Bright Eye Lift Gel Mini 7.5ml
            (Worth $95) when you spend $250 or more on the brand.
          </Text>
          <Button
            mt="auto"
            bgColor="white"
            borderRadius="0px"
            variant="outline"
            colorScheme="black"
          >
            <Link to="/"> SHOP NOW </Link>
          </Button>
        </Box>
      </SimpleGrid>
      <Text pt="2.5%" fontSize="3rem" mb={10} textAlign="center">
        Shop by Ingredient
      </Text>
      <SimpleGrid columns={6} spacing={0} w="90%" m="auto" pl="2.5%" pr="2.5%">
        <Box>
          <Link to="/">
            <Image
              boxSize="12vw"
              src="https://static.thcdn.com/images/small/webp/widgets/121-us/10/Page-001-095910.png"
            />
          </Link>
        </Box>
        <Box>
          <Link to="/">
            <Image
              boxSize="12vw"
              src="https://static.thcdn.com/images/small/webp/widgets/121-us/02/original-Page-002-095102.png"
            />
          </Link>
        </Box>
        <Box>
          <Link to="/">
            <Image
              boxSize="12vw"
              src="https://static.thcdn.com/images/small/webp/widgets/121-us/00/original-Page-003-095100.png"
            />
          </Link>
        </Box>
        <Box>
          <Link to="/">
            <Image
              boxSize="12vw"
              src="https://static.thcdn.com/images/small/webp/widgets/121-us/56/Page-004-095856.png"
            />
          </Link>
        </Box>
        <Box>
          <Link to="/">
            <Image
              boxSize="12vw"
              src="https://static.thcdn.com/images/small/webp/widgets/121-us/06/original-Page-005-095106.png"
            />
          </Link>
        </Box>
        <Box>
          <Link to="/">
            <Image
              boxSize="12vw"
              src="https://static.thcdn.com/images/small/webp/widgets/121-us/17/original-Page-006-095117.png"
            />
          </Link>
        </Box>
      </SimpleGrid>
    </Box>
  );
};

export default Trending;
