const authService = require('./auth.service.js')

const register = async (req, res, next) => {
    try {
        const {name, email, password} = req.body;
        const createdUser = await authService.register(name, email, password)
        res.status(201).json({message:"user created successfully",success:true,data:createdUser})
    } catch (err) {
        next(err)
    }
}

const login = async (req,res,next) => {
    try {
        const {email,password} = req.body;
        const token = await authService.login(email,password);
        res.status(200).json({message:"user login successfully",success:true,data:token})
    }catch (err){
        next(err)
    }
}

module.exports = {register,login}