const db = require('../../../common/db/mongodb.js')

const createAuthor = async (authorData) =>{
    const authorId = await db.collection('authors').insertOne(authorData);
    return authorId;
}

module.exports = {createAuthor}