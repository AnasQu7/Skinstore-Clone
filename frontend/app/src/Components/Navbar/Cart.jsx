import {
    Popover,
    PopoverTrigger,
    PopoverContent,
    PopoverHeader,
    PopoverBody,
    PopoverArrow,
    PopoverCloseButton,
    Flex,
    Button,
    Box,
    Text,
    Image,
  } from '@chakra-ui/react'
import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react';
  import { BsMinecartLoaded } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../Utilis/Auth';
import { useCartLog } from '../../Utilis/Context/CartContext';
  

function Cart() {
  const navigate = useNavigate();
  const {getUser} = useAuth()
  const {cartLog} = useCartLog()
  const [cartData ,setCatData] = useState([])
   const toggleCartData = ()=>{ 
    const url = process.env.REACT_APP_BASE_URL
    const token = getUser()
    console.log(token)
    axios.get("https://skin-care-hub.onrender.com"+"/cart/fetchcartItem",{
      headers :{
        token :token
      }
    }).then((res)=>{
      console.log(res.data)
      if(res.data === "there is no item inside the cart" ){
        return;
      }else{
        setCatData(res.data[0].products)
      }
    }).catch((e)=>{
      console.log(e.message)
    })}
    useEffect(()=>{
      toggleCartData()
    },[cartLog])
  return (
    <Popover trigger='hover'>
  <PopoverTrigger>
    <Flex  alignItems='center' >
        <Box display="flex" alignItems="center" h="30px">
        <BsMinecartLoaded size="20px"/> 
        <Box h="100%">
        <Text top="0px" right="0px" px="3.5px" h="13px" color="white" fontSize="8px" bg="black" borderRadius="50%">{cartData? cartData.length:0}</Text>
        </Box>
        </Box>
        <Text display={{lg:"initial",md:"none",sm:"none",base:'none'}}>
        Cart
        </Text>
        </Flex>
  </PopoverTrigger>
  <PopoverContent>
    <PopoverArrow />
    <PopoverCloseButton />
    <PopoverHeader >
    <Button colorScheme='teal' onClick={()=>navigate("/cart")} variant='outline'>View Cart</Button>
    </PopoverHeader>
    <PopoverBody>
      <Box maxH='75vh' overflowX='hidden' overflowY='scroll'>

     {(cartData===0)? "there is no items in cart":
     cartData.map((e)=><Box gap="10px" display='flex' p={6}>
      <Flex justifyContent='center' h="80px" w="80px" alignItems='center'>
      <Image h="100%" alt={e.productId.image_link} src={e.productId.image_link1}/>
      </Flex>
      <Box>
        <Text>{e.productId["name"]}</Text>
        <Text fontWeight="bold">{`${e.productId["price_sign"]}${e.productId["price"]}`}</Text>
        <Text>Quantity: {e.productId["quantity"]?e.productId["quantity"]:1}</Text>
        
      </Box>
     </Box>)
     }
     </Box>
    </PopoverBody>
  </PopoverContent>
</Popover>
  )
}

export default Cart