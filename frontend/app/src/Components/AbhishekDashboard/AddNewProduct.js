import React, { useState } from "react";
import {
  Container,
  FormControl,
  FormLabel,
  //   FormHelperText,
  Input,
} from "@chakra-ui/react";
import axios from "axios";

let initialState = {
  name: "",
  product_type: "",
  brand: "",
  price: 0,
  image_link: "",
  quantity: 0,
  description: "",
};

const AddNewProduct = () => {
  const [newProduct, setNewProduct] = useState(initialState);

  const handleChange = (e) => {
    setNewProduct({ ...newProduct, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    // console.log(newProduct);

    await axios.post("https://skin-care-hub.onrender.com/admin/addnewproduct", newProduct);
    try {
      alert("ok");
      //   console.log(data);
      setNewProduct(initialState);
      return;
    } catch (e) {
      return console.log(e);
    }
  };

  return (
    <Container>
      <FormControl>
        <FormLabel>Brand</FormLabel>
        <Input
          type="text"
          name="brand"
          value={newProduct.brand}
          onChange={handleChange}
        />

        <FormLabel>Name</FormLabel>
        <Input
          type="text"
          name="name"
          value={newProduct.name}
          onChange={handleChange}
        />
        <FormLabel>Price</FormLabel>
        <Input
          type="number"
          name="price"
          value={newProduct.price}
          onChange={handleChange}
        />
        <FormLabel>Description</FormLabel>
        <Input
          type="text"
          name="description"
          onChange={handleChange}
          value={newProduct.description}
        />
        <FormLabel>Category</FormLabel>
        <Input
          type="text"
          name="category"
          onChange={handleChange}
          value={newProduct.category}
        />

        <FormLabel>ImageURL</FormLabel>
        <Input
          type="text"
          name="image_link"
          onChange={handleChange}
          value={newProduct.image_link}
        />

        <FormLabel>Quantity</FormLabel>
        <Input
          type="number"
          name="quantity"
          onChange={handleChange}
          value={newProduct.quantity}
        />

        <Input type="submit" value="Submit" mt="20px" onClick={handleSubmit} />
      </FormControl>
    </Container>
  );
};

export default AddNewProduct;
