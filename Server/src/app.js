const express=require("express")

const dbConnect=require("./config/dbConnect")
const userRoute=require("./Routes/user/usersRoute")

const app=express();

const logger=(req,res,next)=>{
    next()
    console.log('Am I logger');    
}
app.use(logger);
dbConnect();
//middlware
app.use(express.json());
// routes
app.use("/",userRoute)





 module.exports=app