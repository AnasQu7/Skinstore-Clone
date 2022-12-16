import { Box, Divider, Heading, Spacer, Text, VStack } from "@chakra-ui/react";

const BodyCareDetails = () => {
  return (
    <>
      <VStack>
        <Box margin="auto" p={5}>
          <Heading fontSize="4xl" fontWeight="400">
            {" "}
            Body
          </Heading>
          <Text textAlign="left" fontWeight="100">
            Let our range of body products inspire you to pamper yourself from
            top to toe, whilst looking after your body. With our extensive range
            of skin loving products, from moisturizers and bath oils, to firming
            creams and fake tans, there is a product for every concern and body
            part. With the correct bodycare products and regime in place, not
            only will you start to notice an improvement to your skin, but
            you'll notice the positive effect it has on your well being too.
            Give your body the moisturization it needs by choosing a rich
            all-over body moisturizer, enriched with softening and conditioning
            ingredients. When it comes to faking a subtle faux glow, opt for one
            of our luxury fake tans which can help you look healthier and feel
            more confident. For an invigorating cleanse, our selection of
            refreshing and uplifting shower creams and exfoliators deeply
            cleanse the skin to renew and smooth. With luxury products from some
            of the best brands - like Bliss, Molton Brown and Philosophy - your
            skin is sure to be in for a treat.
          </Text>
        </Box>
      </VStack>
    </>
  );
};
export default BodyCareDetails;
