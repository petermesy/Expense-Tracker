const express=require('express')

const {
    createIncCtrl,
    fetchAllIncCtrl,
    fetchIncDetails,
    updateInCtrl,
    deleteInCtrl,
}=require("../../controllers/income/incomCtrl")

const incomeRoute=express.Router()

incomeRoute.post('/',createIncCtrl);
incomeRoute.get('/',fetchAllIncCtrl);
incomeRoute.get('/:id',fetchIncDetails);
incomeRoute.put('/:id',updateInCtrl);
incomeRoute.delete('/:id',deleteInCtrl);

module.exports=incomeRoute;