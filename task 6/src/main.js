const express = require('express')
const bookRouter = require('./app/book/book.route.js')
const authorRouter = require('./app/author/author.route.js')
const logRouter = require('./app/log/log.route.js')
const app = express()
app.use(express.json())

app.use('/',bookRouter)
app.use('/collection/books',bookRouter)
// app.use('/collection/books',bookRouter)
app.use('/books',bookRouter)
// app.use('/books',bookRouter)
app.use('/collection/authors',authorRouter)
app.use('/collection/logs/capped',logRouter)
app.use('/',logRouter)


app.use((err, req, res, next) => {
    res.json({
        message: err.message,
        success: false,
        stack: err.stack
    })
})


app.listen(3000,()=>{
    console.log('server running in port 3000')
})