import { 
    Box,
    Text,
    Popover,
    PopoverTrigger,
    PopoverContent,
    PopoverHeader,
    PopoverBody,
    PopoverFooter,
    PopoverArrow,
    PopoverCloseButton,
    PopoverAnchor,} from '@chakra-ui/react'
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
    <PopoverContent>
      <PopoverArrow />
      <PopoverCloseButton />
      <PopoverHeader>Confirmation!</PopoverHeader>
      <PopoverBody>Are you sure you want to have that milkshake?</PopoverBody>
    </PopoverContent>
  </Popover>

  )
}

export default Holiday
// Popular Categories
// Shop All Holiday Beauty Gifts
// Our Favorite Beauty Gift Sets
// SkinStore Exclusive Gifts
// SkinStore's Holiday Edit Box
// Holiday Gift Ideas for Her
// Holiday Gift Ideas for Him
// By Gift Idea
// Budget Friendly and Small Gifts
// Stocking Stuffer Ideas
// Thoughtful Gifts for Smart Splurges
// Luxury Holiday Gifts
// Last Minute Gift Ideas
// Gifts For You
// By Price
// Gifts Under $25
// Gifts Under $50
// Gifts Under $100
// Gifts Over $100
// By Category
// Skin Care Gifts
// Body Care Gifts
// Home Scents and Candle Gifts
// Makeup Gifts
// Hair Care Gifts
// Beauty Tools and Hair Styling Gifts