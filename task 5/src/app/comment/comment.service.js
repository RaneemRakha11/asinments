const commentRepo = require('./comment.repo.js');
const postRepo = require('../post/post.repo.js')
const userRepo = require('../user/user.repo.js')

const createComment = async (userId, newComment) => {
    const postExist = await postRepo.checkPostExist(newComment.postId);
    if (!postExist) throw new Error('post not found')
    if (!userId) throw new Error('user not found')
    const createdComment = await commentRepo.createComment(userId, newComment)
    if (!createdComment) throw new Error('fail case')
    return createdComment;
}
const updateComment = async (id, userId,content) => {
    const userExist = await userRepo.checkUserExsit(userId);
    if(!userExist) throw new Error('user not found')
    const updatedComment = await commentRepo.updateComment(id, userId,content);
    return updatedComment;

}

module.exports = {createComment,updateComment}