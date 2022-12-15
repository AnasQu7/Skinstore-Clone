const http = require("http");
const express = require("express");
const {Server} = require("socket.io");
require("dotenv").config();

const PORT = process.env.PORT || 8080;
const app = express();
const SignupRotue = require("./src/routes/signup.route");
const httpServer = http.createServer(app);
const  LoginRoute = require("./src/routes/login.route")
// const io = new Server(httpServer);

app.use(express.json());

const connect = require("./src/config/db")
app.get("/", async(req,res)=>{
    res.send("yahoo!!!")
});
app.use("/signup", SignupRotue)
app.use("/login", LoginRoute)

httpServer.listen(PORT, async () =>{
    try{
        await connect();
     console.log(`listening http://localhost:${PORT}`)
    }
    catch(e){
        console.log({message : e.message})
    }
})