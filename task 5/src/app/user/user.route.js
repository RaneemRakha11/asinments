const {Router} = require('express')
const userController = require('./user.controller.js')
const authGuard = require('../../common/auth/guard.js')

const userRouter = Router();

userRouter.put('/:id',authGuard,userController.updateUserOrInsert)
userRouter.get('/',authGuard,userController.findUserByEmail)
userRouter.get('/:id',authGuard,userController.findUserById)

module.exports = userRouter