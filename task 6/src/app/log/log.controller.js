const logService = require('./log.service.js')

const createLog = async (req, res, next) => {
    try {
        await logService.createLog()
        res.status(201).json({message: "log capped created successfully", success: true})
    } catch (err) {
        next(err)
    }
}
const insertLog = async (req, res, next) => {
    try {
        const insertedLog = await logService.insertLog(req.body)
        res.status(201).json({message: "log inserted successsfully", success: true, data: insertedLog})
    } catch (err) {
        next(err)
    }
}
module.exports = {createLog,insertLog}