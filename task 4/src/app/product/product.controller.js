const productService = require('./product.service.js')

const createProduct = async (req,res,next) => {
    try{
        const {price,name,stock,supplierId} = req.body;
        const createdProduct =await productService.createProduct(price,name,stock,supplierId)
        res.status(201).json({message:"Product created successfully.",success:true,data:createdProduct})
    }catch (err){
        next(err)
    }
}

const getAllProducts = async (req,res,next) => {
    try {
        const allProducts = await productService.getAllProducts()
        res.status(200).json({message:"Product list successfully.",success:true,data:allProducts})
    }catch (err){
        next(err)
    }
}

const getProductById = async (req,res,next) => {
    try{
        const {id} = req.params;
        const product = await productService.getProductById(id)
        res.status(200).json({message:"product found successfully.",success:true,data:product})
    }catch (err){
        next(err)
    }
}

const updateProduct = async (req,res,next) => {
    try {
        const {name,price,stock,id} = req.body
        const updatedProduct = await productService.updateProduct(name,price,stock,id)
        res.status(201).json({message:"Product updated successfully.",success:true,data:updatedProduct})
    }catch (err){
        next(err)
    }
}

const deleteProduct = async (req,res,next) => {
    try {
        const {id} = req.params;
        const deletedProduct = await productService.deleteProduct(id)
        res.status(200).json({message:"Product deleted successfully.",success:true,data:deletedProduct})
    }catch (err){
        next(err)
    }
}
module.exports = {createProduct, getAllProducts,getProductById,updateProduct,deleteProduct};