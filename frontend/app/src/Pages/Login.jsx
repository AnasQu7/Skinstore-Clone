import {
    Flex,
    Box,
    FormControl,
    FormLabel,
    Input,
    Checkbox,
    Stack,
    Button,
    Heading,
    Text,
    useColorModeValue
  } from "@chakra-ui/react";

  import { useState } from "react";
  import { Link, useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../Utilis/Auth";

  // import jwt from "jsonwebtoken";
  export default function Login() {
    
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [user, setUser] = useState("");
    const {auth,login} = useAuth()
    const navigate = useNavigate();
    const location = useLocation();
 
    const redirectPath = location.state?.path || "/";
    const handleLogin = (e) => {
      e.preventDefault();
      const url = process.env.REACT_APP_BASE_URL
      fetch(`https://skin-care-hub.onrender.com/login`, {
        method: "POST",
        crossDomain: true,
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          "Access-Control-Allow-Origin": "*"
        },
        body: JSON.stringify({
          email,
          password
        })
      })
        .then((res) => res.json())
        .then((data) => {
          // console.log(data, "UserRegister");
          if (data.status === "OK") {
            alert("Login Successful");
            
            login(data);
            console.log("scscsc",auth)
            setUser(data.token);
            // const decode = jwt.decode(data.token, "skin@care");
            // console.log("decode", decode);
            // // auth.login(data.message); -- successful mesg
            // auth.login(decode.name);
            // above is decoding
            navigate(redirectPath, { replace: true });
          }
        })
        .catch((e) => alert("ERROR",e.message));
    };
  
    return (
      <Flex
        minH={"100vh"}
        align={"center"}
        justify={"center"}
        bg={useColorModeValue("gray.50", "gray.800")}
      >
        <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
          <Stack align={"center"}>
            <Heading fontWeight={350} fontSize={"4xl"}>
              Existing Customers
            </Heading>
          </Stack>
          <Box
            rounded={"lg"}
            bg={useColorModeValue("white", "gray.700")}
            boxShadow={"lg"}
            p={8}
          >
            <Stack spacing={4}>
              <FormControl id="email">
                <FormLabel>Email address</FormLabel>
                <Input type="email" onChange={(e) => setEmail(e.target.value)} />
              </FormControl>
              <FormControl id="password">
                <FormLabel>Password</FormLabel>
                <Input
                  type="password"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </FormControl>
              <Stack spacing={10}>
                <Stack
                  direction={{ base: "column", sm: "row" }}
                  align={"start"}
                  justify={"space-between"}
                >
                  <Link to="/register">
                    <Text color={"blue.400"}> New Customer?</Text>
                  </Link>
                </Stack>
                <Button
                  onClick={handleLogin}
                  fontWeight="600"
                  bgColor="black"
                  color="white"
                  borderRadius="0"
                  _hover={{
                    bg: "cyan.500"
                  }}
                >
                  LOGIN
                </Button>
              </Stack>
            </Stack>
          </Box>
        </Stack>
      </Flex>
    );
  }
  