const productRepository = require('./product.repository.js')
const supplierRepository = require('../supplier/supplier.repository.js')

const createProduct = async (price,name,stock,supplierId) => {
    const supplierExist = await supplierRepository.findSupplierById(supplierId)

    if(!supplierExist){
        throw new Error(`supplier not found`)
    }

    return await productRepository.createProduct(price,name,stock,supplierId)
}
const getAllProducts = async () => {
    return await productRepository.getAllProducts()
}

const getProductById = async (id) => {
    const productExist = await productRepository.getProductById(id)
    if(!productExist){
        throw new Error(`product not found`)
    }
    return productExist;
}

const updateProduct = async (name,price,stock,id) => {
    const productExist = await productRepository.getProductById(id);
    if(!productExist){
        throw new Error(`product not found`)
    }
    return await productRepository.updateProduct(name,price,stock,id)
}

const deleteProduct = async (id) => {
    const deletedProduct = await productRepository.deleteProduct(id)
    if(!deletedProduct){
        throw new Error(`product not found`)
    }
    return deletedProduct
}
module.exports = {createProduct, getAllProducts,getProductById,updateProduct,deleteProduct};