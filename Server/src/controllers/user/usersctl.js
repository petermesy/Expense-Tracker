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
const loginuserCtrl = expressAsyncHandler(async (req, res) => {
    const { email, password } = req?.body;

    try {
        console.log("Email from request:", email);
        console.log("Password from request:", typeof password, password);

        const userFound = await User.findOne({ email });

        console.log("User found:", userFound);
        console.log("Password from database:", typeof userFound?.password, userFound?.password);

        if (userFound && (await userFound.isPasswordMatch(password))) {
            return res.status(200).json({
                message: 'Login successful',
                user: {
                    id: userFound._id,
                    email: userFound.email,
                    firstname: userFound.firstname,
                    lastname: userFound.lastname,
                },
            });
        } else {
            return res.status(401).json({ message: 'Invalid email or password' });
        }
    } catch (error) {
        console.error('Error during login:', error.message);
        res.status(500).json({ message: 'An error occurred during login' });
    }
});

module.exports={registerNewUser,fetchUsersCtl,loginuserCtrl};