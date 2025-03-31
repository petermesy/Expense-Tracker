const mongoose=require('mongoose');
const bcrypt=require('bcryptjs')


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


//Hash password
userSchema.pre('save',async function(next){
    console.log("am beeb called");
    
})

const User=mongoose.model('User',userSchema)
module.exports=User