const {Router} = require('express');
const prisma = require('../../common/db/prisma.js')
const healthRoute = Router()

healthRoute.get('/',async (req,res) => {
    try {
            const result = await prisma.$queryRaw`SELECT 1+1 as result`;
            res.json(result[0])
    }catch (err){
        res.json({message:err})
    }
})

module.exports = healthRoute;