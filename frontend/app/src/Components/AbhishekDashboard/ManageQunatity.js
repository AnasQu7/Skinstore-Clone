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

const ManageQuantity = () => {
  const [productData, setProductData] = useState([]);
  const getProductData = async () => {
    let { data } = await axios.get("http://localhost:8080/admin/quantity");
    try {
      setProductData(data.limitedProduct);
      console.log(data);
      return;
    } catch (e) {
      return console.log(e.message);
    }
  };
  const handleDataDelete = (id) => {
    axios.post("http://localhost:8080/admin/deleteproduct", {
      id,
    });
    try {
      alert("ok");
      getProductData();
      return;
    } catch (e) {
      console.log(e);
    }
    console.log(id);
  };

  useEffect(() => {
    getProductData();
  }, []);
  return (
    <div>
      <h1>ProductDetails</h1>
      <TableContainer>
        <Table variant="simple" maxWidth="100%">
          <Thead>
            <Tr>
              <Th>ID</Th>
              <Th>Brand</Th>
              <Th>Category</Th>
              <Th>Quantity</Th>
              <Th>Price</Th>
              <Th>Remove</Th>
            </Tr>
          </Thead>
          <Tbody>
            {productData.map((prod) => {
              return (
                <Tr key={prod._id}>
                  <Td>{prod._id}</Td>
                  <Td>{prod.brand}</Td>

                  <Td>{prod.category}</Td>
                  <Td>{prod.quantity}</Td>
                  <Td>{prod.price}</Td>
                  <Td>
                    <Button onClick={() => handleDataDelete(prod._id)}>
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

export default ManageQuantity;
