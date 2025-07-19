const express=require("express")
const {handlegenerateShortNewUrl}=require("../controllers/url")
const router=express.Router();
router.post('/',handlegenerateShortNewUrl)
module.exports=router;