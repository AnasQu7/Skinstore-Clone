import { Box, Text, SimpleGrid, Image, Button } from "@chakra-ui/react";
import React from "react";

import { Link } from "react-router-dom";

const BodyCareTrending = () => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
    >
      <Text pt="2.5%" fontSize="3rem" textAlign="center">
        Over On the Blog....
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
            src="https://static.thcdn.com/images/small/webp/widgets/121-us/20/original-Webp.net-resizeimage_%2825%29-072820.jpg"
          />
          <Text fontWeight="400" fontSize="20" mb={3}>
            Winter Foot Care at SkinStore
          </Text>
          <Text fontWeight="100">
            Discover proper foot care all winter lang with products from
            Skincare.com
          </Text>
          <Button
            mt="auto"
            bgColor="white"
            borderRadius="0px"
            variant="outline"
            colorScheme="black"
          >
            <Link to="/"> READ MORE </Link>
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
            src="https://static.thcdn.com/images/small/webp/widgets/121-us/09/original-Webp.net-resizeimage_%2826%29-073009.jpg"
          />
          <Text fontWeight="400" fontSize="20" mb={3}>
            The Best Hand Cream for Softer Hands
          </Text>
          <Text fontWeight="100">
            For softer. smoother hands, SkinStore.com has a lot of wonderfully
            soothing products, and that includes the perfect hand cream
          </Text>
          <Button
            mt="auto"
            bgColor="white"
            borderRadius="0px"
            variant="outline"
            colorScheme="black"
          >
            <Link to="/"> READ MORE </Link>
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
            src="https://static.thcdn.com/images/small/webp/widgets/121-us/28/original-Untitled_design_%2842%29-100228.png"
          />
          <Text fontWeight="400" fontSize="20" mb={3}>
            How To Get Rid Of Bumps On Arms
          </Text>
          <Text fontWeight="100">
            Learn about the causes and cures of bumps on the arm and get back
            your smooth, flawless arms today.
          </Text>
          <Button
            mt="auto"
            bgColor="white"
            borderRadius="0px"
            variant="outline"
            colorScheme="black"
          >
            <Link to="/"> READ MORE </Link>
          </Button>
        </Box>
      </SimpleGrid>
    </Box>
  );
};

export default BodyCareTrending;
