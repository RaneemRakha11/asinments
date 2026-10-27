const {Router} = require('express')
const pool = require('../../common/db/db.js')
const express = require("express/lib/express");

const healthRouter = Router()

healthRouter.get('/',async (req, res) => {
    const {rows} = await pool.query(`SELECT 1+1 as result`)
    res.json(rows[0])
})

module.exports = healthRouter;