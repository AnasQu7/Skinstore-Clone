import { Input, InputGroup, InputRightAddon } from '@chakra-ui/react'
import React from 'react'
import { BiSearch } from 'react-icons/bi';
function Search() {
  return (
    <InputGroup w="95%" m="auto" h="40px" size='sm'>
            <Input h="100%" placeholder='Search for product or brand...' />
            <InputRightAddon h="100%" bg='white' children={<BiSearch/>} />
    </InputGroup>
  )
}

export default Search