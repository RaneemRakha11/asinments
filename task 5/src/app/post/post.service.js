const postRepo = require('./post.repo.js');
const userRepo = require('../user/user.repo.js')
const createPost = async (id,newPost) =>{
    const post = await postRepo.createPost(id,newPost)
    return post;
}
const deletedPost = async (id,userId) =>{
    const userExist = await userRepo.checkUserExsit(userId);
    if(!userExist) throw new Error('user not found')
    const deletedPost = await postRepo.deletePost(id,userId)
    if(deletedPost.count === 0) throw new Error('post not found')
    return deletedPost;
}
const getAllPostsWithDetails = async (userId) =>{
    const userExist = await userRepo.checkUserExsit(userId);
    if(!userExist) throw new Error('user not found')
    const getAllPosts = await postRepo.getAllPostsWithDetails();
    return getAllPosts;
}
const getAllPostsAndCountComments = async (userId) =>{
    const userExist = await userRepo.checkUserExsit(userId);
    if(!userExist) throw new Error('user not found');
    const getAllPostsAndComments = await postRepo.getAllPostsAndCountComments()
    return getAllPostsAndComments;
}
module.exports = {createPost,deletedPost,getAllPostsWithDetails,getAllPostsAndCountComments}