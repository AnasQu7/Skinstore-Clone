const express = require("express");
require("dotenv").config();
const ProductRoute = express.Router();
const jwt = require("jsonwebtoken");
const Products = require("../models/product.model");
ProductRoute.use(express.json());
ProductRoute.get("/", async (req, res) => {
  const {q, type, brand, review, rating, price, quant } = req.query;
  try {

    // Query Search 
    // *****************************
    if(q){
       let switchCase = "";
      if (rating) {
        switchCase = rating;
      } else if (review) {
        switchCase = review;
      } else if (price) {
        switchCase = price;
      } else if (quant) {
        switchCase = quant;
      }else{

        const product = await Products.find({ $or: [{ brand:{ "$regex" : q} }, { name: { "$regex" : q} }, { category: { "$regex" : q} },{product_type: { "$regex" : q}},{description: {$regex : q}}] });
        if (product) {
          return res.status(201).send(product);
        } else {
          return res.send("Bad Request");
        }

      }
      switch (switchCase) {
        case "asc": {
          let product = [];
          if (rating) {
            product = await Products.find({ $or: [{ brand:{ "$regex" : q} }, { name: { "$regex" : q} }, { category: { "$regex" : q} },{product_type: { "$regex" : q}},{description: {$regex : q}}] }).sort({
              rating: 1,
            });
          } else if (review) {
            product = await Products.find({ $or: [{ brand:{ "$regex" : q} }, { name: { "$regex" : q} }, { category: { "$regex" : q} },{product_type: { "$regex" : q}},{description: {$regex : q}}] }).sort({
              review: 1,
            });
          } else if (price) {
            product = await Products.find({ $or: [{ brand:{ "$regex" : q} }, { name: { "$regex" : q} }, { category: { "$regex" : q} },{product_type: { "$regex" : q}},{description: {$regex : q}}] }).sort({
              price: 1,
            });
          } else if (quant) {
            product = await Products.find({ $or: [{ brand:{ "$regex" : q} }, { name: { "$regex" : q} }, { category: { "$regex" : q} },{product_type: { "$regex" : q}},{description: {$regex : q}}] }).sort({
              quantity: 1,
            });
          }
          if (product) {
            return res.status(201).send(product);
          } else {
            return res.send("Bad Request");
          }
        }
        case "des": {
          let product = [];
          if (rating) {
            product = await Products.find({ $or: [{ brand:{ "$regex" : q} }, { name: { "$regex" : q} }, { category: { "$regex" : q} },{product_type: { "$regex" : q}},{description: {$regex : q}}] }).sort({
              rating: -1,
            });
          } else if (review) {
            product = await Products.find({ $or: [{ brand:{ "$regex" : q} }, { name: { "$regex" : q} }, { category: { "$regex" : q} },{product_type: { "$regex" : q}},{description: {$regex : q}}] }).sort({
              review: -1,
            });
          } else if (price) {
            product = await Products.find({ $or: [{ brand:{ "$regex" : q} }, { name: { "$regex" : q} }, { category: { "$regex" : q} },{product_type: { "$regex" : q}},{description: {$regex : q}}] }).sort({
              price: -1,
            });
          } else if (quant) {
            product = await Products.find({ $or: [{ brand:{ "$regex" : q} }, { name: { "$regex" : q} }, { category: { "$regex" : q} },{product_type: { "$regex" : q}},{description: {$regex : q}}] }).sort({
              quantity: -1,
            });
          }
          if (product) {
            return res.status(201).send(product);
          } else {
            return res.send("Bad Request");
          }
        }
        default: {
          let product = [];
          if (rating) {
            product = await Products.find({ $or: [{ brand:{ "$regex" : q} }, { name: { "$regex" : q} }, { category: { "$regex" : q} },{product_type: { "$regex" : q}},{description: {$regex : q}}] }).sort({
              rating: 1,
            });
          } else if (review) {
            product = await Products.find({ $or: [{ brand:{ "$regex" : q} }, { name: { "$regex" : q} }, { category: { "$regex" : q} },{product_type: { "$regex" : q}},{description: {$regex : q}}] }).sort({
              review: 1,
            });
          } else if (price) {
            product = await Products.find({ $or: [{ brand:{ "$regex" : q} }, { name: { "$regex" : q} }, { category: { "$regex" : q} },{product_type: { "$regex" : q}},{description: {$regex : q}}] }).sort({
              price: 1,
            });
          } else if (quant) {
            product = await Products.find({ $or: [{ brand:{ "$regex" : q} }, { name: { "$regex" : q} }, { category: { "$regex" : q} },{product_type: { "$regex" : q}},{description: {$regex : q}}] }).sort({
              quantity: 1,
            });
          }
          if (product) {
            return res.status(201).send(product);
          } else {
            return res.send("Bad Request");
          }
        }
      }
     }
    //  ********************s

      if (type && brand) {
        const product = await Products.find({ product_type: type, brand });
        if (product) {
          return res.status(201).send(product);
        } else {
          return res.send("Bad Request");
        }
      }
      if (brand) {
        const product = await Products.find({ brand });
        if (product) {
          return res.status(201).send(product);
        } else {
          return res.send("Bad Request");
        }
      }
      if ((type && rating) || review || price || quant) {
        let switchCase = "";
        if (rating) {
          switchCase = rating;
        } else if (review) {
          switchCase = review;
        } else if (price) {
          switchCase = price;
        } else if (quant) {
          switchCase = quant;
        }
        switch (switchCase) {
          case "asc": {
            let product = [];
            if (rating) {
              product = await Products.find({ product_type: type }).sort({
                rating: 1,
              });
            } else if (review) {
              product = await Products.find({ product_type: type }).sort({
                review: 1,
              });
            } else if (price) {
              product = await Products.find({ product_type: type }).sort({
                price: 1,
              });
            } else if (quant) {
              product = await Products.find({ product_type: type }).sort({
                quantity: 1,
              });
            }
            if (product) {
              return res.status(201).send(product);
            } else {
              return res.send("Bad Request");
            }
          }
          case "des": {
            let product = [];
            if (rating) {
              product = await Products.find({ product_type: type }).sort({
                rating: -1,
              });
            } else if (review) {
              product = await Products.find({ product_type: type }).sort({
                review: -1,
              });
            } else if (price) {
              product = await Products.find({ product_type: type }).sort({
                price: -1,
              });
            } else if (quant) {
              product = await Products.find({ product_type: type }).sort({
                quantity: -1,
              });
            }
            if (product) {
              return res.status(201).send(product);
            } else {
              return res.send("Bad Request");
            }
          }
          default: {
            let product = [];
            if (rating) {
              product = await Products.find({ product_type: type }).sort({
                rating: 1,
              });
            } else if (review) {
              product = await Products.find({ product_type: type }).sort({
                review: 1,
              });
            } else if (price) {
              product = await Products.find({ product_type: type }).sort({
                price: 1,
              });
            } else if (quant) {
              product = await Products.find({ product_type: type }).sort({
                quantity: 1,
              });
            }
            if (product) {
              return res.status(201).send(product);
            } else {
              return res.send("Bad Request");
            }
          }
        }
      }
      if (type) {
        const product = await Products.find({ product_type: type });
        if (product) {
          res.status(201).send(product);
        } else {
          res.send("Bad Request");
        }
      }
      return res.send(await Products.find())
  } catch (e) {
    console.log(e);
  }
});
ProductRoute.get("/:id", async (req, res) => {
  const {id }= req.params;
  console.log("jjnj",id)
  const product = await Products.findOne({ _id: id });
  if (product) {
    return res.status(201).send(product);
  } else {
    return res.send("Bad Request");
  }
});

module.exports = ProductRoute;
