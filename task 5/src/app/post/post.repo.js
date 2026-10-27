const prisma = require('../../common/db/prisma.js')

const createPost = async (id, newPost) => {
    const post = await prisma.post.create({
        data: {
            userId: id,
            title: newPost.title,
            content: newPost.content
        }
    })
    return post;
}
const deletePost = async (id, userId) => {
    const deletedPost = await prisma.post.deleteMany({
        where: {
            id: +id,
            userId: userId
        }
    })
    return deletedPost;
}
const getAllPostsWithDetails = async () => {
    const posts = await prisma.post.findMany({
        select: {
            id: true,
            title: true,
            user: {
                select: {
                    id: true,
                    name: true
                }
            },
            comments: {
                select: {
                    id: true,
                    content: true,

                }
            }
        }
    })
    return posts;
}
const getAllPostsAndCountComments = async () => {
    const countComments = await prisma.post.findMany(
        {
            select: {
                id: true,
                title: true,
                _count: {
                    select: {
                        comments: true
                    }
                }
            }
        }
    )
    return countComments.map((post) => ({
        id: post.id,
        title: post.title,
        commentsCount: post._count.comments,
    }))
}
const checkPostExist = async (id) => {
    const post = await prisma.post.findUnique({where: {id: id}})
    return !!post;
}
module.exports = {createPost, deletePost, getAllPostsWithDetails, getAllPostsAndCountComments,checkPostExist}