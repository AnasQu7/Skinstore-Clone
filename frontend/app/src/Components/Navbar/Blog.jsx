import { 
    Box,
    Popover,
    PopoverTrigger,
    PopoverContent,
    PopoverBody,
    PopoverArrow,
    Text,
    SimpleGrid,
    Image,
  } from '@chakra-ui/react'
  import React from 'react'
  
  import NavStyle from './navbar.module.css'
  function Blog() {
  return (
    <Popover trigger='hover'>
    <PopoverTrigger>
    <Box className={NavStyle.blackHover} p="7px">
        Blog
    </Box>
    </PopoverTrigger>
    <PopoverContent w="80vw">
      <PopoverArrow />
      <PopoverBody bg=" #f5f3f3" p="25px">
        <SimpleGrid gap="40px" columns={5}>
            <Box bg="white" className={NavStyle.shadowHover} >
             <Image w="100%" src="https://s1.thcdn.com/navigation/121/us/2022/10/original-Blog_Skin_Care_Nav_%281%29-20221027.png"/>
             <Text py="5px" textAlign='center'>Skin Care</Text>
            </Box>
            <Box bg="white" className={NavStyle.shadowHover} >
             <Image w="100%" src="https://s1.thcdn.com/navigation/121/us/2022/10/original-Blog_Makeup_Nav_%281%29-20221027.png"/>
             <Text py="5px" textAlign='center'>Key workers discount</Text>
            </Box>
            <Box bg="white" className={NavStyle.shadowHover} >
             <Image w="100%" src="https://s1.thcdn.com/navigation/121/us/2022/10/original-Blog_Hair_Care_Nav_%281%29-20221028.png"/>
             <Text py="5px" textAlign='center'>Refer a friend</Text>
            </Box>
            <Box bg="white" className={NavStyle.shadowHover} >
             <Image w="100%" src="https://s1.thcdn.com/navigation/121/us/2022/10/original-Blog_Body_Nav_%281%29-20221027.png"/>
             <Text py="5px" textAlign='center'>Clearance</Text>
            </Box>
            <Box bg="white" className={NavStyle.shadowHover} >
             <Image w="100%" src="https://s1.thcdn.com/navigation/121/us/2022/10/original-Blog_Free_Beauty_Consultation_Nav_%282%29-20221028.png"/>
             <Text py="5px" textAlign='center'>Gift and Sets</Text>
            </Box>
            <Box bg="white" className={NavStyle.shadowHover} >
             <Image w="100%" src="https://s1.thcdn.com/navigation/121/us/2022/10/original-Blog_Tips_and_Advice_Nav_%281%29-20221027.png"/>
             <Text py="5px" textAlign='center'>All Coupons</Text>
            </Box>
            <Box bg="white" className={NavStyle.shadowHover} >
             <Image w="100%" src="https://s1.thcdn.com/navigation/121/us/2022/10/original-Blog_Free_Beauty_Consultation_Nav_%281%29-20221027.png"/>
             <Text py="5px" textAlign='center'>Featured Offers</Text>
            </Box>
        </SimpleGrid>
      </PopoverBody>
    </PopoverContent>
  </Popover>
  
  )
  }
  
  export default Blog

