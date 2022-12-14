const express = require("express");

const SignupRoute = express.Router();
const jwt = require("jsonwebtoken");
const Auth = require("../models/signup.model");

SignupRoute.use(express.json())
SignupRoute.post("/", async (req,res) =>{
    const {email,password,name,age,gender,address,phone} = req.body;
    const user = await Auth.findOne({email});
    const token = req.headers["token"];
    console.log(user);
    if(email == "" && password == ""){
    return res.send("Please Fill Credentials")
    }
    if(user){
      return res.send("User Already Exists, Please Signup with Different Credentials")
    } else {
      if(token){
        try{
         const verify = jwt.verify(token,"auth@SkinCare");
         if(verify){
            if(verify.role === "Admin"){
                const newUser = await Auth.create({email,name,password,age,gender,address,role : "Employee",phone})
            return res.status(201).send("New Employee Signedup")
            } else {
                res.status(403).send("Not Authorized !!")
            }
         } else {
            return res.send("Send the Correct Token")
         }
        }catch(e){
            console.log(e);
        }
      } else {
        const newUser = await Auth.create({email,name,password,age,gender,address,phone})
            return res.status(201).send("New User Signedup")
      }
    }

});

module.exports = SignupRoute;