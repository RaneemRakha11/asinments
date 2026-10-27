const postController = require("./post.controller.js")
const authGuard = require("../../common/auth/guard.js")
const {Router} = require("express")
const postRouter = Router()

postRouter.post('/',authGuard,postController.createPost)
postRouter.get('/details',authGuard,postController.getAllPostsWithDetails)
postRouter.get('/comment-count',authGuard,postController.getAllPostsAndComments)
postRouter.delete('/:id',authGuard,postController.deletePost)


module.exports = postRouter;