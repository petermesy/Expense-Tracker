const mongoose=require('mongoose');

const userSchema=mongoose.Schema({
    firstname:{
        required:[true,'First name is required'],
        type:String,

    },
    lastname:{
        required:[true,'Last name is required'],
        type:String,

    },
    email:{
        required:[true,'Email is required'],
        type:String,

    }, 
    password:{
        required:[true,'Password is required'],
        type:String,

    },
    isAdmin:{
        type:Boolean,
        default:false,

    },
},
{
    timestamps:true
}
);

const User=mongoose.model('User',userSchema)
module.exports=User