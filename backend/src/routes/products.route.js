const express = require("express");
require("dotenv").config();
const ProductRoute = express.Router();
const jwt = require("jsonwebtoken");
const Products = require("../models/product.model");

ProductRoute.use(express.json());




ProductRoute.get("/", async (req,res) =>{

    // const {category} = req.params;
    const {type,brand,review,rating,price,quant} = req.query;
    // const sortByRating =
    // const sortByReview =  
    // const id 
   

    try{
     if(!type){
      return res.send("Bad Request")
     } else {
        if(type && brand){
            const product = await Products.find({product_type :type,brand});
            if(product){
                res.status(201).send(product)
            }else {
                res.send("Bad Request")
            }
        }
        if(type && rating || review || price || quant){
           
            let switchCase = "";
            if(rating){
            switchCase = rating;
            }else if(review){
                switchCase = review;
            } else if(price){
            switchCase = price;
            } else if(quant){
               switchCase = quant
            }

            switch(switchCase){
                
                case "asc" : {
                    let product = []
                    if(rating){
                         product = await Products.find({product_type :type}).sort({rating: 1}) 
                    }else if(review){
                        product = await Products.find({product_type :type}).sort({review: 1}) 
                    } else if(price){
                        product = await Products.find({product_type :type}).sort({price: 1}) ;
                    } else if(quant){
                        product = await Products.find({product_type :type}).sort({quantity: 1}) 
                    }
                  
                    if(product){
                       return res.status(201).send(product)
                    }else {
                       return res.send("Bad Request")
                    }
                }
                case "des" : {
                    let product = []
                    if(rating){
                         product = await Products.find({product_type :type}).sort({rating: -1}) 
                    }else if(review){
                        product = await Products.find({product_type :type}).sort({review: -1}) 
                    } else if(price){
                        product = await Products.find({product_type :type}).sort({price: -1}) ;
                    } else if(quant){
                        product = await Products.find({product_type :type}).sort({quantity: -1}) 
                    }
                  
                    if(product){
                       return res.status(201).send(product)
                    }else {
                       return res.send("Bad Request")
                    }
                        
                    
                }
                default : {
                    let product = []
                    if(rating){
                         product = await Products.find({product_type :type}).sort({rating: 1}) 
                    }else if(review){
                        product = await Products.find({product_type :type}).sort({review: 1}) 
                    } else if(price){
                        product = await Products.find({product_type :type}).sort({price: 1}) ;
                    } else if(quant){
                        product = await Products.find({product_type :type}).sort({quantity: 1}) 
                    }
                  
                    if(product){
                       return res.status(201).send(product)
                    }else {
                       return res.send("Bad Request")
                    }
                } 
                

            }
            
            
        }

     }
    }catch(e){
      console.log(e)
    }
    
   

   
})

ProductRoute.get("/:id", async (req,res) =>{

    // const {category} = req.params;
    // const {brand} = req.query;
    // const sortByRating =
    // const sortByReview =  
    // const id 
    const {id} = req.params

    const product = await Products.find({_id : id});

    if(product){
        res.status(201).send(product)
    }else {
        res.send("Bad Request")
    }
})

module.exports = ProductRoute