import React, { useEffect, useState } from "react";
import { SimpleGrid, Box, Button } from "@chakra-ui/react";
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
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

const OrderManagement = () => {
  const [edit, setEdit] = useState();
  // const [totalIncome, setTotalIncome] = useState();

  function EditableControls() {
    const {
      isEditing,
      getSubmitButtonProps,
      getCancelButtonProps,
      getEditButtonProps,
    } = useEditableControls();

    return isEditing ? (
      <ButtonGroup justifyContent="center" size="sm">
        <IconButton
          icon={<CheckIcon onClick={handleedit} />}
          {...getSubmitButtonProps()}
        />
        <IconButton icon={<CloseIcon />} {...getCancelButtonProps()} />
      </ButtonGroup>
    ) : (
      <Flex justifyContent="center">
        <IconButton size="sm" icon={<EditIcon />} {...getEditButtonProps()} />
      </Flex>
    );
  }

  const handleedit = (e) => {
    // make the api request to change the status
    console.log(edit);
  };

  useEffect(() => {
    // make the api call for total income of the day******
  }, []);

  //  pedning order and pending items************

  useEffect(() => {}, []);

  // total income of the day*************

  useEffect(() => {}, []);

  return (
    <div>
      <SimpleGrid columns={4} spacing={10} p="40px">
        <Box bg="tomato" minimumheight="120px">
          Pending
        </Box>
        <Box bg="tomato" height="120px">
          OrderCancel
        </Box>
        <Box bg="tomato" height="120px">
          Order Process
        </Box>
        <Box bg="tomato" height="120px">
          Total Income
        </Box>
      </SimpleGrid>

      <TableContainer>
        <Table variant="simple">
          <Thead>
            <Tr>
              <Th>Oderid</Th>
              <Th>Payment Method</Th>
              <Th>Oder date</Th>
              <Th>Delivery Date</Th>
              <Th>status</Th>
              <Th>Total</Th>
              <Th>Action</Th>
            </Tr>
          </Thead>
          <Tbody>
            <Tr>
              <Td>inches</Td>
              <Td>millimetres (mm)</Td>
              <Td>25.4</Td>
              <Td>25.4</Td>
              <Td>
                <Editable
                  textAlign="center"
                  defaultValue="Order Confirmed"
                  fontSize="2xl"
                  isPreviewFocusable={false}
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
              <Td>25.4</Td>
              <Td>
                {" "}
                <Button>
                  <DeleteIcon />
                </Button>{" "}
              </Td>
            </Tr>
            <Tr>
              <Td>feet</Td>
              <Td>centimetres (cm)</Td>
              <Td>25.4</Td>
              <Td>25.4</Td>
              <Td>25.4</Td>
              <Td>25.4</Td>
              <Td>
                <Button>
                  <DeleteIcon />
                </Button>{" "}
              </Td>
            </Tr>
            <Tr>
              <Td>yards</Td>
              <Td>metres (m)</Td>
              <Td>25.4</Td>
              <Td>25.4</Td>
              <Td>25.4</Td>
              <Td>25.4</Td>
              <Td>
                <Button>
                  <DeleteIcon />
                </Button>{" "}
              </Td>
            </Tr>
          </Tbody>
          <Tfoot>
            <Tr>
              <Th>To convert</Th>
              <Th>into</Th>
              <Td>25.4</Td>
              <Td>25.4</Td>
              <Td>25.4</Td>
              <Td>25.4</Td>
              <Td>
                <Button>
                  <DeleteIcon />
                </Button>
              </Td>
            </Tr>
          </Tfoot>
        </Table>
      </TableContainer>
    </div>
  );
};

export default OrderManagement;
