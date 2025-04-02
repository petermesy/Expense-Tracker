const express=require("express")
require('dotenv').config();

// const dbConnect=require("./config/dbConnect")
const dbConnect=require('./config/dbOConnect')
const userRoute=require("./Routes/user/usersRoute");
const { errorHandler,notFound } = require("./middlewares/errorMiddleware");
const app=express();


dbConnect();
//middlware
app.use(express.json());
// routes
app.use("/api/users",userRoute); 

// app.use(notFound)

app.use(errorHandler)
app.use(notFound)



 module.exports=app