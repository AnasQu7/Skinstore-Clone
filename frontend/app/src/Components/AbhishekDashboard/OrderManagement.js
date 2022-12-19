import React, { useEffect, useState } from "react";
import { SimpleGrid, Button, Center } from "@chakra-ui/react";
import {
  Table,
  Thead,
  Tbody,
  // Tfoot,
  Tr,
  Th,
  Td,
  // TableCaption,
  TableContainer,
} from "@chakra-ui/react";
import { IconButton, Flex } from "@chakra-ui/react";
import {
  Editable,
  EditableInput,
  // EditableTextarea,
  Input,
  EditablePreview,
  useEditableControls,
  ButtonGroup,
} from "@chakra-ui/react";
import { CheckIcon, CloseIcon, EditIcon, DeleteIcon } from "@chakra-ui/icons";
import axios from "axios";
const OrderManagement = () => {
  const [edit, setEdit] = useState();
  const [orderList, setOrderList] = useState([]);
  const [totalIncome, setTotalIncome] = useState();
  function EditableControls() {
    const {
      isEditing,
      getSubmitButtonProps,
      getCancelButtonProps,
      getEditButtonProps,
    } = useEditableControls();
    return isEditing ? (
      <ButtonGroup justifyContent="center" size="sm">
        <IconButton icon={<CheckIcon />} {...getSubmitButtonProps()} />
        <IconButton icon={<CloseIcon />} {...getCancelButtonProps()} />
      </ButtonGroup>
    ) : (
      <Flex justifyContent="center">
        <IconButton size="sm" icon={<EditIcon />} {...getEditButtonProps()} />
      </Flex>
    );
  }
  // make the api request to change the status
  const handleEdit = async (id) => {
    if (edit !== undefined) {
      await axios.post("https://skin-care-hub.onrender.com/order/changestatus", {
        orderId: id,
        status: edit,
      });
      try {
        // console.log(data);
        getListOfOrder();
      } catch (e) {
        return console.log(e);
      }
    }
  };
  useEffect(() => {
    // make the api call for total income of the day******
  }, []);
  //  pedning order and pending items************
  useEffect(() => {}, []);
  // total income of the day*************
  const getTotalIncome = async () => {
    let { data } = await axios.get("https://skin-care-hub.onrender.com/order/totalincome");
    try {
      // console.log(data);
      setTotalIncome(data.total);
    } catch (e) {
      return console.log(e);
    }
  };
  useEffect(() => {
    getTotalIncome();
  }, []);
  // get all the non delived items
  const getListOfOrder = async () => {
    let { data } = await axios.get(
      "https://skin-care-hub.onrender.com/order/getnotdelivered"
    );
    try {
      setOrderList(data.notDelivered);
      return;
      // console.log(data.notDelivered);
    } catch (e) {
      return console.log(e);
    }
  };
  useEffect(() => {
    getListOfOrder();
  }, []);
  return (
    <div>
      <SimpleGrid columns={4} spacing={10} p="40px">
        <Center
          bg="tomato"
          minimumheight="120px"
          fontSize="30px"
          fontWeight="600"
        >
          Pending
        </Center>
        <Center bg="tomato" height="120px" fontSize="30px" fontWeight="600">
          OrderCancel
        </Center>
        <Center bg="tomato" height="120px" fontSize="30px" fontWeight="600">
          Order Process
        </Center>
        <Center bg="tomato" height="120px" fontSize="30px" fontWeight="600">
          Total Income :{totalIncome}
        </Center>
      </SimpleGrid>
      <TableContainer>
        <Table variant="simple">
          <Thead>
            <Tr>
              <Th>Oderid</Th>
              <Th>userId</Th>
              <Th>Payment Method</Th>
              <Th>Oder date</Th>
              <Th>Delivery Date</Th>
              <Th>status</Th>
              <Th>Total</Th>
              <Th>Action</Th>
            </Tr>
          </Thead>
          <Tbody>
            {orderList?.map((item) => {
              return (
                <Tr key={item._id}>
                  <Td>{item._id}</Td>
                  <Td>{item.userId}</Td>
                  <Td>{item.paymentMethod}</Td>
                  <Td>{item.createdAt}</Td>
                  <Td>{item.DeliveryDate}</Td>
                  <Td>
                    <Editable
                      textAlign="center"
                      defaultValue={item.currentStatus}
                      fontSize="2xl"
                      isPreviewFocusable={false}
                      onClick={() => handleEdit(item._id)}
                    >
                      <EditablePreview />
                      {/* Here is the custom input */}
                      <Input
                        as={EditableInput}
                        onChange={(e) => setEdit(e.target.value)}
                      />
                      <EditableControls />
                    </Editable>
                  </Td>
                  <Td>{item.priceTotal}</Td>
                  <Td>
                    {" "}
                    <Button>
                      <DeleteIcon />
                    </Button>{" "}
                  </Td>
                </Tr>
              );
            })}
          </Tbody>
        </Table>
      </TableContainer>
    </div>
  );
};
export default OrderManagement;
