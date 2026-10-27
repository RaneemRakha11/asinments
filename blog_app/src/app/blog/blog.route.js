const {Router} = require('express');
const blogController = require('./blog.controller');
const authGuard = require("../../commn/auth/guard");
const blogRouter = Router();


blogRouter.post('/', authGuard, blogController.createBlog);

blogRouter.delete('/:id', authGuard, blogController.deleteBlog);

blogRouter.patch('/:id', authGuard, blogController.restoreBlog);

blogRouter.put('/:id', authGuard, blogController.updateBlog);

module.exports = blogRouter;