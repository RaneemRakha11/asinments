const {config} = require('dotenv');
config()
const express = require('express')

const healthRouter = require('./app/health/health.route.js')
const authRouter = require('./app/auth/auth.route.js')
const userRouter = require('./app/user/user.route.js')
const postRouter = require('./app/post/post.route.js')
const commentRouter = require('./app/comment/comment.route.js')

const app = express()

app.use(express.json())

app.use('/health',healthRouter)
app.use('/auth',authRouter)
app.use('/users',userRouter)
app.use('/posts',postRouter)
app.use('/comments',commentRouter)











app.use((req, res) => {
    res.status(404).json({message: "invalid route", success: false})
});

app.use((error, req, res, next) => {
    res.json({
        message: error.message,
        success: false,
        stack: error.stack
    })
})

app.listen(3000, () => console.log('Server is running on port 3000'))