const express = require('express');
const ENV =require("dotenv");
const NODE_SERVER = express();
const APP_SERVER =require("./app")

const PORT = 4500;

//START NODE_SERVER WITH PORT 4500
//REGISTER APP SERVER

//INJECTING ENVERONMENT VARIABLES INTO SERVER

ENV.config();


NODE_SERVER.use("/", APP_SERVER)

NODE_SERVER.listen(PORT, 'localhost', ()=>{
    console.log('App Started')
})

