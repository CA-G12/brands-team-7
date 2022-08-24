const {deleteQ}=require('../databse/queries')

const remove=(req,res)=>{
    deleteQ(req.body.id)}
module.exports=remove