const {config} = require('dotenv')
config()
const express = require('express')
const healthRouter = require("./app/health/health.route");
const productRouter = require("./app/product/product.route");
const supplierRouter = require("./app/supplier/supplier.route");
const app = express()
app.use(express.json())


app.use('/health', healthRouter)
app.use('/product',productRouter)
app.use('/supplier',supplierRouter)

// 404 Handler
app.use((req, res) => {
    res.status(404).json({message: "invalid route", success: false})
})

app.use((err,req,res,next) =>{
    res.status(500).json({error:err.message,success:false})
})

app.listen(3000,() => {
    console.log('Server is running on port 3000')
})