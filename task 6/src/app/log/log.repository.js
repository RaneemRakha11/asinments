const db = require('../../../common/db/mongodb.js')

const createLog = async () =>{
    await db.createCollection('logs',{
        capped:true,
        size:1048576
    })
}
const insertLog = async (newLog) =>{
    const insertedLog = await db.collection('logs').insertOne(newLog)
    return insertedLog;
}
module.exports = {createLog,insertLog}