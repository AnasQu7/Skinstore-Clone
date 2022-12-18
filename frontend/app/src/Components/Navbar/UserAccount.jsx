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
  } from '@chakra-ui/react'
  import { RxPerson } from 'react-icons/rx';
import { useNavigate } from 'react-router-dom';
import Admin from '../../Pages/Admin';
import { useAuth } from '../../Utilis/Auth';
  import NavStyle from './navbar.module.css'
function UserAccount({user,role,email,phone}) {
  const navigate = useNavigate()
  const {logout} = useAuth()
  return (
    <Popover trigger='hover'>
  <PopoverTrigger>
    <Flex alignItems='center' gap="10px"><RxPerson size="20px" ml=""/> <Text display={{lg:"initial",md:"none",sm:"none",base:'none'}}>{user}</Text></Flex>
  </PopoverTrigger>
  <PopoverContent>
    <PopoverArrow />
    <PopoverCloseButton />
    <PopoverHeader pt="40px" bg='#f9f9f9'>
      {role==="Admin"?<Button w="100%" onClick={()=>{navigate("/admin")}}>Admin</Button>:`Logged in As ${role}`}
    </PopoverHeader>
    <PopoverBody p="20px">
    <Flex flexDir="column">
     <Text fontWeight="semibold">Name: {user}</Text>
     <Text fontWeight="semibold">Email: {email}</Text>
     <Button colorScheme='teal' mt="20px" onClick={logout} variant='outline'>Log Out</Button>
    </Flex>
    </PopoverBody>
  </PopoverContent>
</Popover>
  )
}

export default UserAccount