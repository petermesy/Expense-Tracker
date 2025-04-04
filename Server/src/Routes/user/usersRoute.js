const express=require('express')

const userRoute=express.Router()

const {registerNewUser,
     fetchUsersCtl,
    loginuserCtrl}=require('../../controllers/user/usersctl')

userRoute.post('/register',registerNewUser);
userRoute.post('/login',loginuserCtrl);
userRoute.get('/',fetchUsersCtl);

module.exports=userRoute;