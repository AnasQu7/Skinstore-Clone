import React, { useEffect, useState } from "react";
import axios from "axios";

import {
  Table,
  Thead,
  Tbody,
  //   Tfoot,
  Tr,
  Th,
  Td,
  Button,
  TableContainer,
} from "@chakra-ui/react";
import { DeleteIcon } from "@chakra-ui/icons";

const UserDetails = () => {
  const [userData, setUserData] = useState([]);

  const getuserDetails = async () => {
    let { data } = await axios.get("https://skin-care-hub.onrender.com/user");

    try {
      //   console.log(data.user);
      setUserData(data.user);
      return;
    } catch (e) {
      console.log(e);
    }
  };

  const handleDataDelete = (id) => {
    console.log(id);
    axios.delete(`https://skin-care-hub.onrender.com/user/deleteproduct/${id}`, { id });
    try {
      alert("ok");
      return getuserDetails();
    } catch (e) {
      console.log(e);
    }
    console.log(id);
  };

  useEffect(() => {
    getuserDetails();
  }, []);

  return (
    <div>
      <TableContainer>
        <Table variant="simple" maxWidth="100%">
          <Thead>
            <Tr>
              <Th>ID</Th>
              <Th>Name</Th>
              <Th>Email</Th>
              <Th>Role</Th>
              <Th>Address</Th>
              <Th>createdAt</Th>
              <Th>Remove</Th>
            </Tr>
          </Thead>
          <Tbody>
            {userData.map((user) => {
              return (
                <Tr key={user._id}>
                  <Td>{user._id}</Td>
                  <Td>{user.name}</Td>

                  <Td>{user.email}</Td>
                  <Td>{user.role}</Td>
                  <Td>{user.address}</Td>
                  <Td>{user.createdAt}</Td>
                  <Td>
                    <Button onClick={() => handleDataDelete(user._id)}>
                      <DeleteIcon />
                    </Button>
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

export default UserDetails;
