const {Router} = require('express')
const bookRouter = Router()
const bookController = require('./book.controller.js')

bookRouter.post('/',bookController.createBook)
bookRouter.post('/index',bookController.createTitleIndex)
bookRouter.post('/books',bookController.insertBook)
bookRouter.post('/batch',bookController.insertManyBooks)
bookRouter.patch('/future',bookController.updateYear)
bookRouter.get('/title',bookController.findBookByTitle)
bookRouter.get('/year',bookController.findBookByDate)
bookRouter.get('/genre',bookController.findBooksByGenre)
bookRouter.get('/skip-limit',bookController.findBooksPaginated)
bookRouter.get('/year-integer',bookController.findBookIntegerYear)
bookRouter.get('/exclude-genres',bookController.findBookExcludeGenres)
bookRouter.delete('/before-year',bookController.deleteBookBeforeTwoThousand)
bookRouter.get('/aggregate1',bookController.aggregateBooksAfterYear)
bookRouter.get('/aggregate2',bookController.aggregateBooksAfterYearProjected)
bookRouter.get('/aggregate3',bookController.unwindBookGenres)
bookRouter.get('/aggregate4',bookController.joinBooksWithLogs)


module.exports = bookRouter