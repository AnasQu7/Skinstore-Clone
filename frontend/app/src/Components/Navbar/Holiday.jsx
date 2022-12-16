import { 
  Box,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverBody,
  PopoverArrow,
  Flex,
  Text,
} from '@chakra-ui/react'
import React from 'react'

import NavStyle from './navbar.module.css'
function Holiday() {
return (
  <Popover trigger='hover'>
  <PopoverTrigger>
  <Box className={NavStyle.blackHover} p="7px">
      Holiday 🎁
  </Box>
  </PopoverTrigger>
  <PopoverContent w="1000px">
    <PopoverArrow />
    <PopoverBody  p="25px">
      <Flex p="15px" justifyContent='space-between'>
        <Box>
          <Box p="0.2px" bg="grey"></Box>
          <Text mb="5px" p='3px' fontWeight="bold">Popular Categories</Text>
          <Text className={NavStyle.greyHover} p="3px" >Shop All Holiday Beauty Gifts</Text>
          <Text className={NavStyle.greyHover} p="3px" >Our Favorite Beauty Gift Sets</Text>
          <Text className={NavStyle.greyHover} p="3px" >SkinStore Exclusive Gifts</Text>
          <Text className={NavStyle.greyHover} p="3px" >SkinStore's Holiday Edit Box</Text>
          <Text className={NavStyle.greyHover} p="3px" >Holiday Gift Ideas for Her</Text>
          <Text className={NavStyle.greyHover} p="3px" >Holiday Gift Ideas for Him</Text>
        </Box>
        <Box>
          <Box p="0.2px" bg="grey"></Box>
          <Text mb="5px" p='3px' fontWeight="bold">By Gift Idea</Text>
          <Text className={NavStyle.greyHover} p="3px" >Budget Friendly and  Small Gifts</Text>
          <Text className={NavStyle.greyHover} p="3px" >Stocking Stuffer Ideas</Text>
          <Text className={NavStyle.greyHover} p="3px" >Thoughtful Gifts for Smart Splurges</Text>
          <Text className={NavStyle.greyHover} p="3px" >Luxury Holiday Gifts</Text>
          <Text className={NavStyle.greyHover} p="3px" >Last Minute Gift Ideas</Text>
          <Text className={NavStyle.greyHover} p="3px" >Gifts For You</Text>
        </Box>
        <Box>
          <Box p="0.2px" bg="grey"></Box>
          <Text mb="5px" p='3px' fontWeight="bold">By Price</Text>
          <Text className={NavStyle.greyHover} p="3px" >Gifts Under $25</Text>
          <Text className={NavStyle.greyHover} p="3px" >Gifts Under $50</Text>
          <Text className={NavStyle.greyHover} p="3px" >Gifts Under $100</Text>
          <Text className={NavStyle.greyHover} p="3px" >Gifts Over $100</Text>
        </Box>
        <Box>
          <Box p="0.2px" bg="grey"></Box>
          <Text mb="5px" p='3px' fontWeight="bold">By Category</Text>
          <Text className={NavStyle.greyHover} p="3px" >Skin Care Gifts</Text>
          <Text className={NavStyle.greyHover} p="3px" >Body Care Gifts</Text>
          <Text className={NavStyle.greyHover} p="3px" >Home Scents and Candle Gifts</Text>
          <Text className={NavStyle.greyHover} p="3px" >Makeup Gifts</Text>
          <Text className={NavStyle.greyHover} p="3px" >Hair Care Gifts</Text>
          <Text className={NavStyle.greyHover} p="3px" >Beauty Tools and Hair Styling Gifts</Text>
        </Box>
      </Flex>
    </PopoverBody>
  </PopoverContent>
</Popover>

)
}

export default Holiday