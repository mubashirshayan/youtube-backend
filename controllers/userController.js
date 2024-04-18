
const register=(req,res)=>{
    try{
        console.log("register user")
        return res.status(200).send("hello register user")
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