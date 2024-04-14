import mongoose from "mongoose"
const register=(req,res)=>{
    try{
        console.log("register user")
        return res.status(200).send("hello register user")
    }
    catch{
        
    }
}
const login=(req,res)=>{
    try{
        console.log("register user")
        return res.status(200).send("user login successfull")
    }catch{

    }
  
}
export default register;