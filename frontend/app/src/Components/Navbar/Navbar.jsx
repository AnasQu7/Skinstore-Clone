import { Box, Flex, Image, Text } from '@chakra-ui/react'
import React from 'react'
import Account from './Account'
import Brands from './Brands'
import Cart from './Cart'
import Navmenu from './Navmenu'
import Popsearch from './Popsearch'
import Search from './Search'

function Navbar() {
  return (
    <Box position="fixed" top="0px" right="0px" left="0px">
    <Box display='flex' justifyContent="space-between" alignItems='center' px="20px" h={{lg:"110px",md:"50px",sm:"50px",base:"50px"}} borderBottom="2px solid black" bg="white">
          <Flex display={{lg:"none",md:"flex",sm:"flex",base:"flex"}} gap="15px">
            <Navmenu/>
            <Popsearch/>
          </Flex>
          <Flex h="100%" alignItems='center'>
            <Text display={{lg:"none",md:"initial",sm:"initial",base:"initial"}}>SKIN</Text>
          <Image h="100%"  p="5px" src="/logo.png"/>
            <Text display={{lg:"none",md:"initial",sm:"initial",base:"initial"}}>CARE</Text>
          </Flex>
          <Flex w="500px" alignItems="center" display={{lg:"flex",md:"none",sm:"none",base:'none'}} bg="white" boxShadow= {` rgba(33, 35, 38, 0.1) 0px 10px 10px -10px;`}>
          <Search/>
          </Flex>
          <Flex gap="50px">
          <Account/>
          <Cart/>
          </Flex>
    </Box>
    <Flex display={{lg:"flex",md:"none",sm:"none",base:'none'}} bg="white" boxShadow= {` rgba(33, 35, 38, 0.1) 0px 10px 10px -10px;`} px="100px" py="5px">
      <Brands/>
    </Flex>
    </Box>
  )
}

export default Navbar