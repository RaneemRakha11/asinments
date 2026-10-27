const {Router} = require('express');
const pool = require("../../commn/db/prisma");

const healthRouter = Router();


healthRouter.get('/', async (req, res) => {
    const {rows} = await pool.query('SELECT 1+1 as result')
    res.json(rows[0]);
});

module.exports = healthRouter;