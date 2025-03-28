const User=require('../../models/user')
const registerNewUser=async(req,res)=>{
    const {email,firstname,lastname,password}=req?.body;
    try {
       const userExist=await User.findOne({email: req.body.email});
       if(userExist){
        res.json("user Exists")
       }

    } catch (error) {
        
    }

const user=await User.create({email,firstname,lastname,password})
res.statuse(200).json(user)
};



module.exports={registerNewUser};