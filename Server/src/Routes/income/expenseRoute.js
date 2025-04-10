const express=require('express')

const {
    createExpCtrl,
    fetchAllExpCtrl,
    fetchExpDetails,
    updateExpCtrl,
    deleteExpCtrl,

}=require('../../controllers/income/expenseCtrl.js')
const authMiddleware=require('../../middlewares/authMiddleware')

const expenseRoute=express.Router()

expenseRoute.post('/',authMiddleware,createExpCtrl);
expenseRoute.get('/',authMiddleware,fetchAllExpCtrl);
expenseRoute.get('/:id',authMiddleware,fetchExpDetails);
expenseRoute.put('/:id',authMiddleware,updateExpCtrl);
expenseRoute.delete('/:id',authMiddleware,deleteExpCtrl);

module.exports=expenseRoute;