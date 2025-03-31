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


module.exports={registerNewUser};