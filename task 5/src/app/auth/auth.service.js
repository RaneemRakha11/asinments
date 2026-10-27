const authRepo = require('./auth.repo.js')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const userValidate = require('../../common/validation/validate.js')

const register = async (name,email,password) => {
    const emailValidate = userValidate.emailValidation(email);
    if(!emailValidate){
        throw new Error('Invalid Email')
    }
    const passwordValidate = userValidate.passwordLength(password);
    if(!passwordValidate){
        throw new Error('password must be greater than 6 char')
    }
    const nameValidate = userValidate.nameLength(name);
    if(!nameValidate){
        throw new Error('name must be greater than 3 char')
    }
    const userExist = await authRepo.findUserByEmail(email)
    if(userExist){
        throw new Error('Email already exists')
    }
    const hashedPassword = await bcrypt.hash(password,10)
    return await authRepo.createUser(name,email,hashedPassword)
}

const login = async (email, password) => {
    const userExist = await authRepo.findUserByEmail(email)
    if(!userExist){
        throw new Error('invalid credentials')
    }
    const match = await bcrypt.compare(password,userExist.password)
    if(!match){
        throw new Error('invalid credentials')
    }

    const token = jwt.sign({id:userExist.id,name:userExist.name},process.env.JWT_SECRET,{expiresIn: '1d'})
    return token;
}

module.exports = {register,login}