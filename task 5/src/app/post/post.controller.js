const postService = require('./post.service.js');

const createPost = async (req, res, next) => {
    try {
        const id = req.user.id;
        const newPost = req.body;
        const post = await postService.createPost(id, newPost)
        res.status(201).json({message: "post created successfully", success: true, data: post})
    } catch (err) {
        next(err)
    }
}
const deletePost = async (req, res, next) => {
    try {
        const userId = req.user.id;
        const {id} = req.params;
        const deletedPost = await postService.deletedPost(id, userId)
        res.status(200).json({message: "post deleted successfully", success: true, data: deletedPost})
    } catch (err) {
        next(err)
    }
}
const getAllPostsWithDetails = async (req, res, next) => {
    try {
        const userId = req.user.id;
        const getAllPosts = await postService.getAllPostsWithDetails(userId)
        res.status(200).json({message: "all post and details", success: true, data: getAllPosts})
    } catch (err) {
        next(err)
    }
}
const getAllPostsAndComments = async (req,res,next) =>{
    try{
        const userId = req.user.id;
        const getAllPostsAndComments = await postService.getAllPostsAndCountComments(userId)
        res.status(200).json({message:"posts and comments is found",success:true,data:getAllPostsAndComments})
    }catch (err){
        next(err)
    }
}
module.exports = {createPost, deletePost,getAllPostsWithDetails,getAllPostsAndComments}