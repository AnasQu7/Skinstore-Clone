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
  function Hair() {
  return (
    <Popover trigger='hover'>
    <PopoverTrigger>
    <Box className={NavStyle.blackHover} p="7px">
        Hair Care
    </Box>
    </PopoverTrigger>
    <PopoverContent w="1000px">
      <PopoverArrow />
      <PopoverBody  p="25px">
        <Flex p="15px" justifyContent='space-between'>
          <Box>
            <Box p="0.2px" bg="grey"></Box>
            <Text mb="5px" p='3px' fontWeight="bold">Popular Categories</Text>
            <Text className={NavStyle.greyHover} p="3px" >View All Hair Care</Text>
            <Text className={NavStyle.greyHover} p="3px" >New In</Text>
            <Text className={NavStyle.greyHover} p="3px" >Clean Hair Care</Text>
            <Text className={NavStyle.greyHover} p="3px" >5* Rated Products</Text>
            <Text className={NavStyle.greyHover} p="3px" >Gifts & Sets</Text>
            <Text className={NavStyle.greyHover} p="3px" >Travel Sizes</Text>
            <Text className={NavStyle.greyHover} p="3px" >Supersize & Duos</Text>
          </Box>
          <Box>
            <Box p="0.2px" bg="grey"></Box>
            <Text mb="5px" p='3px' fontWeight="bold">Product Type</Text>
            <Text className={NavStyle.greyHover} p="3px" >Shampoo</Text>
            <Text className={NavStyle.greyHover} p="3px" >Conditioners</Text>
            <Text className={NavStyle.greyHover} p="3px" >Hair Treatments</Text>
            <Text className={NavStyle.greyHover} p="3px" >Hair Masks</Text>
            <Text className={NavStyle.greyHover} p="3px" >Hair Oils</Text>
            <Text className={NavStyle.greyHover} p="3px" >Hair Sprays</Text>
            <Text className={NavStyle.greyHover} p="3px" >Hair Styling</Text>
            <Text className={NavStyle.greyHover} p="3px" >Hair Thinning & Loss</Text>
            <Text className={NavStyle.greyHover} p="3px" >Hair Color Treatments</Text>
            <Text className={NavStyle.greyHover} p="3px" >Hair Supplements</Text>
            <Text className={NavStyle.greyHover} p="3px" >Hair Brushes & Combs</Text>
          </Box>
          <Box>
            <Box p="0.2px" bg="grey"></Box>
            <Text mb="5px" p='3px' fontWeight="bold">Hair Type</Text>
            <Text className={NavStyle.greyHover} p="3px" >Anti-Dandruff & Scalp Care</Text>
            <Text className={NavStyle.greyHover} p="3px" >Coarse & Textured Hair</Text>
            <Text className={NavStyle.greyHover} p="3px" >Colored Hair</Text>
            <Text className={NavStyle.greyHover} p="3px" >Curly & Wavy Hair</Text>
            <Text className={NavStyle.greyHover} p="3px" >Damaged Hair</Text>
            <Text className={NavStyle.greyHover} p="3px" >Dry Hair</Text>
            <Text className={NavStyle.greyHover} p="3px" >Fine Hair</Text>
            <Text className={NavStyle.greyHover} p="3px" >Oily Hair</Text>
          </Box>
          <Box>
            <Box p="0.2px" bg="grey"></Box>
            <Text mb="5px" p='3px' fontWeight="bold">Electrical</Text>
            <Text className={NavStyle.greyHover} p="3px" >Flat Irons</Text>
            <Text className={NavStyle.greyHover} p="3px" >Hair Dryers</Text>
            <Text className={NavStyle.greyHover} p="3px" >Rollers & Curling Tongs</Text>
          </Box>
          <Box>
            <Box p="0.2px" bg="grey"></Box>
            <Text mb="5px" p='3px' fontWeight="bold">Hair Removal</Text>
            <Text className={NavStyle.greyHover} p="3px" >Hair Removal Devices</Text>
            <Text className={NavStyle.greyHover} p="3px" >Hair Removal Products</Text>
            <Text className={NavStyle.greyHover} p="3px" >Men's Shaving Products</Text>
          </Box>
          
        </Flex>
      </PopoverBody>
    </PopoverContent>
  </Popover>
  
  )
  }
  
  export default Hair