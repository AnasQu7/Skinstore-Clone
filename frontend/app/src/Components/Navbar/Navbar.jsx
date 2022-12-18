import { Box, Flex, Image, Text } from '@chakra-ui/react'
import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../../Utilis/Auth'
import Sidebar from '../AbhishekDashboard/Sidebar'
import Account from './Account'
import Bath from './Bath'
import Blog from './Blog'
import Brands from './Brands'
import Build from './Build'
import Cart from './Cart'
import Fragrance from './Fragrance'
import Hair from './Hair'
import Holiday from './Holiday'
import Makeup from './Makeup'
import Navmenu from './Navmenu'
import Popsearch from './Popsearch'
import Sale from './Sale'
import Search from './Search'
import SelfCare from './SelfCare'
import Skin from './Skin'
import Tools from './Tools'
import Trending from './Trending'
import UserAccount from './UserAccount'

function Navbar() {
  const {user} = useAuth()
  const navigate = useNavigate();
  return (
    <Box zIndex={2000} position="fixed" top="0px" right="0px" left="0px">
    <Box display='flex' justifyContent="space-between" alignItems='center' px="20px" h={{lg:"110px",md:"50px",sm:"50px",base:"50px"}} borderBottom="2px solid black" bg="white">
          <Flex display={{lg:"none",md:"flex",sm:"flex",base:"flex"}} gap="15px">
            <Navmenu/>
            <Popsearch/>
          </Flex>
          
          <Flex h="100%" alignItems='center'>
            <Text display={{lg:"none",md:"initial",sm:"initial",base:"initial"}}>SKIN</Text>
            <Image h="100%"  p="5px" onClick={()=>navigate("/")} src="/logo.png"/>
            <Text display={{lg:"none",md:"initial",sm:"initial",base:"initial"}}>CARE</Text>
          </Flex>
          
          <Flex w="500px" alignItems="center" display={{lg:"flex",md:"none",sm:"none",base:'none'}} bg="white" boxShadow= {` rgba(33, 35, 38, 0.1) 0px 10px 10px -10px;`}>
          <Search/>
          </Flex>
          <Flex gap="50px">
          {!user?<Account/>:<UserAccount {...user} />}
          <Link to="/cart"><Cart/></Link>
          </Flex>
    </Box>
    <Flex display={{lg:"flex",md:"none",sm:"none",base:'none'}} gap="10px" bg="white" boxShadow= {` rgba(33, 35, 38, 0.1) 0px 10px 10px -10px;`} justifyContent="center">
     <Brands/>
      <Holiday/>
      <Sale/>
      <Skin/>
      <Hair/>
      <Makeup/>
      <Bath/>
      <Fragrance/>
      <SelfCare/>
      <Tools/>
      <Trending/>
      <Build/>
      <Blog/>
    </Flex>
    </Box>
  )
}

export default Navbar


