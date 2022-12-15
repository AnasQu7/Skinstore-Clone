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
      <Text pt="2.5%" fontSize="3rem" mb={10} textAlign="center">
        Shop by Hair Focus
      </Text>
      <SimpleGrid columns={6} spacing={0} w="90%" m="auto" pl="2.5%" pr="2.5%">
        <Box>
          <Link to="/">
            <Image
              boxSize="12vw"
              src="https://static.thcdn.com/images/small/webp/widgets/121-us/14/Page-001-015714.png"
            />
          </Link>
        </Box>
        <Box>
          <Link to="/">
            <Image
              boxSize="12vw"
              src="https://static.thcdn.com/images/small/webp/widgets/121-us/23/Page-002-015723.png"
            />
          </Link>
        </Box>
        <Box>
          <Link to="/">
            <Image
              boxSize="12vw"
              src="https://static.thcdn.com/images/small/webp/widgets/121-us/32/Page-003-015732.png"
            />
          </Link>
        </Box>
        <Box>
          <Link to="/">
            <Image
              boxSize="12vw"
              src="https://static.thcdn.com/images/small/webp/widgets/121-us/42/Page-004-015742.png"
            />
          </Link>
        </Box>
        <Box>
          <Link to="/">
            <Image
              boxSize="12vw"
              src="https://static.thcdn.com/images/small/webp/widgets/121-us/50/Page-005-015750.png"
            />
          </Link>
        </Box>
        <Box>
          <Link to="/">
            <Image
              boxSize="12vw"
              src="https://static.thcdn.com/images/small/webp/widgets/121-us/56/Page-006-015756.png"
            />
          </Link>
        </Box>
      </SimpleGrid>
      <Text pt="2.5%" fontSize="3rem" textAlign="center">
        Over On The Blog...
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
            src="https://static.thcdn.com/images/small/webp/widgets/121-us/35/0115-TUU087-SS-AH-February-Batching-Shot-24-1080x1080-072235.jpg"
          />
          <Text fontWeight="400" fontSize="20" mb={3}>
            Learn about the Hair Care Brands!
          </Text>
          <Text fontWeight="100">
            Get the inside scoop on haircare brands like Olaplex at SkinStore!
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
            src="https://static.thcdn.com/images/small/webp/widgets/121-us/16/original-hair_color-084316.jpg"
          />
          <Text fontWeight="400" fontSize="20" mb={3}>
            Hair Color 101
          </Text>
          <Text fontWeight="100">Start your hair color journey here!</Text>
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
            src="https://static.thcdn.com/images/small/webp/widgets/121-us/33/0201-TUU087-SS-AH-February-Batching-Shot-25-1080x1080-072333.jpg"
          />
          <Text fontWeight="400" fontSize="20" mb={3}>
            Soft Curls with T3
          </Text>
          <Text fontWeight="100">See how T3 gives you beach curls.</Text>
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

export default Trending;
