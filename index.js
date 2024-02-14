import express from "express"
import { Router } from "express";

const app=express();



const PORT=5001;
app.get('/', (req, res) => {
    res.send('Hello World!')
  })
app.listen(PORT,()=>{
    console.log(`server is running on PORT ${PORT}`)
})