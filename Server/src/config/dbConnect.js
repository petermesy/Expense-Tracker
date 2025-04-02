const mongoose=require('mongoose')
const url = "mongodb+srv://petermesay7:Peter@964455@cluster0.rodcgpz.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";


const dbConnect=async()=>{
    try{
        await mongoose.connect('mongodb://localhost:27017/Expense_tracker',
        // await mongoose.connect(url,
            
            {

            useUnifiedTopology:true,
            useNewUrlParser:true,
        });
        console.log('DB conneceted succefully');
        

    }catch(error){
        console.log(error)
    }
}

module.exports=dbConnect;