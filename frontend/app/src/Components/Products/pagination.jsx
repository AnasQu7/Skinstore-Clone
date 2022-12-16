import { Button, Box, HStack } from "@chakra-ui/react";
import React from "react";

const Pagination = ({ postsPerPage, totalPosts, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <HStack>
      {pageNumbers.map((number) => (
        <Box key={number}>
          <Button onClick={() => paginate(number)}>{number}</Button>
        </Box>
      ))}
    </HStack>
  );
};

export default Pagination;
