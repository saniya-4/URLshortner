const {nanoid}=require("nanoid");
const URL=require("../models/url")
async function handlegenerateShortNewUrl(req,res)
{
    const body=req.body;
    if(!body.url)
    {
        return res.status(400).json({error:"url is required"});
    }
    const shortId=nanoid(8);
    await URL.create({
        shortId:shortId,
        redirctURL:body.url,
        visitHistory:[],
    })
    return res.josn({id:shortId});

}
module.exports={
    handlegenerateShortNewUrl,
}