const expressAsyncHandler = require("express-async-handler");

const jwt = require("jsonwebtoken");

const User = require('../models/user');

const authMiddleware = expressAsyncHandler( async(req,res,next)=>{

    let token;
    
    if(req?.headers?.authorization?.startsWith('Bearer')){
        token =req.headers.authorization.split(' ')[1];
        console.log("token",token);
        
        try {
            if(token){
                const decodeUser=jwt.verify(token,process.env.JWT_KEY);
            const user= await User.findById(decodeUser?.id);
            console.log(user);

            //attach the user to the request object
            req.user=user;
            
                next();
            }
            
        } catch (error) {
        throw new Error('Not authorized token expired, please login again')            
        }
    }else{
throw new Error('There is no token attached to the header')
    }
})

module.exports=authMiddleware;