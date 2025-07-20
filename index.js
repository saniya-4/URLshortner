const express=require("express")
const {connectToMongoDb} =require("./connect.js")
const app=express();
const urlRoute=require("./routes/url")
const PORT=8001;
app.use(express.json());
const URL=require("./models/url")
app.use('/url',urlRoute);
app.get('/:shortId',async(req,res)=>
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