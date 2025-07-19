const express=require("express")
const app=express();
const PORT=8001;
app.listen(8001,()=>
{
    console.log(`server started on PORT ${PORT}`);
})