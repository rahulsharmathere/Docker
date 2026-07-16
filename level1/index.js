const express = require('express')
const dotenv = require('dotenv')

const app=express();

dotenv.config()

const port=process.env.PORT || 5000

app.get("/",(req,res)=>{
    return res.status(200).json({
        message:"Hello from docker"
    })
})

app.listen(port,()=>{
    console.log("server started")
})