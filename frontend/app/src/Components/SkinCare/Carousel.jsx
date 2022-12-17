import { Box, Container, Heading, Stack, Text } from "@chakra-ui/react";

const SkinCareCarousel = () => {
  return (
    <Box>
      <Box
        height={"md"}
        position="relative"
        backgroundPosition="center"
        backgroundRepeat="no-repeat"
        backgroundSize="fit"
        backgroundImage={
          "https://static.thcdn.com/images/xlarge/webp/widgets/121-us/26/1180x450-073626.jpeg"
        }
      >
        <Container size="container.lg" height="600px" position="relative">
          <Stack
            spacing={6}
            w={"full"}
            maxW={"lg"}
            position="absolute"
            top="30%"
            right="70%"
            left={0}
            transform="translate(0, -70%)"
            textAlign="left"
          >
            <Heading fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}>
              SKIN CARE
            </Heading>
            <Text fontSize={{ base: "md", lg: "lg" }} color="GrayText">
              Revamp your skincare routine this season! Whether you're looking
              for acne treatments, anti-aging or sun care, shop our full range
              of skincare products!
            </Text>
          </Stack>
        </Container>
      </Box>
    </Box>
  );
};
export default SkinCareCarousel;
