import { NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../Components/Utilis/Auth";
import {
  Heading,
  Avatar,
  Box,
  Center,
  Text,
  Stack,
  Button,
  Link,
  Badge,
  useColorModeValue,
  HStack,
} from "@chakra-ui/react";
var Profile = () => {
  const auth = useAuth();
  const navigate = useNavigate();
  const handleLogout = () => {
    auth.logout();
    navigate("/");
  };
  return (
    <Center py={6}>
      <Box
        maxW={"320px"}
        w={"full"}
        bg={useColorModeValue("white", "gray.900")}
        boxShadow={"2xl"}
        rounded={"lg"}
        p={6}
        textAlign={"center"}
      >
        <Avatar
          size={"xl"}
          src={
            "https://images.unsplash.com/photo-1520810627419-35e362c5dc07?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ"
          }
          alt={"Avatar Alt"}
          mb={4}
          pos={"relative"}
          _after={{
            content: '""',
            w: 4,
            h: 4,
            bg: "green.300",
            border: "2px solid white",
            rounded: "full",
            pos: "absolute",
            bottom: 0,
            right: 3,
          }}
        />
        <Heading fontSize={"2xl"} fontFamily={"body"}>
          Welcome {auth.user}
        </Heading>
        <Text fontWeight={600} color={"gray.500"} mb={4}>
          @_{auth.user}
        </Text>
        <Text
          textAlign={"center"}
          color={useColorModeValue("gray.700", "gray.400")}
          px={3}
        >
          Actress, musician, songwriter and artist. PM for work inquires or{" "}
          <Link href={"#"} color={"blue.400"}>
            #tag
          </Link>{" "}
          me in your posts
        </Text>

        <Stack align={"center"} justify={"center"} direction={"row"} mt={6}>
          <Badge
            px={2}
            py={1}
            bg={useColorModeValue("gray.50", "gray.800")}
            fontWeight={"400"}
          >
            #youthicon
          </Badge>
          <Badge
            px={2}
            py={1}
            bg={useColorModeValue("gray.50", "gray.800")}
            fontWeight={"400"}
          >
            #stylefreak
          </Badge>
          <Badge
            px={2}
            py={1}
            bg={useColorModeValue("gray.50", "gray.800")}
            fontWeight={"400"}
          >
            #shopping
          </Badge>
        </Stack>

        <HStack
          mt={8}
          direction={"row"}
          spacing={4}
          justifyContent="space-evenly"
        >
          <NavLink to="/">
            <Button
              fontSize={"sm"}
              color={"white"}
              bg={"pink.400"}
              margin="auto"
              display={{ base: "none", md: "inline-flex" }}
              fontWeight="600"
              bgColor="black"
              borderRadius="0"
              _hover={{
                bg: "cyan.500",
              }}
            >
              Take Tour
            </Button>
          </NavLink>
          <NavLink to="/login">
            <Button
              fontSize={"sm"}
              color={"white"}
              bg={"pink.400"}
              margin="auto"
              display={{ base: "none", md: "inline-flex" }}
              fontWeight="600"
              bgColor="black"
              borderRadius="0"
              _hover={{
                bg: "cyan.500",
              }}
              onClick={handleLogout}
            >
              Logout
            </Button>
          </NavLink>
        </HStack>
      </Box>
    </Center>
  );
};
export default Profile;
