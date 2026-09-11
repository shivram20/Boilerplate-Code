const express = require("express")
const mongoose = require('mongoose')
const dotenv = require("dotenv")
const cors = require('cors')

dotenv.config()
const port = process.env.PORT || 5000
const server = express()


// Middleware Setup
server.use(express.json())


// Routes Setup
server.get("/",(req,res)=>{
    res.send("Hello from API");
    res.end()
})

server.listen(port,() =>{
    console.log(`server start on port ${port}`)
})
// hello
// hello2