const expressAsyncHandler=require('express-async-handler');

const User=require('../../models/user')


const registerNewUser=expressAsyncHandler(async(req,res)=>{
    const {email,firstname,lastname,password}=req?.body;

    try {
        const userExist=await User.findOne({email});
        if(userExist) throw new Error('User already exists');
       const user=await User.create({email,firstname,lastname,password})
       res.status(200).json(user)
    } catch (error) {
        console.log(error)
        res.json(error)

    }


}
)
// Fetch all users
const fetchUsersCtl=async(req,res)=>{
    try {
        const users=await User.find({});
        res.json(users);
    } catch (error) {
        res.json(error)
        
    }
}

//Login user
const loginuserCtrl=expressAsyncHandler(async(req,res)=>{
    const {email,password}=req?.body

const userFound=await User.findOne({email});
res.json(userFound);
})
module.exports={registerNewUser,fetchUsersCtl,loginuserCtrl};