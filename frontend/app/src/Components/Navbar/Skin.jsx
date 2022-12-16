import { 
    Box,
    Popover,
    PopoverTrigger,
    PopoverContent,
    PopoverHeader,
    PopoverBody,
    PopoverArrow,
    PopoverCloseButton,
    Flex,
    Heading,
    Divider,
    Text,
  } from '@chakra-ui/react'
  import React from 'react'
  
  import NavStyle from './navbar.module.css'
  function Skin() {
  return (
    <Popover trigger='hover'>
    <PopoverTrigger>
    <Box className={NavStyle.blackHover} p="7px">
        Skin Care
    </Box>
    </PopoverTrigger>
    <PopoverContent w="1000px">
      <PopoverArrow />
      <PopoverBody  p="25px">
        <Flex p="15px" justifyContent='space-between'>
            
          <Box>
            <Box p="0.2px" bg="grey"></Box>
            <Text mb="5px" p='3px' fontWeight="bold">Popular Categories</Text>  
            <Text className={NavStyle.greyHover} px="3px" py="1px" >View All Skin Care</Text>
            <Text className={NavStyle.greyHover} px="3px" py="1px" >New In</Text>
            <Text className={NavStyle.greyHover} px="3px" py="1px" >Clean Skincare</Text>
            <Text className={NavStyle.greyHover} px="3px" py="1px" >5* Rated Products</Text>
            <Text className={NavStyle.greyHover} px="3px" py="1px" >Gifts & Sets</Text>
            <Text className={NavStyle.greyHover} px="3px" py="1px" >Supersizes & Duo</Text>
            <Text className={NavStyle.greyHover} px="3px" py="1px" >Travel Sizes</Text>
          </Box>
          

          <Box>
            <Box p="0.2px" bg="grey"></Box>
            <Text mb="5px" p='3px' fontWeight="bold">By Product Type</Text>
                <Text className={NavStyle.greyHover} px="3px" py="1px" >Cleansers</Text>
                <Text className={NavStyle.greyHover} px="3px" py="1px" >Moisturizers</Text>
                <Text className={NavStyle.greyHover} px="3px" py="1px" >Serums</Text>
                <Text className={NavStyle.greyHover} px="3px" py="1px" >Eye Serum</Text>
                <Text className={NavStyle.greyHover} px="3px" py="1px" >Exfoliators</Text>
                <Text className={NavStyle.greyHover} px="3px" py="1px" >Masks</Text>
                <Text className={NavStyle.greyHover} px="3px" py="1px" >Eye Care</Text>
                <Text className={NavStyle.greyHover} px="3px" py="1px" >Toners</Text>
                <Text className={NavStyle.greyHover} px="3px" py="1px" >Lip Care</Text>
                <Text className={NavStyle.greyHover} px="3px" py="1px" >Oils</Text>
                <Text className={NavStyle.greyHover} px="3px" py="1px" >Treatments</Text>
                <Text className={NavStyle.greyHover} px="3px" py="1px" >Mists</Text>
                <Text className={NavStyle.greyHover} px="3px" py="1px" >Self Tanning</Text>
                <Text className={NavStyle.greyHover} px="3px" py="1px" >Tools</Text>
          </Box>

          <Box>
            <Box p="0.2px" bg="grey"></Box>
            <Text mb="5px" p='3px' fontWeight="bold">By Ingredient</Text>
                <Text className={NavStyle.greyHover} px="3px" py="1px" >Vitamin C</Text>
                <Text className={NavStyle.greyHover} px="3px" py="1px" >AHA</Text>
                <Text className={NavStyle.greyHover} px="3px" py="1px" >Caffeine</Text>
                <Text className={NavStyle.greyHover} px="3px" py="1px" >Retinol</Text>
                <Text className={NavStyle.greyHover} px="3px" py="1px" >Hyaluronic Acid</Text>
                <Text className={NavStyle.greyHover} px="3px" py="1px" >Niacinamide</Text>
                <Text className={NavStyle.greyHover} px="3px" py="1px" >Lactic Acid</Text>
                <Text className={NavStyle.greyHover} px="3px" py="1px" >Salicylic Acid</Text>
                <Text className={NavStyle.greyHover} px="3px" py="1px" >Glycolic Acid</Text>
                <Text className={NavStyle.greyHover} px="3px" py="1px" >Azelaic Acid</Text>
          </Box>
          

          <Box>
            <Box p="0.2px" bg="grey"></Box>
            <Text mb="5px" p='3px' fontWeight="bold">By Specific Concern</Text>
            <Text className={NavStyle.greyHover} px="3px" py="1px" >Acne & Blemishes      </Text>
            <Text className={NavStyle.greyHover} px="3px" py="1px" >Fine Lines & Wrinkles</Text>
            <Text className={NavStyle.greyHover} px="3px" py="1px" >Dark Circles</Text>
            <Text className={NavStyle.greyHover} px="3px" py="1px" >Dry Skin</Text>
            <Text className={NavStyle.greyHover} px="3px" py="1px" >Dullness</Text>
            <Text className={NavStyle.greyHover} px="3px" py="1px" >Lack of Firmness</Text>
            <Text className={NavStyle.greyHover} px="3px" py="1px" >Pigmentation</Text>
            <Text className={NavStyle.greyHover} px="3px" py="1px" >Pregnancy Skincare</Text>
            <Text className={NavStyle.greyHover} px="3px" py="1px" >Redness & Rosacea</Text>
            <Text className={NavStyle.greyHover} px="3px" py="1px" >Sensitive Skin</Text>
            <Text className={NavStyle.greyHover} px="3px" py="1px" >Visible Pores</Text>
          </Box>
          

          <Box>
            <Box p="0.2px" bg="grey"></Box>
            <Text mb="5px" p='3px' fontWeight="bold">Sunscreen & Suncare</Text>
            <Text className={NavStyle.greyHover} px="3px" py="1px" >Take The SPF Quiz</Text>
            <Text className={NavStyle.greyHover} px="3px" py="1px" >SPF 30 and over</Text>
            <Text className={NavStyle.greyHover} px="3px" py="1px" >SPF 50 and over</Text>
            <Text className={NavStyle.greyHover} px="3px" py="1px" >After Sun</Text>
            <Text className={NavStyle.greyHover} px="3px" py="1px" >Tinted</Text>
            <Text className={NavStyle.greyHover} px="3px" py="1px" >Mineral</Text>
            <Text className={NavStyle.greyHover} px="3px" py="1px" >Eye Protection</Text>
          </Box>
          
        </Flex>
      </PopoverBody>
    </PopoverContent>
  </Popover>
  
  )
  }
  
  export default Skin