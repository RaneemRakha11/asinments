const {Router} = require('express')
const commentController = require('./comment.controller.js')
const authGuard = require('../../common/auth/guard.js')
const commentRouter = Router()

commentRouter.post('/',authGuard,commentController.createComment)
commentRouter.patch('/:id',authGuard,commentController.updateComment)

module.exports = commentRouter;