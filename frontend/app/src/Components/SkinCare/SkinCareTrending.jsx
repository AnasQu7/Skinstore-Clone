import { Box, Text, SimpleGrid, Image, Button } from "@chakra-ui/react";
import React from "react";

import { Link } from "react-router-dom";

const SkinCareTrending = () => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
    >
      <Text pt="2.5%" fontSize="3rem" textAlign="center">
        Trending Offers
      </Text>
      <SimpleGrid w="90%" m="auto" columns={[1, 2, 3]} spacing={10} p={3}>
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
    </Box>
  );
};

export default SkinCareTrending;
