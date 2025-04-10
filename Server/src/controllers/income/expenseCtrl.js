const expressAsyncHandler=require('express-async-handler');

const Expense=require('../../models/Expense')

//create

const createExpCtrl=expressAsyncHandler(async (req,res)=>{
    const{title,amount,description,user}=req.body;
    try {
        const expense =await Expense.create({
            title,
            amount,
            description,
            user,
        })
        res.json(expense)
    } catch (error) {
        res.json(error)
    }
})

//fetch
const fetchAllExpCtrl=expressAsyncHandler(async (req,res)=>{
    const {page}=req.query;
    const{title,amount,description,user}=req.body;
    try {
        const expense =await Expense.paginate({},{limit:1,page:Number(page)});
             res.json(expense);
    } catch (error) {
        res.json(error)
    }
})  
//fetch single income
const fetchExpDetails=expressAsyncHandler(async (req,res)=>{
const {id}=req?.params;
    try {
        const expense =await Expense.findById(id);
             res.json(expense);
    } catch (error) {
        res.json(error)
    }
})  
//update
const updateExpCtrl=expressAsyncHandler(async (req,res)=>{
const {id}=req?.params;
const{title,amount,description}=req.body;

    try {
        const expense =await Expense.findByIdAndUpdate(id,{
            title,
            description,
            amount,
        },
    {new:true}
    );
     res.json(expense);
    } catch (error) {
        res.json(error)
    }
})  
const deleteExpCtrl=expressAsyncHandler(async (req,res)=>{
const {id}=req?.params;

    try {
        const expense =await Expense.findByIdAndDelete(id);
     res.json(expense);
    } catch (error) {
        res.json(error)
    }
})  
module.exports={createExpCtrl,fetchAllExpCtrl,fetchExpDetails,updateExpCtrl,deleteExpCtrl};