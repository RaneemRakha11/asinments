const prisma = require('../../common/db/prisma.js')
const userRepo = require("../user/user.repo");
const postRepo = require("../post/post.repo");

const createComment = async (userId, newComment) => {
    const comment = await prisma.comment.create({
        data: {
            content: newComment.content,
            userId: userId,
            postId: newComment.postId
        }
    })
    return comment;
}
const updateComment = async (id,userId,content) => {
    const updatedComment = await prisma.comment.updateMany({
        where:{
            id:+id,
            userId:userId
        },
        data:{
            content:content,
        }
    })
    return updatedComment;
}
module.exports = {createComment,updateComment}