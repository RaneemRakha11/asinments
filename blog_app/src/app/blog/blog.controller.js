const blogService = require('./blog.service');
const createBlog = async (req, res, next) => {
    try {
        const {title, content} = req.body;
        const authorId = req.user.id;
        const createdBlog = await blogService.createBlog(title, content, authorId);
        res.status(201).json({
            message: "Blog created successfully",
            success: true,
            data: createdBlog
        });
    } catch (error) {
        next(error);
    }
}

async function deleteBlog(req, res, next) {
    try {
        const {id} = req.params
        const authorId = req.user.id;
        const deletedBlog = await blogService.deleteSpecificBlog(id, authorId);
        res.status(200).json({
            message: "Blog deleted successfully",
            success: true,
            data: deletedBlog
        });
    } catch (err) {
        next(err);
    }
}

async function restoreBlog(req, res, next) {
    try {
        const {id} = req.params
        const authorId = req.user.id;
        const restoredBlog = await blogService.restoreBlog(id, authorId);
        res.status(200).json({
            message: "Blog restored successfully",
            success: true,
            data: restoredBlog
        });
    } catch (err) {
        next(err);
    }
}


async function updateBlog(req, res, next) {
    try {
        const {id} = req.params
        const authorId = req.user.id;
        const updatedBlog = await blogService.updateBlog(id, req.body, authorId);
        res.status(200).json({
            message: "Blog updated successfully",
            success: true,
            data: updatedBlog
        });
    } catch (err) {
        next(err);
    }
}

module.exports = {createBlog, deleteBlog, restoreBlog, updateBlog}