import { Input, InputGroup, InputRightAddon } from '@chakra-ui/react'
import React, { useContext } from 'react'
import { useState } from 'react';
import { BiSearch } from 'react-icons/bi';
import { useNavigate } from 'react-router-dom';
import { SearchContext } from '../../Utilis/Context/SearchContext';
function Search() {
  const [SearchInp , setSearchInp] = useState("")
  const {toggleUrlQuery} = useContext(SearchContext)
  const navigate = useNavigate()
  function toggleSearch(e){
    toggleUrlQuery({q:SearchInp})
      navigate("/productpage")
  }
  return (
    <InputGroup w="95%" m="auto" h="40px" size='sm'>
            <Input 
            onKeyPress={(e)=>{
              if(e.code==="Enter"){
                toggleSearch()
              }
            }}
            onChange={(e)=>{
              setSearchInp(e.target.value)
              // console.log(e)
              }} h="100%" placeholder='Search for product or brand...' />
            <InputRightAddon h="100%" bg='white' onClick={toggleSearch} children={<BiSearch/>} />
    </InputGroup>
  )
}

export default Search