const express = require("express");
require("dotenv").config();
const LoginRoute = express.Router();
const jwt = require("jsonwebtoken");
const Auth = require("../models/signup.model");

LoginRoute.use(express.json());

LoginRoute.post("/",async (req,res) =>{
    const {email,password} = req.body;
    try{
        const  user = await Auth.find({email});
        if(!user){
            return res.status(401).send("Unauthorized")
             } else{
                 if(passowrd !== user.passowrd){
                   return res.status(401).send("Unauthorized")
                 } else {
                    
                        
                         const token = jwt.sign({
                          id : user._id, role : user.role, name : user.name
                         }, 
                         process.env.token_password,
                         {expiresIn : "2days"})
                         const refreshToken = jwt.sign({
                             id : user._id, role : user.role, name : user.name
                            }, 
                            process.env.refresh_password,
                            {expiresIn : "7days"})
                         res.status(201).send({token , refreshToken, message : "Login Successful"})
                     
                 }
             }
    }catch (e){
        console.log(e);
    }
   
    
})
module.exports = LoginRoute