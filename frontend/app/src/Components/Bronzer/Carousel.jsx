import { Box, Container, Heading, Stack, Text } from "@chakra-ui/react";

const BodyCareCarousel = () => {
  return (
    <Box>
      <Box
        height={"md"}
        position="relative"
        backgroundPosition="center"
        backgroundRepeat="no-repeat"
        backgroundSize="fit"
        backgroundImage={
          "https://static.thcdn.com/images/xlarge/webp/widgets/121-us/40/1180x450-080140.jpeg"
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
            color="white"
          >
            <Heading
              fontWeight="400"
              fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}
            >
              BODY CARE
            </Heading>
            <Text
              fontWeight="200"
              fontSize={{ base: "md", lg: "lg" }}
              color="white"
            >
              Boost body confidence and spoil your skin with our extensive range
              of luxurious body lotions, hand creams, Be
            </Text>
          </Stack>
        </Container>
      </Box>
    </Box>
  );
};
export default BodyCareCarousel;
