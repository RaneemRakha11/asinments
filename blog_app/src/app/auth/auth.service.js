const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const authRepository = require('./auth.repository.js')

const register = async (email, name, password) => {
    const userExist = await authRepository.findUserByEmail(email)

    if(userExist){
        throw new Error('User already exists')
    }

    const hashedPassword = await bcrypt.hash(password, 10)

    return await authRepository.createUser(email,name,hashedPassword)
}

const login = async (email,password) => {
    const userExist = await authRepository.findUserByEmail(email)

    if(!userExist){
        throw new Error('invalid credentials')
    }

    const match = bcrypt.compare(password,userExist.pass_hash)
    if(!match){
        throw new Error('invalid credentials')
    }

    const token = jwt.sign({id:userExist.id,name:userExist.name},process.env.JWT_SECRET,{expiresIn: '1h'});
    return token;
}


module.exports= {register, login};