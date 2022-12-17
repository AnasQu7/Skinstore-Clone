import { Box, Divider, Heading, Spacer, Text, VStack } from "@chakra-ui/react";

const SkinCareDetails = () => {
  return (
    <>
      <VStack>
        <Box margin="auto" p={5}>
          <Heading fontSize="2xl"> Skin Care</Heading>
          <Text textAlign="left" fontWeight="200">
            ﻿Healthy skin starts with a commitment to a regular skin care
            regimen, using high quality skin care and facial products every day.
            While we often think of the face first when it comes to caring for
            the skin, the skin on the body also needs attention.
            <Divider />
            We specialize in providing only the best products that care for skin
            from head to toe. Their are many different types of skincare
            products, Purifying cleansers, refreshing toners and hydrating
            moisturizers cover the basics for the face. We also carry
            specialized treatments for concerns such as acne, aging and rosacea
            as well as targeted products for specific areas like the eyes, neck
            and lips.
          </Text>
        </Box>
        <Box margin="auto" p={5}>
          <Heading fontSize="2xl"> Facial Products</Heading>
          <Text textAlign="left" fontWeight="200">
            Beauty tools can also be found among our wide range of skin care
            products. In recent years, these tools have gained popularity due to
            their ability to boost the effects of any daily regimen and improve
            the quality of the skin. The market has exploded with tools like
            electric cleansing brushes, light therapy devices and other at-home
            appliances which provide treatments that until recently were only
            available in doctors’ offices and spas.﻿
          </Text>
        </Box>
        <Box margin="auto" p={5}>
          <Heading fontSize="2xl">Skin Care Products</Heading>
          <Text textAlign="left" fontWeight="200">
            Skin care products for the body include the basics like cleansers
            and moisturizers but we also offer more specialized products for
            areas like the hands and feet as well as treatments for concerns
            such as scars, stretch marks and cellulite.
          </Text>
        </Box>
      </VStack>
    </>
  );
};
export default SkinCareDetails;
