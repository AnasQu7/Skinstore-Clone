const express = require("express");
require("dotenv").config();
const ProductRoute = express.Router();
const jwt = require("jsonwebtoken");
const Products = require("../models/signup.model");

ProductRoute.use(express.json());

ProductRoute.get("/", async (req,res) =>{

    const {category} = req.brand
    const product = await Products.find((category));

    if(user){
        res.status(201).send(product)
    }else {
        res.send("Bad Request")
    }
})