const express=require("express")
require('dotenv').config();


// const dbConnect=require("./config/dbConnect")
const dbConnect=require('./config/dbConnect')
const userRoute=require("./Routes/user/usersRoute");
const incomeRoute=require('./Routes/income/incomeRoute')
const { errorHandler,notFound } = require("./middlewares/errorMiddleware");
const expenseRoute = require("./Routes/income/expenseRoute");
const app=express();


dbConnect();
//middlware
app.use(express.json());
//Users route
app.use("/api/users",userRoute); 

//income routes
app.use("/api/income",incomeRoute);

//expense route
app.use("/api/expenses",expenseRoute)


app.use(notFound)
app.use(errorHandler)




 module.exports=app