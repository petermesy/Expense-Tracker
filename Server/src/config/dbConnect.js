const mongoose=require('mongoose')

const dbConnect=async()=>{
    try{
        await mongoose.connect('mongodb://localhost:27017/Expense_tracker',{

            useUnifiedTopology:true,
            useNewUrlParser:true,
        });
        console.log('DB conneceted succefully');
        

    }catch(error){
        console.log(error)
    }
}

module.exports=dbConnect;