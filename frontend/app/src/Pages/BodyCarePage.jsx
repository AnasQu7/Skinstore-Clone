import {
    Box,
    Button,
    Heading,
    HStack,
    Image,
    Select,
    SimpleGrid,
    Text,
    VStack
  } from "@chakra-ui/react";
  import axios from "axios";
  import { useEffect, useState } from "react";
  import Pagination from "../Components/ProductPage/pagination";
  import BodyCareCarousel from "../Components/Bronzer/Carousel";
  import BodyCareTrending from "../Components/Bronzer/BodyCareTrending";
  import BodyCareDetails from "../Components/Bronzer/BodyCareDetails";
  import BodyProductsCard from "../Components/Bronzer/BodyCareProducts";
  const BodyCare = () => {
    const [body, setBody] = useState([]);
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(8);
    const [tag, setTag] = useState("");
    useEffect(() => {
      const fetchPosts = async () => {
        setLoading(true);
        const res = await axios.get(
          `https://makeup-api.herokuapp.com/api/v1/products.json?product_type=bronzer&product_tags=${tag}`
        );
        console.log("bodycare", res.data);
        setBody(res.data);
        setLoading(false);
      };
  
      fetchPosts();
    }, [tag]);
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = body.slice(indexOfFirstPost, indexOfLastPost);
  
    // Change page
    const paginate = (pageNumber) => setCurrentPage(pageNumber);
    return (
      <Box p={2}>
        <BodyCareCarousel />
        <BodyCareTrending />
        <SimpleGrid gap={10} gridTemplateColumns={"1fr 1fr"} p={2}>
          <HStack display="grid" gridTemplateColumns={"1fr 1fr"} p={2}>
            <Heading fontWeight="200">Sort By</Heading>
            <Select
              placeholder="Select option"
              onChange={(e) => setTag(e.target.value)}
            >
              <option value="Gluten+Free">Gluten Free </option>
              <option value="Canadian">Canadian</option>
              <option value="Natural">Natural</option>
              <option value="purpicks">Purpicks</option>
            </Select>
          </HStack>
          <Pagination
            postsPerPage={postsPerPage}
            totalPosts={body.length}
            paginate={paginate}
          />
        </SimpleGrid>
        <BodyProductsCard posts={currentPosts} loading={loading} />
        <BodyCareDetails />
      </Box>
    );
  };
  export default BodyCare;
  