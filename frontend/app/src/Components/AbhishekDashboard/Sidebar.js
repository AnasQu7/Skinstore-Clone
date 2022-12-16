import React from "react";
import {
  Drawer,
  DrawerBody,
  //   DrawerFooter,
  //   DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  Button,
  SimpleGrid,
  Center,
  HStack,
} from "@chakra-ui/react";
import { Menu, MenuButton, MenuList, MenuItem } from "@chakra-ui/react";

const Sidebar = ({ displayFunction }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();

  return (
    <>
      <SimpleGrid
        columns={1}
        spacing={10}
        bg="teal"
        p="10px"
        display="flex"
        justifyContent="space-between"
      >
        <HStack>
          <Center w="80px" h="40px" color="white">
            <Button ref={btnRef} colorScheme="teal" onClick={onOpen}>
              Menu
            </Button>
          </Center>
        </HStack>

        <Menu>
          <MenuButton as={Button} colorScheme="pink">
            Profile
          </MenuButton>
          <MenuList>
            <MenuItem>Logout</MenuItem>
          </MenuList>
        </Menu>
      </SimpleGrid>

      <Drawer
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />

          <DrawerBody>
            <Menu>
              <MenuItem
                _hover={{ bg: "teal", color: " white" }}
                as="h3"
                size="md"
                mt="25px"
                color="Brown"
                fontSize="25px"
                onClick={() => {
                  onClose();
                  displayFunction("ProductList");
                }}
              >
                Product List
              </MenuItem>
              <MenuItem
                _hover={{ bg: "teal", color: " white" }}
                as="h3"
                size="md"
                mt="25px"
                color="Brown"
                fontSize="25px"
                onClick={() => {
                  onClose();
                  displayFunction("AddNewProduct");
                }}
              >
                Add New Product
              </MenuItem>

              <MenuItem
                _hover={{ bg: "teal", color: " white" }}
                as="h3"
                size="md"
                mt="25px"
                color="Brown"
                fontSize="25px"
                onClick={() => {
                  onClose();
                  displayFunction("ManageQuantity");
                }}
              >
                Manage Quantity
              </MenuItem>

              <MenuItem
                _hover={{ bg: "teal", color: " white" }}
                as="h3"
                size="md"
                mt="25px"
                color="Brown"
                fontSize="25px"
                onClick={() => {
                  onClose();
                  displayFunction("SeeOrderDetails");
                }}
              >
                See Order Details
              </MenuItem>

              <MenuItem
                _hover={{ bg: "teal", color: " white" }}
                as="h3"
                size="md"
                mt="25px"
                color="Brown"
                fontSize="25px"
                onClick={() => {
                  onClose();
                  displayFunction("UserDetails");
                }}
              >
                User Details
              </MenuItem>

              <MenuItem
                _hover={{ bg: "teal", color: " white" }}
                as="h3"
                size="md"
                mt="25px"
                color="Brown"
                fontSize="25px"
                onClick={() => {
                  onClose();
                  displayFunction("OrderManagement");
                }}
              >
                Order Management
              </MenuItem>
            </Menu>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default Sidebar;
