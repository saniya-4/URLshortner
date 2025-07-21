const mongoose=require("mongoose")
const userSchema=new mongoose.Schema(
   {
    name:
    {
        type:String,
        required:true,
    },
    email:
    {
        type:String,
        required:true,
        unique:true,

    },
    password:
    {
        type:String,
        required:true,
    }
   },
   {
    timstamps:true
   }
)
//here user inside mongoose.model is the name of the model carrying the userSchema
const User=mongoose.model('user',userSchema);
module.exports=User;