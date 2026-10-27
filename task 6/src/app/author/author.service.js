const authorRepo = require('./author.repository.js')

const createAuthor = async (authorData) =>{
    authorData.createdAt = new Date()
    authorData.updatedAt = new Date()
    authorData.isDeleted = false
    const authorId = await authorRepo.createAuthor(authorData)

    if(!authorId){
        throw new Error('fail to create author')
    }
    return authorId
}

module.exports = {createAuthor}