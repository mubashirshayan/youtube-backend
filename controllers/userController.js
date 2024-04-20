import express from "express"
const app=express();
app.use(express.json())
const register=(req,res)=>{
    try{
      const  {userName,fullName,email,password,avatar,coverImage}=req.body
         const userInformation={
            userName:userName,
            fullName:fullName,
            email:email,
            password:password,
            avatar:avatar,
            coverImage:coverImage,
        }
        //console.log("register user body",req.body)
        return res.status(200).send("hello register user",req.body)
    }
    catch{
        return res.status(200).send("Not register user")
    }
}
const login=(req,res)=>{
    try{
        
        return res.status(200).send("user login successfull")
    }catch{
        return res.status(200).send(" user not login")
    }
  
}
export { register,login};