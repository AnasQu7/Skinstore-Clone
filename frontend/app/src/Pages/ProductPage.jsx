import {
    Box,
    InputGroup,
    InputLeftElement,
    Input,
    Stack,
    Show,
    Spinner,
    Text,
    Heading,
    Button
  } from "@chakra-ui/react";
  import axios from "axios";
  import { useEffect, useState } from "react";
  import ProductCard from "../Components/ProductCard";
  import Pagination from "../Components/pagination";
  
  const ProductPage = () => {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(10);
  
    useEffect(() => {
      const fetchPosts = async () => {
        setLoading(true);
        const res = await axios.get(
          "https://makeup-api.herokuapp.com/api/v1/products.json?product_type=lip_liner"
          // "https://makeup-api.herokuapp.com/api/v1/products.json"
        );
        setPosts(res.data);
        setLoading(false);
      };
  
      fetchPosts();
    }, []);
    // Get current posts
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);
  
    // Change page
    const paginate = (pageNumber) => setCurrentPage(pageNumber);
  
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
            <Heading>Lipsticks, Liners, Gels & More</Heading>
            <Text margin="auto" textAlign="left">
              With all of the new lip products available, it has never been so
              much fun to create the perfect pucker. Our assemblage of cosmetics
              for the lips includes matte lip color, lip glosses, stains, plumpers
              and liners. Many of our lip products combine color with gloss and
              gentle plumpers that cause a subtle swelling of the lip tissue in
              order to create the illusion of fullness. Clear plumpers can be used
              alone or combined with glosses and colors to create a custom look.
              Lip plumpers are a great alternative to surgery, making the lips
              look fuller for hours without risks or discomfort.
            </Text>
          </Box>
          <Box margin="auto" justifyContent="center" border="2px solid red">
            <Pagination
              postsPerPage={postsPerPage}
              totalPosts={posts.length}
              paginate={paginate}
            />
          </Box>
          <Box>
            <Button colorScheme="teal" variant="outline">
              Button
            </Button>
          </Box>
          <Box>
            <ProductCard posts={currentPosts} loading={loading} />
          </Box>
        </Box>
      </>
    );
  };
  export default ProductPage;
  