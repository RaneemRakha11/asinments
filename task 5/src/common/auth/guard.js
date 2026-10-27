const jwt = require('jsonwebtoken');
const userRepo = require('../../app/user/user.repo.js');

const authGuard = async (req, res, next) => {
    try {
        const authorization = req.headers.authorization;
        if (!authorization) throw new Error('authorization is missing')
        const token = authorization.split(' ')[1]
        if (!token) throw new Error('token is missing')
        const payload = jwt.verify(token, process.env.JWT_SECRET)
        const userId = payload.id
        const userExist = await userRepo.checkUserExsit(userId)
        if (!userExist) throw new Error('user not found')
        req.user = payload
        next()
    } catch (err) {
        next(err)
    }
}

module.exports = authGuard;