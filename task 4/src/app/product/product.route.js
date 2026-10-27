const {Router} = require('express')
const productController = require('./product.controller.js')
const productRouter = Router()

productRouter.post('/',productController.createProduct)
productRouter.get('/',productController.getAllProducts)
productRouter.get('/:id',productController.getProductById)
productRouter.put('/',productController.updateProduct)
productRouter.delete('/:id',productController.deleteProduct)

module.exports = productRouter;