const authorService = require('./author.service.js')

const createAuthor = async (req, res, next) => {
    try {
        const authorId = await authorService.createAuthor(req.body)
        res.status(201).json({message: "author created successfully", success: true, data: authorId})
    } catch (err) {
        next(err)
    }
}

module.exports = {createAuthor}