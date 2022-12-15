import {
  Box,
  Text,
  Button,
  SimpleGrid,
  List,
  ListItem,
  ListIcon,
  Heading,
} from "@chakra-ui/react";
import { PhoneIcon } from "@chakra-ui/icons";
import { TbTruckDelivery, TbRefresh, TbHelp } from "react-icons/tb";
import { MdGpsFixed } from "react-icons/md";
import {
  FaAlipay,
  FaCcAmex,
  FaCcMastercard,
  FaCcStripe,
  FaCcVisa,
  FaCookie,
  FaPaypal,
  FaPinterest,
  FaSnapchat,
} from "react-icons/fa";
import React from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <Box mb="1rem">
      <Box mt="4rem" h="1px" bgColor="black"></Box>
      <SimpleGrid columns={2} w="90%" m="auto" pl="2.5%" pr="2.5%" mt="5rem">
        <Box textAlign="left">
          <Text pb=".5rem" fontWeight="600">
            Sign up to our email list and receive 20% off your next order
          </Text>
          <Button
            bgColor="black"
            color="white"
            fontWeight="200"
            borderRadius="0px"
          >
            SIGN UP
          </Button>
        </Box>
        <Box textAlign="left" color="black">
          <Text pb=".5rem" fontWeight="600">
            Connect with us
          </Text>
          <Box display="flex" gap="10">
            <FaFacebook />
            <FaTwitter />
            <FaSnapchat />
            <FaPinterest />
            <FaInstagram />
          </Box>
        </Box>
      </SimpleGrid>
      <Box
        display="flex"
        gap="10"
        w="90%"
        m="auto"
        pl="2.5%"
        pr="2.5%"
        mt="2rem"
        fontWeight="200"
      >
        <Box textAlign="left" w="50vw">
          <Box mb="2rem" h="1.5px" bgColor="grey"></Box>
          <Text pb=".5rem" fontWeight="600">
            Help & Information
          </Text>
          <List spacing={3}>
            <ListItem>
              <ListIcon as={PhoneIcon} fontSize="1.2rem" color="black.800" />
              Customer Service
            </ListItem>
            <ListItem>
              <ListIcon
                as={TbTruckDelivery}
                fontSize="1.2rem"
                color="black.800"
              />
              Delivery Information
            </ListItem>
            <ListItem>
              <ListIcon as={TbRefresh} fontSize="1.2rem" color="black.800" />
              Return &nbsp; & &nbsp; Refund
            </ListItem>
            <ListItem>
              <ListIcon as={TbHelp} fontSize="1.2rem" color="black.800" />
              Help Center
            </ListItem>
            <ListItem>
              <ListIcon as={MdGpsFixed} fontSize="1.2rem" color="black.800" />
              Track my order
            </ListItem>
            <Text>Accessiblity</Text>
            <ListItem>
              <ListIcon as={FaCookie} fontSize="1.2rem" color="black.800" />
              Cookie Setting
            </ListItem>
          </List>
        </Box>
        <Box w="20vw" textAlign="left">
          <Box mb="2rem" h="1.5px" bgColor="grey"></Box>
          <Text pb=".5rem" fontWeight="600">
            About SkinStore
          </Text>
          <List spacing={3}>
            <ListItem>Key Workers Discount</ListItem>
            <ListItem>About Us</ListItem>
            <ListItem>Affilate Program</ListItem>
            <ListItem>Brand Directory</ListItem>
            <ListItem>Coupon Codes</ListItem>
            <ListItem>Refer A Friend</ListItem>
            <ListItem>Student Discount</ListItem>
            <ListItem>Join SkinStore Experts</ListItem>
          </List>
        </Box>
        <Box w="20vw" textAlign="left">
          <Box mb="2rem" h="1.5px" bgColor="grey"></Box>
          <Text pb=".5rem" fontWeight="600">
            Legal
          </Text>
          <List spacing={3}>
            <ListItem>Cookie Information</ListItem>
            <ListItem>Privacy Policy</ListItem>
            <ListItem>Terms & Condition</ListItem>
            <ListItem>Modern Slavery Statement</ListItem>
            <ListItem>Coupon Codes</ListItem>
          </List>
        </Box>
        <Box w="20vw" textAlign="left">
          <Box mb="2rem" h="1.5px" bgColor="grey"></Box>
          <Text pb=".5rem" fontWeight="600">
            How To Contact Us
          </Text>
          <List spacing={3}>
            <ListItem>Message Us</ListItem>
            <ListItem>Free Beauty Consultations</ListItem>
            <ListItem>Terms & Condition</ListItem>
          </List>
        </Box>
      </Box>
      <Box mt="4rem" h="1px" mb="3rem" bgColor="black"></Box>
      <Box>
        <SimpleGrid
          columns={2}
          w="90%"
          m="auto"
          pl="2.5%"
          pr="2.5%"
          mt="2.2rem"
        >
          <Box textAlign="left">
            <Heading>THG</Heading>
            <Text display="flex">2022 © The Hut.com Ltd.</Text>
          </Box>
          <Box textAlign="left">
            <Text pb=".5rem" fontWeight="600">
              Pay Securely
            </Text>
            <Box display="flex" gap="10">
              <FaCcVisa />
              <FaCcMastercard />
              <FaCcAmex />
              <FaPaypal />
              <FaAlipay />
              <FaCcStripe />
            </Box>
          </Box>
        </SimpleGrid>
      </Box>
    </Box>
  );
};

export default Footer;
