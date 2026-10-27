const {Router} = require('express')
const authController = require('./author.controller.js')
const authRouter = Router()


authRouter.post('/',authController.createAuthor)

module.exports = authRouter;
