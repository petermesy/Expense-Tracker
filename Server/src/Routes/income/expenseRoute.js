const express=require('express')

const {
    createExpCtrl,
    fetchAllExpCtrl,
    fetchExpDetails,
    updateExpCtrl,
    deleteExpCtrl,

}=require('../../controllers/income/expenseCtrl.js')
const expenseRoute=express.Router()

expenseRoute.post('/',createExpCtrl);
expenseRoute.get('/',fetchAllExpCtrl);
expenseRoute.get('/:id',fetchExpDetails);
expenseRoute.put('/:id',updateExpCtrl);
expenseRoute.delete('/:id',deleteExpCtrl);

module.exports=expenseRoute;