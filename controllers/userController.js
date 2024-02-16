import mongoose from "mongoose"
const register=(req,res)=>{
    console.log("register user")
    return res.status(200).send("hello register user")
}
export default register;