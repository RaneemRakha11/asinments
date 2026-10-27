const prisma = require('../../commn/db/prisma.js');
// prisma.post.upsert({
//     where: {id: 1},
//     update: {title: 'new title', content: 'new content'},
//     create: {title: 'new title', content: 'new content'},
// });
const createBlog = async (title, content, authorId) => {

    // N+1 query problem

    const result =
        await prisma.$transaction(async (tx) => {
            // tx.$queryRaw `BEGIN`;
            const result1 = await tx.$queryRaw`INSERT INTO blogs (title, content, author_id)
                                               VALUES (${title}, ${content}, ${authorId}) RETURNING *`;
            const result2 = await tx.$queryRaw`SELECT u.id         as user_id,
                                                      u.email,
                                                      u.password_hash,
                                                      u.created_at as user_created_at,
                                                      u.name,
                                                      b.id         as blog_id,
                                                      b.title,
                                                      b.content,
                                                      b.created_at as blog_created_at,
                                                      b.is_deleted as blog_is_deleted
                                               FROM users u
                                                        JOIN blogs b
                                                             ON u.id = b.author_id
                                               WHERE u.id = ${authorId}`;
            return {
                blog: result1[0],// object
                relatedBlog: result2 // array of objects
            }
            // tx.$queryRaw `COMMIT`;
        })
    return result;
}


async function hardDeleteBlog(id, authorId) {
    // 1 ---- 5 -- 3
    // DELETE FROM blogs WHERE id = $1 AND author_id = $2 RETURNING *; -- result {}
    try {
        const blog = await prisma.blog.delete({where: {id: id, authorId: authorId}})
        return blog;
    } catch (err) {
        return null;
    }
}


async function softDeleteBlog(id, authorId) {
    // UPDATE blogs SET is_deleted = TRUE WHERE id = $1 AND author_id = $2 RETURNING *;
    try {
        const blog = await prisma.blog.update({
            data: {isDeleted: true},
            where: {id: id, authorId: authorId, isDeleted: false}
        });
        return blog;
    } catch (error) {
        return null;
    }
}


async function restoreBlog(id, authorId) {
    // UPDATE blogs SET is_deleted = FALSE WHERE id = $1 AND author_id = $2 RETURNING *;
    try {
        const blog = await prisma.blog.update({
            data: {isDeleted: false}, where: {id: id, authorId: authorId}
        });
        return blog;
    } catch (error) {
        console.log(error);
        return null;
    }
}

async function findBlogById(id) {
    // SELECT * FROM blogs WHERE id = $1;
    try {
        const blog = await prisma.blog.findUnique({where: {id: id}});
        return blog;
    } catch (error) {
        return null;
    }
}

async function updateBlog(id, newData) {
    try {
        const blog = await prisma.blog.update({
            data: newData, where: {id: id}
        });
        return blog;
    } catch (error) {
        return null;
    }
}

module.exports = {createBlog, hardDeleteBlog, softDeleteBlog, restoreBlog, findBlogById, updateBlog}