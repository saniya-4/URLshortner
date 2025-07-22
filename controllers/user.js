 const User=require("../models/user")
 const {v4:uuidv4}=require("uuid");
 const {setUser,getUser} =require("../service/auth")
 async function handleUserSignUp(req,res){
    const {name,email,password}=req.body;
    //create a new user
    await User.create(
        {
            name,
            email,
            password
        }
    );
    // this will take the user to the home page using ejs
    return res.render("home");
 }
 async function handleUserLogin(req,res){
    const {email,password}=req.body;
    const user=await User.findOne({email,password});
    if(!user)
    {
        return res.render("Login",{
            error:"Invalid username or password",
        });
    }
    const sessionId=uuidv4();
    setUser(sessionId,user);
    res.cookie("uid",sessionId); 
    return res.redirect("/");
    return res.redirect("/");
    

 }
 module.exports={
    handleUserSignUp,
    handleUserLogin,
 }