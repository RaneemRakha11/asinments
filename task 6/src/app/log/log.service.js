const logRepo = require('./log.repository.js')
const {ObjectId} = require("mongodb");

const createLog = async () =>{
    await logRepo.createLog()
}
const insertLog = async (newLog) =>{
    const log ={
        book_id : new ObjectId(newLog.book_id),
        action:newLog.action
    }
    const insertedLog = await logRepo.insertLog(log)
    return insertedLog;
}

module.exports = {createLog,insertLog}