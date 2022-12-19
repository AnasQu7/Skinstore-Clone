import {
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
    TableContainer,
    Text,
    Center,
    Divider,
    Box,
    Button,
    Image,
    useToast,
  } from '@chakra-ui/react';
import CartStyle from "./cartStyles.module.css"
import { RxCrossCircled } from 'react-icons/rx'
import CartQuantity from './CartQuantity'
import axios from 'axios';
import { useAuth } from '../../Utilis/Auth';
import { useCartLog } from '../../Utilis/Context/CartContext';
function CartTable({data,fun,cartId}) {
    var cartTotal = 0
    const {toggleCartLog,cartLog} = useCartLog()
    const {getUser} = useAuth()
    const toast = useToast();
  const toggleRemoveFromCart = (prop)=>{ 
    const token = getUser()
    const url = process.env.REACT_APP_BASE_URL
    const body={
      productId : prop.id,
      _id : cartId
    }
    // console.log("props",token)
    // console.log(body)
    axios.post(("https://skin-care-hub.onrender.com"+"/cart/delete"),body,{
      headers :{
        token,
      }      
    }).then((res)=>{
      console.log(res.data)
      toggleCartLog()
      
    }).catch((e)=>{
      toast({
        title: 'Unauthorized',
        description: "Login to continue",
        status: 'error',
        duration: 9000,
        isClosable: true,
      })
      console.log(e.message)
    })}

console.log("carata",data)
if(data.length===0){
    return <Box>
        <Divider/>
        <Center my="50px">
        <Text fontSize='30px' alignItems='center'>No Items In Cart!</Text>
        </Center>
        <Divider/>
        </Box>
}
  return (
    <>
    <TableContainer minW='1000px' maxW="1400px">
  <Table variant='simple'>
    <Thead>
      <Tr textAlign='center'>
        <Th>Items</Th>
        <Th></Th>
        <Th>Price</Th>
        <Th textAlign='center'>Quantity</Th>
        <Th>Subtotal</Th>
      </Tr>
    </Thead>
    <Tbody>
      {data.map((e)=>{
         cartTotal +=( (+e.productId.price)*e.quantity);
          return<Tr>
        <Td>
            <Box display='flex' justifyContent='center' w="150px" h="150px" alignItems='center'>
               <Image h="100%" src={e.productId.image_link}/>
            </Box>
        </Td>
        <Td>
            <Box display='flex' flexDir="column" h="170px" justifyContent='space-around' maxW="100px">
           <Box>
            <Text w="100%" fontWeight='semibold' mb="5px" fontSize='20px'>{e.productId.name}</Text>
            <Text fontWeight="bold" textTransform='uppercase' fontSize='10px' w="100%">{e.productId.brand}</Text>
            </Box>
           <Button px="70px">Add to Whishlist</Button>
            </Box>
            </Td>
        <Td>{e.productId.price_sign+e.productId.price}</Td>
        <Td>{<CartQuantity fun={fun} id={e.productId._id} quantity={e.quantity}/>}</Td>
        <Td>{e.productId.price_sign+(e.quantity?e.quantity*e.productId.price:e.productId.price)}</Td>
        <Td >
          <Box  className={CartStyle.blackHover} onClick={()=>{toggleRemoveFromCart({id:e.productId._id})}} w="16px" borderRadius="50%" >
          <RxCrossCircled />
          </Box>
          </Td>
      </Tr>
      })
      }
    </Tbody>
   
  </Table>
</TableContainer>
<Divider/>
<Box textAlign="right" w="100%">
<Text>Cart Subtotal: <span style={{fontWeight:"bold"}}>₹{cartTotal}</span></Text>
</Box>
<Divider/>
      </>
  )
}

export default CartTable
