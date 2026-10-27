const userService = require('./user.service.js')

const updateUserOrInsert = async (req, res, next) => {
    try {
        const {id} = req.params;
        const newData = req.body
        const createdUserOrInsert = await userService.updateUserOrInsert(id, newData);
        res.status(200).json({
            message: "user updated or inserted successfully",
            success: true,
            data: createdUserOrInsert
        })
    } catch (err) {
        next(err)
    }
}
const findUserByEmail = async (req, res, next) => {
    try {
        const {email} = req.query;
        const userExist = await userService.findUserByEmail(email);
        res.status(200).json({message: "user found successfully", success: true, data: userExist})
    } catch (err) {
        next(err)
    }
}
const findUserById = async (req, res, next) => {
    try {
        const {id} = req.params;
        const userExist = await userService.findUserById(id);
        res.status(200).json({message: "user found successfully", success: true, data: userExist})
    } catch (err) {
        next(err)
    }
}
module.exports = {updateUserOrInsert, findUserByEmail,findUserById}