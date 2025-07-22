const express=require("express")
const URL=require("../models/url")
const router=express.Router();
router.get('/',async(req,res)=>
{
    const allURLS=await URL.find({})
    return res.render("Home",{
        urls:allURLS,
    });
  
})
router.get("/signup",(req,res)=>
{
    res.render("Signup");
})
router.get("/login",(req,res)=>
{
    res.render("Login")
})

module.exports=router;