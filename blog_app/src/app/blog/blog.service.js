const userRepository = require('../user/user.repository.js')
const blogRepository = require('./blog.repository.js');
const jwt = require('jsonwebtoken');
const createBlog = async (title, content, authorId) => {

    // 1. create a blog into DB
    return await blogRepository.createBlog(title, content, authorId);
}

async function deleteSpecificBlog(id, authorId) {

    const deletedBlog = await blogRepository.softDeleteBlog(+id, authorId);
    if (!deletedBlog) throw new Error('blog not found.');
    return deletedBlog;
}

async function restoreBlog(id, authorId) {

    // 3. restore blog from DB
    const restoredBlog = await blogRepository.restoreBlog(+id, authorId);
    return restoredBlog;
}


// newData = {title, content}
// {title}
// {content}
// {title, content}
async function updateBlog(id, newData, authorId) {
    // 1. check blog exists
    let blogExist = await blogRepository.findBlogById(+id);// {} | null
    if (!blogExist) throw new Error('blog not found');
    // 2. prepare data
    // combine old data with new data
    Object.assign(blogExist, newData);
    // 3. update blog
    const updatedBlog = await blogRepository.updateBlog(+id, blogExist);
    return updatedBlog;
}

module.exports = {createBlog, deleteSpecificBlog, restoreBlog, updateBlog}