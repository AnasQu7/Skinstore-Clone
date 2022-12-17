import { useEffect, useState } from "react";
import {
  Box,
  chakra,
  Text,
  Image,
  Button,
  Heading,
  useColorModeValue,
  Center,
  HStack,
  Icon,
  Tooltip,
  SimpleGrid,
  Select,
  Stack,
  Radio,
  RadioGroup
} from "@chakra-ui/react";
import { FiShoppingCart } from "react-icons/fi";
import axios from "axios";
// "https://makeup-api.herokuapp.com/api/v1/products.json"
const ProductPage = () => {
  const [posts, setPosts] = useState([]);
  const [noofElements, setnoofElements] = useState(10);
  const [productype, setProductype] = useState("eyebrow");
  const [sortBy, setsortBy] = useState("asc");
  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get(
        ` http://localhost:8080/product?type=${productype}`
      );
      setPosts(res.data);
    };
    fetchPosts();
  }, [productype]);

  const slice = posts.slice(0, noofElements);
  const loadMore = () => {
    setnoofElements(noofElements + noofElements);
  };
  return (
    <>
      <Box
        w="95%"
        margin="auto"
        p={4}
        bg="blackAlpha.800"
        color="white"
        _hover={{ bg: "white", color: "black" }}
        marginTop="2"
        marginBottom="2"
      >
        <Text fontSize="lg" fontWeight="600">
          {" "}
          25% off with code REPLAY + free Holiday Beauty Bag (worth $170) @
          $150+ | SHOP NOW &gt;
        </Text>
      </Box>
      <Box w="95%" m="auto" justifyContent="space-evenly">
        <Box>
          <Heading>The Holiday Countdown is On!</Heading>
          <Text margin="auto" textAlign="left" fontWeight="100">
            The Countdown is on! Save up to 30% off your purchase when you use
            code COUNTDOWN. But be quick! Discount drops 1% every 3 hours. Offer
            started at 9AM EST. *Exclusions apply. All products below included
            in the offer.
          </Text>
        </Box>
      </Box>

      <SimpleGrid gap={10} gridTemplateColumns={"1fr 1fr"} p={2}>
        <HStack display="grid" gridTemplateColumns={"1fr 1fr"} p={2}>
          <Heading fontWeight="200">Sort By</Heading>
          <Select
            placeholder="Select option"
            onChange={(e) => setProductype(e.target.value)}
          >
            <option value="eyeliner">Eyeliner</option>
            <option value="foundation">Foundation</option>
            <option value="eyeshadow">Eye Shadow</option>
            <option value="lipstick">Lipstick</option>
            <option value="mascara">Mascara</option>
            <option value="bronzer">Bronzer</option>
            <option value="nail_polish">Nail Polish</option>
            <option value="lip_liner">Lip Liner</option>
          </Select>
        </HStack>
       
        <HStack>
        <HStack>
          <RadioGroup onChange={setsortBy} value={sortBy}>
            <Stack direction="row">
              <Radio value="asc">Price High To Low</Radio>
              <Radio value="des">Price Low To High</Radio>
            </Stack>
          </RadioGroup>
        </HStack>
        </HStack>
      </SimpleGrid>
      <Box
        w="95%"
        margin="auto"
        display="grid"
        gridTemplateColumns={["1fr", "1fr 1fr", "1fr 1fr 1fr 1fr "]}
        p={2}
        gap={5}
      >
        {slice &&
          slice.map((el, index) => (
            <Center py={6} key={index}>
              <Box key={el.id} rounded="lg" shadow="md" position="relative">
                <Box>
                  {" "}
                  <Image
                    boxSize="270"
                    alt={el.image_link}
                    src={el.api_featured_image}
                    roundedTop="lg"
                    objectFit={"contain"}
                  />
                </Box>
                <Heading
                  as="h3"
                  fontSize="sm"
                  fontWeight="semibold"
                  lineHeight="tight"
                  maxH="md"
                  // border="2px solid red"
                  // height="40"
                  p={2}
                >
                  {el.name}
                </Heading>
                <Text fontSize="lg" fontWeight="600" textAlign="center" p={1}>
                  $ {el.price}
                </Text>{" "}
                <HStack
                  p={1}
                  margin="auto"
                  justifyContent="space-evenly"
                  bg="gray.700"
                  fontWeight="600"
                  bgColor="black"
                  color="white"
                  borderRadius="0"
                  _hover={{
                    bg: "cyan.500"
                  }}
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
            </Center>
          ))}
      </Box>

      <Button
        fontWeight="600"
        bgColor="black"
        color="white"
        borderRadius="0"
        _hover={{
          bg: "cyan.500"
        }}
        onClick={() => loadMore()}
        p={4}
      >
        Load More
      </Button>
    </>
  );
};
export default ProductPage;
