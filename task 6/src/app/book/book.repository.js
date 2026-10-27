const db = require('../../../common/db/mongodb.js')

const createBook = async () => {
    await db.createCollection('books', {
        validator: {
            $jsonSchema: {
                bsonType: "object",
                required: ["title"],
                properties: {
                    title: {bsonType: "string"},
                }
            }
        }
    })
}

const createTitleIndex = async () => {
    const indexName = await db.collection('books').createIndex({title: 1})
    return indexName;
}

const insertBook = async (insertedData) => {
    const newBook = await db.collection('books').insertOne(insertedData);
    return newBook;
}
const insertManyBooks = async (manyBooks) => {
    const newBooks = await db.collection('books').insertMany(manyBooks);
    return newBooks;
}
const updateBookYear = async () => {
    const updatedYear = await db.collection('books').updateOne({title: "Future"}, {$set: {year: 2022}})
    return updatedYear;
}
const findBookByTitle = async (title) => {
    const book = await db.collection('books').findOne({title: title})
    return book;
}
const findBookByDate = async (startDate, endDate) => {
    const books = await db.collection('books').find({
        year: {
            $gte: +startDate,
            $lte: +endDate
        }
    }).toArray()
    return books;
}
const findBooksByGenre = async (genre) => {
    const book = await db.collection('books').find({
        genre: {$in: [genre]}
    }).toArray()
    return book;
}
const findBooksPaginated = async (skipNum, limitNum) => {
    const books = await db.collection('books')
        .find({})
        .sort({year: -1})
        .skip(skipNum)
        .limit(limitNum)
        .toArray()
    return books;
}
const findBookIntegerYear = async () => {
    const books = await db.collection('books')
        .find({year: {$type: "int"}})
        .toArray()
    return books;
}
const findBookExcludeGenres = async (excludeGenres) => {
    const books = await db.collection('books')
        .find({genres: {$nin: excludeGenres}})
        .toArray()
    return books;
}
const deleteBookBeforeTwoThousand = async (year) => {
    const books = await db.collection('books').deleteMany({
        year: {$lt: year}
    })
    return books;
}
const aggregateBooksAfterYear = async () => {
    const books = await db.collection('books').aggregate([
        {$match: {year: {$gt: 2000}}},
        {$sort: {year: -1}}
    ]).toArray()
    return books;
}
const aggregateBooksAfterYearProjected = async () => {
    const books = await db.collection('books').aggregate([
        {$match: {year: {$gt: 2000}}},
        {$project: {_id: 0, title: 1, author: 1, year: 1}}
    ]).toArray()
    return books;
}
const unwindBookGenres = async () => {
    const books = await db.collection('books').aggregate([
        {$unwind: "$genres"}
    ]).toArray()
    return books;
}
const joinBooksWithLogs = async ()=>{
    const books = await db.collection('books').aggregate([
        {
            $lookup:{
                from:"logs",
                localField:"_id",
                foreignField:"book_id",
                as:"logs"
            }
        }
    ]).toArray()
    return books;
}
module.exports = {
    createBook,
    createTitleIndex,
    insertBook,
    insertManyBooks,
    updateBookYear,
    findBookByTitle,
    findBookByDate,
    findBooksByGenre,
    findBooksPaginated,
    findBookIntegerYear,
    findBookExcludeGenres,
    deleteBookBeforeTwoThousand,
    aggregateBooksAfterYear,
    aggregateBooksAfterYearProjected,
    unwindBookGenres,
    joinBooksWithLogs
}