const {config} = require('dotenv');
config();// load env variables

const express = require('express');

const authRouter = require('./app/auth/auth.route.js');
// const userRouter = require('./app/user/user.route.js');
const blogRouter = require('./app/blog/blog.route.js');
const healthRouter = require("./app/health/health.route");

const app = express();


// parse json request body
app.use(express.json());

// routes
app.use('/health', healthRouter)
app.use('/auth', authRouter);
// app.use('/user', userRouter);
app.use('/blog', blogRouter);

// handle invalid routes
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