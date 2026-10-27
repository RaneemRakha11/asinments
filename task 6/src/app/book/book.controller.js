const bookService = require('./book.service.js')

const createBook = async (req, res, next) => {
    try {
        await bookService.createBook()
        res.status(201).json({message: "book created successfully", success: true})
    } catch (err) {
        next(err)
    }
}
const createTitleIndex = async (req, res, next) => {
    try {
        const indexName = await bookService.createTitleIndex()
        res.status(201).json({message: "index created successfully", success: true, data: indexName})
    } catch (err) {
        next(err)
    }

}
const insertBook = async (req, res, next) => {
    try {
        const newData = await bookService.insertBook(req.body)
        res.status(201).json({message: "book inserted successfully", success: true, data: newData})
    } catch (err) {
        next(err)
    }
}
const insertManyBooks = async (req, res, next) => {
    try {
        const insertedBooks = await bookService.insertManyBooks(req.body)
        res.status(201).json({message: "books inserted successfully", success: true, data: insertedBooks})
    } catch (err) {
        next(err)
    }
}
const updateYear = async (req, res, next) => {
    try {
        const updatedYear = await bookService.updateYear()
        res.status(201).json({message: "year updated successfully", success: true, data: updatedYear})
    } catch (err) {
        next(err)
    }
}
const findBookByTitle = async (req, res, next) => {
    try {
        const {title} = req.query;
        const book = await bookService.findBookByTitle(title)
        res.status(200).json({message: "book find successfully", success: true, data: book})
    } catch (err) {
        next(err)
    }
}
const findBookByDate = async (req, res, next) => {
    try {
        const {from: startDate, to: endDate} = req.query;
        const books = await bookService.findBookByDate(startDate, endDate)
        res.status(200).json({message: "books find successfully", success: true, date: books})
    } catch (err) {
        next(err)
    }
}
const findBooksByGenre = async (req, res, next) => {
    try {
        const {genre} = req.query;
        console.log(genre)
        const book = await bookService.findBooksByGenre(genre)
        res.status(200).json({message: "book find successfully", success: true, data: book})
    } catch (err) {
        next(err)
    }
}
const findBooksPaginated = async (req, res, next) => {
    try {
        const books = await bookService.findBooksPaginated(2, 3)
        res.status(200).json({message: "books found successfully", success: true, data: books})
    } catch (err) {
        next(err)
    }
}
const findBookIntegerYear = async (req, res, next) => {
    try {
        const books = await bookService.findBookIntegerYear()
        res.status(200).json({message: "books found by year", success: true, data: books})
    } catch (err) {
        next(err)
    }
}
const findBookExcludeGenres = async (req, res, next) => {
    try {

        const books = await bookService.findBookExcludeGenres(["Horror", "Fiction", "Fiction"])
        res.status(200).json({message: "books genres found successfully", success: true, data: books})
    } catch (err) {
        next(err)
    }
}
const deleteBookBeforeTwoThousand = async (req, res, next) => {
    try {
        const {year} = req.query;
        const books = await bookService.deleteBookBeforeTwoThousand(+year)
        res.status(200).json({message: "books deleted successfully", success: true, data: books})
    } catch (err) {
        next(err)
    }
}
const aggregateBooksAfterYear = async (req, res, next) => {
    try {
        const books = await bookService.aggregateBooksAfterYear()
        res.status(200).json({message: "books aggregate successfully", sucess: true, data: books})
    } catch (err) {
        next(err)
    }
}
const aggregateBooksAfterYearProjected = async (req, res, next) => {
    try {
        const books = await bookService.aggregateBooksAfterYearProjected()
        res.status(200).json({message: "books aggregate successfully", sucess: true, data: books})
    } catch (err) {
        next(err)
    }
}
const unwindBookGenres = async (req, res, next) => {
    try {
        const books = await bookService.unwindBookGenres()
        res.status(200).json({message: "books aggregate unwind successfully", sucess: true, data: books})
    } catch (err) {
        next(err)
    }
}
const joinBooksWithLogs = async (req, res, next) => {
    try {
        const books = await bookService.joinBooksWithLogs()
        res.status(200).json({message: "books join successfully", success: true, data: books})
    } catch (err) {
        next(err)
    }
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