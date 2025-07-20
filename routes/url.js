const express=require("express")
const {handlegenerateShortNewUrl,handleGetAnalytics}=require("../controllers/url")
const router=express.Router();
router.post('/',handlegenerateShortNewUrl)
router.get("/analytics/:shortId",handleGetAnalytics)
module.exports=router;