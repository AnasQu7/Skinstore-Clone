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

import SkinCareDetails from "../Components/SkinCare/SkinCareDetails";
import SkinCareTrending from "../Components/SkinCare/SkinCareTrending";
import SkinProducts from "../Components/SkinCare/SKinProducts";
import axios from "axios";
import { useEffect, useState } from "react";
import Pagination from "../Components/Products/pagination";
import SkinCareCarousel from "../Components/SkinCare/Carousel";
const SkinCare = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(8);
  const [tag, setTag] = useState("");
  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      const res = await axios.get(
        `https://makeup-api.herokuapp.com/api/v1/products.json?product_type=blush&product_tags=${tag}`
      );
      console.log(res.data);
      setPosts(res.data);
      setLoading(false);
    };

    fetchPosts();
  }, [tag]);
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  return (
    <Box p={2}>
<SkinCareCarousel/>
      <SkinCareTrending />
      <Box margin="auto" marginTop="5">
        <Heading fontWeight="200" fontSize="4xl">
          New and Trending: ISDIN
        </Heading>
        <SimpleGrid gap={10} gridTemplateColumns={"1fr 1fr"} p={2}>
          <HStack display="grid" gridTemplateColumns={"1fr 1fr"} p={2}>
            <Heading fontWeight="200">Sort By</Heading>
            <Select
              placeholder="Select option"
              onChange={(e) => setTag(e.target.value)}
            >
              <option value="Vegan">Vegan</option>
              <option value="Gluten+Free">Gluten Free </option>
              <option value="Canadian">Canadian</option>
              <option value="Natural">Natural</option>
            </Select>
          </HStack>
          <Pagination
            postsPerPage={postsPerPage}
            totalPosts={posts.length}
            paginate={paginate}
          />
        </SimpleGrid>
        <SkinProducts posts={currentPosts} loading={loading} />
      </Box>
      <SkinCareDetails />
    </Box>
  );
};
export default SkinCare;
