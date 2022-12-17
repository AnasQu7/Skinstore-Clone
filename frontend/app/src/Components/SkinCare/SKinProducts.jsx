import { Link } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import Pagination from "../Products/pagination";
import {
  Box,
  Button,
  Heading,
  HStack,
  Icon,
  Image,
  Stack,
  Text,
  Tooltip,
  VStack,
  chakra,
  Spinner
} from "@chakra-ui/react";
import { FiShoppingCart } from "react-icons/fi";
const SkinProductsCard = ({ posts, loading }) => {
  if (loading) {
    return (
      <Spinner
        thickness="4px"
        speed="0.65s"
        emptyColor="gray.200"
        color="blue.500"
        size="xl"
      />
    );
  }
  return (
    <Stack
      direction="row"
      justifyContent="space-evenly"
      display="grid"
      gap={2}
      gridTemplateColumns={["1fr", "1fr 1fr", "1fr 1fr 1fr", "1fr 1fr 1fr 1fr"]}
    >
      {!posts
        ? "Not Found"
        : posts.map((el) => (
            <Box p={2} key={el.id} rounded="lg" shadow="md" position="relative">
              <Box>
                {" "}
                <Image
                  boxSize="sm"
                  alt={el.image_link}
                  src={el.api_featured_image}
                  roundedTop="lg"
                  objectFit={"contain"}
                />
              </Box>
              <Heading
                as="h3"
                fontSize="md"
                fontWeight="semibold"
                lineHeight="tight"
                // border="2px solid red"
                height="70"
                p={2}
              >
                {el.name}
              </Heading>
              <Text fontSize="lg" fontWeight="600" textAlign="center" p={2}>
                $ {el.price}
              </Text>{" "}
              <HStack
                // height="50"
                // p={1}
                // margin="auto"
                // justifyContent="space-evenly"
                // bg="gray.700"
                // color="white"
                height="50"
                fontWeight="600"
                bgColor="black"
                color="white"
                borderRadius="0"
                _hover={{
                  bg: "cyan.500"
                }}
                p={1}
              >
                <Tooltip
                  label="Add to cart"
                  bg="white"
                  placement={"top"}
                  color={"gray.800"}
                  fontSize={"1.2em"}
                >
                  <chakra.a
                    href={`/product/${el.id}`}
                    display={"flex"}
                    margin="auto"
                  >
                    <HStack>
                      {" "}
                      <Icon
                        as={FiShoppingCart}
                        h={7}
                        w={7}
                        alignSelf={"center"}
                      />
                      <Text fontSize="md" fontWeight="600">
                        QUICKBUY
                      </Text>
                    </HStack>
                  </chakra.a>
                </Tooltip>
              </HStack>
            </Box>
          ))}
    </Stack>
  );
};
export default SkinProductsCard;
