 const User=require("../models/user")
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
 module.exports={
    handleUserSignUp,
 }