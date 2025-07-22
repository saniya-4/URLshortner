const express=require("express")
const path=require("path");
const { restrictToLoggedinUserOnly }=require("./middleware/auth.js");
const cookieParser=require("cookie-parser");
const {connectToMongoDb} =require("./connect.js")
const app=express();
const staticRoute=require("./routes/staticRouter.js")
const urlRoute=require("./routes/url")
const userRoute=require("./routes/user")
const PORT=8001;
app.use(express.json());
//to parse the form data
app.use(express.urlencoded({extended:true}));
app.use(cookieParser());
const URL=require("./models/url")
app.use('/url',restrictToLoggedinUserOnly,urlRoute);
app.use("/",staticRoute);
app.use("/user",userRoute); 
app.set("view engine","ejs");
app.set("views",path.resolve("./views"));
app.get("/tests",async(req,res)=>
{
    const allUrls=await URL.find({});
    return res.render("Home",{
        url:allUrls,
    });
});
app.get('/url/:shortId',async(req,res)=>
{
    const shortId=req.params.shortId;
    const entry=await URL.findOneAndUpdate({
        shortId
    },{
        $push:{
            visitHistory:{
                timestamp:Date.now(),
            }
        }
    }
)
res.redirect(entry.redirectURL);      

})
connectToMongoDb("mongodb://127.0.0.1:27017/short-url").then(()=>console.log("Mongodb connected"))
app.listen(PORT,()=>
{
    console.log(`server started on PORT ${PORT}`);
})