const expressAsyncHandler=require('express-async-handler');

const Income=require("../../models/Incom")

//create

const createIncCtrl=expressAsyncHandler(async (req,res)=>{
    const{title,amount,description,user}=req.body;
    try {
        const income =await Income.create({
            title,
            amount,
            description,
            user,
        })
        res.json(income)
    } catch (error) {
        res.json(error)
    }
})

//fetch
const fetchAllIncCtrl=expressAsyncHandler(async (req,res)=>{
    const{title,amount,description,user}=req.body;
    try {
        const income =await Income.find();
             res.json(income);
    } catch (error) {
        res.json(error)
    }
})  
//fetch single income
const fetchIncDetails=expressAsyncHandler(async (req,res)=>{
const {id}=req?.params;
    try {
        const income =await Income.findById(id);
             res.json(income);
    } catch (error) {
        res.json(error)
    }
})  
//update
const updateInCtrl=expressAsyncHandler(async (req,res)=>{
const {id}=req?.params;
const{title,amount,description}=req.body;

    try {
        const income =await Income.findByIdAndUpdate(id,{
            title,
            description,
            amount,
        },
    {new:true}
    );
     res.json(income);
    } catch (error) {
        res.json(error)
    }
})  
const deleteInCtrl=expressAsyncHandler(async (req,res)=>{
const {id}=req?.params;

    try {
        const income =await Income.findByIdAndDelete(id);
     res.json(income);
    } catch (error) {
        res.json(error)
    }
})  
module.exports={createIncCtrl,fetchAllIncCtrl,fetchIncDetails,updateInCtrl,deleteInCtrl};