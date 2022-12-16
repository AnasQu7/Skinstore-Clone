import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import {
  Box,
  Container,
  Stack,
  Text,
  Image,
  Flex,
  VStack,
  Button,
  Heading,
  SimpleGrid,
  StackDivider,
  useColorModeValue,
  List,
  ListItem,
  HStack,
  Tag,
  TagLabel,
  TagCloseButton,
  Badge,
  Divider,
} from "@chakra-ui/react";
import { FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import { MdLocalShipping } from "react-icons/md";
const Productdetails = () => {
  const [item, setItem] = useState({});
  const params = useParams();
  const url = `https://makeup-api.herokuapp.com/api/v1/products/${params.id}.json`;
  const bg_list_ing = useColorModeValue("yellow.500", "yellow.300");
  const bg_category = useColorModeValue("gray.500", "gray.400");
  const bg_border_color = useColorModeValue("gray.200", "gray.600");
  const bg_dollar = useColorModeValue("gray.900", "gray.400");
  const fetchData = () => {
    axios.get(url).then((res) => {
      console.log(res);
      setItem(res.data);
    });
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <>
      {!item ? (
        "Not Found"
      ) : (
        <Container maxW={"7xl"} p={4}>
          <SimpleGrid
            columns={{ base: 1, lg: 2 }}
            spacing={{ base: 8, md: 10 }}
            py={{ base: 10, md: 15 }}
          >
            <Flex>
              <Image
                rounded={"md"}
                alt={item.image_link}
                src={item.api_featured_image}
                objectFit={"contain"}
                align={"center"}
                w={"100%"}
                h={{ base: "100%", sm: "400px", lg: "500px" }}
              />
            </Flex>
            <Stack spacing={{ base: 6, md: 10 }}>
              <Box as={"header"}>
                <Heading
                  lineHeight={1.1}
                  fontWeight={600}
                  fontSize={{ base: "2xl", sm: "4xl", lg: "5xl" }}
                >
                  {item.name}
                </Heading>
                <Text
                  color={useColorModeValue("gray.900", "gray.400")}
                  fontWeight={500}
                  p={4}
                  fontSize={"3xl"}
                >
                  ${item.price} USD
                </Text>
              </Box>
              <Stack
                spacing={{ base: 4, sm: 6 }}
                direction={"column"}
                divider={
                  <StackDivider
                    borderColor={useColorModeValue("gray.200", "gray.600")}
                  />
                }
              >
                <VStack spacing={{ base: 4, sm: 6 }}>
                  <Text
                    color={useColorModeValue("gray.500", "gray.400")}
                    fontSize={"2xl"}
                    fontWeight={"300"}
                    textTransform={"capitalize"}
                  >
                    {item.category}
                  </Text>
                  <Text fontSize={"lg"}>{item.description}</Text>
                </VStack>
                <Box>
                  <Text
                    fontSize={{ base: "16px", lg: "18px" }}
                    color={useColorModeValue("yellow.500", "yellow.300")}
                    fontWeight={"500"}
                    textTransform={"uppercase"}
                    mb={"4"}
                  >
                    Product Details
                  </Text>

                  <List spacing={2}>
                    <ListItem>
                      <Text as={"span"} fontWeight={"bold"}>
                        Ingredients:
                      </Text>{" "}
                      Water, Propanediol, Hydrolyzed Hyaluronic Acid, Tremella
                      Fuciformis Sporocarp Extract, Betaine, Glycerin, Magnesium
                      Sulfate, Carbomer, Hydroxyethylcellulose,
                      Ethylhexylglycerin, Potassium Sorbate, Caprylyl Glycol,
                      Phenoxyethanol, Sodium HydroxideTocopherol, Disodium
                      Phosphate, Sodium Phosphate, Polysorbate 60
                    </ListItem>
                    <ListItem textTransform="capitalize">
                      <Text as={"span"} fontWeight={"bold"}>
                        Brand:
                      </Text>{" "}
                      <a href={item.website_link}>{item.brand}</a>
                    </ListItem>
                  </List>
                </Box>
              </Stack>
              <Button
                rounded={"none"}
                w={"full"}
                mt={8}
                size={"lg"}
                py={"7"}
                bg={useColorModeValue("gray.900", "gray.50")}
                color={useColorModeValue("white", "gray.900")}
                textTransform={"uppercase"}
                _hover={{
                  transform: "translateY(2px)",
                  boxShadow: "lg",
                }}
              >
                Add to cart
              </Button>

              <Stack
                direction="row"
                alignItems="center"
                justifyContent={"center"}
              >
                <MdLocalShipping />
                <Text>2-3 business days delivery</Text>
              </Stack>
            </Stack>
          </SimpleGrid>
        </Container>
      )}
    </>
  );
};
export default Productdetails;
