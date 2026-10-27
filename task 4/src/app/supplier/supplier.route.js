const {Router} = require('express');
const supplierController = require('./supplier.controller.js')
const supplierRouter = Router()

supplierRouter.post('/',supplierController.addSupplier)
supplierRouter.get('/',supplierController.getAllSuppliers)
supplierRouter.put('/',supplierController.updateSupplier)
supplierRouter.delete('/:id',supplierController.deleteSupplier)

module.exports = supplierRouter;