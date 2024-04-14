import express from "express"
import mongoose from "./database/index.js";
import router from "./routes/index.js";
const app=express();
const db=mongoose.connection;
db.on("error",console.error.bind(console,"connection error"))
db.once("open",()=>{
  console.log("database connected")
})


const PORT=5001;
app.get('/', (req, res) => {
 
    res.send('Hello World!')
  })

app.use("/api/v1",router)
app.listen(PORT,()=>{
    console.log(`server is running on PORT ${PORT}`)
})