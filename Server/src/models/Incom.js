const mongoose=require('mongoose');
const mongoosePaginate=require('mongoose-paginate-v2');

const IncomeSchema=mongoose.Schema({
    title:{
        required:[true,'Title is required'],
        type:String,

    },
    description:{
        required:[true,'Description is required'],
        type:String,

    },
    type:{
        type:String,
        default:"income",
    }, 
    amount:{
        required:[true,'Amount is required'],
        type:Number,
     },
     user:{
        type:mongoose.Schema.Types.ObjectId,//mongodb id
        ref:'User',
        required:[true,'User ID is required'],
     },
   
},
{
    timestamps:true
}

);
//pagination
IncomeSchema.plugin(mongoosePaginate);

const Income=mongoose.model("Income",IncomeSchema);
module.exports=Income;