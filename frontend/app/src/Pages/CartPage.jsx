import { Box, Button, Flex, Input, InputGroup, InputRightAddon, Text } from '@chakra-ui/react'
import axios from 'axios'
import { useEffect } from 'react'
import { useState } from 'react'
import { BsFillShieldLockFill } from 'react-icons/bs'
import CartTable from '../Components/CartPage/CartTable'
import { useAuth } from '../Utilis/Auth'
import { useCartLog } from '../Utilis/Context/CartContext'

function CartPage() {
  const {getUser} = useAuth()
  const {cartLog} = useCartLog()
  const [cartData ,setCatData] = useState([])
  const [cartId , setCartId] = useState("")
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
        console.log("cascasc",res.data)
        setCartId(res.data[0]._id)
      }
    }).catch((e)=>{
      console.log(e.message)
    })}
    console.log(cartData)
    useEffect(()=>{
      toggleCartData()
    },[cartLog]) 
  return (
    <Box mt="150px" p={{lg:"50px" ,md:"40px" , sm:"10px" , base:"10px"}}>
        <Flex mb="20px" alignItems='center' justifyContent='space-between'>
            <Text fontSize="40px" fontWeight='semibold'>Your Orders</Text>
            <Button color='white' bg='black' ><BsFillShieldLockFill/><Text ml="5px">CHECKOUT SECURELY NOW</Text></Button>
        </Flex>
        <CartTable fun={toggleCartData} data={[...cartData]} cartId={cartId}/>
        <InputGroup w="500px" m="auto" mt="50px">
        <Input placeholder='Got a coupon code? Enter it here:'/>
        <InputRightAddon>ADD</InputRightAddon>
        </InputGroup>
        <Flex my="20px" alignItems='center' justifyContent='space-between'>
            <Button  >Continue Shopping</Button>
            <Button color='white' bg='black' ><BsFillShieldLockFill/><Text ml="5px">CHECKOUT SECURELY NOW</Text></Button>
        </Flex>
    </Box>
  )
}

export default CartPage