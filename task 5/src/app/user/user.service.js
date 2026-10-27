const userRepo = require('./user.repo.js');
const bcyrpt = require('bcrypt')

const updateUserOrInsert = async (id, newData) => {
    if(newData.password){
        newData.password = await bcyrpt.hash(newData.password,10)
    }

    const userUpdate = await userRepo.updateUserOrInsert(id, newData)
    return userUpdate;
}

const findUserByEmail = async (email) =>{

    const userExist = await userRepo.findUserByEmail(email);
    if(!userExist) throw new Error('user not found')
    return userExist;
}
const findUserById = async (id) => {
    const userExist = await userRepo.findUserById(id);
    if(!userExist) throw new Error('user not found')
    return userExist;
}

module.exports = {updateUserOrInsert,findUserByEmail,findUserById}