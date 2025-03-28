const express=require('express')

const userRoute=express.Router()

const {registerNewUser}=require('../../controllers/user/usersctl')

userRoute.post('/register',registerNewUser);

module.exports=userRoute; 