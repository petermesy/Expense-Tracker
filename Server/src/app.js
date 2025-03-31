const express=require("express")

const dbConnect=require("./config/dbConnect")
const userRoute=require("./Routes/user/usersRoute");
const { errorHandler,notFound } = require("./middlewares/errorMiddleware");
const app=express();


dbConnect();
//middlware
app.use(express.json());
// routes
app.use("/",userRoute); 

// app.use(notFound)

app.use(errorHandler)
app.use(notFound)



 module.exports=app