const {Router} = require("express")
const logController = require('./log.controller.js')
const logRouter = Router()

logRouter.post('/',logController.createLog)
logRouter.post('/logs',logController.insertLog)

module.exports = logRouter