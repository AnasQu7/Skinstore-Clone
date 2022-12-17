import { Box, Button, Center } from '@chakra-ui/react'
import React from 'react'
import { useState } from 'react'

function CartQuantity({quantity}) {
    const [count,setCount] = useState(quantity?quantity:1)
  return (
    <Center>
    <Box display="flex" alignItems='center' gap="10px" justifyContent="center">
        <Button w="30px" h="30px" onClick={()=>{setCount(count-1)}} disabled={count<=1}>-</Button>
        <Button>{count}</Button>
        <Button w="30px" h="30px" onClick={()=>{setCount(count+1)}}>+</Button>
    </Box>
    </Center>
  )
}

export default CartQuantity