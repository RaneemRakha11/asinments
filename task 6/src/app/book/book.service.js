const bookRepo = require('./book.repository.js')

const createBook = async () => {
    await bookRepo.createBook()

}

const createTitleIndex = async () => {
    const indexName = await bookRepo.createTitleIndex()
    return indexName;
}
const insertBook = async (insertedData) => {
    const newBook = await bookRepo.insertBook(insertedData)
    return newBook;
}
const insertManyBooks = async (manyBooks) => {
    const newBooks = await bookRepo.insertManyBooks(manyBooks)
    return newBooks;
}
const updateYear = async () => {
    const updatedYear = await bookRepo.updateBookYear()
    return updatedYear;
}
const findBookByTitle = async (title) => {
    const book = await bookRepo.findBookByTitle(title)
    return book;
}
const findBookByDate = async (startDate, endDate) => {
    const books = await bookRepo.findBookByDate(startDate, endDate)
    return books;
}
const findBooksByGenre = async (genre) => {
    const book = await bookRepo.findBooksByGenre(genre)
    return book;
}
const findBooksPaginated = async (skipNum,limitNum) =>{
    const books = await bookRepo.findBooksPaginated(skipNum,limitNum)
    return books;
}
const findBookIntegerYear = async ()=>{
    const books = await bookRepo.findBookIntegerYear()
    return books;
}
const findBookExcludeGenres = async (excludeGenres)=>{
    const books = await bookRepo.findBookExcludeGenres(excludeGenres)
    return books;
}
const deleteBookBeforeTwoThousand = async (year)=>{
    const books = await bookRepo.deleteBookBeforeTwoThousand(year)
    return books;
}
const aggregateBooksAfterYear = async ()=>{
    const books = await bookRepo.aggregateBooksAfterYear()
    return books;
}
const aggregateBooksAfterYearProjected = async ()=>{
    const books =await bookRepo.aggregateBooksAfterYearProjected()
    return books;
}
const unwindBookGenres = async ()=>{
    const books =await bookRepo.unwindBookGenres()
    return books;
}
const joinBooksWithLogs = async ()=>{
    const books = await bookRepo.joinBooksWithLogs()
    return books;
}
module.exports = {
    createBook,
    createTitleIndex,
    insertBook,
    insertManyBooks,
    updateYear,
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