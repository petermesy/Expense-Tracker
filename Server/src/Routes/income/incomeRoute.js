const express=require('express')

const {
    createIncCtrl,
    fetchAllIncCtrl,
    fetchIncDetails,
    updateInCtrl,
    deleteInCtrl,
}=require("../../controllers/income/incomCtrl")
const authMiddleware=require('../../middlewares/authMiddleware')

const incomeRoute=express.Router()

incomeRoute.post('/',authMiddleware,createIncCtrl);
incomeRoute.get('/',authMiddleware,fetchAllIncCtrl);
incomeRoute.get('/:id',authMiddleware,fetchIncDetails);
incomeRoute.put('/:id',authMiddleware,updateInCtrl);
incomeRoute.delete('/:id',authMiddleware,deleteInCtrl);

module.exports=incomeRoute;